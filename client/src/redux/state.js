import dialogsReducer from "./dialogs-reducer";

let store = {
    _state : {
        homePage: {
            postsData: [
                { id: 1, message: 'Подбор персонала в сферах бьюти, медицины и менеджмента', likesCount: 18 },
                { id: 2, message: 'It is my first post', likesCount: 35 },
                { id: 3, message: 'Where are you from?', likesCount: 35 },
                { id: 4, message: 'Наша миссия:ускорить каръерный рост мастеров за счет подсвечивания топов индустрии ускорить рост бизнеса за счет подсвечивания топов мастеров повысить эффективность за счет расположения конкурентное преимущество за счет скорости доставки самой передовой информации', likesCount: 35 }
            ]
        },
        
        dialogsPage: {
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
        }
    },

    _callSubscriber () {
        console.log("state is changed - state изменен");
    },

    getState () {
        return this._state;
    },

    dispatch (action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
    
    subscribe (observer) {
        this._callSubscriber = observer
    }
}

window.store=store;
export default store;
