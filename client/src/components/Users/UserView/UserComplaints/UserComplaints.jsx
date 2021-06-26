import React from 'react';
import {} from '../../../../redux/complaints/complaintsActions';

function UserComplaints({ user, apartment }) {
    console.log('This is User Complaints')
    console.log('Props ' + user)


    return (
        <div>
            <h2>Mis reclamos</h2>
            {user.name}
        </div>
    );
}

export default UserComplaints;