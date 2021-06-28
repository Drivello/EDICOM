import React , { useEffect }from "react";
import { Link, useParams } from 'react-router-dom'
import { Button } from '@material-ui/core';
import UserExpensesDetail from './UserExpensesDetail';
import { useSelector, useDispatch } from "react-redux";
import { getExpensesApartmentNumber } from '../../redux/expenses/expensesActions';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import AddIcon from '@material-ui/icons/Add';

const UserExpenses = (props) => {

    const { apartmentNumber , apartmentName} = useParams();
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.reducerExpenses.userExpenses)

    useEffect(() => {
        dispatch(getExpensesApartmentNumber(apartmentNumber))
    }, [dispatch])

    return (
        <ThemeProvider theme={theme}>
            <div className='contExtAlerts'>
                <div className='componentHeaderAlertsList'>
                    <h1 className='contExtAlerts'>
                        Expensas del departamento {apartmentName}:
                    </h1>
                </div>
                <div className='contAlertsTable'>
                    <UserExpensesDetail expenses={expenses} />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default UserExpenses;