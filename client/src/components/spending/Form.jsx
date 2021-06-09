import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSpending } from '../../redux/spending/actionSpending';
import { getBuildings } from '../../redux/building/buildingActions';
import "./form.css"
import Sidebar from "../Sidebar/Sidebar";

const Form = () => {

    const dispatch = useDispatch();
    //tendria que traer con un use selector el listado de edificios y con un use effect ejecutarlo

    const buildingArray = useSelector(
        (state) => state.buildingReducer.allBuildings// revisar cuando haga pull el nombre del reducer
    );


    console.log("Building Array", buildingArray)

    useEffect(() => {
        dispatch(getBuildings());
    }, []);

    const newSpending = {
        date: "",
        building: 0,
        concept: "",
        supplier: "",
        details: "",
        amount: 0
    }
    //con este estado tomo el valor seleccionado
    const [spending, setSpending] = useState(newSpending);
    const [selectedBuild, setSelectedBuild] = useState({ id: [] })

    const handleSelect = (e) => {
        let select = document.getElementById("building");

        if (select) {
            let selectValue = select.options[select.selectedIndex].value;
            let selectedBuildName = select.options[select.selectedIndex].innerText;
            console.log(selectedBuildName);
            setSelectedBuild({
                ...selectedBuild,
                name: selectedBuild.id.concat(selectedBuildName)

            });
            /*  let selectBuild = spending.bulding.push(selectValue); */
            setSpending({ ...spending, building: parseInt(selectValue) })

        }
    }
    console.log("guardo", spending)




    const handleInputChange = (e) => {
        if (e.target.name === "amount") {
            setSpending({
                ...spending,
                [e.target.name]: parseInt(e.target.value),
            });
        } else {

            setSpending({
                ...spending,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handelsubmit", spending)
        if (spending.supplier === '') return alert("supplier Field Cannot Be Empty")
        if (spending.amount === '') return alert("Concept Field Cannot Be Empty")
        dispatch(postSpending(spending));
        alert("Anduvo")

    }

    return (
        <div className="GeneralForm">
            <div className="divContenedor">

                <form onSubmit={handleSubmit}>
                    <h2>Add spending</h2>
                    <input type="date" id="date" name="date"
                        onChange={(e) => setSpending({ ...spending, date: new Date(e.target.value) })}

                    />

                    <p>Building <select onChange={handleSelect} name="building" id="building">
                        <option>Select Building</option>

                        {buildingArray && buildingArray.length > 0 ? buildingArray.map((c, id) => {
                            return (
                                //tengo duda con el id
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            );
                        })
                            : ""}



                    </select></p>
                    <p>Concept <input type="text" value={spending.concept} onChange={handleInputChange} name="concept" placeholder="Concept" /></p>
                    <p>Supplier <input type="text" value={spending.supplier} onChange={handleInputChange} name="supplier" placeholder="supplier" /></p>
                    <p>Details <input type="text" value={spending.detail} onChange={handleInputChange} name="details" placeholder="details" /></p>
                    <p>Amount <input type="number" value={spending.amount} min="1" onChange={handleInputChange} name="amount" placeholder="Amount" /></p>

                    <button type="submit" >Add spending</button>
                </form>

            </div>
        </div>
    )
}

export default Form
