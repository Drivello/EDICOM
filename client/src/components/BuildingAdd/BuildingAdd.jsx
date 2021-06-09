import React from 'react';
import BuildingAddForm from '../BuildingAddForm/BuildingAddForm'
import Container from '@material-ui/core/container';
import Typography from '@material-ui/core/Typography';

function BuildingsAdd() {
    return (
        <Container>
            <div className="componentHeader">
                <Typography variant="h2" className="componentHeading1">
                    Crear edificio
                </Typography>
            </div>
            <BuildingAddForm />
        </Container>
    );
}

export default BuildingsAdd;