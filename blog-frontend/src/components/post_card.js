import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/userProvider";
import '../styles/post_card.css';


export function PostCard({singlePost}) {
    const {user} = useContext(UserContext);

    return (
        <div className="post-card">
            <img src={singlePost.img_url} alt="Post Image" />
            <div className="post-content">
                <h2><Link to={`/posts/${singlePost.id}`}>{singlePost.title}</Link></h2>
                {/*<p>{post.body}</p>*/}
                <p>{singlePost.date}</p>
            </div>

            {/*<h2><Link to={`/posts/${singlePost.id}`}>{singlePost.title}</Link></h2>*/}
            {/*<img src="https://picsum.photos/300/300" alt="post-picture"/>*/}


            {/*Only if the user is admin let him edit or delete a post*/}
            user && (
                <div className="post-buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            )
        </div>
    )
}


// <>
//     <Link to={`/post_edit`}><button>Edit Post</button></Link>
//     <Link to={`#`}><button>Delete Post</button></Link>
// </>