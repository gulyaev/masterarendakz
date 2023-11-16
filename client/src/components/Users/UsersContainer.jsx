import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setCurrentPage, getUsersThunkCreator, initialUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import UserContainer from "./UserContainer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponentContainer = withAuthRedirect(UsersContainer);

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
    setCurrentPage,
    getUsersThunkCreator,
    initialUsers
})(AuthRedirectComponentContainer)
