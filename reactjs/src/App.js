import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';
import About from './Components/Pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={<SignUp/>} />
          <Route path='/about' component={<About/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;