import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../Home/Home.js';
import Form from '../spending/Form';
import Board from '../spending/Board';
import CreateApartmentForm from '../Apartment/CreateApartmentForm';


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/container';



function App() {
  return (
    <Container className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" component={CreateApartmentForm} />
        <Route path="/newSpending" component = {Form}/>
        <Route exact path="/board" component = {Board}/>
        <Route path="/board/:id/edit" render = {({match}) => <Form match={match}/>}/>
      </BrowserRouter>
    </Container>
  );
}

export default App;