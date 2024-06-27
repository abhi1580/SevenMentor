import BMW_3_series from "./images/BMW_3_series.webp";
import Chevrolet_malibu from "./images/Chevrolet_malibu.jpg";
import Ford_mustang from "./images/Ford_mustang.webp";
import Honda_accord from "./images/Honda_accord.jpg";
import Nissan_altima from "./images/Nissan_altima.jpg";
import Toyota_Camry from "./images/Toyota_Camry.webp";

const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    price: "₹20,00,000",
    specification: {
      engine: "2.5L 4-cylinder",
      horsePower: "203 hp",
      torque: "184 lb-ft",
      transmission: "8-speed automatic",
      fuelCapacity: "60.6 liters",
      mileage: "11.9/16.6 kmpl (city/highway)",
    },
    image: BMW_3_series,
  },
  {
    id: 2,
    brand: "Honda",
    model: "Accord",
    price: "₹18,00,000",
    specification: {
      engine: "1.5L Turbocharged 4-cylinder",
      horsePower: "192 hp",
      torque: "192 lb-ft",
      transmission: "Continuously Variable Transmission (CVT)",
      fuelCapacity: "56 liters",
      mileage: "12.8/16.1 kmpl (city/highway)",
    },
    image: Chevrolet_malibu,
  },
  {
    id: 3,
    brand: "Ford",
    model: "Mustang",
    price: "₹35,00,000",
    specification: {
      engine: "2.3L EcoBoost 4-cylinder",
      horsePower: "310 hp",
      torque: "350 lb-ft",
      transmission: "6-speed manual",
      fuelCapacity: "58.7 liters",
      mileage: "8.9/13.6 kmpl (city/highway)",
    },
    image: Ford_mustang,
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Malibu",
    price: "₹16,00,000",
    specification: {
      engine: "1.5L Turbocharged 4-cylinder",
      horsePower: "160 hp",
      torque: "184 lb-ft",
      transmission: "6-speed automatic",
      fuelCapacity: "59.8 liters",
      mileage: "11.5/15.3 kmpl (city/highway)",
    },
    image: Honda_accord,
  },
  {
    id: 5,
    brand: "Nissan",
    model: "Altima",
    price: "₹19,00,000",
    specification: {
      engine: "2.5L 4-cylinder",
      horsePower: "188 hp",
      torque: "180 lb-ft",
      transmission: "Continuously Variable Transmission (CVT)",
      fuelCapacity: "61.3 liters",
      mileage: "11.9/16.6 kmpl (city/highway)",
    },
    image: Nissan_altima,
  },
  {
    id: 6,
    brand: "BMW",
    model: "3 Series",
    price: "₹45,00,000",
    specification: {
      engine: "2.0L Turbocharged 4-cylinder",
      horsePower: "255 hp",
      torque: "295 lb-ft",
      transmission: "8-speed automatic",
      fuelCapacity: "59 liters",
      mileage: "11.1/15.3 kmpl (city/highway)",
    },
    image: Toyota_Camry,
  },
];
export default cars;
