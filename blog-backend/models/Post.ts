class Post {

    postId : number;
    title : string;
    content : string;
    postedBy : string;
    postedDate : Date;
    postImage : string;

    constructor(postId : number, title : string, content : string, postedBy : string, postedDate : Date , postImage : string ) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.postedBy = postedBy;
        this.postedDate = postedDate;
        this.postImage = postImage;
    }
}

export default Post