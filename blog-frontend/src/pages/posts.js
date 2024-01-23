import {PostList} from "../components/post_list"
import {useContext} from "react";
import {PostContext} from "../providers/postProvider";

export function Posts() {

    const {posts} = useContext(PostContext);

    return (

        <div>
            <h2>Here is the list of my posts!</h2>

            <PostList/>

            <p>There are {posts.length} Posts</p>
            <button>load more posts</button>
        </div>
    )
}