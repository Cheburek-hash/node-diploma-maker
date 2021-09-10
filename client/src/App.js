import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { useRoutes } from './routes';



function App() {
  const routes = useRoutes(false);
  return (
    <Router>
    <div className="container">
      {routes}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.1.2/browser/pixi.min.js" integrity="sha512-Bpibqv5o0wqIKeecMvfxLGJJDw/UC8e4wMJMhsTuuTjbyYFSOvwIia7Si5RHF9qZaQ/InA04wAGv9m7su9Ox6Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}
    
    </div>
    </Router>
  );
}

export default App;
