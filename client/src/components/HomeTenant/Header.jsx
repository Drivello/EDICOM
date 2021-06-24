import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Collapse } from '@material-ui/core';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loggingIn, handleSendEmail, emailToToken } from '../../redux/logging/loggingActions';
import { useForm } from '../../utils/useForm';
import {correoElectronico} from "../../utils/validations"


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

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
        marginLeft:'200px',
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
   
      paper: {
        margin: theme.spacing(2,3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'transparent',
      
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '108%',
        height:'30%',
        backgroundColor:'transparent', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor:'#FF0000'
      },
      root2: {
        height: '80vh',
        margin:'300px',
        marginRight:'208px',
     
        
      },
      inputs:{
          backgroundColor:'#e8eaf6y',
       
      }
      
    /* form:{
        marginRight:'100px',
        backgroundColor: 'transparent'
       
    } */
}));



export const Header = () => {



    const classes = useStyles();
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(true)
    }, [])
    const dispatch = useDispatch();
    const history = useHistory();

    
    const { state: user, handleChange } = useForm(
        {
            email: "",
            password: "",
        }
    )

    const { email: username, password } = user;            //destructuring
    
    const { authData, tokenToConfirm } = useSelector(state => {
        return {
            authData: state.loggingReducer.authData,
            tokenToConfirm: state.loggingReducer.tokenToConfirm,
        };
    });
    
    const {first_logging, name, token} = authData

    useEffect(() => {

        if(token){
            if(!first_logging){                
                window.location.href = 'http://localhost:3000/'
            }
            else{
                dispatch(emailToToken(username))
                //hacer el dispatch para pedir el tokenToConfirm para este email
            }
        }
    }, [authData, dispatch])
    
    useEffect(() => {
        if(first_logging){        
            if(tokenToConfirm?.length > 2){
            /*     history.push(`/logging/restaurarcontraseña?${tokenToConfirm}`) */
                window.location.href = `http://localhost:3000/logging/restaurarcontraseña?${tokenToConfirm}`;
            }
        }
    }, [tokenToConfirm])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!correoElectronico(user.email)){
            alert ("El correo electronico es incorrecto")
        }
        else{
            console.log("despache")
            dispatch(loggingIn(user)) // ----> va a modificar nuestro authData en el store!
        }
    };

    
    function handleEmail(){
        var email = prompt("Introduzca su correo:", "");
        if(!correoElectronico(email)){
            alert ("no se introdujo un correo electrónico valido")
        }
        else{
            dispatch(handleSendEmail(email))
        }
    }

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h2 className={classes.appbarTitle}>Edi<span className={classes.colorText}>com.</span></h2>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={10}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>Bienvenido a <br />
                        Edi<span className={classes.colorText}>com.</span>
                    </h1>
                    <Scroll to='Text' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
                
            </Collapse>

            <div className={classes.root2}>
            <Grid container component="main" className={classes.form}>
                <CssBaseline />
              
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Ingresar
                        </Typography>
                        <form  onSubmit={handleSubmit} className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                className={classes.inputs}
                                autoFocus
                                value={username}
                                onChange={(e) => {
                                    handleChange(e)
                                }
                            }
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => {
                                    handleChange(e);
                                }
                            }
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Recuerdame"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                               
                            >
                                Ingresar
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" className={classes.boton} variant="body2">
                                        Olvidaste la constraseña?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                      
                                        { "Registrate"}
                                    </Link>
                                </Grid>
                            </Grid>
                           
                        </form>
                    </div>
              
            </Grid>
            </div> 

          
        </div>
    )
}
