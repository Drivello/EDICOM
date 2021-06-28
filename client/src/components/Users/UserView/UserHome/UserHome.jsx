import React from 'react';

function UserHome({ user }) {
    console.log('This is User Home')
    return (
        <div>
            <h2>{user && user.name}</h2>
            <ul>
                <li>Contacto: {user && user.contact}</li>
                <li>Email: {user && user.email}</li>
            </ul>
            [ Boton editar mis datos ]
            <div>
                <h3>Estas son las novedades más recientes</h3>
                <div>
                    ...
                </div>
            </div>
        </div>
    );
}

export default UserHome;