import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {getApartmentById, updateApartment} from '../../redux/apartments/apartmentsActions'

export function EditApartmentForm(props) {

    const [apartment,setApartment] = useState({
        id: props.match.params.id,
        owner: "owner",
        contact: "contact",
        state: 0
    })

    useEffect(() => {
        props.getApartmentById(props.match.params.id)
    },[])

    useEffect(() => {
        let {owner,contact,state} = props.state.apartmentReducer.apartmentDetail;
        setApartment({...apartment,owner,contact,state})
    },[props.state.apartmentReducer.apartmentDetail])

    useEffect(() => {
        console.log("Updated State", apartment)
    },[apartment])
    

    const handleInputChange = function (e) {
        switch (e.target.name) {
            case "owner":
                setApartment({
                    ...apartment,
                    owner: e.target.value,
                })
                break;
            case "contact":
                setApartment({
                    ...apartment,
                    contact: e.target.value,
                })
                break;
        }
    }

    const handleRadio = function (e) {
        setApartment({
            ...apartment,
            state: e.target.value === "ACTIVE" ? 1 : 0,
        })
    }

    const handleSubmit = function(e){
        e.preventDefault();
        console.log(apartment)
        updateApartment(apartment);
        alert("enviado")
    }

	return (
		<>
            <h1>Departamento #{props.match.params.id}</h1>
			<form onSubmit={handleSubmit}>
                <label for="owner">
                    <span>Locatario:</span>
                    <input type="text" name="owner" value={apartment.owner} onChange={handleInputChange}/>
                </label><br/>
                <label for="contact">
                    <span>Contacto:</span>
                    <input type="text" name="contact" value={apartment.contact} onChange={handleInputChange}/>
                </label><br/>
                <label for="status">
                    <span>Estado:</span>
                    <input type="radio" name="statusRadio" value={"ACTIVE"} defaultChecked={props.state.apartmentReducer.apartmentDetail.state} onClick={handleRadio}/><span>ACTIVO</span>
                    <input type="radio" name="statusRadio" value={"UNACTIVE"} defaultChecked={!props.state.apartmentReducer.apartmentDetail.state} onClick={handleRadio}/><span>INACTIVO</span>
                </label><br/>
                <input type="submit" value="Guardar Cambios" />
            </form>
		</>
	);
};

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getApartmentById: (id) => dispatch(getApartmentById(id)),
        updateApartment: (data) => dispatch(updateApartment(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditApartmentForm)
