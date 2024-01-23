import {PostCard} from "./post_card"
import {useContext, useState} from "react";
import {PostContext} from "../providers/postProvider";

export function PostList() {

    const {posts} = useContext(PostContext);

    const [query, setQuery] = useState('');

    const handleUserInput = (evt) => {
        setQuery(evt.target.value);
    }

    return (
        <div>
            <h6>You can search post here: </h6>
            <input onChange={handleUserInput} className='form-control-lg'/>
            { posts
                .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
                .map((post) => <PostCard singlePost={post}/>)
            }
        </div>
    )
}
