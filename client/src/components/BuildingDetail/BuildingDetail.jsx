import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import ApartmentList from "../ApartmentList/ApartmentList";

function BuildingDetail(props) {
    const buildingId = props.match.params.id;
    return (
        <Grid>
            <Grid>
                <ApartmentList buildingId={buildingId}/>
            </Grid>
            <Grid>
                Aca se reutiliza el componente de listado de expensas/gastos
            </Grid>
            <Grid>
                Aca se reutiliza el componente de listado de alertas
            </Grid>
            <Grid>
                Aca se reutiliza el componente de listado de amenities
            </Grid>
        </Grid>
    );
}

export default BuildingDetail;