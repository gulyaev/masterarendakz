const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_IS_FETCHING = "SET-IS-FETCHING";

let initialState = {
    profile: null,
    isFetching: false
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        };
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

export default profileReducer;