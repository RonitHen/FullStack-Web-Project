"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDataAccessInMemory = void 0;
const InMemoryDB_1 = require("../utils/InMemoryDB");
class PostDataAccessInMemory {
    constructor() {
        this.db = InMemoryDB_1.InMemoryDB.getInstance();
    }
    add(post) {
        return __awaiter(this, void 0, void 0, function* () {
            this.db.addPost(post);
        });
    }
    delete(id) {
        return Promise.resolve(undefined);
    }
    get(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = this.db.getPost(postId);
            if (!post) {
                throw new Error(`User with ID ${postId} not found`);
            }
            return post;
        });
    }
    update(id, updateData) {
        return Promise.resolve(undefined);
    }
}
exports.PostDataAccessInMemory = PostDataAccessInMemory;
