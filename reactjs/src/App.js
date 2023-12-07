import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/*import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';*/

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;