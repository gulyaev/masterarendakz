import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setUsersActionCreator, followActionCreator, unfollowActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
        follow: (userId) => { dispatch(followActionCreator(userId)) },
        unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;