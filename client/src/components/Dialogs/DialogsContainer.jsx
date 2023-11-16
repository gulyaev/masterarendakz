import React from "react";
import { onMessageChangeActionCreator, addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => { dispatch(onMessageChangeActionCreator(text)) },
        addMessage: () => { dispatch(addMessageActionCreator()) }
    }
}

let AuthRedirectComponentContainer = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponentContainer);

export default DialogsContainer;