const { User, Admin } = require("../../db.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//------------ IMPORTACION MAIL -----------------
const secret = 'test';
const { transporter } = require("../../../mailer");
//--------------------------------------------------

// Path of this controller --> Put(http://localhost:3001/spendings/add)
module.exports = async (req, res, next) => {

    let { email, password } = req.body;

    let userType;
    
    try {
        const usuarioRegistered = await User.findOne(
            { 
                where: { email } 
            }
        );
        
        const adminRegistered = await Admin.findOne(
            { 
                where: { email } 
            }
        );

        usuarioRegistered instanceof User ? userType = "tenant": null;
        usuarioRegistered instanceof Admin ? userType = "admin": null;
        
        if (!usuarioRegistered && !adminRegistered) return res.status(404).json({ message: { message: "Usuario no existente", styles: "red" } });

        usuarioRegistered? userRegistered = usuarioRegistered : userRegistered = adminRegistered// prueba marce


        // if(usuarioRegistered){ 
        //     userRegistered = usuarioRegistered
        // }
        // else{ // prueba Mariano
        //     userRegistered = adminRegistered
        // }

        const isPasswordCorrect = await bcrypt.compare(password, userRegistered.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: { message: 'Contraseña Incorrecta', style: "red" } });
        let first_logging = userRegistered.firstLogging;

        if(first_logging){ 
                   
            const token = jwt.sign({ email: userRegistered.email, id: userRegistered.id, userType }, secret, { expiresIn: '1hr' });
            if(usuarioRegistered){
                res.status(201).json({ result: userRegistered, token, message: { message: "Ingreso Exitoso ", style: "green", type: "usuario" }, first_logging });
            }
            else{
                res.status(201).json({ result: userRegistered, token, message: { message: "Ingreso Exitoso ", style: "green" }, first_logging, type: "admin" });
            }
            // res.status(201).json({ result: userRegistered, token, message: { message: "Ingreso Exitoso", style: "green" }, first_logging });
            await User.update({
                firstLogging: false,
            }, {
                where: {
                    id: userRegistered.id
                }
            });
        }

        else{

            const token = jwt.sign({ email: userRegistered.email, id: userRegistered.id }, secret, { expiresIn: '10sec' });
            if(usuarioRegistered){
                res.status(201).json({ result: userRegistered, token, message: { message: "Ingreso Exitoso Usuario", style: "green", type: "usuario" }, first_logging });
            }
            else{
                res.status(201).json({ result: userRegistered, token, message: { message: "Ingreso Exitoso Adm", style: "green", type: "admin" }, first_logging });
            }
            
        }

    } 
    catch (error) {

        res.status(500).json({ message: { message: 'Something went wrong', style: "red" } });
        console.log(error);
        res.status(500).json({ message: { message: 'Something went wrong', style: "red" } });
    }
}