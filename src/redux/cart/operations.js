// This file contains the operations for Cart
import API from "../../API";
import { addItemAction, removeItemAction, clearCartsAction, fetchCartAction, updateCartAction  } from './actions';
const api = new API();


export const fetchCart = (data = {}) => {
    return async dispatch => {
        return await api.getCart(data)
            .then(res => dispatch(fetchCartAction(res)))
            .catch(err => console.log(err.response.data))
    };
};

export const addItem = body => {
	return async (dispatch) => {
		const cart = await api.addCart(body);
        dispatch(addItemAction(cart));
	};
};

export const updateCart = body => {
	return async (dispatch) => {
		const cart = await api.updateCart(body);
        dispatch(updateCartAction(cart));
	};
};
export const removeItem = body => {
	return (dispatch) => {
		dispatch(removeItemAction(body));
	};
};

export const clearCarts = () => {
	return (dispatch) => {
		dispatch(clearCartsAction());
	};
};