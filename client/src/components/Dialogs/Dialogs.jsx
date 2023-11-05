import React, { useEffect } from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import classes from "../../css/Dialogs.module.css";
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';

const Dialogs = (props) => {
    //useEffect(() => {
    //let myInput = document.getElementById('form1');
    //myInput.focus()
    //})

    let dialogsElements = props.dialogsData.map(dialogItem => <DialogItem name={dialogItem.name} id={dialogItem.id} />)
    let messagesElements = props.messagesData.map(messagesItem => <Message name={messagesItem.name} message={messagesItem.message} id={messagesItem.id} />)


    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text)
    }

    let addMessage = () => {
        props.addMessage()
    }

    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogs__users + " " + classes.users}>
                    {dialogsElements}
                </div>
                <div className={classes.dialogs__messages + " " + classes.messages}>
                    <div style={{ marginBottom: "50px" }}>
                        {messagesElements}
                    </div>
                    <div>
                        <MDBInput ref={newMessageElement} onChange={onMessageChange} label='Введите текст' id='form1' type='text' value={props.newMessageText} />
                        <MDBBtn onClick={addMessage}>Добавить пост</MDBBtn>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialogs;