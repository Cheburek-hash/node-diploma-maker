import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import {AccountPage} from './pages/AccountPage';
import {AuthPage} from './pages/AuthPage';
import {ConstructorPage} from './pages/ConstructorPage'
import {HomePage} from './pages/HomePage';


export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>

               
                <Route path="/creation" exact>
                    <ConstructorPage />
                </Route>
                <Route path="/account" exact>
                    <AccountPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" exact>
                    <HomePage />
            </Route>
            <Route path="/signup" exact>
                   <AuthPage />
            </Route>
                <Redirect to="/" />
        </Switch>
    );
}