const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_IS_FETCHING = "SET-IS-FETCHING";

let initialState = {
    usersData: [],
    totalUsersCount: 30,
    perPage: 7,
    currentPage: 1,
    isFetching: false
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
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default: 
            return state;
    }    
}

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setIsFetching = (value) => ({ type: SET_IS_FETCHING, payload: value });

export default usersReducer;