import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RegisterAdminForm from "./RegisterAdminForm";
import swal from "sweetalert";

const CreateAdmin = () => {
	const [input, setInput] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
    });

    const handleSubmit = (data) =>{
		console.log("se crea", data)
	}

	return (
		<>
			<RegisterAdminForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateAdmin;