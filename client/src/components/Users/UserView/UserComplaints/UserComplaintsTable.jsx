import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import { DataGrid, GridRowParams } from '@material-ui/data-grid';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import theme from '../../../themeStyle';

function UserComplaintsTable({data}) {
    const complaintsData = data

    const columns = [
        {field: 'id'},
        {field: 'title', headerName: 'Título', flex: 2},
        {field: 'importance', headerName: 'Importancia', flex: 2}
    ]

    const complaints = complaintsData && complaintsData.map(complaint => {
        return {
            id: complaint.id,
            title: complaint.subject,
            importance: complaint.importance
        }
    })

    return (
        <ThemeProvider>
            <div style={{ height: 400, width: '100%' }}>
            <Box display="flex" justifyContent="center" height="100%" border={0}>
                    <DataGrid 
                        rows={complaints} 
                        columns={columns} 
                        pageSize={5} 
                    />
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default UserComplaintsTable;