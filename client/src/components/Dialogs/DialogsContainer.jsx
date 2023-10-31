import React from "react";
import { onMessageChangeActionCreator, addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()

                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text))
                }

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                return (
                    <Dialogs
                        state={state.dialogsPage}
                        dispatch={store.dispatch.bind(store)}
                        onMessageChange={onMessageChange}
                        addMessage={addMessage}
                    />
                )
            }
        }</StoreContext.Consumer>
    )
}

export default DialogsContainer;