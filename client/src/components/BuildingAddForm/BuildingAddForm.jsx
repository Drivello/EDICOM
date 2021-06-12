import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postBuilding } from "../../redux/building/buildingActions";
import { TextField, Grid, Button, IconButton } from '@material-ui/core';
import { Domain, Room, Image, Receipt, ListAlt, MeetingRoom, PhotoCamera } from '@material-ui/icons';

function BuildingAddForm() {
    const reg = new RegExp('^[0-9]+$')
    const [buildingData, setBuildingData] = useState({
        cata: '',
        floor: '',
        cant_apartments: '',
        name: '',
        address: '',
        image: ''
    });

    const [error, setError] = useState({//Control the error red border of the inputs
        floor: false,
        cant_apartments: false,
        name: false,
        address: false,
        cata: false,
        image: false
    })

    const [warning, setWarning] = useState({//Control the warning message
        floor: "",
        cant_apartments: "",
        name: "",
        address: "",
        cata: "",
        image: ""
    })

    const dispatch = useDispatch();

    function handleChange(e) {
        const change = e.target.name;
        const text = e.target.value;
        if ((change === "floor" || change === "cant_apartments") && !reg.test(text)) {//if somone try to enter not a number in floor and aparments
            setWarning({//set warning msg
                ...warning,
                [change]: "Solo puedes ingresar numeros!"
            })
            setError({//set the error of that input in true
                ...error,
                [change]: true
            })
        }
        if ((change !== "cant_apartments" && change !== "floor") || reg.test(text) || text === "") {
            setBuildingData({
                ...buildingData,
                [change]: text
            })
        }
    }

    function imgHandler(e) {
        let img = e.target.files[0];
        if (img.type === "image/jpeg" || img.type === "image/jpg" || img.type === "image/png") {
            setBuildingData({ ...buildingData, image: img })
        } else alert("Tipo de archivo no soportado")
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError({
            floor: false,
            cant_apartments: false,
            name: false,
            address: false,
            cata: false,
            image: false
        })
        setWarning({//set all the warnings in nothing
            floor: "",
            cant_apartments: "",
            name: "",
            address: "",
            cata: "",
            image: ""
        })
        if (!/\S/.test(buildingData.name) || !/\S/.test(buildingData.floor) || !/\S/.test(buildingData.cant_apartments) || !/\S/.test(buildingData.cata) || !/\S/.test(buildingData.address)) {
            return alert("Por favor complete todos los datos")
        }
        const formData = new FormData();
        formData.append('image', buildingData.image);
        formData.append('body', JSON.stringify({
            cata: buildingData.cata,
            floor: buildingData.floor,
            cant_apartments: buildingData.cant_apartments,
            name: buildingData.name,
            address: buildingData.address
        }))
        dispatch(postBuilding(formData));
        setBuildingData({
            cata: '',
            floor: '',
            cant_apartments: '',
            name: '',
            address: '',
            image: ''
        })
        alert("Edificio creado!")
    }

    function renderImg() {
        return URL.createObjectURL(buildingData.image)
    }

    return (
        <form action="">
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Domain />
                </Grid>
                <Grid item>
                    <TextField name="name" label="Nombre del edificio" value={buildingData.name} variant="outlined" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Room />
                </Grid>
                <Grid item>
                    <TextField name="address" label="Dirección" value={buildingData.address} variant="outlined" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Receipt />
                </Grid>
                <Grid item>
                    <TextField name="cata" label="Nº Catastral" value={buildingData.cata} variant="outlined" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <ListAlt />
                </Grid>
                <Grid item>
                    <TextField error={error.floor} helperText={warning.floor} name="floor" label="Pisos" value={buildingData.floor} variant="outlined" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <MeetingRoom />
                </Grid>
                <Grid item>
                    <TextField error={error.cant_apartments} helperText={warning.cant_apartments} name="cant_apartments" label="Departamentos" value={buildingData.cant_apartments} variant="outlined" onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Image />
                </Grid>
                <Grid item>
                    {buildingData.image ? <img width="270" height="220" alt="Building pic" src={renderImg()} /> : ""}
                    <IconButton color="primary" variant="contained" component="label">
                        <PhotoCamera />
                        <input onChange={imgHandler} name="image" type="file" label="Foto" accept="image/png, image/jpeg" hidden />
                    </IconButton>
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