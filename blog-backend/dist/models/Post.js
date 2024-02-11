"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(id, title, body, date, img_url, posted_by) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.date = date;
        this.img_url = img_url;
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
