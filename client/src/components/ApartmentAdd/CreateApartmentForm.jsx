import {makeStyles, Grid, Button, TextField} from '@material-ui/core'
import { Domain, Room, LocationCity, Receipt, ListAlt, MeetingRoom,HomeWork } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
   		margin: 50,
	},
  });
const CreateApartmentForm = ({allBuildings, handleInputChange, handleSubmit, input}) => {
	const classes = useStyles();

    return (
        <>
            <h1>Desde ApartmentForm</h1>
			{/* 
			<form>
				<select>
					<option value="" key="">
						Select building
					</option>
					{allBuildings?.map((building, idx) => {
						return (
							<option value={building.id} key={idx}>
								{building.name}
							</option>
						);
					})}
				</select>
				<input
					type="text"
					name="cata_apartment"
					value={input.cata_apartment}
					onChange={handleInputChange}
				/>{' '}
				cata_apartment
				<input
					type="text"
					name="owner"
					value={input.owner}
					onChange={handleInputChange}
				/>{' '}
				owner
				<input
					type="text"
					name="mt2"
					value={input.mt2}
					onChange={handleInputChange}
				/>{' '}
				mt2
				<input
					type="text"
					name="commons"
					value={input.commons}
					onChange={handleInputChange}
				/>{' '}
				commons
				<input
					type="text"
					name="expense"
					value={input.expense}
					onChange={handleInputChange}
				/>{' '}
				expense
				<input
					type="text"
					name="state"
					value={input.state}
					onChange={handleInputChange}
				/>{' '}
				state
				<input
					type="text"
					name="building"
					value={input.building}
					onChange={handleInputChange}
				/>{' '}
				building
				<input type="button" value="CREAR" onClick={handleSubmit} />
			</form> 
			*/}
			<form action="">
			<Grid container direction="row" justify="flex-start" alignItems="flex-start" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Domain />
                        </Grid>
                        <Grid item>
                            <TextField id="apartment-floor" 
										label="Piso" 
										defaultValue="Piso" 

							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Room />
                        </Grid>
                        <Grid item>
                            <TextField id="building-address" label="Dirección" defaultValue="Calle y número" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <HomeWork />
                        </Grid>
                        <Grid item>
                            <TextField id="building-city" label="Ciudad" defaultValue="Ciudad" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <MeetingRoom />
                        </Grid>
                        <Grid item>
                            <TextField id="apartment-number"
									   label="Nº Departamento" 
									   defaultValue="Número Departamento" 
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <ListAlt />
                        </Grid>
                        <Grid item>
                            <TextField id="building-floors" type="number" label="Pisos" defaultValue="1" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <MeetingRoom />
                        </Grid>
                        <Grid item>
                            <TextField id="building-apartments" type="number" label="Departamentos" defaultValue="1" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <Button variant="contained" color="primary">Confirmar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
		</>
    )


}
export default CreateApartmentForm;
