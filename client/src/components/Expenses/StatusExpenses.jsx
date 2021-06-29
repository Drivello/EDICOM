import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from "../../redux/expenses/expensesActions";
import swal from "sweetalert";


export const StatusExpenses = ({ expense }) => {

    const dispatch = useDispatch();

    const statusChanged = useSelector((state) => state.reducerExpenses.statusChanged);
    const [state, setState] = useState(expense)

    function handleChangeStatus (id) {
        const confirmMessage = swal("Vas a cambiar el estado de este pago, estás seguro?", {
            buttons: ["Cancelar", "Yep"],
          });

        confirmMessage.then( res => {    
            console.log(res)
            dispatch(changeStatus(id));
        })
    }


    return (
        <Button
            style={{ fontWeight: 1000 }}
            color="primary"
            variant="contained"
            name="changeStatus"
            onClick={(e) => handleChangeStatus(state.id)}
        >
            {state.status}
            {!statusChanged
            ? "Hola":
            statusChanged === state.id
            ?
            " Chau":
            " Hola"
            }
        </Button>
    )
}
