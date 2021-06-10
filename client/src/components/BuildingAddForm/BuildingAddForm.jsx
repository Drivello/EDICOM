import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { Domain, Room, LocationCity, Receipt, ListAlt, MeetingRoom } from '@material-ui/icons';

// Agregar un input para poder agregar la foto.

function BuildingAddForm() {
    return (
        <form action="">
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" className="componentDataBox" spacing={1}>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Domain />
                        </Grid>
                        <Grid item>
                            <TextField id="building-name" label="Nombre" defaultValue="Nombre del edificio" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Room />
                        </Grid>
                        <Grid item>
                            <TextField id="building-address" label="Dirección" defaultValue="Calle y número" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LocationCity />
                        </Grid>
                        <Grid item>
                            <TextField id="building-city" label="Ciudad" defaultValue="Ciudad" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Receipt />
                        </Grid>
                        <Grid item>
                            <TextField id="building-cata" label="Nº Catastral" defaultValue="Número catastral" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <ListAlt />
                        </Grid>
                        <Grid item>
                            <TextField id="building-floors" type="number" label="Pisos" defaultValue="1" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <MeetingRoom />
                        </Grid>
                        <Grid item>
                            <TextField id="building-apartments" type="number" label="Departamentos" defaultValue="1" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <Button variant="contained" color="primary">Confirmar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}

export default BuildingAddForm;