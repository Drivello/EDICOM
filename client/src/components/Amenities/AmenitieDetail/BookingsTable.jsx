import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
   Button,
   Grid,
   InputLabel,
   MenuItem,
   FormControl,
   Select,
} from "@material-ui/core";
import { getAmenityById } from "../../../redux/amenities/amenitiesActions";
import { getBookingByAmenity, filterBookingsByGroup} from "../../../redux/booking/bookingActions";
import { DataGrid } from "@material-ui/data-grid";
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import filter from "../../../utils/filter-remove.png";
import PopUp from "./PopUp";
import styles from "./Styles.module.css";

function BookingsTable(props) {

   console.log("estoy renderizando bookingTable")
   const dispatch = useDispatch();

   console.log(props.amenitieId, "TABLE");

   const allComplaints = useSelector(state => state.bookingReducer.bookingDetail)


   useEffect(() => {
      dispatch(getBookingByAmenity(props.amenitieId))
   }, [dispatch])

   const complaints = allComplaints?.map((booking) => {
      let stateSpanish;
      if (booking.status === "free") stateSpanish = "Libre";
      if (booking.status === "cancelled") stateSpanish = "Cancelado";
      if (booking.status === "booked") stateSpanish = "Reservado";
      return {
         id: booking.id,
         start: moment(booking.start).format("DD/MM/YYYY -- h:mm"),
         date: moment(booking.finish).format("DD/MM/YYYY -- h:mm"),
         state: stateSpanish,
      };
   });

   const [filter, setFilter] = useState("hour");



   const columns = [
      { field: "id", headerName: "ID", flex: 1.5, hide: true },
      { field: "start", headerName: "Comienzo", flex: 1 },
      { field: "date", headerName: "Fin", flex: 1 },
      {
         field: "state", headerName: "Estado", flex: 1,
         renderCell: params => {
            console.log(params, "rows")
            return (
               <Link onClick={(e) => handleEventClick(e, params.row)}>
                  {params.row.state}
               </Link>
            );
         },
      },
   ];

   const [displayPopUp, setDisplayPopUp] = useState(false);
   const [alertProps, setAlertProps] = useState({});

   const handleEventClick = (clickInfo, data) => {
      setAlertProps({
         id: data.id,
         title: data.concept,
         amenity: props.amenitieId,
         state: data.state,
         start: data.start,
         date: data.date,
         state: data.state,
      });
      setDisplayPopUp(true);
   };

   const useStyles = makeStyles((theme) => ({
      root: {
         flexGrow: 1,
      },
      paper: {
         padding: theme.spacing(1),
         textAlign: "center",
         color: theme.palette.text.secondary,
      },
   }));


   function handleSelectFilter(e) {

      /* var buildingId = ""

      if(e.target.value!=="All"){
         buildingId = allBuildings.filter(building => building.name === e.target.value)[0].id
      }
      else{
         buildingId = "All"
      }
      setBuilding({ ...building, [e.target.name]: buildingId }) */
      // dispatch(filterExpenses(building))

      console.log(e.target.value)

      if(e.target.value === "All"){
         setFilter("All");
      }else if(e.target.value === "Hour"){
         setFilter("Hour");
      }else{
         setFilter("Day");
      }
      dispatch(filterBookingsByGroup(filter))
   }

   return (
      <div style={{ height: 400, width: "100%" }}>
         <div className="contSelectsAT">
            <PopUp
               setPop={setDisplayPopUp}
               display={displayPopUp}
               setDisplay={setDisplayPopUp}
               alertProps={alertProps}
            />
         </div>
         <InputLabel id="demo-controlled-open-select-label">
            Filtrar
         </InputLabel>
         <Select onChange={handleSelectFilter}>
            <MenuItem value="All">
               <em>Todos</em>
            </MenuItem>
            <MenuItem value="Hour">
               <em>Hora</em>
            </MenuItem>
            <MenuItem value="Day">
               <em>Dia</em>
            </MenuItem>
         </Select>
         <div style={{ display: "flex", height: "100%" }}>
            <DataGrid rows={complaints} columns={columns} pageSize={5} />
         </div>
      </div>
   );
}

export default BookingsTable;
