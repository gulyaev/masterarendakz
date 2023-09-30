import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import classes from "../../css/Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__users + " " + classes.users}>
                <DialogItem name="Анна" id={1} />
                <DialogItem name="Александра" id={2} />
                <DialogItem name="Вячеслав" id={3} />
            </div>
            <div className={classes.dialogs__messages + " " + classes.messages}>
                <Message message="Привет" />
                <Message message="Как дела?" />
            </div>

        </div>
    )
}

export default Dialogs;