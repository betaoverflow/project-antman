import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/home';
import Community from './pages/community';

function App(){
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/community' component={Community} exact/>
      </Switch>
    </Router>
  );
}

export default App;
