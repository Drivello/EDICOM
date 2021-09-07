import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { changeStatus, getExpenses } from "../../redux/expenses/expensesActions";
import swal from "sweetalert";


export const StatusExpenses = ({ expense }) => {

    const dispatch = useDispatch();

    // const [state, setState] = useState(expense)

    function handleChangeStatus (id) {
        const confirmMessage = swal("Vas a cambiar el estado de este pago, estás seguro?", {
            buttons: ["Cancelar", "Confirmar"],
          });

        confirmMessage.then( res => {    
            dispatch(changeStatus(id))
            .then(() => {
                dispatch(getExpenses())
            })
        })
    }


    return (
        <Button
            style={{ fontWeight: 1000 }}
            color="primary"
            variant="contained"
            name="changeStatus"
            onClick={(e) => handleChangeStatus(expense.id)}
        >
            {expense.status}
        </Button>
    )
}
