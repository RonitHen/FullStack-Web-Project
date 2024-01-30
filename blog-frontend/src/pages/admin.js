
import {PostForm} from "../components/post_form";
import {useContext} from "react";
import {UserContext} from "../providers/userProvider";

export function Admin() {
    const {user} = useContext(UserContext);


    return (
        <div>
        {
            /*
                we want to check if the user is admin
                and only if he is admin let him add a post
            */

            user ? (
                <>
                    <h4>Hello Admin!</h4>
                    <h6>Here you can add a new post:</h6>
                    <PostForm/>
                </>
            ) : (
                <>
                    <h3>Please sign in first!</h3>
                    <p>Only admin can add a new post</p>
                </>
            )
        }

        </div>
    )
}