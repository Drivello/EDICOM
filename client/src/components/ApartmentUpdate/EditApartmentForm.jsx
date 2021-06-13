import {useState, useEffect} from 'react';
import {getApartmentById} from '../../redux/apartments/apartmentsActions'
import axios from 'axios';
import { FormControl, FormControlLabel, Button, RadioGroup, Radio, TextField, makeStyles } from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'
import BuildingDetail from '../BuildingDetail/BuildingDetail';

const useStyles = makeStyles((theme)=>({
    root: {
		marginTop: 50,
		marginBottom: 30,
        marginLeft:500,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
	},
	title:{
		fontSize: 30,
	},
	last: {
		padding: 8,
	}
}));
export function EditApartmentForm(props) {
    const history = useHistory();
    const classes = useStyles();

    const { apartmentDetail } = useSelector( state => state.apartmentReducer);

    const { id } = useParams();
    
    const dispatch = useDispatch();

    const [apartment, setApartment] = useState({
        cata_apartment: "",
        mt2: "",
		number_apartment: "",
        state: 0
    })

    useEffect(() => {
        dispatch(getApartmentById(id))
    },[dispatch, id])

    useEffect(() => {
        let {cata_apartment, mt2, number_apartment, state} = apartmentDetail;
        setApartment({
            cata_apartment: cata_apartment, //typeof owner === 'undefined' ? "owner" : owner,
            mt2: mt2,//typeof contact === 'undefined' ? "contact" : contact,
            number_apartment: number_apartment,
            state: state//typeof state === 'undefined' ? 0 : state
        })
    },[apartmentDetail])

    const handleInputChange = function (e) {
        switch (e.target.name) {
            case "cata_apartment":
                setApartment({
                    ...apartment,
                    cata_apartment: e.target.value,
                })
                break;
            case "mt2":
                setApartment({
                    ...apartment,
                    mt2: e.target.value,
                })
                break;
            case "number_apartment":
                setApartment({
                    ...apartment,
                    number_apartment: e.target.value,
                })
                break;
            default:
                break;
        }
    }

    const handleRadio = function (e) {
        setApartment({
            ...apartment,
            state: e.target.value === "ACTIVE" ? 1 : 0,
        })
    }

    const handleSubmit = function(e,id,data){
        axios
            .put(`http://localhost:3001/apartments/${id}`, data, {
                headers: {'Content-Type': 'application/json'},
            })
            .then(r => {
                alert('Departamento Modificado Exitosamente')
                history.push(`/buildingDetail/${r.data.buildingId}`)
             } )//console.log(r.status)
             
        
            
    }

	return (
		<>
            <h1>Departamento #{id}</h1>
			<FormControl className={classes.root}>
                <FormControl>
                    <TextField 
                        variant = "outlined" 
                        label= "Un Catastral:" 
                        name="cata_apartment" 
                        value={apartment.cata_apartment} 
                        onChange={handleInputChange} 
                        error={!/^[A-Za-z ,.'-]{3,20}$/.test(apartment.cata_apartment)} 
                    />
                </FormControl><br/>
                <FormControl>
                    <TextField 
                        variant = "outlined" 
                        label= "Mt2:" 
                        name="mt2" 
                        value={apartment.mt2} 
                        onChange={handleInputChange} 
                        error={!/^[+]*[-\s/0-9]{3,20}$/.test(apartment.mt2)} 
                    />
                </FormControl><br/>
                <FormControl>
                    <TextField 
                        variant = "outlined" 
                        label= "N° Departamento:" 
                        name="number_apartment" 
                        value={apartment.number_apartment} 
                        onChange={handleInputChange} 
                        error={!/^[A-Za-z0-9,.'-]{1,20}$/.test(apartment.number_apartment)} 
                    />
                </FormControl><br/>
                <FormControl>
                    <RadioGroup value={apartment.state === 1 ? "ACTIVE" : "UNACTIVE"} onChange={handleRadio}>
                        <FormControlLabel value="ACTIVE" control={<Radio/>} label="ACTIVO"/>
                        <FormControlLabel value="UNACTIVE" control={<Radio/>} label="INACTIVO"/>
                    </RadioGroup>
                </FormControl><br />
                <Link  >
                    <Button variant="contained" color="primary" onClick={(e) => handleSubmit(e, id, apartment)}>Guardar Cambios</Button>
                </Link>
                
            </FormControl>
		</>
	);
};

export default EditApartmentForm;
