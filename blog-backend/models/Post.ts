class Post {
    postId : number;
    content : string;
    postedBy : string;
    postedDate : Date;
    postImage : string;

    constructor(postId : number,content : string, postedBy : string, postedDate : Date , postImage : string ) {
        this.postId = postId;
        this.content = content;
        this.postedBy = postedBy;
        this.postedDate = postedDate;
        this.postImage = postImage;
    }
}

export default Post