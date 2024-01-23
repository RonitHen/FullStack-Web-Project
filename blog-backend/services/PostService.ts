import {DataAccess} from "../DAL/DataAccess";
import Post from "../models/Post";
import {PostDataAccessSQL} from "../DAL/PostDataAccessSQL";

export class PostService {
    private postDataAccess: DataAccess<Post>;

    constructor(postDataAccess: DataAccess<Post>) {
        this.postDataAccess = postDataAccess;
    }


    async addPost(post: Post): Promise<void> {
        try {
            await this.postDataAccess.add(post);
        } catch (error) {
            throw new Error(`Unable to add Post: ${(error as Error).message}`);
        }
    }

    async getPost(postId: number): Promise<Post> {
        const Post = await this.postDataAccess.get(postId);
        if (!Post) {
            throw new Error(`Post with ID ${postId} not found`);
        }
        return Post;
    }
}