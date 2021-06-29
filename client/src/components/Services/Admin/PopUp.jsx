import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getServices, putService, deleteService } from '../../../redux/services/servicesAction';
import styles from "./Styles.module.css";

export default function PopUp(props) {

    const buildings = useSelector(state => state.buildingReducer.allBuildings);
    const dispatch = useDispatch();
    const setPop = props.setPop

    const handleOpen = () => {
        dispatch(putService({id: props.alertProps.id}))
        setTimeout(()=>{
            dispatch(getServices())
            setPop(false)
        }, 2000)
    }

    const handleClose = () => {
        dispatch(deleteService(props.alertProps.id))
        setTimeout(()=>{
            dispatch(getServices())
            setPop(false)
        }, 2000)
    }

    return (props.display) ? (
        <ThemeProvider theme={theme}>
            <div className='popUpAlert'>
                <div className='popup-inner'>
                    <div className='btnX'>
                        <input className='XinputBtn' type="button" value="X" onClick={() => props.setDisplay(false)} />
                    </div>
                    <div className='contExtDetailAlert'>
                        <h2>
                            {props.alertProps.title}
                        </h2>
                        <h4>
                            {props.alertProps.detail}
                        </h4>
                        <h4>
                            Proveedor: {props.alertProps.provider}
                        </h4>
                        <h4>
                            Matricula: {props.alertProps.enrollment || 'no aplica'}
                        </h4>
                        <h4>
                            Contacto: {props.alertProps.contact}
                        </h4>
                        <h4>
                            Fecha: {props.alertProps.date}
                        </h4>
                        <h4>
                            Edificio: {props.alertProps.building}
                        </h4>
                        <h4>
                            Estado: {props.alertProps.state}
                        </h4>
                        <Button id={styles.button} onClick={handleOpen} style={{ fontWeight: 1000 }} variant="contained" color="secondary" size="small" >
                            Aceptar
                        </Button>
                        <Button id={styles.button} onClick={handleClose} style={{ fontWeight: 1000 }} variant="contained" color="secondary" size="small" >
                            Eliminar
                        </Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    ) : "";
}