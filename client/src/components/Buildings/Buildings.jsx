import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBuildings } from '../../redux/building/buildingActions';
import BuildingsTable from '../BuildingsTable/BuildingsTable';
import { Container, Button } from '@material-ui/core';
import styles from "./Buildings.module.css";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';

function Buildings() {
    const buildings = useSelector(state => state.buildingReducer.allBuildings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuildings());
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Container style={{display: "flex", flexDirection: "column", justifyContent: "center",  marginLeft: "35px"}}>
                <div className={styles.componentHeaderBL}>
                    <h1 className="buildingHeader">
                        Todos los edificios
                    </h1>
                    <Link to="/buildingadd" className="buildingButton">
                        <Button variant="contained" color="secondary" style={{ marginBottom: '20px', fontWeight: 1000 }}>
                            Crear nuevo
                        </Button>
                    </Link>
                </div>
                <BuildingsTable data={buildings} />
            </Container>
        </ThemeProvider>
    );
}

export default Buildings;