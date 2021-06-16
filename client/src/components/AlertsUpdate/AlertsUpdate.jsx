import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import styles from "./AlertsUpdate.module.css";
import { TextField, Button, MenuItem } from '@material-ui/core';
import swal from "sweetalert";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory , useParams} from 'react-router-dom';
import {
    putBuilding
} from '../../redux/alerts/alertActions';
import {
    getBuildings
} from '../../redux/building/buildingActions';
import {findAlert} from "../../redux/alerts/alertActions"


const AlertsUpdate = (props) => {
    const date = new Date;
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch(); //dispatch setup
    const buildings = useSelector(state => state.buildingReducer);
    const alert = useSelector(state => state.alertsReducer);


    const currencies = [
        {
            value: 'alta',
            label: 'Alta',
        },
        {
            value: 'media',
            label: 'Media',
        },
        {
            value: 'baja',
            label: 'Baja',
        }
    ];


    const [input, setInput] = useState({
        date: date,
        concept: "",
        detail: "",
        important: "",
        building: ""
    })

    useEffect(() => {
      dispatch(getBuildings())
      dispatch(findAlert(id))
  }, [dispatch]);

  useEffect(() => {
    alert.findAlert[0] && 
    setInput({
      ...input, 
      date: alert.findAlert[0].date, 
      concept: alert.findAlert[0].concept, 
      important: alert.findAlert[0].importance, 
      building: alert.findAlert[0].buildingId,
      detail: alert.findAlert[0].details || ""
    })
}, [alert.findAlert]);


    const [error, setError] = useState({
        date: false,
        concept: false,
        detail: false,
        important: false,
        building: false,
    });

    const saveHandler = () => {
        if (input.concept !== "" && input.important !== "" && input.building !== "") {
            setError({
                date: false,
                concept: false,
                detail: false,
                important: false,
                building: false
            });
            setInput({
                date: date,
                concept: "",
                detail: "",
                important: "",
                building: ""
            })
            let body = {
                id: id,
                date: input.date,
                concept: input.concept,
                details: input.detail,
                building: input.building,
                importance: input.important
            }
            dispatch(putBuilding(body))
            .then(swal("Se ha modificado la alerta!", "Gracias!", "success"))
        } else {
            if (input.building === "") setError({ ...error, building: true });
            if (input.important === "") setError({ ...error, important: true });
            if (input.concept === "") setError({ ...error, concept: true });
            swal("Debe completar el concepto, la importancia y el edificio", "Por favor revise los datos!", "warning");
        }
    }

    const handleChange = (e, change) => {
        if (change !== "date") e = e.target.value;
        setInput({ ...input, [change]: e })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.cont}>
                <h1>Modificar alerta:</h1>
                <div className={styles.formCont}>
                    <form
                        className={styles.form}
                        noValidate
                        autoComplete="off"
                        onSubmit={saveHandler}
                    >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className={styles.input}
                                name="date"
                                margin="normal"
                                color="secondary"
                                id="date-picker-dialog"
                                label="Fecha"
                                format="MM/dd/yyyy"
                                value={input.date}
                                onChange={e => handleChange(e, "date")}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }} />
                        </MuiPickersUtilsProvider>
                        <TextField variant="outlined"
                            className={styles.input}
                            label="Concepto"
                            value={input.concept}
                            error={error.concept}
                            onChange={e => handleChange(e, "concept")} />
                        <TextField variant="outlined"
                            className={styles.input}
                            label="Detalles"
                            multiline
                            value={input.detail}
                            onChange={e => handleChange(e, "detail")} />
                        <TextField variant="outlined"
                            className={styles.input}
                            label="Importancia"
                            value={input.important}
                            error={error.important}
                            select
                            onChange={e => handleChange(e, "important")} >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField variant="outlined"
                            className={styles.input}
                            label="Seleccione un edificio"
                            value={input.building}
                            select
                            error={error.building}
                            onChange={e => handleChange(e, "building")} >
                            {buildings.allBuildings && buildings.allBuildings.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            className={styles.submit}
                            style={{ fontWeight: 1000 }}
                            color="secondary"
                            variant="contained"
                            onClick={saveHandler}
                        >
                            Modificar alerta
                        </Button>
                    </form>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default AlertsUpdate;