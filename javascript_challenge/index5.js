/*CLOSURES*/

export function createCalculator() {
    let total=0
    return{
    "add": (x) => total +=x ,
    "substract":(x) => total -= x,
    "multiply":(x) => total *= x,
    "divide":(x) => total /= x,
    "clear": () => total= 0,
    "getTotal": () => total ,
}
}
const calcular = createCalculator()
console.log(calcular.multiply(4))
console.log(calcular.getTotal())
