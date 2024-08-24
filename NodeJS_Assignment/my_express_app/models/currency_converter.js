//business logic function

const currencies = [
  { currency: "USD", currentrate: 83.81 },
  { currency: "EUR", currentrate: 93.9 },
  { currency: "GBP", currentrate: 105.1 },
  { currency: "AUD", currentrate: 53.25 },
  { currency: "CAD", currentrate: 61.7 },
  { currency: "JPY", currentrate: 0.56 },
  { currency: "CNY", currentrate: 11.38 },
  { currency: "CHF", currentrate: 92.25 },
  { currency: "SGD", currentrate: 61.2 },
  { currency: "ZAR", currentrate: 4.97 },
];

function convertCurrency(inrAmount) {
  const convertedRates = currencies.map((c) => ({
    currency: c.currency,
    convertedAmount: (inrAmount / c.currentrate).toFixed(2),
  }));
  return convertedRates;
}
module.exports = convertCurrency;
