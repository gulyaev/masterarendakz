import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const SET_ALERT_MESSAGE = "SET-ALERT-MESSAGE";
const SET_ERROR_MESSAGE = "SET-ERROR-MESSAGE";
const LOGOUT = "LOGOUT";

let initialState = {
    userData: [],
    isAuth: false,
    isFetching: false,
    alertMessage: null,
    errorMessage: null
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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


export const authThunkCreator = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        return authAPI.makeAuth().then(data => {
            dispatch(setUserData(data.user));
            localStorage.setItem('token', data.token);
          }).catch((error) => {
            console.log(error.data);
            localStorage.removeItem('token')
            dispatch(setIsFetching(false));
          })
    }
}

export const loginThunkCreator = (email, password) => {
    return async (dispatch) => {
            dispatch(setIsFetching(true));
            try {
                let response = await authAPI.makeLogin(email, password);
                const {data} = response;
                dispatch(setUserData(data));
                localStorage.setItem('token', data.token);
                dispatch(setAlertMessage("Вы успешно вошли"));
                dispatch(setIsFetching(false));
            } catch (error) {
                if (error.response.message) {
                    dispatch(setErrorMessage(error.response.message));
                } else if (error) {
                    console.log(error);
                }
                dispatch(setIsFetching(false));
            }    
    }
}

export const registrationThunkCreator = (name, email, password, prof) => {
    return async (dispatch) => {
            dispatch(setIsFetching(true));
            try {
                let response = await authAPI.makeRegistration(name, email, password, prof);
                const {data} = response;
                dispatch(setAlertMessage(data.message));
                dispatch(setIsFetching(false));
            } catch (error) {
                if (error.response.data.message) {
                    dispatch(setErrorMessage(error.response.data.message));
                }
                dispatch(setIsFetching(false));
            }
    }
}

export default authReducer;