//user defined module
function calculateSimpleInterest(p, n, r) {
  const interestAmount =( p * n * r) / 100;
  return interestAmount;
}
//export user defined module
module.exports=calculateSimpleInterest