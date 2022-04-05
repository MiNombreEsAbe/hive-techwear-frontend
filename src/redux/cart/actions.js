// This file contains the Redux actions for Cart

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