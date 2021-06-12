import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

function BuildingDetail(props) {
    const buildingId = props.match.params.id;
    return (
        <Grid>
            <Grid>
                Aca se reutiliza el componente de listado de departamentos
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