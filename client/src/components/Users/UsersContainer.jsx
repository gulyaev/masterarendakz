import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setCurrentPage, getUsersThunkCreator, initialUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import UserContainer from "./UserContainer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getIsFetching, getPerPage, getTotalUsersCount, getUsersDataFromState } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.perPage, this.props.currentPage)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.getUsersThunkCreator(this.props.perPage, this.props.currentPage)
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
                        isAuth={this.props.isAuth}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersDataFromState(state),
        totalUsersCount: getTotalUsersCount(state),
        perPage: getPerPage(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsersThunkCreator,
        initialUsers
    }),
    withAuthRedirect)(UsersContainer)
