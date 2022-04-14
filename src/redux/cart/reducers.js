// This file has the reducer for the Cart.

import initialState from "../store/initialState";
import * as Actions from "./actions";

export const CartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case Actions.GET_CART:
            return [...action.payload.cart,]

        case Actions.ADD_ITEM:
            return [
                ...state,
                action.payload.item,
            ]

        case Actions.UPDATE_ITEM:
            const newState = [...state];
            
            for(let i = 0; i < newState.length; i++) {
                if(newState[i]['id'] === action.payload.item.id) {
                    newState.splice(i, 1, action.payload.item);
                    break;
                }
            }

            return newState;
        
        // case Actions.REMOVE_ITEM:
        //     let removeItem = action.payload.item;
        //     const newCount = state[removeItem.id].count - 1;

        //     if (newCount === 0) {
        //         const newState = {...state};
        //         delete newState[removeItem.id];
        //         return { newState };
        //     }

        //     return {
        //         ...state,
        //         [removeItem.id]: {
        //             ...state[removeItem.id],
        //             count: newCount
        //         }
        //     };
    
        default:
            return state;
    }
    
};