// This file contains the operations for Cart
import { addItemAction, removeItemAction, getCartAction, updateItemAction } from './actions';
import API from '../../API';

const api = new API();

export const getCart = () => {
    return async dispatch => {
        return await api
            .getCart()
            .then(res => dispatch(getCartAction(res)))
            .catch(err => console.log(err))
    }
}

export const addItem = item => {
    return async dispatch => {
        return await api
            .addItem(item)
            .then(res => dispatch(addItemAction(res)))
            .catch(err => console.log(err))
    }
}

export const updateItem = (item, id) => {
    return async dispatch => {
        return await api
            .updateCart(item, id)
            .then(res => dispatch(updateItemAction(res)))
            .catch(err => console.log(err))
    }
}

export const removeItem = item => async dispatch => dispatch(removeItemAction(item));