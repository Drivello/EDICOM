import React from 'react';

function UserHome({ user }) {
    console.log('This is User Home')
    return (
        <div>
            <h2>{user.name}</h2>
            <ul>
                <li>Contacto: {user.contact}</li>
                <li>Email: {user.email}</li>
            </ul>
            [ Boton editar mis datos ]
            <div>
                <h3>Estas son las novedades más recientes</h3>
                <div>
                    Lista de notificaciones <br />
                    Lista de notificaciones <br />
                    Lista de notificaciones <br />
                    Lista de notificaciones 
                </div>
            </div>
        </div>
    );
}

export default UserHome;