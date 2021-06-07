import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../Home/Home.js';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component = {Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

