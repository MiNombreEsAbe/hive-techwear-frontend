// This file has the reducer for the Categories.

import initialState from "../store/initialState";
import * as Actions from "./actions";

export const CategoryReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case Actions.GET_CATEGORIES:
            return [
                ...state,
                ...action.payload.categories
            ];
        
        default:
            return state;
    }
}