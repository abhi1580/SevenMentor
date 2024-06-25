import male from "./images/male.png";
import female from "./images/female.png";
import kids from "./images/kids.png";
import kurti from './images/kurti.png'
import zara from './images/zara.png'
import levis from "./images/levis.png"
import hm from "./images/hm.png"
import kidsville from "./images/kidsville.png"
import jack from "./images/jack.png"
const cloths = [
  {
    id: 1,
    brand: "U.S.Polo",
    fabric_type: "Cotton",
    type: "T-Shirt",
    price: 800,
    color: "Black",
    size: "Large",
    collection: "male",
    image: male
  },
  {
    id: 2,
    brand: "Levi's",
    fabric_type: "Denim",
    type: "Jeans",
    price: 2500,
    color: "Blue",
    size: "32",
    collection: "male",
    image: levis
  },
  {
    id: 3,
    brand: "H&M",
    fabric_type: "Cotton",
    type: "T-Shirt",
    price: 1200,
    color: "Navy Blue",
    size: "Large",
    collection: "male",
    image: hm
  },
  {
    id: 4,
    brand: "Zara",
    fabric_type: "Linen",
    type: "Blazer",
    price: 4500,
    color: "Black",
    size: "Medium",
    collection: "female",
    image: zara
  },
  {
    id: 5,
    brand: "KALINI",
    fabric_type: "Cotton",
    type: "Saree",
    price: 5000,
    color: "Green",
    size: "Small",
    collection: "female",
    image: female
  },
  {
    id: 6,
    brand: "Anouk",
    fabric_type: "Pure Cotton",
    type: "Straight Kurta With Patiala & Dupatta",
    price: 1499,
    color: "Yellow",
    size: "Medium",
    collection: "female",
    image: kurti
  },
  {
    id: 7,
    brand: "Knitting Doodles",
    fabric_type: "Pure Silk",
    type: "SleepWear",
    price: 700,
    color: "Blue",
    size: "Medium",
    collection: "kids",
    image: kids
  },
  {
    id: 8,
    brand: "Kids Ville",
    fabric_type: "Cotton",
    type: "T-Shirt",
    price: 500,
    color: "Red",
    size: "Small",
    collection: "kids",
    image: kidsville
  },
  {
    id: 9,
    brand: "Jack & Jones Junior",
    fabric_type: "Denim",
    type: "Denim Shorts",
    price: 799,
    color: "Blue",
    size: "Medium",
    collection: "kids",
    image: jack
  }
];

export default cloths;
