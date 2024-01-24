"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(id, title, body, posted_by, date, image_url) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.date = date;
        this.image_url = image_url;
        this.posted_by = posted_by;
    }
}
exports.default = Post;
// ----------------------------- //
// to create POST in postman use:
// {
//     "title": "iii",
//     "body" : "kjhgf",
//     "date" : "01-01-2020",
//     "image_url":"-------------------",
//     "posted_by": "jgfjgfjc"
// }
