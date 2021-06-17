const { User } = require("../../db.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//------------ IMPORTACION MAIL -----------------
const secret = 'test';
const { transporter } = require("../../../mailer");
//--------------------------------------------------

// Path of this controller --> Put(http://localhost:3001/spendings/add)
module.exports = async (req, res, next) => {

    let { email, password } = req.body;

    console.log("entre ")
    
    try {
        const userRegistered = await User.findOne(
            { 
                where: { email } 
            }
        );

        if (!userRegistered) return res.status(404).json({ message: { message: "Usuario no existente", styles: "red" } });

        const isPasswordCorrect = await bcrypt.compare(password, userRegistered.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: { message: 'Contraseña Incorrecta', style: "red" } });


        let first_logging = userRegistered.firstLogging;

        if(first_logging){
            
            const token = jwt.sign({ email: userRegistered.email, id: userRegistered.id }, secret, { expiresIn: '10sec' });
            
            res.status(201).json({ result: userRegistered, token, message: { message: "Ingreso Exitoso", style: "green" }, first_logging });

            //----------------- MAIL --------------------------

            let foo = await transporter.sendMail({
                from: '"Edicom" <edicombuilds@gmail.com>', // sender address
                to: userRegistered.email, // list of receivers
                subject: "Contraseña", // Subject line
                text: "La contraseña otorgada por el Administrador es:123" +userRegistered.password , // plain text body
                html: "<b>La contraseña otorgada por el Administrador es: 123</b>", // html body
         });
   
            //-----------------  --------------------------


            // Modificamos la prop firstLogging en la base de datos
    
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
            res.status(201).json({ result: userRegistered, token, message: { message: "Ingreso Exitoso", style: "green" }, first_logging });
        }

    } 
    catch (error) {

        res.status(500).json({ message: { message: 'Something went wrong', style: "red" } });
        console.log(error);
        res.status(500).json({ message: { message: 'Something went wrong', style: "red" } });
    }

    
}