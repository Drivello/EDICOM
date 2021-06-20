const { User, Admin } = require("../../db.js");
const jwt = require('jsonwebtoken');

//------------ IMPORTACION MAIL -----------------
const secret = 'test';
//--------------------------------------------------

// Path of this controller --> Put(http://143.244.166.41:3001/spendings/add)
module.exports = async (req, res, next) => {

    console.log('controller de token to email')
    
    try {

        console.log(req.body)    

        const { token } = req.body;

        decodedData = jwt.verify(token, secret)?.email;

        console.log('decodeData', decodedData)

        res.status(200).json({ mail: decodedData});

    } 
    catch (error) {

        res.status(500).json({ message: { message: 'Algo salió mal', style: "red" } });
        console.log(error);
    }
}