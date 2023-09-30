import React from "react";
import classes from "../../../css/Profileinfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classes.profileinfo}>
            <div className={classes.profileinfoimg}>
                <img src={require("../../../img/masterarenda.PNG")} alt="masterarendakz" />
            </div>
            <div>
                Описание профиля
            </div>
        </div>
    )
}

export default ProfileInfo;