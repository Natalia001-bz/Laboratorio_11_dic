export function rubricPerfect() {

}

export function costCalculator(cost) {
    const fee=  3
    const interestFee =  0.01
    let monthlyPayments = parseFloat(cost)
    let totalPayments = monthlyPayments+fee+(monthlyPayments*interestFee)
    //return `El valor total que debes pagar es: ${cant + interes + tarifaFija}`
    return totalPayments

}
