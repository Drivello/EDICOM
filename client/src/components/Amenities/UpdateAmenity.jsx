import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { Button, TextField, makeStyles, Grid, } from '@material-ui/core';
import styles from '../Alerts/AlertsUpdate.module.css'
import { Person, Home } from '@material-ui/icons';
import {getAmenityById, updateAmenity, deleteAmenity} from '../../redux/amenities/amenitiesActions'
import { Link, useHistory } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';

import swal from "sweetalert";

const useStyles = makeStyles((theme)=>({
    root: {
		marginTop: 100,
		marginBottom: 30,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
        justifyContent: 'center',
	},
	title:{
		fontSize: 30,
	},
	last: {
		padding: 30,
	}
}));

export function UpdateAmenity() {
	const { amenityDetail } = useSelector( state => state.amenitiesReducer);
    const {id} = useParams(); 
    const dispatch = useDispatch();
    const classes = useStyles();
	const history = useHistory();

    

	const [input, setInput] = useState({})
	console.log('id culiado', id) // es el ID del amentitie URL

	// const [input, setInput] = useState({
	// 	id: id,
	// 	amenity_type: amenityDetail.amenity_type,
    //     quantity: amenityDetail.quantity,
	// 	capacity: amenityDetail.capacity,
    //     amenity_detail: amenityDetail.amenity_detail
	// })

	//-----------------------------------------------------------
	
	useEffect(() => {
		dispatch(getAmenityById(id))
	},[dispatch])

	useEffect(() => {
		
		if (amenityDetail !== undefined) {
			setInput({
            id,
            amenity_type: amenityDetail.amenity_type,
            quantity: amenityDetail.quantity,
			capacity: amenityDetail.capacity,
            amenity_detail: amenityDetail.amenity_detail

        })
		} else {
			dispatch(getAmenityById(id))
		}
        
	},[amenityDetail, dispatch, id])


    const [error, setError] = useState({//Control the error red border of the inputs
		amenity_type: false,
        quantity: false,
		capacity: false,
		amenity_detail: false,
    })
	const [helperText, setHelperText] = useState({//Control the warning message
		amenity_type: "Ingrese un Amenity",
        quantity: "Ingrese la cantidad",
		capacity: "Ingrese la capacidad",
        amenity_detail: "Ingrese un Detalle",
    })
    

    const handleInputChange = e => {
        Validate(e.target)
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
		dispatch(updateAmenity(input));
        swal('Amenity actualizado exitosamente', "Gracias!", "success");
		//add redirect
		//history.push('/userDetail')
		history.goBack()
	};

	const deleteHandler = () => {
		dispatch(deleteAmenity(id))
                .then(swal("Se ha eliminado el amenity!", "Gracias!", "success"))
                .then(history.goBack())
	}

	const cancelHandler = () => {
		history.goBack()
	}


    const Validate = (field) => {
		switch (field.name){
			case "amenity_type":
				if(!/^[A-Za-z .'-]{3,20}$/.test(field.value)) {
					setError({...error, name: true})
					if(field.value.length < 3) {setHelperText({...helperText, name: "Es muy corto"})}
                    else if (field.value.length > 20) {setHelperText({...helperText, name: "Es muy largo"})}
                    else{setHelperText({...helperText, name: "No se permiten caracteres especiales"})}
				}else{
					setError({...error, name: false})
					setHelperText({...helperText, name: ""})
				}
				break;
			case "quantity":
				if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(field.value)) {
					setError({...error, email: true})
					if(field.value.length < 3) {setHelperText({...helperText, email: "Es muy corto"})}
					else if(field.value.length > 20) {setHelperText({...helperText, email: "Es muy largo"})}
					else{setHelperText({...helperText, email: "Contiene caracteres no aceptados"})}
				}
				else{
					setError({...error, email: false})
					setHelperText({...helperText, email: ""})
				}
				break;
			case "amenity_detail":
				if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,60}$/.test(field.value)) {
					setError({...error, password: true})
					if(field.value.length < 8) {setHelperText({...helperText, password: "Es muy corto"})}
					else if(field.value.length > 60) {setHelperText({...helperText, password: "Es muy largo"})}
					else{setHelperText({...helperText, password: "1 nro, 1 mayus y 1 min"})}
				}
				else{
					setError({...error, password: false})
					setHelperText({...helperText, password: ""})
				}
				break;
		
			default:
				break;
		}
	}

	

    return(
		<ThemeProvider theme={theme}>
        <>
            <form noValidate autoComplete="off" >
			<Grid container direction="row" justify="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="center" justify="center">
                        <Grid>
                            <Person />
                        </Grid>
                        <Grid item>
                            <TextField 
								error={error["amenity_type"]}
								helperText={[helperText["amenity_type"]]}
								id="amenity_type" 
								label="Amenity" 
								name="amenity_type"
								value={input.amenity_type || ''}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>
					
					<Grid container spacing={1} alignItems="center" justify="center">
                        <Grid item>
                            <Home />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["quantity"]}
								helperText={[helperText["quantity"]]}  
								id="quantity" 
								label="Cantidad" 
								name='quantity'
								value={input.quantity || ''}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>

					<Grid container spacing={1} alignItems="center" justify="center">
                        <Grid item>
                            <Home />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["capacity"]}
								helperText={[helperText["capacity"]]}  
								id="capacity" 
								label="Capacidad" 
								name='capacity'
								value={input.capacity || ''}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="center" justify="center">
                        <Grid item>
                            <Home />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["amenity_detail"]}
								helperText={[helperText["amenity_detail"]]}  
								id="amenity_detail" 
								label="Detalle" 
								name='amenity_detail'
								value={input.amenity_detail || ''}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
						<Button 
							id={ styles.submit} 
							style={{ fontWeight: 1000, marginTop: 50 }} 
							color="secondary" 
							onClick={handleSubmit} 
							variant="contained"
						>
							Guardar Cambios
						</Button>
						<Button
                            id={styles.submit}
                            style={{ fontWeight: 1000, marginTop: 50 }}
                            color="primary"
                            variant="contained"
                            onClick={deleteHandler}
                        >
                            Eliminar Amenity
                        </Button>
						<Button
                            id={styles.submit}
                            style={{ fontWeight: 1000, marginTop: 50 }}
                            color="primary"
                            variant="contained"
                            onClick={cancelHandler}
                        >
                            Cancelar
                        </Button>
                    </Grid>
                </Grid>
			</Grid>
        </form>
        </>
		</ThemeProvider>
    )
}
export default UpdateAmenity;