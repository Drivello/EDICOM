import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loggingIn, handleChangePassword, handleSendEmail, tokenToEmail } from '../../redux/logging/loggingActions';
import { useForm } from '../../utils/useForm';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import {
    Grid,
    Button,
    TextField,
    makeStyles,
} from "@material-ui/core";


const ResetPasword = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    
    const token = useLocation().search.substring(1);

    const [ mail, setEmail ] = useState();
    
    const { state: newPassword, handleChange: handleNewPassword } = useForm(
        {
            newPass: " ",
            confirmPassword: " ",
        }
    )
        
    const { recoveryMail } = useSelector(state => {
        return {
            recoveryMail: state.loggingReducer.recoveryMail,
        };
    });
        
    useEffect(() => 
    {
        dispatch(tokenToEmail(token))
        setEmail(recoveryMail)

    }, [recoveryMail])

    // ------ Style Material UI ----------
    
    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: 50,
            marginBottom: 30,
        },
        margin: {
            margin: theme.spacing(1),
        },
        textField: {
            width: '50ch',
          },
    }));

    const classes = useStyles();

    // -----------------------------------



    function handleNewPass(e){
        e.preventDefault();
        if(newPassword.newPass===newPassword.confirmPassword){
            alert("Contraseña cambiada")
            dispatch(handleChangePassword({newPass: newPassword.newPass, email: mail}))
            history.push('/logging')
        }
        else{
            alert("No coinciden las contraseñas")  
        }
    }
    
    
    return(

        <div style={{ marginTop: '100px'}}>
        <form  onSubmit={handleNewPass}>

            <Grid container justify="flex-start" alignItems="center" className={classes.paper}>
                <TextField
                    variant="outlined"
                    className={classes.margin, classes.textField}
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={mail}
                    InputProps={{
                        readOnly: true
                    }}    
                    labelWidth={60}                  
                />
            </Grid>
            
            <Grid>
                <TextField
                    className={classes.margin}
                    id="newPass"
                    name="newPass"
                    type = "password"
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
                    type = "password"
                    label="Confirmar Contraseña"
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

        </form>
        </div>
    )
    
}

export default ResetPasword;

