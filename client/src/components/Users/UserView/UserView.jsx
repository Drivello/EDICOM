import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom' 
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle';


const UserView = (props) => {

  return (

    <ThemeProvider >
    <div >
        estaomos en User View
    </div>
    </ThemeProvider>
);
}

export default UserView;