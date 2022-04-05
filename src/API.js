import axios from 'axios';

export const LOGIN_USER_KEY = 'HIVE_TECHGEAR_LOGIN_USER_KEY';

// Base url for requests
let baseURL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json' }
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
    signUp = async body => {};

    signIn = async body => {};

    getItems = async body => {};

    getCategories = () => {
		return api.get("/categories/");
	};
}