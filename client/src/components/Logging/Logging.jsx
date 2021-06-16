import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loggingIn } from '../../redux/logging/actionLogging';
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
    const { username, password } = user;

    const { authData } = useSelector(state => {
        return {
            authData: state.reducerLogging.authData,
        };
    });

    if (authData) history.push('/');
    if (localStorage.getItem('profile')) history.push('/');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loggingIn(user, swal)) // ----> va a modificar nuestro authData en el store!

    };



    return (
        <div style={{ marginTop: '100px', marginLeft: '100px' }}>
            <form onSubmit={handleSubmit}>
                <h3>Iniciar Sesion</h3>
                <input
                    type="email"
                    name="email"
                    value={username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <button type="submit">Iniciar Sesión</button>

            </form>
        </div>
    )
}


export default Logging;