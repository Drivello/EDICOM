import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';

export default function PopUp(props) {

    return (props.display) ? (
        <ThemeProvider theme={theme}>
        <div className= 'popUpAlert'>
            <div className = 'popup-inner'>
            <div className = 'btnX'>
            <input className='XinputBtn' type="button"  value="X" onClick={() => props.setDisplay(false)} />
            </div>
            <div className= 'contExtDetailAlert'>
                <h2>
                    {props.alertProps.title}
                </h2>
                <h4>
                {props.alertProps.detail}
                </h4>
                <h5>
                    Importancia: {props.alertProps.importance}
                </h5>
                <h4>
                Fecha: {props.alertProps.date}
                </h4>
                <h4>
                Edificio: {props.alertProps.building}
                </h4>
                <h4>
                Estado: {props.alertProps.state}
                </h4>
                {
                    props.user ? "" : <Link to={`/alertsUpdate/${props.alertProps.id}`}>                    
                    <Button style={{ fontWeight: 1000 }} variant="contained" color="secondary" size="small" >
                        Cerrar Reclamo
                    </Button>
                    <Button style={{ fontWeight: 1000 }} variant="contained" color="secondary" size="small" >
                        Abrir Reclamo
                    </Button>
                    </Link>
                }
                
            </div>
            </div>
        </div>
        </ThemeProvider>
    ): "";
}