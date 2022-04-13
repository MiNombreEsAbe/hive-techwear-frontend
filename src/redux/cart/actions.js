// This file contains the Redux actions for Cart

export const GET_CART = 'GET_CART';
export const getCartAction = cart => {
    return {
        type: GET_CART,
        payload: { cart }
    }
}

export const ADD_ITEM = "ADD_ITEM";
export const addItemAction = item => {
    return {
        type: ADD_ITEM,
        payload: { item }
    };
};

export const UPDATE_ITEM = "UPDATE_ITEM";
export const updateItemAction = item => {
    return {
        type: UPDATE_ITEM,
        payload: { item }
    }
}

export const REMOVE_ITEM = "REMOVE_ITEM";
export const removeItemAction = item => {
    return {
        type: REMOVE_ITEM,
        payload: { item }
    };
};