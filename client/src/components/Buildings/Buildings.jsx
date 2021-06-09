import React from 'react';
import BuildingsTable from '../BuildingsTable/BuildingsTable';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './styles.css';

function Buildings() {
    return (
        <Container>
            <div className="componentHeader">
                <Typography variant="h2" className="componentHeading1">
                    Todos los edificios
                </Typography>
                <Button variant="contained" color="primary">Crear nuevo</Button>
            </div>
            <BuildingsTable />
        </Container>
    );
}

export default Buildings;