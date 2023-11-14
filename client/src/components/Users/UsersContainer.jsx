import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setUsers, follow, unfollow, setCurrentPage, setIsFetching, initialUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import UserContainer from "./UserContainer";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.perPage, this.props.currentPage).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data)
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.setIsFetching(true)
            usersAPI.getUsers(this.props.perPage, this.props.currentPage).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data)
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
