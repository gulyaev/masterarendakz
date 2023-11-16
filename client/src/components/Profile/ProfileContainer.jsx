import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from 'axios';
import { setIsFetching, setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "../../hoc/withRouter";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.id;
        if (!userId) {//если не определен
            userId = 8;//то захардкодим 8
        }

        this.props.setIsFetching(true)
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUserProfile(response.data);
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

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setIsFetching,
    setUserProfile
})(WithURLDataContainerComponent);