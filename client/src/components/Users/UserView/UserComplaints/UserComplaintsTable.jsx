import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import { DataGrid, GridRowParams } from '@material-ui/data-grid';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import theme from '../../../themeStyle';

function UserComplaintsTable({columns, rows, pageSize}) {

    return (
        <ThemeProvider theme={theme}>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={pageSize} 
            />
        </ThemeProvider>
    );
}

export default UserComplaintsTable;