import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBuildingDetail, putBuilding } from "../../redux/building/buildingActions";
import { useParams } from "react-router-dom";

function BuildingUpdate(props) {
    const { id } = useParams();
    const Build = useSelector(state => state.buildingReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuildingDetail(id))
        .then(console.log(Build.detailBuilding))
    }, [])

    const [editMode, setEditMode] = useState({
        name: false,
        address: false,
        cata: false,
        floor:  false,
        apartments: false
    });
    
    const Building = {
        cata:"",
        floor:"",
        apartments:"",
        name:"",
        address:""
    }
    
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    
    const [input, setInput] = useState({
        name: Building.name,
        cata: Building.cata,
        floor: Building.floor,
        apartments: Building.apartments,
        address: Building.address,
    });

    const inputHandler = (change, text) =>{
        setInput({
            ...input,
            [change]: text
        })
    }

    const editModestatus = (change) => {
        if(!editMode[change]){
            if(Building && input[change] === Building[change]){
                return <h5>{capitalize(change)}: {Build.detailBuilding[0] && Build.detailBuilding[0][change.toLowerCase()]}</h5>
            }else{
                return <h5>{capitalize(change)}: {input[change]}</h5>
            }
        }else{
            return <input placeholder={capitalize(change)} onChange={(e) => inputHandler(change, e.target.value)} value={input[change]}></input>
        }
    }

    const changeModeStatus = (e) => {
        const toChange = e.target.name;
        setEditMode({
            ...editMode,
            [toChange]: !editMode[toChange],
        });
    }

    const saveHandler = () => {
        dispatch(getBuildingDetail(id))
        setInput({
            name: Building.name,
            cata: Building.cata,
            floor: Building.floor,
            apartments: Building.apartments,
            address: Building.address,
        })
        console.log({
                id: id,
                cata: input.cata || Build.detailBuilding[0].cata,
                floor: input.floor || Build.detailBuilding[0].floor,
                apartments: input.apartments || Build.detailBuilding[0].apartments,
                name: input.name || Build.detailBuilding[0].name,
                address: input.address || Build.detailBuilding[0].address
        })
    }

    return (
        <div>
            <h2 id="header">Update your building info:</h2>
            <div id="DarkGrey">
                <div>
                    {editModestatus("name")}
                <button name="name" onClick={changeModeStatus}>EDIT</button>
                </div>
                <div id="DetailsBox">
                    <div>
                    {editModestatus("address")}
                    <button name="address" onClick={changeModeStatus}>EDIT</button>
                    </div>
                    <div>
                    {editModestatus("cata")}
                    <button name="cata" onClick={changeModeStatus}>EDIT</button>
                    </div>
                    <div>
                    {editModestatus("floor")}
                    <button name="floor" onClick={changeModeStatus}>EDIT</button>
                    </div>
                    <div>
                    {editModestatus("apartments")}
                    <button name="apartments" onClick={changeModeStatus}>EDIT</button>
                    </div>
                </div>
                <button onClick={saveHandler} >SAVE CHANGES</button>
            </div>
        </div>
    );
}


export default BuildingUpdate