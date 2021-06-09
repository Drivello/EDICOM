import './board.css'
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { totalSpending } from '../../redux/expenses/actionExpensesTable'


const Board = (props) => {

  //-------------------------- inicio trae del state global los gastos----------
  useEffect(() => {
    props.totalSpending()
  },[])
  //-------------------------- fin trae del state global los gastos----------

  

  //----------------------- inicio estado interno con los 3 filtros -----------

  const [input, setInput] = React.useState({
    since: '',
    upTo: '',
    concept: '', //dddddd
  })
  function handleSelect(e) { 
    setInput({...input, [e.target.name]: e.target.value})
  }
   //----------------------- fin estado interno con los 3 filtros -----------
  



  //--------------------------------------------------------------------
  if(input.concept === 'All'){
    props.filterSpend = props.totalSpend
  }

  else if(input.concept !== 'All'){
    props.filterSpend = props.totalSpend.filter(s => (s.concept === input.concept))
  }
  //--------------------------------------------------------------------
  if(input.since === ''){}

  else if(input.concept !== ''){
    props.filterSpend = props.filterSpend.filter(s => s.date >= input.since)
  }
  //--------------------------------------------------------------------
  if(input.upTo === ''){}
  
  else if(input.upTo !== 'All'){
    props.filterSpend = props.filterSpend.filter(s => s.date <= input.upTo) 
  }   

   //----------------------- fin estado interno con los 3 filtros -----------
 

    return (
        <div className="totalBoard">
          <div className="filtersBoard">
            
            since
            <select name="since" seiz="4" onChange={handleSelect}>  
              <option> </option>  
              {props.filterSpend.map(e => 
                <option>{e.date}</option>
              )}
            </select>
            
            Up to
            <select name="upTo" seiz="4" onChange={handleSelect}>  
              <option> </option>
              {props.filterSpend.map(e => 
                <option>{e.date}</option>
              )}
            </select>
            
            Concept
            <select name="concept" seiz="4" onChange={handleSelect}>
              <option> All </option>
              {props.filterSpend.map(e => 
                <option>{e.concept}</option>
              )}
            </select>
          
          </div>

          <div className="table">
            <table border="1" width="500px">
              <caption>Spendings</caption>
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Concept</th>
                  <th>Details</th>
                  <th>Amount</th>
                  <th>Edit</th>
                </tr>

                {props.filterSpend.map(e => 
                  <tr>
                    <th>{e.date}</th>
                    <th>{e.concept}</th>
                    <th>{e.details}</th>
                    <th>{e.amount}</th>
                    <th>Editar/Eliminar</th>
                  </tr>
               )}
              </tbody>
            </table>          
          </div>  
        
        </div>
    )
}


function mapStateToProps(state) {

  return {
    totalSpend: state.reducerExpensesTable.totalSpending,
    filterSpend: state.reducerExpensesTable.filterSpending
  }; 
}
  
function mapDispatchToProps(dispatch) {
  return {
    totalSpending: total => dispatch(totalSpending(total)), // me asocio a la action
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);


