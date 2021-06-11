import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getBuildings } from '../../redux/building/buildingActions';
import BuildingsTable from '../BuildingsTable/BuildingsTable';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Buildings() {
    const buildings = useSelector(state => state.buildingReducer.allBuildings); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuildings());
    }, [])

    return (
        <Container>
            <div className="componentHeader">
                <Typography variant="h2" className="componentHeading1">
                    Todos los edificios
                </Typography>
                <Button variant="contained" color="primary" href="/buildingadd">
                    Crear nuevo
                </Button>
            </div>
            <BuildingsTable data={buildings} />
        </Container>
    );
}

export default Buildings;