import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setUsersActionCreator, followActionCreator, unfollowActionCreator, setCurrentPageActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        totalUsersCount: state.usersPage.totalUsersCount,
        perPage: state.usersPage.perPage,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
        follow: (userId) => { dispatch(followActionCreator(userId)) },
        unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
        setCurrentPage: (page) => { dispatch(setCurrentPageActionCreator(page)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;