import React from "react";
import Preloader from "../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import UserPhoto from "./UserPhoto";
import LoadAvatar from "./LoadAvatar";


class Profile extends React.Component {
    render() {
        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <>
                <div style={{ marginBottom: "10px" }}>
                    <UserPhoto
                        avatarFromProfile={this.props.avatarFromProfile}
                        profile={this.props.profile}
                        newAvatar={this.props.newAvatar}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Имя: </span>
                    {this.props.profile.name}
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <ProfileStatus status={this.props.status} updateStatus={this.props.updateStatus} />
                </div>
                {this.props.isOwner &&
                    < LoadAvatar saveAvatar={this.props.saveAvatar} />
                }
            </>
        )
    }
}

export default Profile;