import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom' 
import { Button } from '@material-ui/core';
import AlertsTable from './AlertsTable';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import './Alerts.css';


const Alerts = (props) => {

  return (
    <ThemeProvider theme={theme}>
    <div className='contExtAlerts'>
        <div className="componentHeaderAlertsList">
            <h1>
                Todas las Alertas
            </h1>
            <Link to="/buildingadd">
                <Button style={{ fontWeight: 1000 }}  variant="contained" color="secondary">
                    Nueva Alerta
                </Button>
            </Link>
        </div>
        <div className='contAlertsTable'>
          <AlertsTable/>
        </div>
    </div>
    </ThemeProvider>
);
}

export default Alerts;