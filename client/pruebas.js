// const fecha1 = new Date("2021-04-13T16:00:00.000Z");
// const fecha2 = new Date("2021-04-14T16:00:00.000Z");
// const fecha3 = new Date("2021-08-11T16:00:00.000Z");
// const fecha4 = new Date("2022-01-10T16:00:00.000Z");

// arrFechas = [fecha1, fecha2, fecha3, fecha4];


// // console.log(arrFechas);
// // console.log(new Date(Math.min(fecha2, fecha1, fecha4, fecha3)));
// // console.log(Math.min(fecha2-1, fecha1-1, fecha4-1, fecha3-1));


// const reducer = (candidato, currentValue) => {
//     return candidato < currentValue ? candidato : currentValue; 
// };

var enteroPos = 123
var enteroNeg = -123
var decimalPos = 5.55
var decimalNeg = -5.55
var correo = "m@gmail.com.ar"
var string = "sasasa"
var alfanumerico = "1m23,4"

function numeroPositivo(n) {  // 1 - 2 - 3,1 - 4 --> gastos/expensas  --> OKKKKKKKKKKKKK
    if(!isNaN(n) && n>=0){
        return true
    }
    return false
}

function numeroPositivoEntero(n) { // --> 1,2,3,4 --> #pisos, #departamentos
    if(!isNaN(n) && n>=0 && n%1===0){
        return true
    }
    return false
}


function correoElectronico(n) {  // 1 - 2 - 3,1 - 4 --> gastos/expensas
    if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(n)){
        return true
    }
    return false
}


//numeroPositivo OK
// numeroPositivoEntero OK
// correo OK
// alfaNumerico 


console.log("correoElectronico", enteroPos, correoElectronico(enteroPos))
console.log("correoElectronico", enteroNeg, correoElectronico(enteroNeg))
console.log("correoElectronico", decimalPos, correoElectronico(decimalPos))
console.log("correoElectronico", decimalNeg, correoElectronico(decimalNeg))
console.log("correoElectronico", correo, correoElectronico(correo))
console.log("correoElectronico", string, correoElectronico(string))
console.log("correoElectronico", alfanumerico, correoElectronico(alfanumerico))







