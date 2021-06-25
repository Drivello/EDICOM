import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { getComplaints } from '../../redux/complaints/complaintsActions';
import { DataGrid } from '@material-ui/data-grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import filter from '../../utils/filter-remove.png';
import PopUp from './PopUp';



function AlertsTable(props) {

  const allComplaints = useSelector(state => state.complaintsReducer.allComplaints)
  const dispatch = useDispatch();

  const complaints = allComplaints.map(complaint => {
    let stateSpanish;
    if (complaint.state === "opened") stateSpanish = "Abierto"
    else stateSpanish = "Cerrado"
    return {
      id: complaint.id,
      building: complaint.building.name,
      date: moment(complaint.date).format("DD/MM/YYYY"),
      concept: complaint.subject,
      state: stateSpanish,
      detail: complaint.details,
      importance: complaint.importance,
      edit: `/alertsUpdate/${complaint.id}`
    }
  })

  const currencies = [
    {
      value: 'opened',
      label: 'Abierto',
    },
    {
      value: 'closed',
      label: 'Cerrado',
    },
  ];

  const [currency, setCurrency] = React.useState('opened');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  /*     const buildingSelect = alerts.map(element => element = element.building).filter((value, index, self) => self.indexOf(value) === index); */
  const importanceSelect = complaints.map(element => element = element.importance).filter((value, index, self) => self.indexOf(value) === index);





  const columns = [
    { field: 'id', headerName: 'ID', flex: 1.5, hide: true },
    { field: 'building', headerName: 'Edificio', flex: 2 },
    { field: 'date', headerName: 'Fecha', flex: 1 },
    { field: 'concept', headerName: 'Concepto', flex: 3.5,renderCell: (params) => (
      <div onClick={(e) => handleEventClick(e, params.row)}>
        {params.formattedValue}
      </div>
    ) },
    { field: 'importance', headerName: 'Importancia', flex: 1 },
    { field: 'state', headerName: 'Estado', flex: 1 },
  ]

  const date1 = new Date('2021-01-01T00:00:00')
  const date2 = new Date(new Date)

  const [input, setInput] = useState({
    since: date1,
    upTo: date2,
    building: 'All',
    importance: 'All'
  })
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [alertProps, setAlertProps] = useState({});

  const handleEventClick = (clickInfo, data) => {
    console.log(data, "data del boton")
    setAlertProps({
        id: data.id,
        title: data.concept,
        detail: data.detail,
        importance: data.importance,
        building: data.building,
        date: data.date,
        state: data.state
    })
    setDisplayPopUp(true);
}


  function handleSinceChange(date) {
    setInput({ ...input, since: date });
  };

  function handleUpToChange(date) {
    setInput({ ...input, upTo: date });
  };

  function handleSelect(e) {
    setInput({ ...input, [e.target.name]: e.target.value })
  };

/*       function handleSelect(e) {
            setInput({ since: date1, upTo: date2, building: 'All', importance: 'All' })
          dispatch(filterAlerts({since: date1, upTo: date2, building: 'All', importance: 'All'}))
      } */

  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);

  /*     useEffect(() => {
            dispatch(filterAlerts(input))
          }, [input,setInput]); */

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div className='contSelectsAT'>
      <PopUp /* user= {user} */ display={displayPopUp} setDisplay={setDisplayPopUp} alertProps = {alertProps}/>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="flex-start" alignItems="center" className={classes.paper} item xs={6} sm={3}>
            <KeyboardDatePicker
              name="since"
              margin="normal"
              id="date-picker-dialog"
              label="Desde"
              format="dd/MM/yyyy"
              value={input.since}
              onChange={handleSinceChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }} />
          </Grid>
          <Grid container justify="flex-start" alignItems="center" style={{ marginLeft: "-50px" }} className={classes.paper} item xs={6} sm={3}>
            <KeyboardDatePicker
              name="upTo"
              margin="normal"
              id="date-picker-dialog"
              label="Hasta"
              format="dd/MM/yyyy"
              value={input.upTo}
              onChange={handleUpToChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }} />
          </Grid>

          <Grid container justify="flex-start" alignItems="center" style={{ marginLeft: "-50px", marginTop: "7px" }} className={classes.paper} item xs={6} sm={3}>
            {/*                   <FormControl style={{width: '200px'}}> */}
            {/*                     <InputLabel id="demo-controlled-open-select-label">Edificio</InputLabel> */}
            {/*                     <Select name="building" onChange={handleSelect} value={input.building}>
                      <MenuItem value="All">
                        <em>All</em>
                      </MenuItem >
                      
                      {buildingSelect.map((building, index) =>
                        <MenuItem value={building} key={index}>{building}</MenuItem>
                      )}
                    </Select> */}
            {/*                   </FormControl> */}
          </Grid>
          <Grid container justify="flex-start" style={{ marginLeft: "-100px", marginTop: "7px" }} alignItems="center" className={classes.paper} item xs={6} sm={3}>
            <FormControl style={{ width: '200px' }}>
              <InputLabel id="demo-controlled-open-select-label">Importancia</InputLabel>
              <Select name="importance" onChange={handleSelect} value={input.importance}>
                <MenuItem value="All">
                  <em>All</em>
                </MenuItem >

                {importanceSelect.map((importance, index) =>
                  <MenuItem value={importance} key={index}>{importance}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
        </MuiPickersUtilsProvider>
        {/*               <Button variant="contained" color="secondary" style={{maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px', marginLeft: "-100px", marginTop: "20px"}} onClick={handleSelectAll}>
                  <img style={{width: "25px", height:"25px"}} src={filter}></img>
              </Button> */}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        <DataGrid rows={complaints} columns={columns} pageSize={5} />
      </div>
    </div>
  );
}

export default AlertsTable;