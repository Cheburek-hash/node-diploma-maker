import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes, privateRoutes } from "./routes";


export const AppRouter = (isAuthenticated = false) => {
        
    if (isAuthenticated){
        return (
            <Switch>
                {privateRoutes.map(route => <Route path={route.path} exact={route.exact} component={route.component} key={route.path} /> )}
                <Redirect to="/" />
            </Switch>
        )
    }
    return (
            <Switch>
                {publicRoutes.map(route =>  <Route path={route.path} exact={route.exact} component={route.component} key={route.path}  /> )}   
                <Redirect to="/" />
            </Switch>
        );
}