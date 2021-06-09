import React from 'react';
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getBuildingDetail, putBuilding } from "../../redux/building/buildingActions";

function BuildingUpdate(props) {
    const initialState = {
        Name: false,
        Address: false,
        Catastral: false,
        Floors:  false,
        Apartments: false
    }

    const [editMode, setEditMode] = useState(initialState);

    const Building = {
        id:1,
        cata:"12453",
        floor:"2",
        apartments:"3",
        name:"Building1",
        address:"Street 123",
        createdAt:"2021-06-08T18:42:58.276Z",
        updatedAt:"2021-06-08T18:42:58.276Z"
    }
/* 
    useEffect(async () => {
        let prueba = await props.getBuildingDetail(1);
        console.log(prueba)
    }, []) */

    const editModestatus = (change) => {
        if(!editMode[change]){
            return <h5>{change}: {Building[change.toLowerCase()]}</h5>
        }else{
            return <input value={Building[change.toLowerCase()]}></input>
        }
    }

    const changeModeStatus = (e) => {
        const toChange = e.target.id;
        console.log(Object.assign(editMode, editMode[toChange] = !editMode[toChange]))
        setEditMode(Object.assign(editMode, editMode[toChange] = editMode[toChange]))
    }

    return (
        <div>
            <h2 id="header">Update your building info:</h2>
            <div id="DarkGrey">
                <div>
                    {editModestatus("Name")}
                    <h3>Resultado: {"" + editMode.Name}</h3>
                <button id="Name" onClick={changeModeStatus}>EDIT</button>
                </div>
                <div id="DetailsBox">
                    <div>
                    <h5>Address: {Building.address}</h5>
                    <button>EDIT</button>
                    </div>
                    <div>
                    <h5>Catastral: {Building.cata}</h5>
                    <button>EDIT</button>
                    </div>
                    <div>
                    <h5>Floors: {Building.floor}</h5>
                    <button>EDIT</button>
                    </div>
                    <div>
                    <h5>Apartments: {Building.apartments}</h5>
                    <button>EDIT</button>
                    </div>
                </div>
                <button>SAVE CHANGES</button>
            </div>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        detailBuilding: state.detailBuilding
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBuildingDetail: (id) => dispatch(getBuildingDetail(id)),
        putBuilding: (body) => dispatch(putBuilding(body)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(BuildingUpdate);