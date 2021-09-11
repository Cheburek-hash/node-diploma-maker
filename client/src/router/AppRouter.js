import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { publicRoutes, privateRoutes } from "./routes";


export const AppRouter = () => {
        const isAuthenticated = false;
        return (
            isAuthenticated ?
            <Switch>
                {privateRoutes.map(route => <Route path={route.path} exact={route.exact} component={route.component} key={route.path} /> )}
                <Redirect to="/" />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>  <Route path={route.path} exact={route.exact} component={route.component} key={route.path}  /> )}   
                <Redirect to="/" />
        </Switch>
        );
 
}