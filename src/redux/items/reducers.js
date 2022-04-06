import initialState from "../store/initialState";
import * as Actions from './actions';

export const ItemReducer = (state = initialState.items, action) => {
    switch (action.type) {
        case Actions.FETCH_ITEMS:
            let resultDict = {}

            action.payload.items.forEach(item => {
                const itemType = item['type'];
                const itemCategory = item['category']['name'];
                if (!resultDict[itemType]) resultDict[itemType] = {};
                if (!resultDict[itemType][itemCategory]) resultDict[itemType][itemCategory] = [];

                resultDict[itemType][itemCategory].push(item)
            });

            return {
                ...state,
                ...resultDict
            }
            
        default:
            return state;
    }
}