import Post from "../models/Post";

export class InMemoryDB {
    private static instance: InMemoryDB;
    private posts : Map<number, Post> = new Map();

    private constructor() {
    }

    public static getInstance(): InMemoryDB {
        if (!InMemoryDB.instance) {
            InMemoryDB.instance = new InMemoryDB();
        }
        return InMemoryDB.instance;
    }

    addPost(post: Post) {
        this.posts.set(post.id, post);
    }

    getPost(id: number): Post | undefined {
        return this.posts.get(id);
    }


}