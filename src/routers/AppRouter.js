import React, { useContext } from 'react';
import {AuthContext } from  '../auth/AuthContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import  {PrivatesRoutes} from '../routers/PrivatesRoutes'


export const AppRouter = () => {


    const  { user } = useContext( AuthContext );

    console.log( user );

  return (
        <Router>
          <div>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />

                <PrivatesRoutes  path="/" 
                                component={ DashBoardRoutes }
                                 isAuthenticated={ user.logged } 
                                />
            </Switch>
          </div>
        </Router>
      );
}
