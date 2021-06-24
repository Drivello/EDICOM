import React from 'react'

import { makeStyles } from '@material-ui/core';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Collapse } from '@material-ui/core';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',

    },
    appbar: {
        background: 'none',

    },
    appbarWrapper: {
        width: "80%",
        cursor: "pointer",
        margin: '0 auto',

    },
    appbarTitle: {

        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '1rem',
    },
    colorText: {
        color: '#FF0000'
    },
    container: {
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'Nunito',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
    },
    container2: {
        textAlign: 'center',
        fontSize: '23px',
        fontFamily: 'Nunito',
        justifyContent: 'center',
        alignItems: 'center',


    },
    title: {
        /*      marginLeft:'160px', */
        color: '#000000',
        fontSize: '3rem',

    },
    goDown: {
        color: '#FF0000',
        fontSize: '4rem'
    },
    container3: {
        marginRight: '200px'
    },
    boton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '45rem'
    }


}));
const Text = ({ checked }) => {
    
    const classes = useStyles();
    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <div className={classes.color}>
                <div >
                <div className={classes.container}>
                        <h2 className={classes.appbarTitle}>Quienes Somos?</h2>

                    </div>

                    <Toolbar className={classes.appbarWrapper}>
                        <p className={classes.container2}>Somos una empresa dedicada de software ,radicada en Argentina,
                            líderes en innovación y tecnologías que sean simples para el usuario <br/>
                            Actualmente nos dedicamos al desarrollo de un sistema de consorcio con
                            el objetivo maximizar ganancias y reducir perdidas. 
                        </p>
                        <br />

                    </Toolbar>
                    <Scroll to='ImageCard' className={classes.boton} smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </div>
        </Collapse>
    )
}

export default Text
