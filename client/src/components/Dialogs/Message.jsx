import React from "react";
import classes from "../../css/Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={classes.messages__item}>{props.message}</div>
    )
}

export default Message;