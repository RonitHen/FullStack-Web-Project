"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDB = void 0;
class InMemoryDB {
    constructor() {
        this.posts = new Map();
    }
    static getInstance() {
        if (!InMemoryDB.instance) {
            InMemoryDB.instance = new InMemoryDB();
        }
        return InMemoryDB.instance;
    }
    addPost(post) {
        this.posts.set(post.postId, post);
    }
    getPost(id) {
        return this.posts.get(id);
    }
}
exports.InMemoryDB = InMemoryDB;
