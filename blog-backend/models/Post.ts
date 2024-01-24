class Post {

    id : number;
    title : string;
    body : string;
    date : Date;
    image_url : string;
    posted_by : string;

    constructor(id : number, title : string, body : string, posted_by : string, date : Date , image_url : string ) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.date = date;
        this.image_url = image_url;
        this.posted_by = posted_by;

    }
}

export default Post

// ----------------------------- //
// to create POST in postman use:
// {
//     "title": "iii",
//     "body" : "kjhgf",
//     "date" : "01-01-2020",
//     "image_url":"-------------------",
//     "posted_by": "jgfjgfjc"
// }