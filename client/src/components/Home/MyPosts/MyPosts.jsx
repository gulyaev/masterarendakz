import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let PostsElements = props.postsData.map(postItem => <Post message={postItem.message} likesCount={postItem.likesCount} />)

    return (
        <div>
            {PostsElements}
        </div>
    )
}

export default MyPosts;