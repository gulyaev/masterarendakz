const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogsData: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Pall' },
        { id: 3, name: 'Jeff' },
        { id: 4, name: 'Mike' },
        { id: 5, name: 'Alex' },
        { id: 6, name: 'Den' },
    ],

    messagesData: [
        { id: 1, name: 'John', message: 'Hi' },
        { id: 2, name: 'Pall', message: 'How are you?' },
        { id: 3, name: 'Jeff', message: 'Yo!' },
        { id: 4, name: 'Mike', message: 'Yo!' },
        { id: 5, name: 'Alex', message: 'Yo!' }
    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ON_MESSAGE_CHANGE:
            stateCopy.newMessageText = action.payload;
            return stateCopy;
        case ADD_MESSAGE:
            let newPost = {
                id: 6,
                name: 'Niko',
                message: stateCopy.newMessageText
            }
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newPost);
            stateCopy.newMessageText="";
            return stateCopy;
        default: 
            return state;
    }    
}

export const onMessageChangeActionCreator = (text) => ({ type: ON_MESSAGE_CHANGE, payload: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;