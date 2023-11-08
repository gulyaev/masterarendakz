import React from "react";
import Preloader from "../common/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {props.profile.name}
        </div>
    )
}

export default Profile;