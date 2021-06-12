import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getBuildings } from '../../redux/building/buildingActions';
import BuildingsTable from '../BuildingsTable/BuildingsTable';
import { Container, Typography, Button } from '@material-ui/core';

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
                <Link to="/buildingadd">
                    <Button variant="contained" color="primary">
                        Crear nuevo
                    </Button>
                </Link>
            </div>
            <BuildingsTable data={buildings} />
        </Container>
    );
}

export default Buildings;