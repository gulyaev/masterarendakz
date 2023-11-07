import React from "react";
import Users from "./Users";
import User from "./User";
import axios from 'axios';
import { connect } from "react-redux";
import { setUsers, follow, unfollow, setCurrentPage, setIsFetching } from "../../redux/users-reducer";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`http://localhost:5000/api/user?per_page=${this.props.perPage}&page=${this.props.currentPage}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data)
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.setIsFetching(true)
            axios.get(`http://localhost:5000/api/user?per_page=${this.props.perPage}&page=${this.props.currentPage}`).then(response => {
                this.props.setIsFetching(false)
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
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
//         follow: (userId) => { dispatch(followActionCreator(userId)) },
//         unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
//         setCurrentPage: (page) => { dispatch(setCurrentPageActionCreator(page)) },
//         setIsFetching: (value) => { dispatch(setIsFetchingActionCreator(value)) }
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setIsFetching
})(UsersContainer)
