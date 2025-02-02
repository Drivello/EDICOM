import React, { useEffect } from "react";
import {  useParams } from 'react-router-dom'
import UserExpensesDetail from './UserExpensesDetail';
import { useSelector, useDispatch } from "react-redux";
import { getExpensesApartmentNumber } from '../../redux/expenses/expensesActions';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';



const UserExpenses = (props) => {

    const { apartmentNumber, apartmentName } = useParams();
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.reducerExpenses.userExpenses);
    const currentUserData = useSelector(state => state.userReducer.userDetail);

    useEffect(() => {
        dispatch(getExpensesApartmentNumber(apartmentNumber))
        // eslint-disable-next-line
    }, [dispatch])

    if (currentUserData && (currentUserData.apartmentId === (apartmentNumber + ""))) {
        return (
            <ThemeProvider theme={theme}>
                <div className='contExtAlerts'>
                    <div className='componentHeaderAlertsList'>
                        <h1 className='contExtAlerts'>
                            Expensas del departamento {apartmentName}:
                        </h1>
                    </div>
                    <div className='contAlertsTable'>
                        <UserExpensesDetail apartment={apartmentName} expenses={expenses} />
                    </div>
                </div>
            </ThemeProvider>
        );
    } else{
        return (<ThemeProvider theme={theme}>
            <h1 className='contExtAlerts'>
                Cargando...
            </h1>
        </ThemeProvider>
        );
    }

}

export default UserExpenses;