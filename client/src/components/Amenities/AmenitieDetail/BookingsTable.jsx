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


   const dispatch = useDispatch();

   console.log(props.amenitieId, "TABLE");

   const allComplaints = useSelector(state => state.bookingReducer.bookingDetail)


   useEffect(() => {
      dispatch(getBookingByAmenity(props.amenitieId))
   }, [dispatch])

/*    useEffect(() => {
      dispatch(getBookingByAmenity(props.amenitieId))
   }, [allComplaints]) */

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

   const [currency, setCurrency] = React.useState("opened");

   const handleChange = (event) => {
      setCurrency(event.target.value);
   };

   /*     const startSelect = alerts.map(element => element = element.start).filter((value, index, self) => self.indexOf(value) === index); */
   const importanceSelect = complaints
      .map((element) => (element = element.state))
      .filter((value, index, self) => self.indexOf(value) === index);


   const columns = [
      { field: "id", headerName: "ID", flex: 1.5, hide: true },
      { field: "start", headerName: "Comienzo", flex: 1 },
      { field: "date", headerName: "Fin", flex: 1 },
      { field: "state", headerName: "Estado", flex: 1 ,
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

   const date1 = new Date("2021-01-01T00:00:00");
   const date2 = new Date(new Date());

   const [input, setInput] = useState({
      since: date1,
      upTo: date2,
      start: "All",
      state: "All",
   });
   const [displayPopUp, setDisplayPopUp] = useState(false);
   const [alertProps, setAlertProps] = useState({});

   const handleEventClick = (clickInfo, data) => {
      setAlertProps({
         id: data.id,
         title: data.concept,
         detail: data.detail,
         state: data.state,
         start: data.start,
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
