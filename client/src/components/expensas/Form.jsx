import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postExpenses} from '../../redux/expensas/actionForm';
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
    const [selectedBuild , setSelectedBuild] = useState()

    

    const newExpenses = {
        building: [],
        supplier: "",
        details: "",
        amount: ""
    }
    const [expenses, setExpenses] = useState(newExpenses);

    const handleInputChange = (e) => {
        setExpenses({
            ...expenses,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(expenses.supplier === '') return alert("supplier Field Cannot Be Empty")
        if(expenses.amount === '') return alert("Concept Field Cannot Be Empty")
        dispatch(postExpenses);
        
    }

    return (
        <div className="GeneralForm">
            <div className="divContenedor">
               
            <form onSubmit={handleSubmit}>
                <h2>Add expenses</h2>
                <h2>{expenses.createdAt}</h2>
                <p>Building <select name="building" id="building">Edificio
                <option value=""></option>
                 <option value="">Edificio 1</option>
                    <option value="">Edificio 2</option>
                    <option value="">Edificio 3</option>
                </select></p>

                <p>Supplier <input type="text" value={expenses.supplier} onChange={handleInputChange} name="supplier" placeholder="supplier" /></p>
                <p>Details <input type="text" value={expenses.detail} onChange={handleInputChange} name="details" placeholder="details"  /></p>
                <p>Amount <input type="number" value={expenses.amount} min="1" onChange={handleInputChange}  name="amount" placeholder="Amount" /></p>

                <button>Add Expenses</button>
            </form>
           
            </div>
        </div>
    )
}

export default Form
