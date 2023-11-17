import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setIsFetching, setUserProfile, setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from "../../redux/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.id;
        if (!userId) {//если не определен
            userId = 8;//то захардкодим 8
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
        status: state.profilePage.status
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
    withRouter
)(ProfileContainer);