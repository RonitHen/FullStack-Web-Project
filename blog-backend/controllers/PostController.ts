import {PostService} from "../services/PostService";
import { Request, Response } from 'express';
import Post from "../models/Post";

export class PostController {
    private postService : PostService;

    constructor(postService: PostService) {
        this.postService = postService;
    }

    async addPost(req: Request, res: Response): Promise<void> {
        const postData = req.body;
        const post = new Post(postData.postId, postData.title, postData.content, postData.postedBy, postData.postedDate, postData.postImage);
        try {
            await this.postService.addPost(post);
            res.status(201).send({ message: `Post created successfully` });
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }


    async getPost(req : Request , res : Response) : Promise<void> {
        const postId = +req.params.id;
        try {
            const post = await this.postService.getPost(postId);
            res.status(200).send(post);
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }




}