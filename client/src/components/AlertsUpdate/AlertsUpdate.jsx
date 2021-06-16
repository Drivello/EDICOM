import React, { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';


const AlertsUpdate = (props) => {

  return (
    <ThemeProvider theme={theme}>
        ComponenteUpdate
    </ThemeProvider>
);
}

export default AlertsUpdate;