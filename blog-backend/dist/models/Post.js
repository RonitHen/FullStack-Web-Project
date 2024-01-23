"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(postId, title, content, postedBy, postedDate, postImage) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.postedBy = postedBy;
        this.postedDate = postedDate;
        this.postImage = postImage;
    }
}
exports.default = Post;
