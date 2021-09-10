import React from 'react';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import { useRoutes } from './routes';



function App() {
  const routes = useRoutes(true);
  return (
    <Router>
    <div className="container">
      {routes}
      
    </div>
    </Router>
   
  );
}

export default App;