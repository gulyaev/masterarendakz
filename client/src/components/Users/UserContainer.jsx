import React, { useState } from "react";
import axios from 'axios';
import { follow, unfollow, setIsFetching } from "../../redux/users-reducer";
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
        props.setIsFetching(true);
        axios.put(`http://localhost:5000/api/follow`, bodyParameters, config).then((res) => {
            props.setIsFetching(false);
            console.log(res.data);
        });
    };

    const unfollowFetch = (u_id) => {
        const bodyParameters = {
            id: u_id,
        };
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        props.setIsFetching(true);
        axios.put(`http://localhost:5000/api/unfollow`, bodyParameters, config).then((res) => {
            props.setIsFetching(false);
            console.log(res.data);
        });
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
            followedlocal={followedlocal} />
    )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, { setIsFetching, follow, unfollow })(UserContainer);