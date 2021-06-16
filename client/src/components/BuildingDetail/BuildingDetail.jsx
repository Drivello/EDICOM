import React from "react";

import { Grid } from '@material-ui/core';
import ApartmentList from "../ApartmentList/ApartmentList";
import BSChart from "./BSChart";
import './BuildingDetail.css';

function BuildingDetail(props) {
    const buildingId = props.match.params.id;
    return (
        <div className='contExtBD'>
            <div>
                <ApartmentList buildingId={buildingId}/>
            </div>
            <div className= 'contChar'>
                <BSChart buildingId={buildingId}/>
            </div>
        </div>
    );
}

export default BuildingDetail;