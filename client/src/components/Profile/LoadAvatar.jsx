import React, { useState } from "react";
import { Button } from "antd";
import classes from "../../css/Profile.module.css";

const LoadAvatar = (props) => {
    const [load, setLoad] = useState(false);
    const [myAvatar, setMyAvatar] = useState();

    let selectAvatar = (e) => {
        if (e.target.files.length) {
            setMyAvatar(e.target.files[0]);
            setLoad(!load);
        }
    };

    let uploadAvatar = (file) => {
        const formData = new FormData();
        if (file) {
            setLoad(!load);
            formData.append("file", file);
            props.saveAvatar(formData);
        }
    };

    if (!load) {
        return (
            <>
                <div className={classes.loadavatar} >
                    <label htmlFor="file" className={classes.loadavatarlabel}>
                        Загрузить аватар
                    </label>
                    <input
                        type="file"
                        accept=".jpg, .png, .jpeg"
                        id="file"
                        name="uploaded_file"
                        style={{ display: "none" }}
                        onChange={(e) => {
                            selectAvatar(e);
                        }}
                    />
                </div>
            </>
        );
    } else {
        return (
            <Button onClick={() => uploadAvatar(myAvatar)}>
                Опубликовать
            </Button>
        );
    }
};

export default LoadAvatar;