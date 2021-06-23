import React from 'react'
import { makeStyles } from '@material-ui/core';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';


const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none'
    },
    icon: {
        color: '#fff',
        fontSize: '1rem'
    }
}));



export const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <h1 className={classes.appbar}>Edicom.</h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
