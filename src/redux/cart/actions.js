// This file contains the Redux actions for Cart
export const FETCH_CART = "FETCH_CARTS";
export const fetchCartAction = (cart) => {
	return {
		type: FETCH_CART,
		payload: { cart },
	};
};

export const UPDATE_CART = "UPDATE_CART";
export const updateCartAction = (cart) => {
	return {
		type: UPDATE_CART,
		payload: { cart },
	};
};

export const CLEAR_CART = "CLEAR_CART";
export const clearCartsAction = () => {
	return {
		type: CLEAR_CART,
	};
};
export const ADD_ITEM = "ADD_ITEM";
export const addItemAction = item => {
    return {
        type: ADD_ITEM,
        payload: { item }
    };
};

export const REMOVE_ITEM = "REMOVE_ITEM";
export const removeItemAction = item => {
    return {
        type: REMOVE_ITEM,
        payload: { item }
    };
};