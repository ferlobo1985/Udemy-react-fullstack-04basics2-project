import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header'
import Home from './components/home';
import PureComp from './components/pureComp';
import PureCompF from './components/pureCompF';

const App = ()=> {
  return (
    <BrowserRouter>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/purecomp" component={PureComp}/>
            <Route path="/purecompf" component={PureCompF}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
