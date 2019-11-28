import React from 'react';
import './App.css';
import Nav from'./nav';
import Shop from './shop';
import About from './About';
import Salary from './empsal';
import NameForm from './form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/About" component={About} />
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:employeeSalary" component={Salary}/>
      </Switch>
      <NameForm /> 
    </div>
    </Router>
  );
}

function Home(){
  return(
    <div>
      <h1>Welcome to Home Page</h1>
    </div>
  )
}

export default App;
