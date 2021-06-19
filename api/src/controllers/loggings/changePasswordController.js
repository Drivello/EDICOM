const { User } = require("../../db.js");
const bcrypt = require('bcryptjs');

const secret = 'test';
const { transporter } = require("../../../mailer");


// Path of this controller --> Put(http://localhost:3001/spendings/add)
module.exports = async (req, res, next) => {
    
    let foo = await transporter.sendMail({
        from: '"Edicom" <edicombuilds@gmail.com>', // sender address
        to: userRegistered.email, // list of receivers
        subject: "Contraseña", // Subject line
        text: "La contraseña otorgada por el Administrador es:123" +userRegistered.password , // plain text body
        html: "<b>La contraseña otorgada por el Administrador es: 123</b>", // html body
    });
    console.log(req.body);

    let {newPass, email} = req.body;
    
    try
    {
        const hashedPassword = bcrypt.hash(newPass, 12)
        hashedPassword.then(async (newPassHashed) => {

            const newPassword = await User.update(
                {
                    password: newPassHashed,
                }, 
                {
                    where: {
                        email: email
                    }
                }
            );
                
            return res.json(newPassword).status(200);
        })
    }
    catch(err){
       /*  console.error(err); */
        res.json(err);
    }
};