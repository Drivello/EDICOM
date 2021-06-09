import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {getApartmentById, updateApartment} from '../../redux/apartments/apartmentsActions'

export function EditApartmentForm(props) {
    const [apartment,setApartment] = useState({
        owner: props.state.apartmentReducer.apartmentDetail.owner ? props.state.apartmentReducer.apartmentDetail.owner : "owner",
        contact: props.state.apartmentReducer.apartmentDetail.contact ? props.state.apartmentReducer.apartmentDetail.contact : "contact",
        state: props.state.apartmentReducer.apartmentDetail.state ? props.state.apartmentReducer.apartmentDetail.state : 0
    })

    useEffect(() => {
        props.getApartmentById(props.match.params.id)
    },[])

    useEffect(() => {
        setApartment(props.state.apartmentReducer.apartmentDetail)
        console.log("Apartment Detail: ",props.state.apartmentReducer.apartmentDetail)
    },[props.state.apartmentReducer.apartmentDetail])

    

    const handleInputChange = function (e) {
        switch (e.target.name) {
            case "owner":
                console.log('handle owner',e.target.value)
                setApartment({
                    ...apartment,
                    owner: e.target.value,
                })
                break;
            case "contact":
                console.log('handle contact',e.target.value)
                setApartment({
                    ...apartment,
                    contact: e.target.value,
                })
                break;
        }
    }

    const handleRadio = function (e) {
        // e.preventDefault();
        // console.log('handle radio',e)
        // const type = e.target[0].checked? e.target[0].value : e.target[1].value;
        // type === 1 ? 
        // setApartment({
        //     ...apartment,
        //     state: e.target.value,
        // }) : 
        // setApartment({
        //     ...apartment,
        //     state: e.target.value,
        // })
    }

    const handleSubmit = function(e){
        e.preventDefault();
        updateApartment(props.match.params.id,apartment);
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
                    <input type="radio" name="statusRadio" value={1} defaultChecked={apartment.state === 1} onChange={handleRadio}/><span>ACTIVO</span>
                    <input type="radio" name="statusRadio" value={0} defaultChecked={apartment.state === 0} onChange={handleRadio}/><span>INACTIVO</span>
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
        updateApartment: (id,data) => dispatch(updateApartment(id,data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditApartmentForm)
