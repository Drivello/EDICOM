import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../Home/Home.js';
import Buildings from '../Buildings/Buildings';
import BuildingAdd from '../BuildingAdd/BuildingAdd';
import  BuildingUpdate  from '../BuildingUpdate/BuildingUpdate.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from '../Sidebar/Sidebar';
import Form from '../spending/Form';
import Board from '../spending/Board';
import Container from '@material-ui/core/Container';
import EditApartmentForm from '../Apartment/EditApartmentForm'
import CreateApartment from '../ApartmentAdd/CreateApartment';
import ApartmentList from '../Apartment/ApartmentList';



function App() {
  return (
    <Container className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" component = {Sidebar}/>
        <Route exact path="/" component = {Home}/>
        <Route path="/buildings" component = {Buildings}/>
        <Route path="/buildingadd" component = {BuildingAdd}/>
        <Route path="/BuildingUpdate/:id" component = {BuildingUpdate}/>
        <Route path='/apartments' component={ApartmentList}/>
        <Route path='/apartmentadd' component={CreateApartment}/> 
      </BrowserRouter>
    </Container>
  );
}

export default App;