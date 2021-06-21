import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuildingDetail } from '../../../redux/building/buildingActions';
import './BuildingDetail.css'

export default function BuildingPresentation({buildingId}){
    const building = useSelector(state => state.buildingReducer.detailBuilding);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBuildingDetail(buildingId))
    }, [dispatch])

    if(building.length > 0) {
        return (
            <div className= 'contExtPresentacionBuilding'>
                <h1>
                    Edificio: {building[0].name}
                </h1>
                <div className = 'contIntPresentacionBuilding'>
                <img src={building[0].image} alt="" />
                <div className='textBuildingPresentation'>
                <div className ='lineTextBP'>
                <h2 className='titleLineTextBP'>Direccion:</h2>
                <h2>{building[0].address}</h2>
                </div>
                <div className ='lineTextBP'>
                <h2 className='titleLineTextBP'>Catastro:</h2>
                <h2>{building[0].cata}</h2>
                </div>
                <div className ='lineTextBP'>
                <h2 className='titleLineTextBP'>Cantidad de Pisos:</h2>
                <h2>{building[0].floor}</h2>
                </div>
                <div className ='lineTextBP'>
                <h2 className='titleLineTextBP'>Cantidad de Departamentos:</h2>
                <h2>{building[0].cant_apartments}</h2>
                </div>
                </div>
                </div>
            </div>
        )
    }else {
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }
}