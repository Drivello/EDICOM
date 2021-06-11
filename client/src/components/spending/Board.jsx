import './board.css'
import React, { useEffect } from "react";
import { Link } from 'react-router-dom' 
import { connect } from "react-redux";
import { totalSpending, filterSpending, deleteSpending   } from '../../redux/spending/actionSpending'
import { Container, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';



//--------------------------- Creando estructura de la tabla ------------------------

const columns = [
  {field: 'id', headerName: 'ID', flex: 1.5},
  {field: 'date', headerName: 'Fecha', flex: 3},
  {field: 'concept', headerName: 'Concepto', flex: 3},
  {field: 'details', headerName: 'Detalle', flex: 5},
  {field: 'amount', headerName: 'Importe', flex: 3},
  {field: 'edit', headerName: 'Editar - Eliminar', flex: 3},
]



const Board = (props) => {
  
  
  const spendings = props.filterSpend.map((spending, index)=> {
    return {
      id: index,
      date: spending.date,
      concept: spending.concept,
      details: spending.details,
      amount: spending.amount,
      edit: <Link to={__dirname + `board/1/edit` }>
                Editar/Eliminar 
            </Link>,
    }
  })


  //-------------------------- inicio trae del state global los gastos----------
  useEffect(() => {
    props.totalSpending()
  },[])
  //-------------------------- fin trae del state global los gastos----------


  //----------------------- inicio estado interno con los 3 filtros -----------

  const [input, setInput] = React.useState({
    since: '',
    upTo: '',
    concept: '',
  })
  
  function handleSelect(e) { 
    setInput({...input, [e.target.name]: e.target.value})
  }
  
  function handleSubmit(e) { 
    props.filterSpending(input)
  }


  
  const date = new Date()
  

    return (
      <Container>
        <div className="totalBoard">
          <div className="filtersBoard">
            
            since
            <select name="since" seiz="4" onChange={handleSelect}>  
              <option> 1/1/1950 </option>
              {props.totalSpend && props.totalSpend.map(e => 
                <option>{e.date}</option>
              )}
            </select>
            
            Up to
            <select name="upTo" seiz="4" onChange={handleSelect}>  
              <option>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</option>                
              {props.totalSpend.map(e => 
                <option>{e.date}</option>
              )}
            </select>
            
            Concept
            <select name="concept" seiz="4" onChange={handleSelect}>
              <option> All </option>
              {props.totalSpend.map(e => 
                <option>{e.concept}</option>
              )}
            </select>

            <p><input type="submit" value="Find" onClick={handleSubmit} /></p>
          
          </div>

          <div className="table">
            <Typography variant="h2" className="componentHeading1">Spendings</Typography>

            
            <div style={{height: 400, width: '100%'}}>
              <div style={{display: 'flex', height: '100%'}}>
                  <DataGrid rows={spendings} columns={columns} pageSize={5} />
              </div>
            </div>

            {/* <table border="1" width="500px">
              <tbody>
                <tr>
                  <th>Fecha</th>
                  <th>Concepto</th>
                  <th>Detalle</th>
                  <th>Monto</th>
                  <th>Editar</th>
                </tr>

                {props.filterSpend.map(e => 
                  <tr>
                    <th>{e.date}</th>
                    <th>{e.concept}</th>
                    <th>{e.details}</th>
                    <th>{e.amount}</th>
                    <th>
                      <Link to={__dirname + `board/1/edit` }>
                        <button type="button">
                          Editar/Eliminar 
                        </button>
                      </Link>
                    </th>
                  </tr>
               )}
              </tbody>
            </table>           */}
          </div>  
        
        </div>
        </Container>
    )
}


function mapStateToProps(state) {

  return {
    totalSpend: state.reducerSpending.totalSpending,
    filterSpend: state.reducerSpending.filterSpending
  }; 
}
  
function mapDispatchToProps(dispatch) {
  return {
    totalSpending: total => dispatch(totalSpending(total)), // me asocio a la action
    filterSpending: filter => dispatch(filterSpending(filter)),
    deleteSpending: del => dispatch(deleteSpending(del)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);


