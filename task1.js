//& Task 1
/*María está calculando el costo de los pagos mensuales. Por cada transacción hay una tarifa de $3 y una tarifa de interés del 1% (0,01).
* Dado un monto de transacción de entrada, exporte una función que devuelva el valor de lo que debería pagar.
* Esta función debería poder tomar un número como entrada y devolver un número como salida.*/


export function costCalculator(cost) {
    const fee=  3
    const interestFee = cost * 0.01
    let monthlyPayments = cost + interestFee + fee
    //return `El valor total que debes pagar es: ${cant + interes + tarifaFija}`
    return monthlyPayments

}


console.log(costCalculator(124))