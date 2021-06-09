import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {postSpending} from '../../redux/spending/actionSpending';
import "./form.css"

const Form = () => {

    const dispatch = useDispatch();
    //tendria que traer con un use selector el listado de edificios y con un use effect ejecutarlo

    // const buildingArray = useSelector(
    //     (state) => state.buildingReducer // revisar cuando haga pull el nombre del reducer
    // );


    useEffect(() => {
    //   dispatch(//action del listado de edificios)
    }, []);

    //con este estado tomo el valor seleccionado
    // const [selectedBuild , setSelectedBuild] = useState()



    const newSpending = {
        date: "2021-03-13T16:00:00.000Z",
        building: 1,
        concept: "",
        supplier: "",
        details: "",
        amount: ""
    }
    const [spending, setSpending] = useState(newSpending);

    const handleInputChange = (e) => {
        setSpending({
            ...spending,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(spending.supplier === '') return alert("supplier Field Cannot Be Empty")
        if(spending.amount === '') return alert("Concept Field Cannot Be Empty")
        dispatch(postSpending(spending));
        alert("Anduvo")
        
    }

    return (
        <div className="GeneralForm">
            <div className="divContenedor">
               
            <form onSubmit={handleSubmit}>
                <h2>Add spending</h2>
                <h2>"2021-03-13T16:00:00.000Z"</h2>
                <p>Building <select name="building" id="building">Edificio
                <option value=""></option>
                 <option value="">Edificio 1</option>
                    <option value="">Edificio 2</option>
                    <option value="">Edificio 3</option>
                </select></p>
                <p>Concept <input type="text" value={spending.concept} onChange={handleInputChange} name="concept" placeholder="Concept" /></p>
                <p>Supplier <input type="text" value={spending.supplier} onChange={handleInputChange} name="supplier" placeholder="supplier" /></p>
                <p>Details <input type="text" value={spending.detail} onChange={handleInputChange} name="details" placeholder="details"  /></p>
                <p>Amount <input type="number" value={spending.amount} min="1" onChange={handleInputChange}  name="amount" placeholder="Amount" /></p>

                <button type="submit" >Add spending</button>
            </form>
           
            </div>
        </div>
    )
}

export default Form
