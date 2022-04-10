import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { FillerText } from './screens/FillerText';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import ItemList from './screens/ItemList';
import { ContactUs } from './components/contactUs/ContactUs';
import { useDispatch} from 'react-redux';
import { fetchUserFromLocalStorage } from './redux/user/operations';

const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
    }, []);

    return (
        <Switch>
            <Route exact path={"/"} component = { HomeScreen }/>
            <Route exact path={"/contact"} component = { ContactUs }/>
            <Route exact path={"/legal"} component = { FillerText }/>
            <Route exact path={"/policy"} component = { FillerText }/>
            <Route exact path={"/terms"} component = { FillerText }/>
            <Route exact path={"/signup"} component = { SignUp }/>
            <Route exact path={"/signin"} component = { SignIn }/>
            <Route exact path={"/itemlist"} component = { ItemList } />
        </Switch>
    );
};

export default Router;