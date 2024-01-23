import {DataAccess} from "./DataAccess";
import Post from "../models/Post";
import {InMemoryDB} from "../utils/InMemoryDB";


export class PostDataAccessInMemory implements DataAccess<Post> {
    private db = InMemoryDB.getInstance();

    async add(post: Post): Promise<void> {
        this.db.addPost(post)
    }

    delete(id: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    async get(postId: number): Promise<Post> {
        const post = this.db.getPost(postId);
        if ( !post) {
            throw new Error(`User with ID ${postId} not found`);
        }
        return post
    }

    update(id: number, updateData: Partial<Post>): Promise<void> {
        return Promise.resolve(undefined);
    }

}