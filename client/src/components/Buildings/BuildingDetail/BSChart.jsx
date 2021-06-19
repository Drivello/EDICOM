import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buildingSpendings } from '../../../redux/spending/spendingActions';
import { Bar } from 'react-chartjs-2';
import { Data } from './cleaning_data';
import './BuildingDetail.css';


export default function BSChart({date, buildingId}) {
    const building_spendings = useSelector(state => state.reducerSpending.buildingSpendings);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(buildingSpendings(buildingId))
    }, [dispatch])

    const raw_data = date === "All" ? building_spendings : building_spendings.filter(e => new Date(e.date).getMonth() === parseInt(date))

    const labels = Data(raw_data).map(e => e = e.concept);
    const amount = Data(raw_data).map(e => e = e.amount);


    const data = {
        labels:labels,
        datasets:[
            {
                label: "Gastos por Concepto",
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

    if(building_spendings.length > 0){
        return (
            <Bar width={100} height={300} data={data} options={options}/>
        )
    }else{
        return(
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }
}