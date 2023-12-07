import logo from './logo.svg';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Pages/Home'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
    <Router path='/' exact component={Home} />
    </Switch>
    </Router>
    </>
      
    
  );
}

export default App;
