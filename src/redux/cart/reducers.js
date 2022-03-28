// This file has the reducer for the Cart.

import initialState from "../store/initialState";
import * as Actions from "./actions";

export const CartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case Actions.ADD_ITEM:
            let addItem = action.payload.item;

            if (state[addItem.id]) {
                const newCount = state[addItem.id].count + 1;

                return {
                    ...state,
                    [addItem.id]: {
                        ...state[addItem.id],
                        count: newCount
                    } 
                };
            };

            addItem.count = 1;

            return {
                ...state,
                [addItem.id]: addItem
            };
        
        case Actions.REMOVE_ITEM:
            let removeItem = action.payload.item;
            const newCount = state[removeItem.id].count - 1;

            if (newCount === 0) {
                const newState = {...state};
                delete newState[removeItem.id];
                return { newState };
            }

            return {
                ...state,
                [removeItem.id]: {
                    ...state[removeItem.id],
                    count: newCount
                }
            };
    
        default:
            return state;
    }
}