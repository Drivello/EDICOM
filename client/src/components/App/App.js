import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../Home/Home.js';
import Buildings from '../Buildings/Buildings';
import BuildingAdd from '../BuildingAdd/BuildingAdd';
import  BuildingUpdate  from '../BuildingUpdate/BuildingUpdate.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



function App() {
  return (
    <Container className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route exact path="/" component = {Home}/>
        <Route path="/buildings" component = {Buildings}/>
        <Route path="/buildingadd" component = {BuildingAdd}/>
        <Route path="/BuildingUpdate" component = {BuildingUpdate}/>
      </BrowserRouter>
    </Container>
  );
}

export default App;