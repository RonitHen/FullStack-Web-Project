import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/userProvider";


export function PostCard({singlePost}) {
    const {user} = useContext(UserContext);

    return (
        <div>
            <h2><Link to={`/posts/${singlePost.id}`}>{singlePost.title}</Link></h2>
            <img src="https://picsum.photos/300/300" alt="post-picture"/>
            {
                // we want to check if the user is admin
                // and only if he is admin let him edit or delete a post
                user && (
                    <>
                    <Link to={`/editPost`}><button>Edit Post</button></Link>
                    <Link to={`#`}><button>Delete Post</button></Link>
                    </>
            )}
        </div>
    )
}