import {useState} from 'react'
import {makeStyles, Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, 
	Typography, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { Domain, Home, MeetingRoom, HomeWork } from '@material-ui/icons';


const useStyles = makeStyles((theme)=>({
    root: {
   		margin: 50,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
	  },
	title:{
		fontSize: 30,
	},
  }));

const CreateApartmentForm = ({input, setInput, allBuildings, handleSubmit}) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [disableButton, setdisableButton] = useState(true)
	
	const [error, setError] = useState({//Control the error red border of the inputs
        cata_apartment: false,
		number_apartment: false,
        mt2_apartment: false,
        commons_apartment: false,
        state_apartment: false,
		building: false,
    })
	const [helperText, setHelperText] = useState({//Control the warning message
        cata_apartment: "",
		number_apartment: "",
        mt2_apartment: "",
        commons_apartment: "",
        state_apartment: "",
		building: ""
    })

	

	const Validate = (field) => {
		let helpers = { ...helperText }
		let errors = {...error}
        if ('cata_apartment' === field.name)
			helpers.cata_apartment = /^[A-Za-z0-9 ,.'-]{3,20}$/.test(field.value) ? "" : " Entre 3 y 20 caracteres."
		 	errors.cata_apartment = /^[A-Za-z0-9 ,.'-]{3,20}$/.test(field.value) ? false : true
        if ('number_apartment' === field.name)
			helpers.number_apartment = /^[A-Za-z0-9 ,.'-]{3,20}$/.test(field.value) ? "" : " Entre 3 y 20 caracteres."
		 	errors.number_apartment = /^[A-Za-z0-9 ,.'-]{3,20}$/.test(field.value) ? false : true
		if ('mt2_apartment' === field.name)
			helpers.mt2_apartment = /^[0-9 ,.']{2,5}$/.test(field.value) ? "" : "Solo Números."
			errors.mt2_apartment = /^[0-9 ,.']{2,10}$/.test(field.value) ? false : true
		if ('commons_apartment' === field.name)
			helpers.commons_apartment = /^[0-9 ,.']{2,5}$/.test(field.value) ? "" : "Solo Números."
			errors.commons_apartment = /^[0-9 ,.']{2,10}$/.test(field.value) ? false : true	
		if ('building' === field.name)
			helpers.building = field.value ? "" : "Seleccione un edificio."
			errors.building = field.value ? false : true	
			setError({
				...errors
			})
			setHelperText({
				...helpers
			})
	
	}

	const handleInputChange = function (e) {
		console.log(e.target.name, e.target.value)
		Validate(e.target)
		setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
		(Object.values(helperText).every(x => x === "") && Object.values(error).every(x => x === false)) ? setdisableButton(false) : setdisableButton(true) 
	};
	
	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	const handleRadio = (event) => {
		setInput({...input, 
			state_apartment:event.target.value}
			)
	  };
	

    return (
        <>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
				Crear Departamento
          	</Typography>
			<Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
					<FormControl className={classes.formControl} error={error["building"]}>
						<InputLabel id="demo-controlled-open-select-label">Seleccionar Edificio</InputLabel>
						<Select
							labelId="demo-controlled-open-select-label"
							id="building"
							name="building"
							open={open}
							onClose={handleClose}
							onOpen={handleOpen}
							value={input.building}
							onChange={handleInputChange}
						>
						<MenuItem value="">
						<em>None</em>
						</MenuItem>
						{allBuildings?.map(building => {
							return (
								<MenuItem key={building.id} value={building.id}>{` ${building.id} ${building.cata} ${building.name}`}</MenuItem>
							)
						})}
						</Select>
					</FormControl>
                    </Grid>
            </Grid>
			<form noValidate autoComplete="off" >
			<Grid container direction="row" justify="flex-start" alignItems="flex-start" className={`componentDataBox ${classes.root}`} spacing={1}>
				
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Domain />
                        </Grid>
                        <Grid item>
                            <TextField 
								error={error["cata_apartment"]}
								helperText={[helperText["cata_apartment"]]}
								id="cata_apartment" 
								label="U Catastral" 
								name="cata_apartment"
								value={input.cata_apartment}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Home />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["mt2_apartment"]}
								helperText={[helperText["mt2_apartment"]]}  
								id="mt2_apartment" 
								label="Mt2" 
								name='mt2_apartment'
								value={input.mt2_apartment}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
					
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <MeetingRoom />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["number_apartment"]}
								helperText={[helperText["number_apartment"]]}   
								id="number_apartment"
								name="number_apartment"
								label="Nº Departamento" 
								value={input.number_apartment}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <HomeWork />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["commons_apartment"]}
								helperText={[helperText["commons_apartment"]]} 
								id="commons_apartment"
								name="commons_apartment"
								label="Espacios Comunes" 
								value={input.commons_apartment}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item>
                            <MeetingRoom />
                        </Grid>
                        <Grid item>
						<FormControl >
							<RadioGroup row value={input.state_apartment} onChange={handleRadio}>
								<FormControlLabel value="1" control={<Radio/>} label="ACTIVO"/>
								<FormControlLabel value="0" control={<Radio/>} label="INACTIVO"/>
							</RadioGroup>
                		</FormControl><br/>
                        </Grid>
                    </Grid>
				
            </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Button disabled={disableButton} onClick={handleSubmit} variant="contained" color="primary">Agregar Depto</Button>
                    </Grid>
                </Grid>
        </form>
		</>
    )


}
export default CreateApartmentForm;
