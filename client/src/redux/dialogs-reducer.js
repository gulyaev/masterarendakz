const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ON_MESSAGE_CHANGE:
            state.newMessageText = action.payload;
            return state;
        case ADD_MESSAGE:
            let newPost = {
                id: 6,
                name: 'Niko',
                message: state.newMessageText
            }
            state.messagesData.push(newPost);
            state.newMessageText="";
            return state;
        default: 
            return state;
    }    
}

export const onMessageChangeActionCreator = (text) => ({ type: ON_MESSAGE_CHANGE, payload: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;