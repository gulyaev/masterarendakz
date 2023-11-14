import React from "react";
import Users from "./Users";
import axios from 'axios';
import { connect } from "react-redux";
import { setUsers, follow, unfollow, setCurrentPage, setIsFetching, initialUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import UserContainer from "./UserContainer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`http://localhost:5000/api/user?per_page=${this.props.perPage}&page=${this.props.currentPage}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data)
            this.props.initialUsers(this.props.myId)
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.setIsFetching(true)
            axios.get(`http://localhost:5000/api/user?per_page=${this.props.perPage}&page=${this.props.currentPage}`).then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data)
                this.props.initialUsers(this.props.myId)
            })
        }
    }

    render() {
        let usersElements = this.props.usersData.map((usersItem, index) =>
            <UserContainer
                key={index}
                name={usersItem.name}
                prof={usersItem.prof}
                id={usersItem.id}
                followings={usersItem.followings}
                followed={usersItem.followed} />)

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.perPage);

        let setCurrentPage = this.props.setCurrentPage;
        let currentPage = this.props.currentPage;
        return (
            <>
                {this.props.isFetching
                    ?
                    <Preloader />
                    :
                    <Users usersElements={usersElements}
                        pagesCount={pagesCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        totalUsersCount: state.usersPage.totalUsersCount,
        perPage: state.usersPage.perPage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        myId: state.auth.userData.id
    }
}

export default connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setIsFetching,
    initialUsers
})(UsersContainer)
