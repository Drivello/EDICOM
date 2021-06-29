import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, MenuItem, Grid, Button, IconButton } from '@material-ui/core';
import DateFnsUtils from "@date-io/date-fns";
import {
    Domain,
    Room,
    Image,
    Receipt,
    ListAlt,
    MeetingRoom,
    PhotoCamera,
} from '@material-ui/icons';
import {
    MuiPickersUtilsProvider, KeyboardDatePicker,
} from "@material-ui/pickers";
import styles from './AddComplaints.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../themeStyleUser';
import swal from "sweetalert";
import { createComplaints } from '../../../../redux/complaints/complaintsActions';
import { getBuildings } from '../../../../redux/building/buildingActions';
import { getAllUsersForList } from '../../../../redux/users/userActions';
import { getAllApartments } from '../../../../redux/apartments/apartmentsActions';
import moment from "moment";



const UserAddComplaints = () => {

    console.log(' aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',complaints)
    //importancia
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

    //traigo edificio , usuarios y departamentos
    const { buildingArray, usersArray, allApartments } = useSelector(state => {
        return {
            buildingArray: state.buildingReducer.allBuildings,
            usersArray: state.userReducer.users,
            allApartments: state.apartmentReducer.allApartments
        };
    });

    console.log('buildingArray', buildingArray)
    console.log('usersArray', usersArray)
    console.log('allApartments', allApartments)

    //traigo los datos
    useEffect(() => {
        dispatch(getBuildings());
        dispatch(getAllUsersForList());
        dispatch(getAllApartments(1));
    }, [dispatch]);


    const { id } = useParams()

    let newComplaints = ''
    if (buildingArray && buildingArray?.length > 0 && usersArray && usersArray?.length > 0) {

        let idApartment = usersArray?.filter(a => a.apartmentId === parseInt(id))[0].apartmentId
    
        newComplaints = {
            id_Buildings: buildingArray?.filter(a => a.id === parseInt(id))[0]?.name,
            apartment: allApartments?.filter(a => a.id === parseInt(idApartment))[0].number_apartment,
            date: moment(new Date(new Date())).format("L"),
            subject: '',
            details: '',
            importance: '',
            image: '',
            id_Users: ''

        }
    }
    
    console.log(newComplaints)

    const [complaints, setComplaints] = useState(newComplaints);

    console.log('complaints',complaints)

    const history = useHistory();
    const dispatch = useDispatch();

    const handleValidationDate = (e) => {

        const date = {
            "month": [e.getMonth()],
            "year": e.getFullYear()
        }
        setComplaints({
            ...complaints,
            date: e,
        })
    }

    //tomo el valor del input
    const handleChange = (e) => {
        setComplaints({
            ...complaints,
            [e.target.name]: e.target.value,
        });
    };

    //funcion para cargar imagen
    function imgHandler(e) {
        let img = e.target.files[0];
        if (
            img.type === 'image/jpeg' ||
            img.type === 'image/jpg' ||
            img.type === 'image/png'
        ) {
            setComplaints({ ...complaints, image: img });
        } else swal("Tipo de archivo no soportado", "Los archivos solo pueden ser JPG, PNG o JPEG", "error");
    }

    //funcion para mostrar la imagen precargada
    function renderImg() {
        if (!complaints.image) return 'edificio';
        else return URL.createObjectURL(complaints.image);
    }

    //despacho accion
    const handleSubmit = (e) => {

        e.preventDefault();
        const complaintsSend = {
            date: complaints.date,
            subject: complaints.subject,
            details: complaints.details,
            importance: complaints.importance,
            image: complaints.image,
            id_Buildings: complaints.id_Buildings,
            id_Users: complaints.id_Users,

        };
        dispatch(createComplaints(complaintsSend));
        setComplaints(complaints)
        alert('anduvo')

    };


    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className={styles.contUpdateB}>
                    <h1 className='h1BuildingAddForm'>Crear edificio:</h1>
                    <form action="" className={styles.formCont}>
                        <div className={styles.form}>
                            <div className={styles.item}>
                                <Domain fontSize="large" />
                                <TextField
                                    name="name"
                                    label="Nombre del edificio"
                                    value={complaints.id_Buildings}
                                    variant="outlined"

                                />
                            </div>
                            <div className={styles.item}>
                                <Domain fontSize="large" />
                                <TextField
                                    name="apartment"
                                    label="Numero del edificio"
                                    value={complaints.apartment}
                                    variant="outlined"

                                />
                            </div>
                            <div className={styles.item}>
                                <Receipt fontSize="large" />

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        name="date"
                                        margin="normal"
                                        id="date"
                                        format="dd/MM/yyyy"
                                        value={complaints.date}
                                        onChange={(e) => {
                                            // handleInputChange(e)
                                            handleValidationDate(e)
                                        }
                                        }
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>


                            <div className={styles.item}>
                                <Receipt fontSize="large" />
                                <TextField
                                    name="subject"
                                    label="Asunto"
                                    value={complaints.subject}
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.item}>
                                <Receipt fontSize="large" />
                                <TextField
                                    name="details"
                                    label="Detalle"
                                    value={complaints.details}
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.item}>
                                <Receipt fontSize="large" />
                                <TextField
                                    name="importance"
                                    label="Importancia"
                                    value={complaints.importance}
                                    variant="outlined"
                                    onChange={e => handleChange(e, "importance")}>
                                    {
                                        currencies?.map((option) => {
                                            return (
                                                <option key={option.id} value={option.id}>
                                                    {option.value}
                                                </option>
                                            );
                                        })
                                    }


                                </TextField>

                            </div>
                            {/*  <div className={styles.item}>
                                <ListAlt fontSize="large" />
                                <TextField
                                    error={error.floor}
                                    helperText={warning.floor}
                                    name="floor"
                                    label="Pisos"
                                    value={buildingData.floor}
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </div> */}
                            {/*  <div className={styles.item}>
                                <MeetingRoom fontSize="large" />
                                <TextField
                                    error={error.cant_apartments}
                                    helperText={warning.cant_apartments}
                                    name="cant_apartments"
                                    label="Departamentos"
                                    value={buildingData.cant_apartments}
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </div> */}
                        </div>
                        <div className={styles.right}>
                            <div className={styles.item}>
                                <img
                                    className={styles.img}
                                    alt="Building pic"
                                    src={renderImg()}
                                />
                                <IconButton color="primary" variant="contained" component="label">
                                    <PhotoCamera style={{ fontSize: 40, marginLeft: 5 }} />
                                    <input
                                        onChange={imgHandler}
                                        name="image"
                                        type="file"
                                        label="Foto"
                                        accept="image/png, image/jpeg"
                                        hidden
                                    />
                                </IconButton>
                            </div>
                            <div className={styles.guardarCambios}>
                                <Button variant="contained" color="secondary" onClick={handleSubmit} style={{ fontWeight: 1000 }}>
                                    Confirmar
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </ThemeProvider>
            );


        </div>
    )
}

export default UserAddComplaints
