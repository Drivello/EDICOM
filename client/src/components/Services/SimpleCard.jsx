import React from 'react';
import './Services.css';
import GradeIcon from '@material-ui/icons/Grade';


export default function SimpleCard({service, stars}) {

  console.log(stars)
  return (
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
                    [...Array(Math.round(stars))].map( star => <GradeIcon/>)
                }
            </div>
        </div>
  );
}