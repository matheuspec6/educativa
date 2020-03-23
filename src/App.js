import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

 //Páginas
import Home from './view/home/index';

function App(){
  return(
      <Router>
   
        <Route path='/' component={Home} />
    
      </Router>
  )
}

export default App;
