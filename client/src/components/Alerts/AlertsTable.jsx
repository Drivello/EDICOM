import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { getAlerts, filterAlerts } from '../../redux/alerts/alertActions';
import { DataGrid } from '@material-ui/data-grid';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import './Alerts.css';
import moment from 'moment';



function AlertsTable(props) {

    const filteredAlerts = useSelector(state => state.alertsReducer.filteredAlerts)
    const allAlerts = useSelector(state => state.alertsReducer.allAlerts)
    const dispatch = useDispatch();

    const alerts = filteredAlerts.map(alert => {
        return {
            id: alert.id,
            building: alert.building.name,
            date: moment(alert.date).format('L'),
            concept: alert.concept,
            detail: alert.details,
            importance: alert.importance,
            edit: `/`
        }
    })

    const buildingSelect = alerts.map(element => element = element.building).filter((value, index, self) => self.indexOf(value) === index);
    const importanceSelect = alerts.map(element => element = element.importance).filter((value, index, self) => self.indexOf(value) === index);
    
    

    


    const columns = [
        { field: 'id', headerName: 'ID', flex: 1.5, hide: true },
        {field: 'building', headerName: 'Edificio', flex: 3},
        {field: 'date', headerName: 'Fecha', flex: 2},
        {field: 'concept', headerName: 'Concepto', flex: 3.5},
        {field: 'importance', headerName: 'Importancia', flex: 2},
        {
            field: 'edit', 
            headerName: 'Edit', 
            flex: 1.5,
            renderCell: (params) => (
                <Link to={`${params.value}`}>                    
                    <Button variant="contained" color="secondary" size="small" >
                        Editar
                    </Button>
                </Link>
        )}
    ]
    
    const date1 = new Date('2021-01-01T00:00:00')
    const date2 = new Date(new Date)

    const [input, setInput] = useState({
        since: date1,
        upTo: date2,
        building: 'All',
        importance: 'All'
    })

    

    function handleSinceChange(date) {
        setInput({ ...input, since: date });
    };
    
    function handleUpToChange(date) {
        setInput({ ...input, upTo: date });
    };

    function handleSelect(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    };

    function handleSelectAll(e) {
        setInput({ since: date1, upTo: date2, building: 'All', importance: 'All'})
        dispatch(filterAlerts({ since: date1, upTo: date2, building: 'All', importance: 'All'}))
    }

    useEffect(() => {
        dispatch(getAlerts());
    }, [dispatch, allAlerts]);

    useEffect(() => {
        dispatch(filterAlerts(input))
    }, [input,setInput]);

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
    }));
    
    const classes = useStyles();

    return (
        <div style={{height: 400, width: '100%'}}>
            <div className='contSelectsAT'>        
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <KeyboardDatePicker
                    name="since"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Desde"
                    format="MM/dd/yyyy"
                    value={input.since}
                    onChange={handleSinceChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }} />
                </Grid>
                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <KeyboardDatePicker
                    name="upTo"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Hasta"
                    format="MM/dd/yyyy"
                    value={input.upTo}
                    onChange={handleUpToChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }} />
                </Grid>

                <Grid container justify="space-around" item xs={6} sm={3}>
                  <FormControl style={{width: '200px'}}>
                    <InputLabel id="demo-controlled-open-select-label">Edificio</InputLabel>
                    <Select name="building" onChange={handleSelect}>
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem >
                      
                      {buildingSelect.map((building, index) =>
                        <MenuItem value={building} key={index}>{building}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid container justify="space-around" item xs={6} sm={3}>
                  <FormControl style={{width: '200px'}}>
                    <InputLabel id="demo-controlled-open-select-label">Importancia</InputLabel>
                    <Select name="importance" onChange={handleSelect}>
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem >
                      
                      {importanceSelect.map((importance, index) =>
                        <MenuItem value={importance} key={index}>{importance}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
              </MuiPickersUtilsProvider>
              <Button variant="contained" color="secondary" style={{ fontWeight: 1000, marginRight: "50px" }} onClick={handleSelectAll}>
                  Eliminar Filtros
              </Button>
            </div>
            <div style={{display: 'flex', height: '100%'}}>
                <DataGrid rows={alerts} columns={columns} pageSize={5} />
            </div>
        </div>
    );
}

export default AlertsTable;