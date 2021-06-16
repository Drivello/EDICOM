import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import styles from "./AlertsAdd.module.css";
import { TextField, Button } from '@material-ui/core';
import swal from "sweetalert";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from 'react-router-dom';


const AlertsAdd = (props) => {
    const date = new Date;
    const history = useHistory();

    
    const [input, setInput] = useState({
        date: date,
        time: date,
        concept: "",
        detail: "",
        important: "",
    })


    const [error, setError] = useState({
        date: false,
        time: false,
        concept: false,
        detail: false,
        important: false
    });

    const saveHandler = () => {
        if(input.concept !== "" && input.importance !== ""){
            setError({
                date: false,
                time: false,
                concept: false,
                detail: false,
                important: false
            });
            setInput({
                date: date,
                time: date,
                concept: "",
                detail: "",
                important: "",
            })

            swal("Se ha creado la alerta!", "Gracias!", "success");
            history.goBack()
        }else{
            if(input.concept === "") setError({...error, concept: true});
            if(input.importance === "") setError({...error, important: true});
            swal("Debe completar todos los campos", "Por favor revise los datos!", "warning");
        }
    }
    
    const handleChange = (e, change) => {
        if(change !== "date" && change !== "time") e = e.target.value;
        setInput({...input, [change]: e})
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.cont}>
                <h1>Crear alerta:</h1>
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
                            <KeyboardTimePicker
                                className={styles.input}
                                color="secondary"
                                name="since"
                                margin="normal"
                                label="Hora"
                                value={input.time}
                                onChange={e => handleChange(e, "time")}
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
                            value={input.detail}
                            onChange={e => handleChange(e, "detail")} />
                        <TextField variant="outlined"
                            className={styles.input}
                            label="Importancia"
                            value={input.important}
                            error={error.concept}
                            onChange={e => handleChange(e, "important")} />
                        <Button
                            className={styles.submit}
                            style={{ fontWeight: 1000 }}
                            color="secondary"
                            variant="contained"
                            onClick={saveHandler}
                        >
                            Crear alerta
                        </Button>
                    </form>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default AlertsAdd;