import axios from "axios";
const instance = axios.create({
    baseURL: `http://localhost:5000/api/`
});

export const authAPI = {
    makeAuth(){
        return instance.get(`auth/me`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then(response => response.data);
    },

    makeLogin(email, password){
        return instance.post(`auth/login`, {email, password}).then(response => response);
    },

    makeRegistration(name, email, password, prof){
        return instance.post(`auth/register`, {name, email, password, prof}).then(response => response);
    }
}

export const usersAPI = {
    getUsers(per_page, page){
        return instance.get(`user?per_page=${per_page}&page=${page}`).then(response => response.data);
    },

    followUser(bodyParameters, config){
        return instance.put(`follow`, bodyParameters, config).then(response => response.data);
    },

    unfollowUser(bodyParameters, config){
        return instance.put(`unfollow`, bodyParameters, config).then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`user/${userId}`).then(response => response.data);
    },

    getStatus(userId){
        return instance.get(`user/status/${userId}`).then(response => response.data);
    },

    updateStatus (status) {
        const bodyParameters = {
            status,
          };
          const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          };
      
        return instance.put(`user/status`, bodyParameters, config).then(response => response.data);
    }
}