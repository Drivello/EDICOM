import React, { useState, Link } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loggingIn, handleChangePassword, handleSendEmail } from '../../redux/logging/loggingActions';
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

const ResetPasword = () => {

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

    const { state: newPassword, handleChange: handleNewPassword } = useForm(
        {
            newPass: " ",
            confirmPassword: " ",
            email: " "
        }
    )

    function handleNewPass(e){
        e.preventDefault();
        if(newPassword.newPass===newPassword.confirmPassword){
            alert("Contraseña cambiada")
            dispatch(handleChangePassword(newPassword))
            history.push('/logging')
        }
        else{
            alert("No coinciden las contraseñas")  
        }
    }
    
    
    return(

        <form  onSubmit={handleNewPass}>

            <Grid>
                <TextField
                    className={classes.margin}
                    id="email"
                    name="email"
                    label="email"
                    value={newPassword.email}                        
                />
            </Grid>
            
            <Grid>
                <TextField
                    className={classes.margin}
                    id="newPass"
                    name="newPass"
                    label="Nueva Contraseña"
                    // type="password"
                    onChange={(e) => {
                        handleNewPassword(e)
                    }
                }
                />
            </Grid>
            
            <Grid>
                <TextField
                    className={classes.margin}
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirmar Contraseña"
                    // type="password"
                    onChange={(e) => {
                        handleNewPassword(e)
                    }
                }
                />
            </Grid>
            <Grid>
                    <Button
                        className={classes.margin}
                        variant="contained"
                        color="secondary"
                        type="submit"
                    >
                    Confirmar
                    </Button>
            </Grid>

                Aca hay que plantear 2 cosas:
                u obtenemos el correo mediante el Link que le llega al mail
                o hay que autentificar la pagina  
        </form>
    )
    
}

export default ResetPasword;

