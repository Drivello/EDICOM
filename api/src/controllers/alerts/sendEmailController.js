const { transporter } = require("../../../mailer");


module.exports = async (req, res, next) => {

    try {
        
        let { subscriptions, body } = req.body 
        
        let foo = await transporter.sendMail({
            from: '"Edicom" <edicombuilds@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Recuperar Contraseña", // Subject line
            text: "Haga click en el link para restablecer su contraseña: ", // plain text body
            html: `<b>Haga click en el link para restablecer su contraseña: <a href="http://localhost:3000/logging/restaurarcontraseña?${token}"> Link </a> </b>`, // html body
        });

        // res.status(201).json({ token });
        res.status(201);

    } catch (error) {

        res.status(500).json({ message: { message: 'Algo salió mal', style: "red" } });
    }
}