const { User } = require("../../db.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = 'test';
// Path of this controller --> Put(http://localhost:3001/spendings/add)
module.exports = async (req, res, next) => {

    let { email, password } = req.body;

    try {
        const userRegistered = await User.findOne({ where: { email } });
        if (!userRegistered) return res.status(404).json({ message: { message: "Usuario no existente", styles: "red" } });
        const isPasswordCorrect = await bcrypt.compare(password, userRegistered.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: { message: 'Contraseña Incorrecta', style: "red" } });
        const token = jwt.sign({ email: userRegistered.email, id: userRegistered.id }, secret, { expiresIn: '10sec' });
        console.log("token", token)
        res.status(201).json({ result: userRegistered, token, message: { message: "Ingreso Exitoso", style: "green" } });

    } catch (error) {

        res.status(500).json({ message: { message: 'Something went wrong', style: "red" } });
        console.log(error);
        res.status(500).json({ message: { message: 'Something went wrong', style: "red" } });
    }

}