import React from 'react';
import { Paper, Button } from '@material-ui/core';

export default function BuildingsList(props) {
  return (
    <Paper>
        <h2>{props.item.name}</h2>
        <h5>{props.item.address}</h5>

        <Button className="CheckButton">
            Check it out!
        </Button>
    </Paper>
  );
}