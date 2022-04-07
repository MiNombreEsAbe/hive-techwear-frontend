// This file contains the action to fetch all of the items

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const fetchItemsAction = items => {
    return {
        type: FETCH_ITEMS,
        payload: { items }
    }
}