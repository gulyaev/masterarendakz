const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    usersData: []
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state, 
                usersData: [...state.usersData, ...action.users]}
            };
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        }
        default: 
            return state;
    }    
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;