const axios = require('axios');
const { conn } = require('./../../db')
const { MONTHS } = require('./../../utils/constants')
const { Spendings, Expenses, Apartment } = require("../../db.js");


// Path --> Post(http://143.244.166.41:3001/expenses/add/:month/:year)
module.exports = async (req, res, next) => {

    const {month, year} = req.params;

    const t = await conn.transaction();

    try{

        const arrSpending = await Spendings.findAll();
        const arrApartments = await Apartment.findAll(
            {
                where: {
                    buildingId: 1               //Harcodeamos el edificio con el id = 1 
                }                               //pero hay que agregar el filtro del edificio
            }
        );

        const spendingFiltered = arrSpending.filter( (spending) => 
        {
            if(spending.date.getMonth() === parseInt(month, 10) && spending.date.getFullYear() === parseInt(year, 10)) return true;
        })

        const totalSurfaceQuery = await Apartment.findAll({
            // where: {buildingId: 1},
            attributes: [
              [conn.fn('SUM', conn.col('mt2')), 'totalMt2'],
            ]
          });

        const totalSurface = totalSurfaceQuery[0].dataValues.totalMt2           //total m2 of the building

        const totalSpendingAmount = spendingFiltered.map((data) => data.amount).reduce((a, b) => a + b);
        // const expenseAmount = totalSpendingAmount / arrApartments.length;
    

        const arrExpensesPromises = [];                 //make an array with the promises of new Expenses
        const arrAsignedExpenses = []; 

        for (const apartment of arrApartments) {

            // console.log("primer for")
            arrExpensesPromises.push(Expenses.create(
                {
                    month: MONTHS[month],
                    year: year,
                    amount: totalSpendingAmount / totalSurface * apartment.mt2,
                }, { transaction: t }))
        }


        Promise.all(arrExpensesPromises)
            .then(expenses => {                         //expenses is an array with the new expenses created
                
                // console.log(expenses)
                // console.log('Primer PromiseAll')
                let i = 0;
                for (const apartment of arrApartments) {

                    // console.log(expenses[i])
                    // console.log("segundo for")
                    arrAsignedExpenses.push(apartment.addExpense(expenses[i], { transaction: t }))
                    i++;                    
                }
                Promise.all(arrAsignedExpenses)
                    .then(() => {
                        // console.log('Segundo PromiseAll')
                        t.commit()
                    })
            })

        
        // for (const apartment of arrApartments) {
            
        //     Expenses.create({
        //         month: MONTHS[month],
        //         year: year,
        //         amount: expenseAmount,
        //     }, { transaction: t })
        //     .then((expense) => {

        //         apartment.addExpense(expense, { transaction: t })

        //     })
        // }

        // t.commit()

        return res.json(`Expensas para el mes ${MONTHS[month]} cargadas`)
    } 
    catch(err){
        await t.rollback()
        res.json(err)
        return console.log(err)
    }
    
    // axios.get("http://143.244.166.41:3001/spendings/all")     // se puede ver de reutilizar este endpoint

};