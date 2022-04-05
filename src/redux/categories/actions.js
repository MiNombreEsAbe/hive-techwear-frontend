// This file contains the Redux actions for Categories

export const GET_CATEGORIES = "GET_CATEGORIES";
export const getCategoriesAction = categories => {
    return {
        type: GET_CATEGORIES,
        payload: { categories }
    };
};