import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen'
import { FillerText } from './screens/FillerText'
const Router = () => {
    return (
        <Switch>
            <Route exact path={"/"} component = { HomeScreen }/>
            <Route exact path={"/legal"} component = { FillerText }/>
            <Route exact path={"/policy"} component = { FillerText }/>
            <Route exact path={"/terms"} component = { FillerText }/>
        </Switch>
    );
};
export default Router;