// let dateStart = '2021-06-25T18:37:00.000Z'
// let dateEnd = '2021-06-26T18:37:00.000Z'
// let timeStart = '07:30'
// let timeEnd = '10:00'
// let duration = '01:00'

// const [hoursStart, minutesStart] = timeStart.split(':');
// const [hoursEnd, minutesEnd] = timeEnd.split(':');
// const [hoursDuration, minutesDuration] = duration.split(':');

// dateStart = new Date(dateStart)
// dateEnd = new Date(dateEnd)

// timeStart = (new Date((new Date()).setHours(parseInt(hoursStart)))).getHours() * 60 + (new Date((new Date()).setMinutes(parseInt(minutesStart)))).getMinutes();
// timeEnd = (new Date((new Date()).setHours(parseInt(hoursEnd)))).getHours() * 60 + (new Date((new Date()).setMinutes(parseInt(minutesEnd)))).getMinutes();
// duration = (new Date((new Date()).setHours(parseInt(hoursDuration)))).getHours() * 60 + (new Date((new Date()).setMinutes(parseInt(minutesDuration)))).getMinutes();

// const bookingPerDay = Math.floor((timeEnd - timeStart)/(duration));

// console.log('timeStart', timeStart)
// console.log('timeEnd', timeEnd)
// console.log('duration', duration)
// // timeStart = timeStart.setMinutes(45);


// console.log('bookingPerDay', bookingPerDay)


let fecha = new Date("2021-06-25T19:23:20.442Z")

fecha.setHours("10", "30")

console.log(typeof fecha.getHours())
console.log(fecha.getMinutes())