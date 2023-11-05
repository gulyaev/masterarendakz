const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    usersData: [],
    totalUsersCount: 8,
    perPage: 2,
    currentPage: 1
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state, 
                usersData: [...action.users.results]}
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default: 
            return state;
    }    
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (page) => ({ type: SET_CURRENT_PAGE, payload: page });

export default usersReducer;