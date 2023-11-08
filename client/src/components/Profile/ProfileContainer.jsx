import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from 'axios';
import { setIsFetching, setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`http://localhost:5000/api/user/1`)
            .then(responce => {
                this.props.setIsFetching(false)
                this.props.setUserProfile(responce.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setIsFetching,
    setUserProfile
})(ProfileContainer);