import React from 'react';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';



function App() {
  
  return (
    <Router>
    <div className="container">
      <AppRouter />
      
    </div>
    </Router>
   
  );
}

export default App;
