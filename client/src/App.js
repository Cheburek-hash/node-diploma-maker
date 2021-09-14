import React from 'react';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';


function App() {
  const {login, logout, token, userId} = useAuth();
  const isAuthenticated = !!token;
  const routing = AppRouter(isAuthenticated);
  return (
      <AuthContext.Provider value={{
        token, userId, login, logout, isAuthenticated
      }}>
        <Router>  
          <div className="container">
            {routing}
          </div>
        </Router>
      </AuthContext.Provider>
  );
}

export default App;
