import React, { useState } from "react";
import { follow, unfollow, followUserThunkCreator, unfollowUserThunkCreator } from "../../redux/users-reducer";
import User from "./User";
import { connect } from "react-redux";

const UserContainer = (props) => {
    const [followedlocal, setFollow] = useState(props.followed);

    const followFetch = (u_id) => {
        const bodyParameters = {
            id: u_id,
        };
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        props.followUserThunkCreator(bodyParameters, config, u_id);
    };

    const unfollowFetch = (u_id) => {
        const bodyParameters = {
            id: u_id,
        };
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        props.unfollowUserThunkCreator(bodyParameters, config, u_id);
    };

    const followUnfollowHandler = () => {
        if (followedlocal) { //подписан 
            unfollowFetch(props.id)
            props.unfollow(props.id)//отписаться
            setFollow(props.followed)
        } else {
            followFetch(props.id)
            props.follow(props.id)//подписаться
            setFollow(props.followed)
        }
    };

    return (
        <User followUnfollowHandler={followUnfollowHandler}
            name={props.name}
            prof={props.prof}
            id={props.id}
            isFetching={props.isFetching}
            myId={props.myId}
            followings={props.followings}
            followedlocal={followedlocal}
            isFollowing={props.isFollowing} />
    )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
    }
}

export default connect(mapStateToProps, { follow, unfollow, followUserThunkCreator, unfollowUserThunkCreator })(UserContainer);