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
import Buildings from '../Buildings/Buildings';
import BuildingAdd from '../BuildingAdd/BuildingAdd';
import  BuildingUpdate  from '../BuildingUpdate/BuildingUpdate.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from '../Sidebar/Sidebar';
import Container from '@material-ui/core/Container';
import EditApartmentForm from '../Apartment/EditApartmentForm'



function App() {
  return (
    <Container className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route exact path="/" component = {Home}/>
        <Route path="/create" component={CreateApartmentForm} />
        <Route path="/" component = {Sidebar}/>
        <Route path="/newSpending" component = {Form}/>
        <Route exact path="/board" component = {Board}/>
        <Route path="/board/:id/edit" render = {({match}) => <Form match={match}/>}/>
        <Route path="/buildings" component = {Buildings}/>
        <Route path="/buildingadd" component = {BuildingAdd}/>
        <Route path="/BuildingUpdate/:id" component = {BuildingUpdate}/>
      </BrowserRouter>
    </Container>
  );
}

export default App;