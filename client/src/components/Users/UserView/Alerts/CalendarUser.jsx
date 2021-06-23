import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Calendar from "../../../Buildings/BuildingDetail/Calendar";
import {getUser} from '../../../../redux/users/userActions';
import "./AlertsUser.css";

export default function CalendarUser(props){
    const id = props.match.params.id;
    const user_detail = useSelector(state => state.userReducer.userDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch])

    if(!user_detail) return (
        <div>Loading...</div>
    )
    return (
        <div className='contExtCalendarUserView'>
        <Calendar buildingId={user_detail.apartment.buildingId} user={true}/>
        </div>
    )
}