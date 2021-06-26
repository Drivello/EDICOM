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
import { getBookingByAmenity } from "../../../redux/booking/bookingActions";
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
   /* const allComplaints = useSelector(state => state.bookingReducer.allBookings) */

/*    const allComplaints = [
      {
         id: 1,
         start: "2021-06-25T15:30:05.304Z",
         finish: "2021-06-25T16:30:27.237Z",
         status: "free",
         createdAt: "2021-06-25T21:56:27.245Z",
         updatedAt: "2021-06-25T21:56:27.258Z",
         userId: null,
         amenityId: 1,
      },
      {
         id: 2,
         start: "2021-06-25T16:30:05.304Z",
         finish: "2021-06-25T17:30:27.237Z",
         status: "free",
         createdAt: "2021-06-25T21:56:27.287Z",
         updatedAt: "2021-06-25T21:56:27.292Z",
         userId: null,
         amenityId: 1,
      },
      {
         id: 3,
         start: "2021-06-26T15:30:05.304Z",
         finish: "2021-06-26T16:30:27.237Z",
         status: "free",
         createdAt: "2021-06-25T21:56:27.315Z",
         updatedAt: "2021-06-25T21:56:27.319Z",
         userId: null,
         amenityId: 1,
      },
      {
         id: 4,
         start: "2021-06-26T16:30:05.304Z",
         finish: "2021-06-26T17:30:27.237Z",
         status: "free",
         createdAt: "2021-06-25T21:56:27.336Z",
         updatedAt: "2021-06-25T21:56:27.340Z",
         userId: null,
         amenityId: 1,
      },
   ]; */

   const dispatch = useDispatch();

   console.log(props.amenitieId, "TABLE");

   const allComplaints = useSelector(state => state.bookingReducer.bookingDetail)

   const [compleints, setCompleints] = useState(allComplaints);

   useEffect(() => {
      dispatch(getBookingByAmenity(props.amenitieId))
   }, [dispatch])

   /*      useEffect(() => {
       setCompleints(allComplaints)
     },[dispatch]) */

   const complaints = allComplaints?.map((booking) => {
      let stateSpanish;
      if (booking.status === "free") stateSpanish = "Libre";
      if (booking.status === "cancelled") stateSpanish = "Cancelado";
      if (booking.status === "booked") stateSpanish = "Reservado";
      return {
         id: booking.id,
         building: moment(booking.start).format("DD/MM/YYYY -- h:mm"),
         date: moment(booking.finish).format("DD/MM/YYYY -- h:mm"),
         importance: stateSpanish,
      };
   });

   const currencies = [
      {
         value: "opened",
         label: "Abierto",
      },
      {
         value: "closed",
         label: "Cerrado",
      },
   ];

   const [currency, setCurrency] = React.useState("opened");

   const handleChange = (event) => {
      setCurrency(event.target.value);
   };

   /*     const buildingSelect = alerts.map(element => element = element.building).filter((value, index, self) => self.indexOf(value) === index); */
   const importanceSelect = complaints
      .map((element) => (element = element.importance))
      .filter((value, index, self) => self.indexOf(value) === index);

   const columns = [
      { field: "id", headerName: "ID", flex: 1.5, hide: true },
      { field: "building", headerName: "Comienzo", flex: 1 },
      { field: "date", headerName: "Fin", flex: 1 },
      { field: "importance", headerName: "Estado", flex: 1 },
   ];

   const date1 = new Date("2021-01-01T00:00:00");
   const date2 = new Date(new Date());

   const [input, setInput] = useState({
      since: date1,
      upTo: date2,
      building: "All",
      importance: "All",
   });
   const [displayPopUp, setDisplayPopUp] = useState(false);
   const [alertProps, setAlertProps] = useState({});

   const handleEventClick = (clickInfo, data) => {
      setAlertProps({
         id: data.id,
         title: data.concept,
         detail: data.detail,
         importance: data.importance,
         building: data.building,
         date: data.date,
         state: data.state,
      });
      setDisplayPopUp(true);
   };

   function handleSinceChange(date) {
      setInput({ ...input, since: date });
   }

   function handleUpToChange(date) {
      setInput({ ...input, upTo: date });
   }

   function handleSelect(e) {
      setInput({ ...input, [e.target.name]: e.target.value });
   }

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

   const classes = useStyles();

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
         <div style={{ display: "flex", height: "100%" }}>
            <DataGrid rows={complaints} columns={columns} pageSize={5} />
         </div>
      </div>
   );
}

export default BookingsTable;
