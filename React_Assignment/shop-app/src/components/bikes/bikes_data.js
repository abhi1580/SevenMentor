import splenderPlus from "./images/splenderPlus.webp";
import bajajPulsar from "./images/bajajPulsar.webp";
import hondaSP from "./images/hondaSP.webp";
import tvsRadeon from "./images/tvsRadeon.webp";
import kawasakiW from "./images/kawasakiW.webp";
const bikes = [
  {
    id: 1,
    model: "Splender Plus",
    brand: "Hero",
    price: 78286.0,
    specification: {
      cc: 97.2,
      mileage: "80.6Kmpl",
      maxTorque: 80.05,
      fuelCapacity: "9.8L",
    },
    image: splenderPlus,
  },
  {
    id: 2,
    model: "Bajaj Pulsar 125",
    brand: "Bajaj",
    price: 94957.0,
    specification: {
      cc: 124.4,
      mileage: "51.46Kmpl",
      maxTorque: 10.05,
      fuelCapacity: "11.5L",
    },
    image: bajajPulsar,
  },

  {
    id: 3,
    model: "Honda SP 125",
    brand: "Honda",
    price: 90567.0,
    specification: {
      cc: 123.94,
      mileage: "60Kmpl",
      maxTorque: 10.9,
      fuelCapacity: "11.2L",
    },
    image: hondaSP,
  },

  {
    id: 4,
    model: "TVS Radeon",
    brand: "TVS",
    price: 135000.0,
    specification: {
      cc: 109.7,
      mileage: "73.68Kmpl",
      maxTorque: 8.7,
      fuelCapacity: "10L",
    },
    image: tvsRadeon,
  },
  {
    id: 5,
    model: "Kawasaki W175",
    brand: "Kawasaki",
    price: 80944.0,
    specification: {
      cc: 177,
      mileage: "45Kmpl",
      maxTorque: 13.2,
      fuelCapacity: "12.1L",
    },
    image: kawasakiW,
  },
];

export default bikes;
