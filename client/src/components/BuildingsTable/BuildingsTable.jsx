import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

/* Buildings Mockup Fake Data */
import buildingsData from '../../utils/buildingsMockUp.json';

const columns = [
    {field: 'id', headerName: 'ID', flex: 1.5},
    {field: 'name', headerName: 'Nombre', flex: 3},
    {field: 'address', headerName: 'Dirección', flex: 5},
    {field: 'city', headerName: 'Ciudad', flex: 3},
    {field: 'apartments', headerName: 'Dtos.', type: 'number', flex: 3},
]

const buildings = buildingsData.map(building => {
    return {
        id: building.id,
        name: building.name,
        address: building.address,
        city: building.city,
        apartments: building.apartments,
    }
})

console.log(buildings)

function BuildingsTable() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <div style={{display: 'flex', height: '100%'}}>
                <DataGrid rows={buildings} columns={columns} pageSize={5} />
            </div>
        </div>
    );
}

export default BuildingsTable;