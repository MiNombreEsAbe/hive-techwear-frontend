import axios from 'axios';

export const LOGIN_USER_KEY = 'HIVE_TECHGEAR_LOGIN_USER_KEY';

// Base url for requests
let baseURL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json' },
    requireToken: false
});

api.interceptors.request.use(
    config => {
        if (config.requireToken) {
            const user = localStorage.getItem(LOGIN_USER_KEY) ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY)) : null;
            config.headers.common['Authorization'] = user.token;
        }

        return config;
    }, err => console.log(err)
);

api.interceptors.response.use(
    res => res.data,
    err => {
        if (err.response.status === 401) localStorage.removeItem(LOGIN_USER_KEY);
		return Promise.reject(err);
    }
);

export default class API {
    // Will add routes once they're made.
    signUp = async body => {
        const formData = new FormData();

        for (const key in body) formData.append(key, body[key]);

        return api.post('/users/signup/', formData);
    };

    signIn = async body => {
        const formData = new FormData();

        for (const key in body) formData.append(key, body[key]);

        return api.post('/users/signin/', formData);
    };

    getCategories = async () => api.get('/categories/');

    getItems = async data => {
        return api.get('/products/', {
            data: data,
            requireToken: true
        });
    };
}