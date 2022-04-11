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
import Thankyou from './screens/Thankyou';
import ItemDetails from './screens/ItemDetails';

const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Route exact path={"/male"} render={(props) => <ItemList {...props} category="male" />} />
            <Route exact path={"/female"} render={(props) => <ItemList {...props} category="female" />} />
            <Route exact path={"/tshirts"} render={(props) => <ItemList {...props} item="T-Shirts" />} />
            <Route exact path={"/shirts"} render={(props) => <ItemList {...props} item="Shirts" />} />
            <Route exact path={"/bottoms"} render={(props) => <ItemList {...props} item="Bottoms" />} />
            <Route exact path={"/hats"} render={(props) => <ItemList {...props} item="Hats" />} />
            <Route exact path={"/checkout"} component={ItemDetails} />
            <Route exact path={"/thankyou"} component={Thankyou} />
        </Switch>
    );
};

export default Router;