import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom' 
import { useSelector, useDispatch } from "react-redux";
import { getAlerts } from '../../redux/alerts/alertActions';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlertsTable from './AlertsTable';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));



const Alerts = (props) => {
    const classes = useStyles();
    const allAlerts = useSelector(state => state.alertsReducer.allAlerts)
    const dispatch = useDispatch();

    
  useEffect(() => {
    dispatch(getAlerts());
  }, [dispatch]);

  return (
    <Container>
        <div className="componentHeader">
            <Typography variant="h2" className="componentHeading1">
                Todas las Alertas
            </Typography>
            <Link to="/buildingadd">
                <Button variant="contained" color="primary">
                    Nueva
                </Button>
            </Link>
        </div>
        <AlertsTable data={allAlerts} />
    </Container>
);
}

export default Alerts;