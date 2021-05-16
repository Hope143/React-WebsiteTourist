import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Products from './components/Products';
import Services from './components/Services';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/sign-up" exact component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
