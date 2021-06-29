import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getComplaintsByUser } from '../../../../redux/complaints/complaintsActions';
import { DataGrid, GridRowParams } from '@material-ui/data-grid';
import { Button, Box } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../../themeStyle';

function UserComplaints({ complaints }) {
    console.log(complaints)

    const columns = [
        {field: 'id', headerName: '#', flex: 0.5},
        {field: 'date', type: 'dateTime', headerName: 'Fecha', flex: 1},
        {
            field: 'title', 
            headerName: 'Asunto', 
            flex: 3.5,
            renderCell: (GridRowParams) => (
                <Link to={`/public/1/complaintdetail/${GridRowParams.id}`}>
                    {GridRowParams.value}
                </Link>
            )
        },
        {
            field: 'state', 
            headerName: 'Estado', 
            flex: 2,
            valueFormatter: (params) => {
                const valueFormatted = (params.value === 'opened') ? 'Abierto' : 'Cerrado';
                return valueFormatted
            }
        },
    ]

    const complaintsData = complaints && complaints.map(complaint => {
        return {
            id: complaint.id,
            date: complaint.date,
            title: complaint.subject,
            state: complaint.state,
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <h2>Mis reclamos</h2>
            <div style={{ height: 400, width: '100%' }}>
                <Box display="flex" justifyContent="center" height="100%" border={0}>
                    <DataGrid columns={columns} rows={complaintsData} pageSize={5} />
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default UserComplaints;