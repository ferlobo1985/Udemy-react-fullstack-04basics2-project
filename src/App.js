import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header'
import Home from './components/home';
import PureComp from './components/pureComp';
import PureCompF from './components/pureCompF';
import Adjel from './components/adjel';
import Profile from './components/profile';

const App = ()=> {
  return (
    <BrowserRouter>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/adjel" component={Adjel}/>
            <Route path="/purecomp" component={PureComp}/>
            <Route path="/purecompf" component={PureCompF}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
