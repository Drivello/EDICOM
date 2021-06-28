const { Payment, Expenses } = require("../../db.js");

const mercadopago = require ('mercadopago');

mercadopago.configure({
    access_token: 'APP_USR-7203165178727227-062815-d9bf402ccd3c1e6165d7662f180cbf25-782464864'   //
  });

// Path of this controller -->  http://localhost:3001/payment/add

module.exports = async (req, res, next) => {

    // let {date, concept, details, supplier, amount, expensesId} = req.body;
    console.log(req.body)

    let preference = {
        items: [
          {
            title:req.body.title,
            unit_price: parseInt(req.body.price),
            quantity: 1,
          }
        ]
      };
      
    mercadopago.preferences.create(preference)
    .then((response) =>
    {
        res.redirect(response.body.init_point);
    })
    
    // try
    // {
    //     let newPayment = await Payment.create({
            
    //     });

    //     let expensesSearched = await Expenses.findOne({
    //         where: {
    //             id: expensesId
    //         }
    //     })

    //     await expensesSearched.addPayment(newPayment);

    //     return res.json(newPayment).status(200);
    // }
    .catch((err) => {
        console.log(err);
    });
};