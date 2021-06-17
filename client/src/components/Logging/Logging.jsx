import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loggingIn, handleChangePassword } from '../../redux/logging/actionLogging';
import { useForm } from '../../utils/useForm';

import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const Logging = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    
    const { state: user, handleChange } = useForm(
        {
            email: "",
            password: "",
        }
    )


    const { state: newPassword, handleChange: handleNewPassword } = useForm(
        {
            newPass: "",
            confirmPassword: "",
            email: ""
        }
    )
    

    const { username, password } = user;
    
    const { authData } = useSelector(state => {
        return {
            authData: state.reducerLogging.authData,
        };
    });

    // if (authData) history.push('/');
    // if (localStorage.getItem('profile')) history.push('/');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loggingIn(user, swal)) // ----> va a modificar nuestro authData en el store!
    };

    

    function handleNewPass(e){
        e.preventDefault();
        if(newPassword.newPass===newPassword.confirmPassword){
            dispatch(handleChangePassword(newPassword))
        }
        else{
            alert("No coinciden las contraseñas")
        }
    }



    return (
        <div style={{ marginTop: '100px', marginLeft: '100px' }}>
            

                {
                    authData?.first_logging
                    ?
                        <form  onSubmit={handleNewPass}>
                            <input  
                                name="email" 
                                value={user.email}
                                readonly="readonly"
                            />
                            <input 
                                name="newPass" 
                                placeholder="Ingresar Nueva Contraseña" 
                                onChange={handleNewPassword}
                            />
                            <input 
                                name="confirmPassword" 
                                placeholder="Confirmar Nueva Contraseña" 
                                onChange={handleNewPassword}
                            />
                            <button type="submit">Confirmar</button>
                        </form>
                        
                    :
                    <form onSubmit={handleSubmit}>
                        <h3>Iniciar Sesion</h3>
                        <input
                            type="email"
                            name="email"
                            value={username}
                            onChange={(e) => {
                                    handleChange(e)
                                    handleNewPassword(e)
                                }
                            }
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                                    handleChange(e);
                                }
                            }
                        />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                }
        </div>
    )
}


export default Logging;