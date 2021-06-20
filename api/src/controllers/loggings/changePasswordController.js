const { User } = require("../../db.js");
const bcrypt = require('bcryptjs');

const secret = 'test';
const { transporter } = require("../../../mailer");


// Path of this controller --> Put(http://143.244.166.41:3001/spendings/add)
module.exports = async (req, res, next) => {
    
    console.log(req.body)

    let {newPass, email} = req.body;
    
    try
    {
        const hashedPassword = bcrypt.hash(newPass, 12)
        hashedPassword.then(async (newPassHashed) => {

            await User.update(
                {
                    password: newPassHashed,
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