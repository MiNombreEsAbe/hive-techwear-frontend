import API, { LOGIN_USER_KEY } from '../../API';
import {
    signUpAction,
    signUpErrorAction,
    signInAction,
    signInErrorAction,
    signOutAction
} from './actions';

const api = new API();

export const fetchUserFromLocalStorage = () => {
    return async dispatch => {
        const userJSON = localStorage.getItem(LOGIN_USER_KEY);
        if (userJSON) dispatch(signInAction(JSON.parse(userJSON)));
    }
}

export const signUp = (data = {}) => {
    return async dispatch => {
        return api
            .signUp(data)
            .then(res => {
                console.log(res);
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(res));
                dispatch(signUpAction(res));
            })
            .catch(err => dispatch(signUpErrorAction(err.response.data)))
    }
}

export const signIn = (data = {}) => {
    return async dispatch => {
        return api
            .signIn(data)
            .then(res => {
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(res));
                dispatch(signInAction(res));
            })
            .catch(err => dispatch(signInErrorAction(err.response.data)))
    }
}