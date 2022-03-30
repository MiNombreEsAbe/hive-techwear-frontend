import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import thunk from 'redux-thunk';

import { UserReducer } from "../user/reducers";
import { ItemReducer } from "../items/reducers";
import { CartReducer } from "../cart/reducers";

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            user: UserReducer,
            items: ItemReducer,
            cart: CartReducer
        }),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        )
    );
};