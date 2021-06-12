import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSpending, putSpending, deleteSpending } from '../../redux/spending/actionSpending';
import { getBuildings } from '../../redux/building/buildingActions';
import { Link } from 'react-router-dom';
import "./form.css"
import { Domain, Room, LocationCity, Receipt, ListAlt } from '@material-ui/icons';
import {Typography,InputLabel,NativeSelect,Grid,Button,Container,TextField,makeStyles } from '@material-ui/core';



const Form = (props) => {

    
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }))
    const classes = useStyles();
    
    const dispatch = useDispatch();
    //tendria que traer con un use selector el listado de edificios y con un use effect ejecutarlo

    const buildingArray = useSelector(
        (state) => state.buildingReducer.allBuildings,// revisar cuando haga pull el nombre del reducer
    );

    const totalSpending = useSelector(
        (state) => state.reducerSpending.totalSpending
    )


    useEffect(() => {
        dispatch(getBuildings());
    }, [dispatch]);

    let newSpending = {};

    if(props.match.path === '/newSpending'){
        newSpending = {
            date: "",
            building: 0,
            concept: "",
            supplier: "",
            details: "",
            amount: 0
        }
    }
    else{
        newSpending = {
            date: totalSpending.filter((elem) => elem.id === parseInt(props.match.params.id))[0].date,
            building: 0,
            concept: totalSpending.filter((elem) => elem.id === parseInt(props.match.params.id))[0].concept,
            supplier: totalSpending.filter((elem) => elem.id === parseInt(props.match.params.id))[0].supplier,
            details: totalSpending.filter((elem) => elem.id === parseInt(props.match.params.id))[0].details,
            amount: totalSpending.filter((elem) => elem.id === parseInt(props.match.params.id))[0].amount,
        }
    }

    //con este estado tomo el valor seleccionado
    const [spending, setSpending] = useState(newSpending);
    const [selectedBuild, setSelectedBuild] = useState({ id: [] })

    const handleSelect = (e) => {
        let select = document.getElementById("building");

        if (select) {
            let selectValue = select.options[select.selectedIndex].value;
            let selectedBuildName = select.options[select.selectedIndex].innerText;
            setSelectedBuild({
                ...selectedBuild,
                name: selectedBuild.id.concat(selectedBuildName)

            });
            /*  let selectBuild = spending.bulding.push(selectValue); */
            setSpending({ ...spending, building: parseInt(selectValue) })

        }
    }
 

    const handleInputChange = (e) => {
        if (e.target.name === "amount") {
            setSpending({
                ...spending,
                [e.target.name]: parseInt(e.target.value),
            });
        } else {

            setSpending({
                ...spending,
                [e.target.name]: e.target.value,
            });
        }

    };

    const handleUpdate = (e) => {
        dispatch(putSpending([parseInt(props.match.params.id), spending]));
    }

    const handleDelete = (e) => { //
        dispatch(deleteSpending(parseInt(props.match.params.id)));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (spending.supplier === '') return alert("supplier Field Cannot Be Empty")
        if (spending.amount === '') return alert("Concept Field Cannot Be Empty")
        dispatch(postSpending(spending));
        alert("Anduvo")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Typography variant="h2" className="componentHeading1">
                    Todos los edificios
                </Typography>
            </Container>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" className="componentDataBox" spacing={1}>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Domain />
                        </Grid>
                        <Grid item>
                            <InputLabel htmlFor="select">Edificio</InputLabel>
                            <NativeSelect onChange={handleSelect} name="building" id="building">
                                <option> Elegir Edificio </option>
                                
                                {buildingArray && buildingArray.length > 0 ? buildingArray.map((building) => {
                                        return (
                                            <option key={building.id} value={building.id}>
                                                {building.name}
                                            </option>
                                        );
                                    })
                                        : ""}

                            </NativeSelect>
                            {/* <TextField id="building-name" label="Nombre" defaultValue="Nombre del edificio" /> */}
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Domain />
                        </Grid>
                        <Grid item>
                            <TextField input type="date" id="date" name="date"
                                onChange={(e) => setSpending({ ...spending, date: new Date(e.target.value) })} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Room />
                        </Grid>
                        <Grid item>
                            <TextField id="concepto" name="concept" label="Concepto" defaultValue="Concepto" value={spending.concept} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LocationCity />
                        </Grid>
                        <Grid item>
                            <TextField id="proveedor" label="Proveedor" value={spending.supplier} onChange={handleInputChange} name="supplier" placeholder="supplier" defaultValue="Proveedor" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Receipt />
                        </Grid>
                        <Grid item>
                            <TextField id="detalles" label="Detalles" defaultValue="Detalles" value={spending.details} onChange={handleInputChange} name="details" placeholder="details" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <ListAlt />
                        </Grid>
                        <Grid item>
                            <TextField id="monto" type="number" label="Monto" defaultValue="1" value={spending.amount} min="1" onChange={handleInputChange} name="amount" />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        {
                            props.match.path === '/newSpending'
                                ?
                                <Button variant="contained" color="primary" type="submit" >Agregar Gasto</Button>
                                :
                                <>
                                    <Link to={'../'}>
                                        <Button className={classes.margin} variant="contained" color="primary" type="button" onClick={handleUpdate} >Actualizar</Button>
                                        <Button className={classes.margin} variant="contained" color="primary" type="button" >Cancel</Button>
                                        <Button className={classes.margin} variant="contained" color="primary" type="button" onClick={handleDelete}>Eliminar</Button>
                                    </Link>
                                </>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default Form
