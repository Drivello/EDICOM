import React from 'react';
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getBuildingDetail, putBuilding } from "../../redux/building/buildingActions";

function BuildingUpdate(props) {

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

    useEffect(async () => {
        let prueba = await props.getBuildingDetail(1);
        console.log(prueba)
    }, [])


    return (
        <div>
            <h2 id="header">Update your building info:</h2>
            <div id="DarkGrey">
                <h3>
                    Building: {Building.name}
                </h3>
                <div id="DetailsBox">
                    <h5>Address: {Building.address}</h5>
                    <h5>Catastral: {Building.cata}</h5>
                    <h5>Floors: {Building.floor}</h5>
                    <h5>Apartments: {Building.apartments}</h5>
                </div>
                <button>SAVE CHANGES</button>
            </div>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
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