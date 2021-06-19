const { User } = require("../../db.js");
const secret = 'test';
const { transporter } = require("../../../mailer");


module.exports = async (req, res, next) => {
    console.log("llego send email", req.body);
    let email = req.body 
    console.log("perrooooooooooooooooooooooooooo",email)
    let foo = await transporter.sendMail({
        from: '"Edicom" <edicombuilds@gmail.com>', // sender address
        to: email.correo, // list of receivers
        subject: "Recuperar Contraseña", // Subject line
        text: "Haga click en el link para restablecer su contraseña ", // plain text body
        html: "<b>Haga click en el link para restablecer su contraseña: http://localhost:3000/logging/restaurarcontraseña</b>", // html body
    });
    foo();
}