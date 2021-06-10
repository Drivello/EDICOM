import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState , React} from "react";
import { getBuildingDetail, putBuilding } from "../../redux/building/buildingActions";
import { useParams } from "react-router-dom";
import { Button , TextField, Container, Box} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

function BuildingUpdate(props) {
    const { id } = useParams();
    const Build = useSelector(state => state.buildingReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuildingDetail(id))
        .then(console.log(Build.detailBuilding))
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
    
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
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
                return <h3>{capitalize(change)}: {Build.detailBuilding[0] && Build.detailBuilding[0][change.toLowerCase()]}</h3>
            }else{
                return <h3>{capitalize(change)}: {input[change]}</h3>
            }
        }else{
            return <TextField label={capitalize(change)} onChange={(e) => inputHandler(change, e.target.value)} value={input[change]} />
        }
    }

    const changeModeStatus = (e) => {
        console.log(e.target.offsetParent, e.target.name, e.target)
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
            <h2 id="header">Update your building info:</h2>
            <div id="DarkGrey">
            <Box display="flex">
                    {editModestatus("name")}
                <Button variant="contained" name="name" onClick={changeModeStatus}><EditIcon name="name"/></Button>
                </Box>
                <div id="DetailsBox">
                <Box display="flex">
                    {editModestatus("address")}
                    <Button variant="contained" name="address" onClick={changeModeStatus}><EditIcon /></Button>
                    </Box>
                    <Box display="flex">
                    {editModestatus("cata")}
                    <Button variant="contained" name="cata" onClick={changeModeStatus}><EditIcon /></Button>
                    </Box>
                    <Box display="flex">
                    {editModestatus("floor")}
                    <Button variant="contained" name="floor" onClick={changeModeStatus}><EditIcon /></Button>
                    </Box>
                    <Box display="flex">
                    {editModestatus("apartments")}
                    <Button variant="contained" name="apartments" onClick={changeModeStatus}><EditIcon /></Button>
                    </Box>
                </div>
                <Button variant="contained" color="primary" onClick={saveHandler} >SAVE CHANGES</Button>
            </div>
        </form>
        </Container>
    );
}


export default BuildingUpdate