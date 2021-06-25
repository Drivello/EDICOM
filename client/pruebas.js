const SPANISH_MONTHS = {
    0: 'Eenero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
}


var mesActual = SPANISH_MONTHS[(new Date()).getMonth()];
var agnoActual = (new Date()).getFullYear();



console.log(mesActual)
console.log(agnoActual)

var s = "hola";
console.log(s.slice(2))