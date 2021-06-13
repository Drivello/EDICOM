import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

function BuildingsTable(props) {
    const buildingsData = props.data;

    const columns = [
        {field: 'id', headerName: 'Nº Catastral', flex: 2},
        {field: 'name', headerName: 'Nombre', flex: 3.5},
        {field: 'address', headerName: 'Dirección', flex: 2},
        {field: 'floor', headerName: 'Pisos', flex: 1.5},
        {field: 'apartments', headerName: 'Dtos.', flex: 1.5},
        {
            field: 'edit', 
            headerName: 'Edit', 
            flex: 1.5,
            renderCell: (params) => (
                <Link to={`${params.value}`}>                    
                    <Button variant="contained" size="small" >
                        Editar
                    </Button>
                </Link>
        )}
    ]
    
    const buildings = buildingsData.map(building => {
        return {
            id: building.cata,
            name: building.name,
            address: building.address,
            floor: building.floor,
            apartments: building.apartments,
            edit: `/buildingupdate/${building.id}`
        }
    })

    return (
        <div style={{height: 400, width: '100%'}}>
            <div style={{display: 'flex', height: '100%'}}>
                <DataGrid rows={buildings} columns={columns} pageSize={5} />
            </div>
        </div>
    );
}

export default BuildingsTable;