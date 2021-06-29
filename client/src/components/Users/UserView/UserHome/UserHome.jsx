import React from 'react';
import AlertsUser from '../Alerts/AlertsUser';



function UserHome({ user }) {
    console.log('This is User Home', user)
    return (
        <div>
            <h2>{user && user.name}</h2>
            <ul>
                <li>Contacto: {user && user.contact}</li>
                <li>Email: {user && user.email}</li>
            </ul>
            [ Boton editar mis datos ]
            <div>
                <div>
                    <AlertsUser id={ user.id }/>
                </div>
            </div>
        </div>
    );
}

export default UserHome;