import {useState} from 'react'
import {makeStyles, Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from '@material-ui/core'
import { Domain, Room, LocationCity, Receipt, ListAlt, MeetingRoom, HomeWork } from '@material-ui/icons';


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

const CreateApartmentForm = ({allBuildings, handleInputChange, handleSubmit, input}) => {
	const classes = useStyles();

	const [age, setAge] = useState('');
	const [open, setOpen] = useState(false);

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};


    return (
        <>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
				Crear Edificio
          	</Typography>
			<Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-controlled-open-select-label">Seleccionar Edificio</InputLabel>
						<Select
							labelId="demo-controlled-open-select-label"
							id="demo-controlled-open-select"
							open={open}
							onClose={handleClose}
							onOpen={handleOpen}
							value={age}
							onChange={handleChange}
						>
						<MenuItem value="">
						<em>None</em>
						</MenuItem>
						{allBuildings?.map(building => {
							return (
								<MenuItem value={building.id}>{`${building.cata} ${building.name}`}</MenuItem>
							)
						})}
						</Select>
					</FormControl>
                    </Grid>
            </Grid>
			<form action="">
			<Grid container direction="row" justify="flex-start" alignItems="flex-start" className={`componentDataBox ${classes.root}`} spacing={1}>
				
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Domain />
                        </Grid>
                        <Grid item>
                            <TextField 
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
                            <Receipt />
                        </Grid>
                        <Grid item>
                            <TextField 
								id="owner_apartment" 
								label="Locatario" 
								name="owner_apartment"
								value={input.owner_apartment}
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
                            <ListAlt />
                        </Grid>
                        <Grid item>
                            <TextField 
								id="contact_apartment"
								name="contact_apartment"
								label="Contacto"
								value={input.contact_apartment}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <MeetingRoom />
                        </Grid>
                        <Grid item>
                            <TextField 
								id="state_apartment"
								name="state_apartment"
								label="Estado" 
								value={input.contact_apartment}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <Button variant="contained" color="primary">Agregar Depto</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
		</>
    )


}
export default CreateApartmentForm;
