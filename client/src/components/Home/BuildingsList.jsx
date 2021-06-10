import React from 'react';
import { Paper, Button } from '@material-ui/core';
import './Home.css';

export default function BuildingsList(props) {
  return (
    <Paper className='carusel'>
        <img className='imgCarusel'src={props.item.image} alt="not found" />
        <div className='infoBuilding'>
        <h2>{props.item.name}</h2>
        <h5>{props.item.address}</h5>

        <Button className="CheckButton">
            Check it out!
        </Button>
        </div>
    </Paper>
  );
}