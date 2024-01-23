import {createContext, useEffect, useState} from "react";

export const PostContext = createContext(null);

export function PostProvider({children}){
    const [posts, setPosts] = useState([]);

    //
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, []);


    // This function adds a new post to the top of the posts page.
    const addPost = (newPost) => {
        setPosts([newPost, ...posts])
    }

    // This function adds a new post to the top of the posts page.
    const setEditPosts = (editedPostsArray) => {
        setPosts(editedPostsArray)
    }


    // We can use this function to find a post-object by its ID.
    // return -> post: Object = { title, body, id, date}
    const getPostById = (postId) => {
        return posts.find(post => post.id.toString() === postId);
    }

    const value = {posts, addPost, getPostById, setEditPosts};

    return(
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}