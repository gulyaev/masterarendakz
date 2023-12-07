import React, { useState, useEffect } from "react";
import { Image } from 'antd';
import { API_URL } from "../../config";

const UserPhoto = (props) => {
    const [avatar, setAvatar] = useState(props.avatarFromProfile);

    useEffect(() => {
        if (props.newAvatar) {
            setAvatar(props.newAvatar);
        }
    }, [props.newAvatar])

    return (
        <>
            {
                avatar
                    ?
                    <Image
                        width={200}
                        src={`${API_URL}` + `${avatar}`}
                    />
                    :
                    <Image
                        width={200}
                        src={require("../../img/empty_ava.jpeg")}
                    />
            }
        </>
    )
}

export default UserPhoto;