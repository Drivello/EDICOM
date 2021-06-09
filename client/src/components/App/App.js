import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../home/Home.js';
import Form from '../expensas/Form';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component = {Home}/>
        <Route path="/newSpending" component = {Form}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

