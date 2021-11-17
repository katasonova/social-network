import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true, 
        headers: {
        'API-KEY': 'e4737d71-6698-4c69-9e00-4465ab31f2d9'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers (pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },

    followUser (id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    unfollowUser (id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}