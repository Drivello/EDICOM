import { useState } from 'react';
import RegisterAdminForm from "./RegisterAdminForm";
import swal from "sweetalert";
import axios from 'axios';

const CreateAdmin = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
    });

    const handleSubmit = async (data) => {
        if (input.email !== "" && input.password !== "") {
            var create = await axios.post("/admin/", input)
                .catch((err) => {
                    return swal("No se ha podido crear el usuario", "El email ya se encuentra asociado a una cuenta", "error");;
                })
            if(typeof create !== "boolean") swal("Usuario creado correctamente!", "Gracias!", "success")
        } else {
            return swal("Debe completar todos los campos", "Por favor revise los datos!", "warning");;
        }
    }

    return (
        <>
            <RegisterAdminForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </>
    );
};

export default CreateAdmin;