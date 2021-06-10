import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState , React} from "react";
import { getBuildingDetail, putBuilding } from "../../redux/building/buildingActions";
import { useParams } from "react-router-dom";
import { Button , TextField, Container, Box} from '@material-ui/core';
import  BusinessIcon  from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import FormatAlignJustifyOutlinedIcon from '@material-ui/icons/FormatAlignJustifyOutlined';
import { translate } from "./Translate";

function BuildingUpdate() {
    const { id } = useParams();
    const Build = useSelector(state => state.buildingReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuildingDetail(id))
    }, [])

    const [editMode, setEditMode] = useState({
        name: false,
        address: false,
        cata: false,
        floor:  false,
        apartments: false
    });
    
    const Building = {
        cata:"",
        floor:"",
        apartments:"",
        name:"",
        address:""
    }
    
    
    const [input, setInput] = useState({
        name: Building.name,
        cata: Building.cata,
        floor: Building.floor,
        apartments: Building.apartments,
        address: Building.address,
    });

    const inputHandler = (change, text) =>{
        setInput({
            ...input,
            [change]: text
        })
    }


    const editModestatus = (change) => {
        if(!editMode[change]){
            if(input[change] === Building[change]){
                return <h2>{translate[change]}: {Build.detailBuilding[0] && Build.detailBuilding[0][change.toLowerCase()]}</h2>
            }else{
                return <h2>{translate[change]}: {input[change]}</h2>
            }
        }else{
            return <TextField label={translate[change]} onChange={(e) => inputHandler(change, e.target.value)} value={input[change]} />
        }
    }

    const changeModeStatus = (e) => {
        const toChange = (e.target.offsetParent && e.target.offsetParent.name) || e.target.name;
        setEditMode({
            ...editMode,
            [toChange]: !editMode[toChange],
        });
    }

    const saveHandler = (e) => {
        e.preventDefault();
        setInput({
            name: Building.name,
            cata: Building.cata,
            floor: Building.floor,
            apartments: Building.apartments,
            address: Building.address,
        })
        setEditMode({
            name: false,
            address: false,
            cata: false,
            floor:  false,
            apartments: false
        })

        dispatch(putBuilding({
            id: id,
            cata: input.cata || Build.detailBuilding[0].cata,
            floor: input.floor || Build.detailBuilding[0].floor,
            apartments: input.apartments || Build.detailBuilding[0].apartments,
            name: input.name || Build.detailBuilding[0].name,
            address: input.address || Build.detailBuilding[0].address
    }))
    .then(() => dispatch(getBuildingDetail(id)))
    }

    return (
        <Container maxWidth="sm">
        <form noValidate autoComplete="off" onSubmit={saveHandler} >
            <h1 id="header">Modificar edificio:</h1>
            <div id="DarkGrey">
            <Box display="flex">
                <BusinessIcon />
            {editModestatus("name")}
                <Button variant="contained" name="name" onClick={changeModeStatus}>EDITAR</Button>
                </Box>
                <div id="DetailsBox">
                <Box display="flex">
                    <LocationOnIcon/>
                    {editModestatus("address")}
                    <Button variant="contained" name="address" onClick={changeModeStatus}>EDITAR</Button>
                    </Box>
                    <Box display="flex">
                        <FormatAlignJustifyOutlinedIcon/>
                    {editModestatus("cata")}
                    <Button variant="contained" name="cata" onClick={changeModeStatus}>EDITAR</Button>
                    </Box>
                    <Box display="flex">
                    <ListAltOutlinedIcon/>
                    {editModestatus("floor")}
                    <Button variant="contained" name="floor" onClick={changeModeStatus}>EDITAR</Button>
                    </Box>
                    <Box display="flex">
                    <MeetingRoomIcon/>
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