import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from '../../redux/users/userActions';
import { getServicesBuilding } from '../../redux/services/servicesAction';
import ServiceCard from "./ServiceCard";


export default function ServiceContainer(props) {
    const id = props.match.params.id;
    const user_detail = useSelector(state => state.userReducer.userDetail);
    const services = useSelector(state => state.servicesReducer.buildingServices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch])

    useEffect(() => {
        user_detail && dispatch(getServicesBuilding(user_detail.apartment.buildingId))
    }, [dispatch, user_detail])

    return (
        <div>
            <div>
                {
                    services && services.map(service => <ServiceCard key={service.id} service={service}/>)
                }
            </div>
        </div>
    )
}