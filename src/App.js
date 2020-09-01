import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import { Router, Switch, Route } from 'react-router-dom';
import history from './services/history';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
