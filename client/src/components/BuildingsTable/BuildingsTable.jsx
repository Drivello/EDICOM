import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

function BuildingsTable(props) {
    const buildingsData = props.data;

    const columns = [
        {field: 'id', headerName: 'Nº Catastral', flex: 2},
        {field: 'name', headerName: 'Nombre', flex: 3},
        {field: 'address', headerName: 'Dirección', flex: 3},
        {field: 'floor', headerName: 'Pisos', flex: 2},
        {field: 'apartments', headerName: 'Dtos.', flex: 2}
    ]
    
    const buildings = buildingsData.map(building => {
        return {
            id: building.cata,
            name: building.name,
            address: building.address,
            floor: building.floor,
            apartments: building.apartments
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