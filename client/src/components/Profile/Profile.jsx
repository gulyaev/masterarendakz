import React from "react";
import Preloader from "../common/Preloader";
import ProfileStatus from "./ProfileStatus";

class Profile extends React.Component {
    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return (
            <>
                <div style={{ marginBottom: "10px" }}>
                    {this.props.profile.name}
                </div>
                <ProfileStatus status={this.props.status} updateStatus={this.props.updateStatus} />
            </>
        )
    }
}

export default Profile;