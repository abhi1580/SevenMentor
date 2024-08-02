//user defined module

//contains server side business logic
//INR to USD
function converInrtoUsd(inrAmount) {
  const usdAmount = inrAmount * 0.012;
  return usdAmount;
}
//INR to Japanese Yen
function convertInrtoJpy(inrAmount) {
  const jpyAmount = inrAmount * 1.78;
  return jpyAmount;
}
// export member from module

module.exports = { converInrtoUsd, convertInrtoJpy };
