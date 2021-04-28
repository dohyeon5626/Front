import { BrowserRouter, Route, ReactDOM, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Main from './Main';
import SecondPage from './SecondPage';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/hello" component={SecondPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
