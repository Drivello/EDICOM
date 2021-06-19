import React, { useState } from 'react'
import Link from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loggingIn, handleChangePassword, handleSendEmail } from '../../redux/logging/actionLogging';
import { useForm } from '../../utils/useForm';

import {
    Typography,
    InputLabel,
    NativeSelect,
    Grid,
    Button,
    Container,
    TextField,
    makeStyles,
} from "@material-ui/core";

import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const Logging = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          marginTop: 50,
          marginBottom: 30,
        },
        margin: {
          margin: theme.spacing(1),
        },
      }));
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    
    const { state: user, handleChange } = useForm(
        {
            email: "",
            password: "",
        }
    )

    const { username, password } = user;
    
    const { authData } = useSelector(state => {
        return {
            authData: state.reducerLogging.authData,
        };
    });
    console.log("authData", authData)

    // if (authData) history.push('/');
    // if (localStorage.getItem('profile')) history.push('/');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loggingIn(user, swal)) // ----> va a modificar nuestro authData en el store!
        
    };

    
    function handleEmail(){
        var email = prompt("Introduzca su correo:", "");
        // console.log(typeof(email))
        // agustinreynaud6@gmail.com
        dispatch(handleSendEmail(email))
    }



    return (
        <div style={{ marginTop: '100px', marginLeft: '100px' }}>
  
            <form onSubmit={handleSubmit}>

                <h3>Iniciar Sesion</h3>

                <Grid marginTop="50">
                    <TextField
                        className={classes.margin}
                        id="email"
                        name="email"
                        label="email"
                        value={username}
                        onChange={(e) => {
                            handleChange(e)
                        }
                    }
                    />
                </Grid>
                
                <Grid marginTop="50">
                    <TextField
                        className={classes.margin}
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            handleChange(e);
                        }
                    }
                    />
                </Grid>

                <Grid>
            
                    <Button
                        className={classes.margin}
                        variant="contained"
                        color="primary"
                        type="submit"
                        >
                    Iniciar Sesión
                    </Button>
                </Grid>
            </form>

            <Grid>
                <Button
                    className={classes.margin}
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleEmail}
                    >
                Olvide mi contraseña
                </Button>
            </Grid>

        </div>
    )
}


export default Logging;