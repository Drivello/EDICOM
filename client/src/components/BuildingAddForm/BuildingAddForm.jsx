import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postBuilding } from "../../redux/building/buildingActions";
import { TextField, Grid, Button } from '@material-ui/core';
import { Domain, Room, Image, Receipt, ListAlt, MeetingRoom } from '@material-ui/icons';

function BuildingAddForm() {
    const [buildingData, setBuildingData] = useState({
        cata: '',
        floor: '',
        cant_apartments: '',
        name: '',
        address: '',
        image: ``
    });

    const dispatch = useDispatch();

    function handleChange(e) {
        setBuildingData({
            ...buildingData,
            [e.target.name]: e.target.value
        })
    }

    function imgHandler(e) {
        let img = e.target.files[0];
        if (img.type === "image/jpeg" || img.type === "image/jpg" || img.type === "image/png") {
            setBuildingData({ ...buildingData, image: img })
        } else alert("Tipo de archivo no soportado")
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', buildingData.image);
        formData.append('body', JSON.stringify({
            cata: buildingData.cata,
            floor: buildingData.floor,
            cant_apartments: buildingData.cant_apartments,
            name: buildingData.name,
            address: buildingData.address
        }))
        console.log(formData);
        dispatch(postBuilding(formData));
    }

    return (
        <form action="">
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Domain />
                </Grid>
                <Grid item>
                    <TextField name="name" label="Nombre del edificio" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Room />
                </Grid>
                <Grid item>
                    <TextField name="address" label="Dirección" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Receipt />
                </Grid>
                <Grid item>
                    <TextField name="cata" label="Nº Catastral" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <ListAlt />
                </Grid>
                <Grid item>
                    <TextField name="floor" type="number" label="Pisos" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <MeetingRoom />
                </Grid>
                <Grid item>
                    <TextField name="cant_apartments" type="number" label="Departamentos" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Image />
                </Grid>
                <Grid item>
                    <TextField name="image" label="Foto" type="file" onChange={imgHandler} accept="image/png, image/jpeg" />
                </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Confirmar</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default BuildingAddForm;