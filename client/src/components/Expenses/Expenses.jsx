import React, { useEffect, useState } from "react";
import { getExpenses } from "../../redux/expenses/expensesActions";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import styles from "../Spending/board.module.css"         //AGREGAR UN CSS PROPIO DE ESTE COMPONENTE!
import ExpensesDetail from './ExpensesDetail'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";



//------------------------ MATERIAL UI




function createApartment(id, cata_apartment, number_apartment, mt2, state, expenses) {
  return {
      id,
      cata_apartment,
      number_apartment,
      mt2,
      state,
      expenses: expenses.map( (expensa) => {
         return expensa
      })
  };
}



export default function ExpensesTable() {
   
   
   const dispatch = useDispatch();

   
   // No se si anda
   /*  const apartamentArray = useSelector((state) => state.apartmentsReducer); */
   const expensesArray = useSelector((state) => state.reducerExpenses.expensesArray);
   const filterBuildings = useSelector((state) => state.buildingReducer.allBuildings)
   
   console.log("expensesArray", expensesArray)
   console.log("allBuildings", allBuildings)



   useEffect(() => {
      dispatch(getExpenses());
   }, [dispatch]);

   // ----------------------seleccion del edificio--------------------------

   const [building, setBuilding] = useState({
      building: "All",
      apartment: "All"
   });

   console.log("buildingID", building)

   function handleSelectBuilding (e){
      setBuilding({ ...building, [e.target.name]: e.target.value })
      
      // console.log("buildingName", buildingName)
      // if(buildingName!=="All"){
      //    var buildingId = allBuildings.filter(building => building.name === buildingName)[0].id
      //    setBuilding(buildingId)
      // }
      // else{
      //    setBuilding("All")
      // }
   }
   function handleSelectApartment (e){
      if(building.building==="All"){alert("No se puede elegir departamento sin selecciona edificio")}
   }


   // let arrFinal = []
   // expensesArray.map((apartment) => apartment.Expenses.map((a) => arrFinal.push(a)))
   console.log("expensesArray", expensesArray)
   
   var buildingArray = []

   if(building === "All" || building === ""){
      buildingArray = expensesArray
   }
   else{
      buildingArray = expensesArray.filter(expense => expense.buildingId === building)
   }


   const rows = buildingArray.map( (apartment) => {

      return createApartment(apartment.id, 
         apartment.cata_apartment, 
         apartment.number_apartment, 
         apartment.mt2, 
         apartment.state,
         apartment.Expenses
         )
   })

  return (
   <ThemeProvider theme={theme}>
   <div className={styles.header}>
      <h1>Expensas</h1>


      <FormControl style={{ width: "200px" }}>
         <InputLabel id="demo-controlled-open-select-label">
            Edificio
         </InputLabel>
         <Select  onChange={handleSelectBuilding}>
            <MenuItem value="All">
               <em>All</em>
            </MenuItem>

            {allBuildings.map((building, index) => (
               <MenuItem
                  value={building.name}
                  key={index}
               >
                  {building.name}
               </MenuItem>
            ))}
         </Select>
      </FormControl>


      <FormControl style={{ width: "200px" }}>
         <InputLabel id="demo-controlled-open-select-label">
            Departamento
         </InputLabel>
         <Select onChange={handleSelectApartment}>
            <MenuItem value="All">
               <em>All</em>
            </MenuItem>

            {allBuildings.map((apartment, index) => (
               <MenuItem
                  value={building.number_apartment}
                  key={index}
               >
                  {building.number_apartment}
               </MenuItem>
            ))}
         </Select>
      </FormControl>

      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
         <TableHead>
            <TableRow>
               <TableCell />
               <TableCell>Id</TableCell>
               <TableCell align="right">Nº&nbsp;Catastral</TableCell>
               <TableCell align="right">Nº&nbsp;Dpto</TableCell>
               <TableCell align="right">Mt2</TableCell>
               <TableCell align="right">State</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {rows.map((apartment) => (
            <ExpensesDetail key={apartment.id} row={apartment} />
            ))}
         </TableBody>
      </Table>
      </TableContainer>
      </div>
    </ThemeProvider>
  );
}