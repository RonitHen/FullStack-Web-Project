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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
const PostDataAccessSQL_1 = require("../DAL/PostDataAccessSQL");
const Post_1 = __importDefault(require("../models/Post"));
const node_test_1 = require("node:test");
(0, node_test_1.describe)('POST /api/posts', () => {
    (0, node_test_1.test)('should add a new post', () => __awaiter(void 0, void 0, void 0, function* () {
        const postData = {
            title: 'Test Post',
            content: 'This is a test post',
            date: '2024-05-05',
        };
        const response = yield (0, supertest_1.default)(index_1.app).post('/api/posts').send(postData);
        expect(response.statusCode).toBe(201);
        const dataAccess = new PostDataAccessSQL_1.PostDataAccessSQL();
        yield dataAccess.delete(response.body.id);
    }));
});
(0, node_test_1.describe)('GET /api/posts/:id', () => {
    (0, node_test_1.test)('should get a specific post', () => __awaiter(void 0, void 0, void 0, function* () {
        const dataAccess = new PostDataAccessSQL_1.PostDataAccessSQL();
        const post = new Post_1.default(100, 'Test Post -title', 'This is a test post -body', new Date(), "testImgURL.png", "test -posted-by");
        const postId = yield dataAccess.add(post);
        const response = yield (0, supertest_1.default)(index_1.app).get(`/api/posts/${postId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(postId);
        yield dataAccess.delete(response.body.id);
    }));
});
(0, node_test_1.describe)('GET /api/posts', () => {
    (0, node_test_1.test)('should get all posts', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.app).get('/api/posts');
        expect(response.statusCode).toBe(200);
    }));
});
(0, node_test_1.describe)('PUT /api/posts/:id', () => {
    (0, node_test_1.test)('should update a specific post', () => __awaiter(void 0, void 0, void 0, function* () {
        const dataAccess = new PostDataAccessSQL_1.PostDataAccessSQL();
        const post = new Post_1.default(100, 'Test Post -title', 'This is a test post -body', new Date(), "testImgURL.png", "test -posted-by");
        const postId = yield dataAccess.add(post);
        const updatedPostData = {
            title: 'Updated Post',
            body: 'This is an updated post',
            date: '2024-07-05',
        };
        const response = yield (0, supertest_1.default)(index_1.app)
            .put(`/api/posts/${postId}`)
            .send(updatedPostData);
        expect(response.statusCode).toBe(200);
        yield dataAccess.delete(postId);
    }));
});
(0, node_test_1.describe)('DELETE /api/posts/:id', () => {
    (0, node_test_1.test)('should delete a specific post', () => __awaiter(void 0, void 0, void 0, function* () {
        const dataAccess = new PostDataAccessSQL_1.PostDataAccessSQL();
        const post = new Post_1.default(100, 'Test Post -title', 'This is a test post -body', new Date(), "testImgURL.png", "test -posted-by");
        const postId = yield dataAccess.add(post);
        const response = yield (0, supertest_1.default)(index_1.app).delete(`/api/posts/${postId}`);
        expect(response.statusCode).toBe(200);
    }));
});
