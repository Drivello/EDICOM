import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import { TextField, Button } from '@material-ui/core';
import swal from "sweetalert";
import { useHistory } from 'react-router-dom';
import { postService } from '../../redux/services/servicesAction';
import { numeroPositivoEntero, correoElectronico } from '../../utils/validations';
import './Services.css';


const ServiceForm = (props) => {
    const history = useHistory();
    const dispatch = useDispatch(); //dispatch setup
    const buildingId = props.match.params.buildingId


    const [input, setInput] = useState({
        title: "",
        provider: "",
        enrollment: "",
        contact: "",
        detail: "",
    })


    const [error, setError] = useState({
        title: false,
        provider: false,
        detail: false,
        enrollment: false,
        contact: false,
    });

    const saveHandler = () => {
        if (input.title !== "" && input.provider !== "" && input.contact !== "" && (numeroPositivoEntero(input.enrollment) || input.enrollment === "") && (numeroPositivoEntero(input.contact) || correoElectronico(input.contact))) {
            setError({
                title: false,
                provider: false,
                detail: false,
                enrollment: false,
                contact: false,
            });
            setInput({
                title: "",
                provider: "",
                enrollment: null,
                contact: null,
                detail: "",
            })
            let body = {
                title: input.title,
                provider: input.provider,
                enrollment: input.enrollment,
                contact: input.contact,
                detail: input.detail,
                buildingId: buildingId
            }
            dispatch(postService(body))
            swal("Hemos enviado tu solicitud a la administración. Una vez que el administrador apruebe tu solicitud la verás en la página disponible para puntuar.", "Gracias!", "success")
            history.goBack()
                
        } else {
            if (input.title === "" || input.provider === "" || input.contact === "") {
                setError({title: true,
                    provider: true,
                    detail: false,
                    enrollment: false,
                    contact: true,});
                return swal("Debe completar el título, el proveedor y el contacto", "Por favor revise los datos!", "warning");
            }
            if(!numeroPositivoEntero(input.enrollment)){
                setError({title: false,
                    provider: false,
                    detail: false,
                    enrollment: true,
                    contact: false,});
                return swal("El campo ingresado en matricula debe ser un número", "Por favor revise los datos!", "warning");
            } 
            if(!numeroPositivoEntero(input.contact) && !correoElectronico(input.contact)) {
                setError({ title: false,
                    provider: false,
                    detail: false,
                    enrollment: false,
                    contact: true,});
                return swal("El campo ingresado en contacto debe ser un número o un email", "Por favor revise los datos!", "warning");
            }
        }
    }

    const handleChange = (e, change) => {
        if (change !== "date") e = e.target.value;
        setInput({ ...input, [change]: e })
    }

    const cancelHandler = () => {
		history.goBack()
	}

    return (
        <ThemeProvider theme={theme}>
            <div className= 'contExtServiceForm'>
                <h1>Postear Servicio Util:</h1>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={saveHandler}
                >
                    <div className='contIntServiceForm'>
                        <div className='rigthServiceForm'>
                            <div>
                            <TextField variant="outlined"
                                style={{margin: 10, width: 300}}
                                label="Título"
                                value={input.title}
                                error={error.title}
                                onChange={e => handleChange(e, "title")} />
                            </div>
                            <div>
                            <TextField variant="outlined"
                                style={{margin: 10, width: 300}}
                                label="Proveedor"
                                //multiline
                                value={input.provider}
                                error={error.provider}
                                onChange={e => handleChange(e, "provider")} />
                            </div>
                        </div>
                        <div >
                            <div>
                                <TextField variant="outlined"
                                    style={{margin: 10, width: 300}}
                                    label="Matrícula"
                                    value={input.enrollment}
                                    error={error.enrollment}
                                    onChange={e => handleChange(e, "enrollment")} />
                            </div>
                            <div>
                                <TextField variant="outlined"
                                    style={{margin: 10, width: 300}}
                                    label="Contacto"
                                    value={input.contact}
                                    error={error.contact}
                                    onChange={e => handleChange(e, "contact")} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <TextField variant="outlined"
                            style={{margin: 10, width: 620}}
                            label="Detalle"
                            multiline
                            value={input.detail}
                            onChange={e => handleChange(e, "detail")} />
                    </div>
                    <div className='btnLineServiceForm'>
                    <Button
                        style={{ fontWeight: 1000, marginRight: 50 }}
                        color="secondary"
                        variant="contained"
                        onClick={saveHandler}
                    >
                        Postear Servicio
                    </Button>
                    <Button 
                        style={{ fontWeight: 1000}}
                        color="secondary"
                        variant="contained"
                        onClick={cancelHandler}
                    >
                        Cancelar
                    </Button>
                    </div>
                </form>
            </div>
        </ThemeProvider>
    );
}

export default ServiceForm;