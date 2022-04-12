// This file contains the operations for Cart
import { addItemAction, removeItemAction } from './actions';
import API from '../../API';

const api = new API();

export const getCart = () => {
    return async dispatch => {
        return await api
            .getCart()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const addItem = item => async dispatch => dispatch(addItemAction(item));
export const removeItem = item => async dispatch => dispatch(removeItemAction(item));