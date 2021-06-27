import React, { useEffect, useState } from "react";
import { ratingsByService } from '../../redux/ratings/ratingsAction';
import { useSelector, useDispatch } from "react-redux";
import GradeIcon from '@material-ui/icons/Grade';
import './Services.css';

export default function ServiceCard({service}) {

    const stars = (service.ratings.reduce((tot, acc, curr) => {
        return tot + acc.rating
      },0) / service.ratings.length) || 0
    console.log([...Array(Math.round(stars))])

    return(
        <div className='serviceCard'>
            <h2>
                {service.title.toUpperCase()}
            </h2>
            <div className='lineServiceCard'>
                <h3>Proveedor:</h3>
                <h3>{service.provider}</h3>
            </div>
            <div className='lineServiceCard'>
                <h3>Matricula:</h3>
                <h3>{service.enrollment || "no aplica"}</h3>
            </div>
            <div className='lastLineServiceCard'>
                <h3>Contacto:</h3>
                <h3>{service.contact}</h3>
            </div>
            <div>
                {
                    [...Array(Math.round(stars))].map( star => <GradeIcon className='GradeIcon'/>)
                }
            </div>
        </div>
    )
}