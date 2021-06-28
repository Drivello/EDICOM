import React, {useState, useEffect} from 'react';

function UserComplaintDetail(props) {
    const [complaint, setComplaint] = useState([])

    const complaintId = props.match.params.id
    const complaints = props.complaints

    // const currentComplaint = props.complaints.filter(complaint => complaint.id === complaintId)
    useEffect(() => {
        if (complaints) {
            const currentComplaint = complaints.filter(complaint => complaint.id == complaintId)
            setComplaint(currentComplaint)
            console.log(complaints[0])
            console.log(currentComplaint);
        }
    }, [])
    
    
    return (
        <div>
            I'm a User Complaint Detail
        </div>
    );
}

export default UserComplaintDetail;