import React, { useEffect, useState } from "react";
import { ratingsByService } from '../../redux/ratings/ratingsAction';
import { useSelector, useDispatch } from "react-redux";
import GradeIcon from '@material-ui/icons/Grade';

export default function ServiceCard({service}) {
    const ratings = useSelector(state => state.ratingReducer.ratingFiltered);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ratingsByService(parseInt(service.id)))
    }, [])
    console.log(ratings)
    const stars = ratings && ratings.reduce((tot, acc, curr) => {
        return tot + acc.rating
      },0) / ratings.length

    return(
        <div>
            <h2>
                {service.title}
            </h2>
            <div>
                <h4>Proveedor:</h4>
                <h4>{service.provider}</h4>
            </div>
            <div>
                <h4>Matricula:</h4>
                <h4>{service.enrollment}</h4>
            </div>
            <div>
                <h4>Contacto:</h4>
                <h4>{service.contact}</h4>
            </div>
            <div>
                {
                    [...Array(stars)].map( star => <GradeIcon/>)
                }
            </div>
        </div>
    )
}