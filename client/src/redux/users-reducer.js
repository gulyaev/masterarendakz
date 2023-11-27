import { usersAPI } from "../api/api";

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const INITIAL_USERS = "INITIAL-USERS";
const SET_IS_FOLLOWING = 'SET-IS-FOLLOWING';

let initialState = {
    usersData: [],
    totalUsersCount: 20,
    perPage: 3,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state, 
                usersData: [...action.users.results]}
            };
        case INITIAL_USERS:
            //реализовать логику если уже подписан то повторно подписаться нельзя
            //реализовать логику отображения подписчиков изначально
            return {
                ...state, 
                usersData: state.usersData.map( u => {
                    if (action.payload.followings(id => id === u.id)) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( u => { //бежим по массивам
                    if (u.id === action.userId){ //если id какой то строчки равен кликнутому то меняем на true
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW: 
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
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
        case SET_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFollowing 
                    ? [...state.isFollowing, action.userId] 
                    : state.isFollowing.filter(id=>id !== action.userId)
            }
        default: 
            return state;
    }    
}

export const follow = (userId) => {return {type: FOLLOW, userId: userId}};
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setIsFetching = (value) => ({ type: SET_IS_FETCHING, payload: value });
export const initialUsers = (me) => ({type: INITIAL_USERS, payload: me});
export const setIsFollowing = (isFollowing, userId) => ({type: SET_IS_FOLLOWING, isFollowing: isFollowing, userId: userId});

export const getUsersThunkCreator =(perPage, currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
            usersAPI.getUsers(perPage, currentPage).then(data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data));
            });
        }
}

const followUnfollowFlow = async (dispatch, apiMethod, bodyParameters, config, u_id) => {
    dispatch(setIsFollowing(true, u_id));
    let data = await apiMethod(bodyParameters, config);
    dispatch(setIsFollowing(false, u_id));
    console.log(data);
}

export const followUserThunkCreator = (bodyParameters, config, u_id) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.followUser.bind(usersAPI);
        followUnfollowFlow(dispatch, apiMethod, bodyParameters, config, u_id)
    }
}

export const unfollowUserThunkCreator = (bodyParameters, config, u_id) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollowUser.bind(usersAPI);
        followUnfollowFlow(dispatch, apiMethod, bodyParameters, config, u_id)
    }
}

export default usersReducer;