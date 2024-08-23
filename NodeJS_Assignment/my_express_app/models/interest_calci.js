//Business logiv
function calculateSimpleInterest(principal, duration, rate) {
  const interestAmount = (principal * duration * rate) / 100;
  return interestAmount;
}

//export module method
module.exports=calculateSimpleInterest