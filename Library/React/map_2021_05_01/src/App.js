import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Props from './Component/Map';
import Main from './Component/Main';

const App = () => {
  const [data, setData] = useState(0);
  const handleData = (e) => {
    setData(e);
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <Main func={handleData} /> </Route>
          <Route exact path="/hello"> <Props amount={data} /> </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;