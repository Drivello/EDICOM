

export function Labels(array){
    return array.map(element => element = element.concept).map(element => element = element[0].toUpperCase() + element.split("").slice(1).map(e => e = e.toLowerCase()).join("")).filter((value, index, self) => self.indexOf(value) === index)
}

export function Data(array,labels){
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
    };
    //aca hago un array.map para cambiar la prop concept y que queden todas iguales
    let grouped = groupBy(array)
    for (const property in grouped) {
        grouped[property] = grouped[property].map(e=>e=e.monto).reduce(function(prev, curr){
        return prev + curr;
    });
    }
}
