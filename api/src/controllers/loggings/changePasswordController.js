const { User } = require("../../db.js");
const bcrypt = require('bcryptjs');

const secret = 'test';
const { transporter } = require("../../../mailer");


// Path of this controller --> Put(http://localhost:3001/loggings/changepassword)
module.exports = async (req, res, next) => {

    let {newPass, email} = req.body;
    
    try
    {
        const hashedPassword = bcrypt.hash(newPass, 12)
        hashedPassword.then(async (newPassHashed) => {

            await User.update(
                {
                    password: newPassHashed,
                    firstLogging: false,
                }, 
                {
                    where: {
                        email: email
                    }
                }
            );
                
            return res.status(200);
        })
    }
    catch(err){
       /*  console.error(err); */
        res.json(err);
    }
};