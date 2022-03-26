import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen'
const Router = () => {
    return (
        <Switch>
            <Route exact path={"/"} component = { HomeScreen }/>
        </Switch>
    );
};
export default Router;