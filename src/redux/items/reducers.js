import initialState from "../store/initialState";
import * as Actions from './actions';

export const ItemReducer = (state = initialState.items, action) => {
    switch (action.type) {
        case Actions.FETCH_ITEMS:
            return {
                ...state,
                [action.gender]: {
                    ...state[action.gender],
                    [action.clotheType]: {
                        ...action.payload.items
                    }
                }
            }
        default:
            return state;
    }
}