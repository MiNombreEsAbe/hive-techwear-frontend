import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { FillerText } from './screens/FillerText';
import SignUp from './screens/SignUp';
import { ContactUs } from './components/contactUs/ContactUs';

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/"} component = { HomeScreen }/>
            <Route exact path={"/contact"} component = { ContactUs }/>
            <Route exact path={"/legal"} component = { FillerText }/>
            <Route exact path={"/policy"} component = { FillerText }/>
            <Route exact path={"/terms"} component = { FillerText }/>
            <Route exact path={"/signup"} component = { SignUp }/>
        </Switch>
    );
};

export default Router;