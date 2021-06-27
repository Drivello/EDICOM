import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 120
    }
  }));

function handleChange(e){
    //despachar la acción que me trae los elementos filtrados
}

export default function SearchBar( { servicesLis } ) {

    const classes = useStyles();

    // className={classes.formControl}

    return (
        <div style={{ width: "100%", marginTop: 100, marginLeft: 100, display: 'flex' }}>
            <Autocomplete
                width = {600}
                onChange = {e => handleChange(e) }
                id="searchBarAutocomplete"
                freeSolo
                options={servicesList.map((option) => option)}
                renderInput={(params) => (
                    <TextField 
                        {...params} 
                        label="Buscar"
                        margin="normal" 
                        variant="outlined"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                )}
            />
            <SortByAlphaIcon />

        </div>
    );
}

const servicesList = [ 'Plomero', 'Gasista', 'Electricista', 'Peluquero', 'Paseador de perros']