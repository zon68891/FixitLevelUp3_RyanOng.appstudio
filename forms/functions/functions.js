// create main program here

// create function for car loan
var p = Number(prompt("Please enter your loan amount."))
var t = Number(prompt("Please enter the timeframe of payment in months."))
var rate = Number(prompt("Please enter your annual interest rate in decimals."))

function carLoanPayment(loan, months, r) {
  let mr=r/12
return (mr*loan)/(1-(1+mr)**-months)
  }

alert('A car loan for $' + p + " over " + t + " months at " + rate*100 + "% interest would have a monthly payment of $"+ carLoanPayment(p, t, rate).toFixed(2));

//create function for home loan
var base = Number(prompt("Please enter your loan amount."))
var y = Number(prompt("Please enter the timeframe of payment in years."))
var interest = Number(prompt("Please enter your annual interest rate in decimals."))

function homeLoanPayment(homeLoan, yr, coc) {
  let mor=coc/12
  let mon= yr*12
return (mor*homeLoan)/(1-(1+mor)**-mon)
  }

alert('A home loan for $' + base + " over " + y + " months at " + interest*100 + "% interest would have a monthly payment of $"+ homeLoanPayment(base, y, interest).toFixed(2));