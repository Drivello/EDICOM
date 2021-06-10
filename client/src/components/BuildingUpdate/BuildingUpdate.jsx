import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, React } from "react";
import { getBuildingDetail, putBuilding } from "../../redux/building/buildingActions";
import { useParams } from "react-router-dom";
import { Button, TextField, Container, Box } from '@material-ui/core';
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

    useEffect(() => {//useEffect to get the current bulding info 
        dispatch(getBuildingDetail(id))
    }, [])

    const [editMode, setEditMode] = useState({//Control the read mode or edit mode for every input
        name: false,
        address: false,
        cata: false,
        floor: false,
        apartments: false
    });

    const [error, setError] = useState({
        floor: false,
        apartments: false,
        name: false,
        address: false,
        cata: false
    })

    const [warning, setWarning] = useState({
        floor: "",
        apartments: "",
        name: "",
        address: "",
        cata: ""
    })

    const Building = {//Initial state for the inputs
        cata: "",
        floor: "",
        apartments: "",
        name: "",
        address: ""
    }


    const [input, setInput] = useState({//Control the user inputs for every input
        name: Building.name,
        cata: Building.cata,
        floor: Building.floor,
        apartments: Building.apartments,
        address: Building.address,
    });
    const reg = new RegExp('^[0-9]+$')

    const inputHandler = (change, text) => {//input handler to change the state when the user write
        if ((change === "floor" || change === "apartments") && !reg.test(text)) {
            setWarning({
                ...warning,
                [change]: "Solo puedes ingresar numeros!"
            })
            setError({
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
            cata: false
        })
        setInput({//set all the inputs to the initial state
            name: Building.name,
            cata: Building.cata,
            floor: Building.floor,
            apartments: Building.apartments,
            address: Building.address,
        })
        setEditMode({//set all the items in read mode again.
            name: false,
            address: false,
            cata: false,
            floor: false,
            apartments: false
        })

        dispatch(putBuilding({//make the put to the back and save all changes
            id: id,
            cata: input.cata || Build.detailBuilding[0].cata,
            floor: input.floor || Build.detailBuilding[0].floor,
            apartments: input.apartments || Build.detailBuilding[0].apartments,
            name: input.name || Build.detailBuilding[0].name,
            address: input.address || Build.detailBuilding[0].address
        }))
            .then(() => dispatch(getBuildingDetail(id)))//re render the info of the component and now the changes are the curren data
    }

    return (
        <Container maxWidth="sm">
            <form noValidate autoComplete="off" onSubmit={saveHandler} >
                <h1 id="header">Modificar edificio:</h1>
                <div id="DarkGrey">
                    <Box display="flex">
                        <BusinessIcon fontSize="large" />
                        {editModestatus("name")}
                        <Button variant="contained" name="name" onClick={changeModeStatus}>EDITAR</Button>
                    </Box>
                    <div id="DetailsBox">
                        <Box display="flex">
                            <LocationOnIcon fontSize="large" />
                            {editModestatus("address")}
                            <Button variant="contained" name="address" onClick={changeModeStatus}>EDITAR</Button>
                        </Box>
                        <Box display="flex">
                            <FormatAlignJustifyOutlinedIcon fontSize="large" />
                            {editModestatus("cata")}
                            <Button variant="contained" name="cata" onClick={changeModeStatus}>EDITAR</Button>
                        </Box>
                        <Box display="flex">
                            <ListAltOutlinedIcon fontSize="large"/>
                            {editModestatus("floor")}
                            <Button variant="contained" name="floor" onClick={changeModeStatus}>EDITAR</Button>
                        </Box>
                        <Box display="flex">
                            <MeetingRoomIcon fontSize="large"/>
                            {editModestatus("apartments")}
                            <Button variant="contained" name="apartments" onClick={changeModeStatus}>EDITAR</Button>
                        </Box>
                    </div>
                    <Button variant="contained" color="primary" onClick={saveHandler} >Guardar Cambios</Button>
                </div>
            </form>
        </Container>
    );
}


export default BuildingUpdate