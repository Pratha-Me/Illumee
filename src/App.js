import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css';
// import { Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <div className="App">
      {/* <Router>

        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router> */}
      <Home></Home>

    </div>
  );
}

export default App;
