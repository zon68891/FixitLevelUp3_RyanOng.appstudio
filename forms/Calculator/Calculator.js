while (choose !==3) {
var choose = Number(prompt("Which monthly payment calculator would you like to choose, if it's for car loan, please type 1, if for home loan, please type 2, otherwise type 3 to stop program "))
if(choose == 1){
  var p = Number(prompt("Please enter your loan amount."))
var t = Number(prompt("Please enter the timeframe of payment in months."))
var rate = Number(prompt("Please enter your annual interest rate in decimals."))

function carLoanPayment(loan, months, r) {
  let mr=r/12
return (mr*loan)/(1-(1+mr)**-months)
  }

alert('A car loan for $' + p + " over " + t + " months at " + rate*100 + "% interest would have a monthly payment of $"+ carLoanPayment(p, t, rate).toFixed(2));
}else if(choose == 2){
  var base = Number(prompt("Please enter your loan amount."))
var y = Number(prompt("Please enter the timeframe of payment in years, can only be 15 or 30 years."))
var interest = Number(prompt("Please enter your annual interest rate in decimals."))

function homeLoanPayment(homeLoan, yr, coc) {
  let mor=coc/12
  let mon= yr*12
return (mor*homeLoan)/(1-(1+mor)**-mon)
  }

alert('A home loan for $' + base + " over " + y + " months at " + interest*100 + "% interest would have a monthly payment of $"+ homeLoanPayment(base, y, interest).toFixed(2));
} else {
  throw new Error("Program Stopped");
  }
  }


