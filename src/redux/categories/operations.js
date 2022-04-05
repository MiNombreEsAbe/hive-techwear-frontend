// This file contains the operations for Categories
import API from '../../API';
import { getCategoriesAction } from './actions';

const api = new API();

export const getCategories = () => {
    return async dispatch => {
        return api
            .getCategories()
            .then(res => {
                console.log(res)
                dispatch(getCategoriesAction(res));
            })
            .catch(err => {
                console.log(err);
            })
    }
}