import { profileAPI } from "../api/api";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const SET_STATUS = "SET-STATUS";
const SET_AVATAR = "SET-AVATAR";

let initialState = {
    profile: null,
    avatar: null,
    status: "",
    isFetching: false,
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.payload}
        case SET_AVATAR:
            return {...state, avatar: action.payload}
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default: 
            return state;
    }    
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setIsFetching = (value) => ({ type: SET_IS_FETCHING, payload: value });
export const setStatus = (value) => ({ type: SET_STATUS, payload: value });
export const setAvatar = (avatar) => ({ type: SET_AVATAR, payload: avatar });

export const setUserProfileThunkCreator =(userId) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
            profileAPI.getUserProfile(userId).then(profile => {
                dispatch(setIsFetching(false));
                dispatch(setUserProfile(profile));
            });
        }
}

export const getStatusThunkCreator =(userId) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
            profileAPI.getStatus(userId).then(status => {
                dispatch(setIsFetching(false));
                dispatch(setStatus(status));
            });
        }
}

export const updateStatusThunkCreator =(status) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
            profileAPI.updateStatus(status).then(status => {
                dispatch(setIsFetching(false));
                dispatch(setStatus(status));
            });
        }
}

export const saveAvatarThunkCreator =(formData) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
            profileAPI.loadAvatar(formData).then(avatar => {
                dispatch(setIsFetching(false));
                dispatch(setAvatar(avatar));
            });
        }
}

export default profileReducer;