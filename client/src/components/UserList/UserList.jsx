import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBuildings} from '../../redux/building/buildingActions'
import {getAllApartments} from'../../redux/apartments/apartmentsActions'
import { makeStyles, Grid, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import {DataGrid} from '@material-ui/data-grid';
import theme from '../themeStyle';
import {Link} from 'react-router-dom'

const UserList = () => {
    const { allApartments } = useSelector(state => state.apartmentReducer);
    const {allBuildings} = useSelector(state => state.buildingReducer)
	
	const dispatch = useDispatch();
    const [input, setInput] = useState({
        apartment:'',
        building:''
	});


	const useStyles = makeStyles((theme)=>({
        root: {
            marginTop: 100,
            marginBottom: 30,
            border:5
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            width:500,
        },
        last: {
            padding: 8,
        }
    }));
	
	
	const classes = useStyles();
	const [buildingOpen, setBuildingOpen] = useState(false);
	const [apartmentOpen, setApartmentOpen] = useState(false);


	const handleBuildingClose = () => {
		setBuildingOpen(false);
        
	};

	const handleBuildingOpen = () => {
		setBuildingOpen(true);
	}; 
	const handleApartmentClose = () => {
		setApartmentOpen(false);
        
	};

	const handleApartmentOpen = () => {
		setApartmentOpen(true);
	}; 

    useEffect(() => {
        dispatch(getBuildings())
    }, [dispatch])
    
    const handleBuildingChange =  (e) => {
        dispatch(getAllApartments(e.target.value))
		setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
	}
    
        
    const user = allApartments?.map(user => {
		console.log('test',user)
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            contact: user.contact
    };
	});
    

    const columns = [
        {field: 'id', headerName: '#', width: 90},
		{field: 'name', headerName: 'Nombre', width: 90},
		{field: 'email', headerName: 'Email', width: 150},
		{field: 'contact', headerName: 'Contacto', width: 150},
		{
			field: 'Editar',
			headerName: 'EDITAR',
			sortable: false,
			width: 100,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					<Link to={`/apartment/${params.id}`} >
						<Button style={{fontWeight: 1000}} variant="contained" color="secondary" onClick={() => alert(params.id)}>Editar</Button>
					</Link>
					</ThemeProvider>
				);
			},
		},
	];

    return(
        <>  
            <ThemeProvider theme={theme}>
                <Grid container className={classes.root} direction="row" justify="center" alignItems="center" >
                    <Grid item>
					<FormControl className={classes.formControl} >
						<InputLabel id="demo-controlled-open-select-label">Seleccionar Edificio</InputLabel>
						<Select
							labelId="demo-controlled-open-select-label"
							id="building"
							name="building"
							open={buildingOpen}
							onClose={handleBuildingClose}
							onOpen={handleBuildingOpen}
							value={input.building}
							onChange={handleBuildingChange}
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
            <Grid container direction="row" justify="center" alignItems="center">
				<Grid item>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-controlled-open-select-label">Seleccionar Departamento</InputLabel>
						<Select
							labelId="demo-controlled-open-select-label"
							id="apartment"
							name="apartment"
							open={apartmentOpen}
							onClose={handleApartmentClose}
							onOpen={handleApartmentOpen}
							value={input.apartment}
							onChange={handleBuildingChange}
						>
						<MenuItem value="">
						<em>None</em>
						</MenuItem>
						{allApartments?.map(apartment => {
							return (
								<MenuItem key={apartment.id} value={apartment.id}>{` ${apartment.id} ${apartment.cata_apartment} ${apartment.number_apartment}`}</MenuItem>
							)
						})}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			<div className='extContAL'>
				<div className="componentHeader">
					<h1>
						Usuario
					</h1>
				</div>
				<Container style={{height: 400, width: '80%'}}>
					<Container style={{display: 'flex', height: '100%'}}>
						{console.log(user)}
						<DataGrid style={{border: " 4px solid black"}} rows={user} columns={columns} />
					</Container>
				</Container>
			</div>
			</ThemeProvider>
        </>
    )

}
export default UserList;