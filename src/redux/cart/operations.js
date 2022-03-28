// This file contains the operations for Cart
import { addItemAction, removeItemAction } from './actions';

export const addItem = item => async dispatch => dispatch(addItemAction(item));
export const removeItem = item => async dispatch => dispatch(removeItemAction(item));