import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setIsFetching, setUserProfile, setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from "../../redux/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.id;
        if (!userId) {//если не определен
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.navigate("/login");
            }
        }
        this.props.setUserProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    updateStatus = (status) => {
        this.props.updateStatusThunkCreator(status)
    }

    render() {
        return (
            <Profile {...this.props} updateStatus={this.updateStatus} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userData.id
    }
}

export default compose(
    connect(mapStateToProps, {
        setIsFetching,
        setUserProfile,
        setUserProfileThunkCreator,
        getStatusThunkCreator,
        updateStatusThunkCreator
    }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);