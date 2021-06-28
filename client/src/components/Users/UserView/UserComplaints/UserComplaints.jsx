import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getComplaintsByUser } from '../../../../redux/complaints/complaintsActions';
import UserComplaintsTable from './UserComplaintsTable';
import { DataGrid, GridRowParams } from '@material-ui/data-grid';
import { Button, Box } from '@material-ui/core';

function UserComplaints({ complaints }) {

    const columns = [
        {field: 'id', headerName: '#', flex: 1},
        {field: 'date', headerName: 'Fecha', flex: 2},
        {field: 'title', headerName: 'Título', flex: 2},
        {field: 'state', headerName: 'Estado', flex: 2},
        {
            field: 'edit',
            headerName: 'Edit',
            flex: 1.5,
            renderCell: (params) => (
                <Link to={`${params.value}`}>
                    <Button variant="contained" size="small" color="secondary" style={{ fontWeight: 1000 }}>
                        Editar
                    </Button>
                </Link>
            )
        }
    ]

    const complaintsData = complaints && complaints.map(complaint => {
        return {
            id: complaint.id,
            date: complaint.importance,
            title: complaint.subject,
            state: complaint.state,
            edit: '',
        }
    })

    return (
        <div>
            <h2>Mis reclamos</h2>
            <div style={{ height: 400, width: '100%' }}>
                <Box display="flex" justifyContent="center" height="100%" border={0}>
                    <UserComplaintsTable columns={columns} rows={complaintsData} pageSize={5} />
                </Box>
            </div>
        </div>
    );
}

export default UserComplaints;