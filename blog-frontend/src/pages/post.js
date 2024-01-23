import {useParams} from "react-router-dom";
import {useContext} from "react";
import {PostContext} from "../providers/postProvider";

// This page display the current post that user click on
export function Post() {
    const { id } = useParams();
    const {getPostById} = useContext(PostContext);
    const post = getPostById(id);

    return (

        <div>

            {/*
                we want to check if the post is loading, if yes - spinner will appear
                if the post exists - the title and content of post will appear
            */}

            { post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ):(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    )
}