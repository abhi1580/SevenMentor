// S.I. = (P × R × T)/100, where P = Principal, R = Rate of Interest in % per annum, and T = Time, usually calculated as the number of years

function calSimpleInterest(principalAmount, durationInYears, interestRate) {
  const interestAmount =
    (principalAmount * interestRate * durationInYears) / 100;
  return interestAmount;
}
module.exports=calSimpleInterest