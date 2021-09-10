import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import {AccountPage} from './pages/AccountPage';
import {AuthPage} from './pages/AuthPage';


export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path="/account" exact>
                    <AccountPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/auth" exect>
                    
                    <AuthPage />
            </Route>
                <Redirect to="/" />
        </Switch>
    )
}