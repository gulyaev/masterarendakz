import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import classes from "../../css/Dialogs.module.css";


const Dialogs = () => {
    let dialogsData = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Pall' },
        { id: 3, name: 'Jeff' },
        { id: 4, name: 'Mike' },
        { id: 5, name: 'Alex' },
        { id: 6, name: 'Den' },
    ];

    let messagesData = [
        { id: 1, name: 'John', message: 'Hi' },
        { id: 2, name: 'Pall', message: 'How are you?' },
        { id: 3, name: 'Jeff', message: 'Yo!' },
        { id: 4, name: 'Mike', message: 'Yo!' },
        { id: 5, name: 'Alex', message: 'Yo!' }
    ];

    let dialogsElements = dialogsData.map(dialogItem => <DialogItem name={dialogItem.name} id={dialogItem.id} />)
    let messagesElements = messagesData.map(messagesItem => <Message name={messagesItem.name} message={messagesItem.message} id={messagesItem.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__users + " " + classes.users}>
                <DialogItem name="Анна" id={1} />
                <DialogItem name="Александра" id={2} />
                <DialogItem name="Вячеслав" id={3} />

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

                {dialogsElements}

            </div>
            <div className={classes.dialogs__messages + " " + classes.messages}>
                <Message message="Привет" />
                <Message message="Как дела?" />

                <Message name={messagesData[0].name} message={messagesData[0].message} id={messagesData[0].id} />
                <Message name={messagesData[1].name} message={messagesData[1].message} id={messagesData[1].id} />

                {messagesElements}

            </div>

        </div>
    )
}

export default Dialogs;