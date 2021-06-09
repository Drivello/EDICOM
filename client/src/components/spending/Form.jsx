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
        date: "2021-03-13T16:00:00.000Z",
        building: 1,
        concept: "",
        supplier: "",
        details: "",
        amount: ""
    }
    //con este estado tomo el valor seleccionado
    const [spending, setSpending] = useState(newSpending);
    const [selectedBuild, setSelectedBuild] = useState({ buildName: [] })

    const handleSelect = () => {
        let select = document.getElementById("building");

        if (select) {
            let selectValue = select.options[select.selectedIndex].value;
            let selectedBuildName = select.options[select.selectedIndex].innerText;

            setSelectedBuild({
                ...selectedBuild,
                buildName: selectedBuild.buildName.concat(selectedBuildName)
            });
            let selectBuild = spending.bulding.concat(selectValue);
            setSpending({ ...spending, building: buildingArray })

        }
    }




    const handleInputChange = (e) => {
        setSpending({
            ...spending,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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
                    <h2>"2021-03-13T16:00:00.000Z"</h2>
                    <p>Building <select onChange={handleSelect} name="building" id="building">
                        <option value=""></option>

                        {buildingArray && buildingArray.length > 0 ? buildingArray.map((c, id) => {
                            return (
                                //tengo duda con el id
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            );
                        })
                        :""}



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
