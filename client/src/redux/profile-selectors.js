export const getProfile = (state) => {
    return state.profilePage.profile;
}

export const getAvatar = (state) => {
    return state.profilePage.avatar;
}

export const getStatus = (state) => {
    return state.profilePage.status;
}

export const getAuthorizedUserId = (state) => {
    return state.auth.userData.id;
}