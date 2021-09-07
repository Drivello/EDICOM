import React, {useState, useEffect} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../themeStyle';

function UserComplaintDetail(props) {
    const [complaint, setComplaint] = useState([{
        id: '',
        subject: '',
        date: '',
        importance: '',
        state: '',
        details: '',
        image: '',
    }])
    const complaintId = props.match.params.id
    const complaints = props.complaints

    useEffect(() => {
        if (complaints) {
            const currentComplaint = complaints.filter(complaint => complaint.id === Number(complaintId))
            setComplaint(currentComplaint)
        }
        // eslint-disable-next-line
    }, [])
    
    function getImageAvailability(complaintImage) {
        if (complaintImage !== '') {
            return 'hasImage'
        } else {
            return 'noImage'
        }
    };
    const imageDisplay = getImageAvailability(complaint[0].image);

    return (
        <ThemeProvider theme={theme}>
            <h2>Detalle de reclamo</h2>
            <div className="complaintInfo">
                <h3>Asunto: {complaint[0].subject}</h3>
                <ul>
                    <li>Fecha de inicio: {complaint[0].date}</li>
                    <li>Importancia: {complaint[0].importance}</li>
                    <li>Estado: {(complaint[0].state === 'opened') ? 'Abierto' : 'Cerrado'}</li>
                </ul>
            </div>
            <div className="complaintDetails">
                <p>{complaint[0].details}</p>
                <div>
                    {}
                    <img 
                        src={complaint[0].image} 
                        alt={complaint[0].subject} 
                        className={imageDisplay}
                    />
                </div>
            </div>            
        </ThemeProvider>
    );
}

export default UserComplaintDetail;