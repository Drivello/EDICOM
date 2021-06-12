import {useState, useEffect} from 'react';
import {getApartmentById} from '../../redux/apartments/apartmentsActions'
import axios from 'axios';
import { FormControl, FormControlLabel, Button, RadioGroup, Radio, TextField } from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom'

export function EditApartmentForm(props) {
    
    const { apartmentDetail } = useSelector( state => state.apartmentReducer);

    const { id } = useParams();
    
    const dispatch = useDispatch();

    const [apartment,setApartment] = useState({
        owner: "owner",
        contact: "contact",
        state: 0
    })

    useEffect(() => {
        dispatch(getApartmentById(id))
    },[dispatch, id])

    useEffect(() => {
        let {owner,contact,state} = apartmentDetail;
        setApartment({
            owner: typeof owner === 'undefined' ? "owner" : owner,
            contact: typeof contact === 'undefined' ? "contact" : contact,
            state: typeof state === 'undefined' ? 0 : state
        })
    },[apartmentDetail])

    const handleInputChange = function (e) {
        switch (e.target.name) {
            case "owner":
                setApartment({
                    ...apartment,
                    owner: e.target.value,
                })
                break;
            case "contact":
                setApartment({
                    ...apartment,
                    contact: e.target.value,
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
            .then(r => console.log(r.status));
    }

	return (
		<>
            <h1>Departamento #{id}</h1>
			<FormControl>
                <FormControl>
                    <TextField 
                        variant = "outlined" 
                        label= "Locatario:" 
                        name="owner" 
                        value={apartment.owner} 
                        onChange={handleInputChange} 
                        error={!/^[A-Za-z ,.'-]{3,20}$/.test(apartment.owner)} 
                    />
                </FormControl><br/>
                <FormControl>
                    <TextField 
                        variant = "outlined" 
                        label= "Contacto:" 
                        name="contact" 
                        value={apartment.contact} 
                        onChange={handleInputChange} 
                        error={!/^[+]*[-\s/0-9]{6,20}$/.test(apartment.contact)} 
                    />
                </FormControl><br/>
                <FormControl>
                    <RadioGroup value={apartment.state === 1 ? "ACTIVE" : "UNACTIVE"} onChange={handleRadio}>
                        <FormControlLabel value="ACTIVE" control={<Radio/>} label="ACTIVO"/>
                        <FormControlLabel value="UNACTIVE" control={<Radio/>} label="INACTIVO"/>
                    </RadioGroup>
                </FormControl><br/>
                <Button variant="contained" color="primary" onClick={(e) => handleSubmit(e,id,apartment)}>Guardar Cambios</Button>
            </FormControl>
		</>
	);
};

export default EditApartmentForm;
