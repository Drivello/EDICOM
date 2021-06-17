const { User } = require("../../db.js");
const bcrypt = require('bcryptjs');


// Path of this controller --> Put(http://localhost:3001/spendings/add)
module.exports = async (req, res, next) => {
    
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