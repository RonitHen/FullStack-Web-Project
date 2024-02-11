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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const Post_1 = __importDefault(require("../models/Post"));
class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    addPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postData = req.body;
            const post = new Post_1.default(postData.id, postData.title, postData.body, postData.date, postData.img_url, postData.posted_by);
            try {
                yield this.postService.addPost(post);
                res.status(201).send({ message: `Post created successfully` });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = Number(req.params.id);
            try {
                const post = yield this.postService.getPost(postId);
                res.status(200).send(post);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    getAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const from = req.query.from ? parseInt(req.query.from) : undefined;
                const to = req.query.to ? parseInt(req.query.to) : undefined;
                const filterText = req.query.filterText ? req.query.filterText : undefined;
                const allPosts = yield this.postService.getAllPosts(from, to, filterText);
                res.status(200).send(allPosts);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = Number(req.params.id);
            const postData = req.body;
            try {
                yield this.postService.updatePost(postId, postData);
                res.status(200).send({ message: `Post ${postId} updated successfully` });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = Number(req.params.id);
            try {
                yield this.postService.deletePost(postId);
                res.status(200).send({ message: `Post ${postId} deleted successfully` });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.PostController = PostController;
