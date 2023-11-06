import React from "react";
import Users from "./Users";
import User from "./User";
import axios from 'axios';
import { connect } from "react-redux";
import { setUsersActionCreator, followActionCreator, unfollowActionCreator, setCurrentPageActionCreator } from "../../redux/users-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:5000/api/user?per_page=${this.props.perPage}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data)
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            axios.get(`http://localhost:5000/api/user?per_page=${this.props.perPage}&page=${this.props.currentPage}`).then(response => {
                this.props.setUsers(response.data)
            })
        }
    }

    render() {
        let usersElements = this.props.usersData.map(usersItem => <User name={usersItem.name} prof={usersItem.prof} id={usersItem.id} />)

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.perPage);

        let setCurrentPage = this.props.setCurrentPage;
        let currentPage = this.props.currentPage;
        return (
            <Users usersElements={usersElements} pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
