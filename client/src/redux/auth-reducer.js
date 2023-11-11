const SET_USER_DATA = "SET-USER-DATA";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const SET_ALERT_MESSAGE = "SET-ALERT-MESSAGE";
const SET_ERROR_MESSAGE = "SET-ERROR-MESSAGE";
const LOGOUT = "LOGOUT";

let initialState = {
    userData: null,
    isAuth: false,
    isFetching: false,
    alertMessage: null,
    errorMessage: null
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state, 
                userData: action.data,
                isAuth: true,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_ALERT_MESSAGE: 
            return {
                ...state,
                alertMessage: action.payload
            }
        case SET_ERROR_MESSAGE: 
            return {
                ...state,
                errorMessage: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('token'); 
            return {
                ...state,
                userData: {},
                isAuth: false
            }
        default: 
            return state;
    }    
}

export const setUserData = (data) => ({type: SET_USER_DATA, data});
export const setIsFetching = (value) => ({ type: SET_IS_FETCHING, payload: value });
export const setAlertMessage = (message) => ({ type: SET_ALERT_MESSAGE, payload: message });
export const setErrorMessage = (message) => ({ type: SET_ERROR_MESSAGE, payload: message });
export const logout = () => ({ type: LOGOUT });

export default authReducer;