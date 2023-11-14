import axios from "axios";
const instance = axios.create({
    baseURL: `http://localhost:5000/api/`
});

export const usersAPI = {
    getUsers(per_page, page){
        return instance.get(`user?per_page=${per_page}&page=${page}`).then(response => response.data);
    }
}