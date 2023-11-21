import { createSelector } from "reselect";

const getUsersDataSelector = (state) => {
    return state.usersPage.usersData;
}

export const getUsersDataFromState = createSelector(getUsersDataSelector, (users)=>{
    return users.filter(u=>true);
})

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getPerPage = (state) => {
    return state.usersPage.perPage;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}