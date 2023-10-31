import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import homeReducer from "./home-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    homePage: homeReducer
});

let store = createStore(reducers);

window.store=store;
export default store;