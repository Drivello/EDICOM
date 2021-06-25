import React from 'react';

function UserComplaints(props) {
    console.log('This is User Complaints')
    return (
        <div>
            This is User Complaints
            <p>My id number is {props}</p>
        </div>
    );
}

export default UserComplaints;