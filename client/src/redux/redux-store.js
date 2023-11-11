import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import homeReducer from "./home-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    homePage: homeReducer,
    profilePage: profileReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store=store;
export default store;