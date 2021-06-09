import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../home/Home.js';
import Form from '../spending/Form';
import Board from '../spending/Board';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/container';



function App() {
  return (
    <Container className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route path="/newSpending" component = {Form}/>
        <Route path="/board" component = {Board}/>
      </BrowserRouter>
    </Container>
  );
}

export default App;