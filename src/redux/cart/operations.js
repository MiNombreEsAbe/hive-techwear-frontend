// This file contains the operations for Cart
import { addItemAction, removeItemAction, updateCartAction, clearCartsAction } from './actions';
import API from '../../API';

const api = new API();

export const getCart = (data = {}) => {
    return async dispatch => {
        return await api
            .getCart(data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
    }
}

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