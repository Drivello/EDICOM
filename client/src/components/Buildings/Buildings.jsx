import React from 'react';
import BuildingsTable from '../BuildingsTable/BuildingsTable';
import styles from './styles.css'
import Container from '@material-ui/core/container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Buildings() {
    return (
        <Container>
            <div className="componentHeader">
                <Typography variant="h2" className="componentHeading">
                    Todos los edificios
                </Typography>
                <Button variant="contained" color="primary">Crear nuevo</Button>
            </div>
            <BuildingsTable />
        </Container>
    );
}

export default Buildings;