import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../Home/Home.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/container';



function App() {
  return (
    <Container className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" component = {Home}/>
      </BrowserRouter>
    </Container>
  );
}

export default App;