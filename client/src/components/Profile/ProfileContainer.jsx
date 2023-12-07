import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setIsFetching, setUserProfile, setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, saveAvatarThunkCreator } from "../../redux/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getAuthorizedUserId, getAvatar, getProfile, getStatus } from "../../redux/profile-selectors";
import Preloader from "../common/Preloader";


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

    saveAvatar = (formData) => {
        this.props.saveAvatarThunkCreator(formData)
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return (
            <Profile
                {...this.props}
                updateStatus={this.updateStatus}
                saveAvatar={this.saveAvatar}
                isOwner={!this.props.params.id}
                avatarFromProfile={this.props.profile.avatar}
                newAvatar={this.props.avatar}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUserId: getAuthorizedUserId(state),
        avatar: getAvatar(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setIsFetching,
        setUserProfile,
        setUserProfileThunkCreator,
        getStatusThunkCreator,
        updateStatusThunkCreator,
        saveAvatarThunkCreator
    }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);