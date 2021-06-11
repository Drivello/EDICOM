import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, React } from "react";
import { getBuildingDetail, putBuilding } from "../../redux/building/buildingActions";
import { useParams } from "react-router-dom";
import { Button, TextField, Grid } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import FormatAlignJustifyOutlinedIcon from '@material-ui/icons/FormatAlignJustifyOutlined';
import { translate } from "./Translate";

function BuildingUpdate() {
    const { id } = useParams();//Building id from query params
    const Build = useSelector(state => state.buildingReducer);//Use selector setup
    const dispatch = useDispatch();//dispatch setup
    const reg = new RegExp('^[0-9]+$')//just numbers test

    useEffect(() => {//useEffect to get the current bulding info 
        dispatch(getBuildingDetail(id)).then(console.log(Build))
    }, [])

    const [editMode, setEditMode] = useState({//Control the read mode or edit mode for every input
        name: false,
        address: false,
        cata: false,
        floor: false,
        apartments: false
    });

    const [error, setError] = useState({//Control the error red border of the inputs
        floor: false,
        apartments: false,
        name: false,
        address: false,
        cata: false,
        image: false
    })

    const [warning, setWarning] = useState({//Control the warning message
        floor: "",
        apartments: "",
        name: "",
        address: "",
        cata: "",
        image: ""
    })

    const Building = {//Initial state for the inputs
        cata: "",
        floor: "",
        apartments: "",
        name: "",
        address: "",
        image: ""
    }


    const [input, setInput] = useState({//Control the user inputs for every input
        name: Building.name,
        cata: Building.cata,
        floor: Building.floor,
        apartments: Building.apartments,
        address: Building.address,
        image: Building.image
    });

    const inputHandler = (change, text) => {//input handler to change the state when the user write
        if ((change === "floor" || change === "apartments") && !reg.test(text)) {//if somone try to enter not a number in floor and aparments
            setWarning({//set warning msg
                ...warning,
                [change]: "Solo puedes ingresar numeros!"
            })
            setError({//set the error of that input in true
                ...error,
                [change]: true
            })
        }
        if ((change !== "floor" && change !== "apartments") || reg.test(text) || text === "") {//just numbers in floor and apartments
            setInput({
                ...input,
                [change]: text
            })
        }
    }

    const editModestatus = (change) => {//shows the data according to the status mode (read, write or preview )
        if (!editMode[change]) {//if is set to read mode
            if (input[change] === Building[change]) {//shows the current value if the user didn't write anything yet
                return <h2>{translate[change]}: {Build.detailBuilding[0] && Build.detailBuilding[0][change.toLowerCase()]}</h2>
            } else {//shows the preview of the changes if the user did write something
                return <h2>{translate[change]}: {input[change]}</h2>
            }
        } else {//if is set to write mode
            return <TextField error={error[change]} helperText={warning[change]} variant="outlined" label={translate[change]} onChange={(e) => inputHandler(change, e.target.value)} value={input[change]} />
        }
    }

    const changeModeStatus = (e) => {//change the status between read only or write
        const toChange = (e.target.offsetParent && e.target.offsetParent.name) || e.target.name;//save the item name 
        setEditMode({//change the status of the item to the opposite
            ...editMode,
            [toChange]: !editMode[toChange],
        });
    }

    const saveHandler = (e) => {//send the data to change in the data base
        e.preventDefault();
        setError({
            floor: false,
            apartments: false,
            name: false,
            address: false,
            cata: false,
            image: false
        })
        setInput({//set all the inputs to the initial state
            name: Building.name,
            cata: Building.cata,
            floor: Building.floor,
            apartments: Building.apartments,
            address: Building.address,
            image: Building.image
        })
        setWarning({//set all the warnings in nothing
            floor: "",
            apartments: "",
            name: "",
            address: "",
            cata: "",
            image: ""
        })
        setEditMode({//set all the items in read mode again.
            name: false,
            address: false,
            cata: false,
            floor: false,
            apartments: false,
        })
        if (/\S/.test(input.name) || /\S/.test(input.floor) || /\S/.test(input.apartments) || /\S/.test(input.cata) || /\S/.test(input.address) || input.image !== "") { //cannot be just white space
            const formData = new FormData();
            formData.append('image', input.image);
            formData.append('body', JSON.stringify({
                id: id,
                cata: input.cata || Build.detailBuilding[0].cata,//if there is nothing writed in an input just re save the current data
                floor: input.floor || Build.detailBuilding[0].floor,
                apartments: input.apartments || Build.detailBuilding[0].apartments,
                name: input.name || Build.detailBuilding[0].name,
                address: input.address || Build.detailBuilding[0].address
            }))
            dispatch(putBuilding(formData))
                .then(() => dispatch(getBuildingDetail(id)))//re render the info of the component and now the changes are the curren data
            alert("Se guardaron los cambios")
        } else {
            alert("Debe completar todos los campos")
        }
    }

    const imgHandler = (e) => {
        let img = e.target.files[0];
        if(img.type === "image/jpeg" || img.type === "image/jpg" || img.type === "image/png"){
            setInput({ ...input, image: img })
        }else alert("Tipo de archivo no soportado")
    }

    const renderIMG = () => {
        if (Build.detailBuilding[0]) {
            if (input.image === "") return Build.detailBuilding[0].image;
            else {
                return URL.createObjectURL(input.image)
            }
        } else {
            return "false"
        }
    }

    return (
        <div>
            <Grid container spacing={1}>
                <h1 id="header">Modificar edificio:</h1>
                <form noValidate autoComplete="off" onSubmit={saveHandler} >
                    <div id="DarkGrey">
                        <Grid item xs={12}>
                            <Grid container justify="space-between" item xs={12}>
                                <BusinessIcon fontSize="large" />
                                {editModestatus("name")}
                                <Button variant="contained" name="name" onClick={changeModeStatus}>EDITAR</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container item justify="space-between" >
                                <LocationOnIcon fontSize="large" />
                                {editModestatus("address")}
                                <Button variant="contained" name="address" onClick={changeModeStatus}>EDITAR</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container item justify="space-between" >
                                <FormatAlignJustifyOutlinedIcon fontSize="large" />
                                {editModestatus("cata")}
                                <Button variant="contained" name="cata" onClick={changeModeStatus}>EDITAR</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container item justify="space-between" >
                                <ListAltOutlinedIcon fontSize="large" />
                                {editModestatus("floor")}
                                <Button variant="contained" name="floor" onClick={changeModeStatus}>EDITAR</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container item justify="space-between">
                                <MeetingRoomIcon fontSize="large" />
                                {editModestatus("apartments")}
                                <Button variant="contained" name="apartments" onClick={changeModeStatus}>EDITAR</Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid item xs={12}>
                        <Grid container item justify="space-between">
                            <img style={{maxHeight: 200, maxWidth: 250}} src={renderIMG()} />
                            <Button variant="contained" component="label">
                                Editar foto
                                <input onChange={imgHandler} name="image" type="file" accept="image/png, image/jpeg" hidden />
                            </Button>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" onClick={saveHandler} >Guardar Cambios</Button>
                </form>
            </Grid>
        </div>
    );
}


export default BuildingUpdate