const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const INITIAL_USERS = "INITIAL-USERS";


let initialState = {
    usersData: [],
    totalUsersCount: 20,
    perPage: 7,
    currentPage: 1,
    isFetching: false,
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
                    if (u.id == action.payload){ 
                        u.followings.forEach((element) => {
                            if(element == u.id){
                                return {...u, followed: true};
                            }
                        });
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
        default: 
            return state;
    }    
}

export const follow = (userId) => {
    return {type: FOLLOW, userId: userId}
};
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setIsFetching = (value) => ({ type: SET_IS_FETCHING, payload: value });
export const initialUsers = (myId) => ({type: INITIAL_USERS, payload: myId});

export default usersReducer;