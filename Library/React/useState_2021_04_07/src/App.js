import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var [hello, setHello] = useState("HelloWorld!");

  return (
    <div className="App">
      <button className="hello" onClick={()=>{
        if(hello=="HelloWorld!")  setHello("세상아 안녕!")
        else setHello("HelloWorld!");  
      }}>
        {hello}
      </button>
    </div>
  );
}

export default App;
