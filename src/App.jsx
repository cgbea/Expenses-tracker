import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Income from './components/Income';
import Expenditure from './components/Expenditure';
import History from './components/History';

const App = () => {
  return (
    <Router>
      <div>
    
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/income" component={Income} />
          <Route path="/expenses" component={Expenditure} />
          <Route path="/history" component={History} />
        </Switch>
  
      </div>
    </Router>
  );
};

export default App
