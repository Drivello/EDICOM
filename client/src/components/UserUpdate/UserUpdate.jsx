import {useState} from 'react'
import {  Button, TextField, makeStyles,Grid } from '@material-ui/core';
import { Domain, Home, MeetingRoom } from '@material-ui/icons';
const useStyles = makeStyles((theme)=>({
    root: {
		marginTop: 50,
		marginBottom: 30,
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
		padding: 30,
	}
}));
export function UserUpdate({handleSubmit}) {
    const classes = useStyles();
    const [input, setInput] = useState({})
    const [error, setError] = useState({//Control the error red border of the inputs
		name: false,
        email: false,
		password: false,
		contact: false,
        isDeleted:false
    })
	const [helperText, setHelperText] = useState({//Control the warning message
		name: "Ingrese un Nombre",
        email: "Ingrese un Correo",
        password: "Ingrese un Password",
		contact: "Numero de Telefono",
        isDeleted:"Ingrese un is deleted"
    })

    const handleInputChange = e => {

    }

    return(
        <>
            <form noValidate autoComplete="off" >
			<Grid container direction="row" justify="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid>
                            <Domain />
                        </Grid>
                        <Grid item>
                            <TextField 
								error={error["name"]}
								helperText={[helperText["name"]]}
								id="name" 
								label="Nombre" 
								name="name"
								value={input.name}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>
					
					<Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Home />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["email"]}
								helperText={[helperText["email"]]}  
								id="email" 
								label="Correo" 
								name='email'
								value={input.email}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Home />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["password"]}
								helperText={[helperText["password"]]}  
								id="password" 
								label="Contraseña" 
								name='password'
								value={input.password}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MeetingRoom />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["contact"]}
								helperText={[helperText["contact"]]}
								id="contact"
								name="contact"
								label="Nº Telefono" 
								value={input.contact}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Button style={{fontWeight: 1000, marginTop: 50}} color="secondary" onClick={handleSubmit} variant="contained">Agregar Depto</Button>
                    </Grid>
                </Grid>
			</Grid>
        </form>
        </>
    )
}
export default UserUpdate;