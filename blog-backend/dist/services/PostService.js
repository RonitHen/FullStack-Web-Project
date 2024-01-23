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
exports.PostService = void 0;
class PostService {
    constructor(postDataAccess) {
        this.postDataAccess = postDataAccess;
    }
    addPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.postDataAccess.add(post);
            }
            catch (error) {
                throw new Error(`Unable to add Post: ${error.message}`);
            }
        });
    }
    getPost(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const Post = yield this.postDataAccess.get(postId);
            if (!Post) {
                throw new Error(`Post with ID ${postId} not found`);
            }
            return Post;
        });
    }
}
exports.PostService = PostService;
