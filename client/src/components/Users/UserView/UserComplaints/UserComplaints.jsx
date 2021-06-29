import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComplaintsByUser } from '../../../../redux/complaints/complaintsActions';
import UserComplaintsTable from './UserComplaintsTable';

function UserComplaints({ user, apartment }) {
    const userComplaints = useSelector(state => state.complaintsReducer.userComplaints);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComplaintsByUser(user.id))
    }, [])

    return (
        <div>
            <h2>Mis reclamos</h2>
            <UserComplaintsTable data={userComplaints && userComplaints} />
        </div>
    );
}

export default UserComplaints;