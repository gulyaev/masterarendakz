import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import HomeInfo from "./HomeInfo/HomeInfo";

const Profile = (props) => {
    return (
        <div>
            <HomeInfo />
            <MyPosts postsData={props.state.postsData} />
        </div>
    )
}

export default Profile;