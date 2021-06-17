import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buildingSpendings } from '../../redux/spending/actionSpending';
import { Bar } from 'react-chartjs-2';
import { Labels } from './cleaning_data';
import './BuildingDetail.css';


export default function BSChart({buildingId}) {
    const building_spendings = useSelector(state => state.reducerSpending.buildingSpendings);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(buildingSpendings(buildingId))
    }, [dispatch])

    const labels = building_spendings.map(element => element = element.concept);
    const amount = building_spendings.map(element => element = element.amount);


    const data = {
        labels:labels,
        datasets:[
            {
                label: "Gastos",
                backgroundColor: '#00ff7f',
                borderWidth: 1,
                fontColor: '#212121',
                hoverBackgorundColor: '#00e572',
                data: amount,

            }
        ]
        
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20,
                    },
                    color: '#212121'
                },
                
            },
        },
    }

    return (
        <Bar width={100} height={300} data={data} options={options}/>
    )
}