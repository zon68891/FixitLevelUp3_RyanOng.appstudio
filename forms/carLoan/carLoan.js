// create main program here

// create function for car loan
var p = Number(prompt("Please enter your loan amount."))
var t = Number(prompt("Please enter the timeframe of payment in months."))
var rate = Number(prompt("Please enter your annual interest rate in decimals."))

function carLoanPayment(loan, months, r) {
  let mr=r/12
return (mr*loan)/(1-(1+mr)**-months)
  }

alert('A car loan for $' + p + " over " + t + " months at " + rate*100 + "% interest would have a monthly payment of $"+ Math.round(carLoanPayment(p, t, rate)));