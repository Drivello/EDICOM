import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../home/Home.js';
import Form from '../spending/Form';
import Board from '../spending/Board';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/newSpending" component = {Form}/>
        <Route path="/board" component = {Board}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

