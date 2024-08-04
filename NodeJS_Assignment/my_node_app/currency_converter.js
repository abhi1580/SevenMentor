//user defined module

//contains server side business logic
//INR to USD
function convertoUsd(inrAmount) {
  const usdAmount = inrAmount * 0.012;
  return usdAmount;
}
//INR to Japanese Yen
function convertoJpy(inrAmount) {
  const jpyAmount = inrAmount * 1.78;
  return jpyAmount;
}
//INR to Chinese Yuan
function converttoYuan(inrAmount) {
  const yuanAmount = inrAmount * 0.085;
  return yuanAmount;
}
//INR to Australian Dollar

function converttoAusDollar(inrAmount) {
  const ausDollerAmount = inrAmount * 0.018;
  return ausDollerAmount;
}
//INR to Malaysian Ringgit

function convertoRinggit(inrAmount) {
  const ringgitAmount = inrAmount * 0.054;
  return ringgitAmount;
}
//INR to Swiss Franc

function convertoFranc(inrAmount) {
  const francAmount = inrAmount * 0.01;
  return francAmount;
}
//INR to German Euro

function convertoEuro(inrAmount) {
  const euroAmount = inrAmount * 0.011;
  return euroAmount;
}
//INR to Kenya Shillings

function convertoShilling(inrAmount) {
  const shillingAmount = inrAmount * 1.54;
  return shillingAmount;
}

// export member from module

module.exports = { convertoUsd, convertoJpy,converttoYuan,converttoAusDollar,convertoRinggit,convertoFranc,convertoEuro,convertoShilling };
