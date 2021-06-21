const fecha1 = new Date("2021-04-13T16:00:00.000Z");
const fecha2 = new Date("2021-04-14T16:00:00.000Z");
const fecha3 = new Date("2021-08-11T16:00:00.000Z");
const fecha4 = new Date("2022-01-10T16:00:00.000Z");

arrFechas = [fecha1, fecha2, fecha3, fecha4];


// console.log(arrFechas);
// console.log(new Date(Math.min(fecha2, fecha1, fecha4, fecha3)));
// console.log(Math.min(fecha2-1, fecha1-1, fecha4-1, fecha3-1));


const reducer = (candidato, currentValue) => {
    return candidato < currentValue ? candidato : currentValue; 
};





