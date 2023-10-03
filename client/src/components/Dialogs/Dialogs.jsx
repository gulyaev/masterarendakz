import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import classes from "../../css/Dialogs.module.css";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(dialogItem => <DialogItem name={dialogItem.name} id={dialogItem.id} />)
    let messagesElements = props.messagesData.map(messagesItem => <Message name={messagesItem.name} message={messagesItem.message} id={messagesItem.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__users + " " + classes.users}>
                {dialogsElements}
            </div>
            <div className={classes.dialogs__messages + " " + classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;