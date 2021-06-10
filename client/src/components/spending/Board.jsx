import './board.css'
import React, { useEffect } from "react";
import { Link } from 'react-router-dom' 
import { connect } from "react-redux";
import { totalSpending, filterSpending } from '../../redux/spending/actionSpending'


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
                    <th>{e.date}/></th>
                    <th>{e.concept}/></th>
                    <th>{e.details}/></th>
                    <th>{e.amount}/></th>
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
            </table>          
          </div>  
        
        </div>
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
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);


