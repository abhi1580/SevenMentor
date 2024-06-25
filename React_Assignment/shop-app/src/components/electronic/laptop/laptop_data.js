import hp from './images/hp.jpeg'
import lenovo from './images/lenovo.jpg'
import asus from './images/asus.png'
import dell from './images/dell.jpg'
import mac from './images/mac.jpg'
let laptops = [
    {
        id: 1,
        brand: "Apple",
        model: "MacBook Pro",
        price: 199900,
        processor: "Intel Core i7",
        specification: {
            RAM: "16GB",
            storage: "512GB"
        },
        image: mac
    },
    {
        id: 2,
        brand: "Dell",
        model: "XPS 15",
        price: 179900,
        processor: "Intel Core i9",
        specification: {
            RAM: "32GB",
            storage: "1000GB"
        },
        image: dell
    },
    {
        id: 3,
        brand: "HP",
        model: "Spectre x360",
        price: 159900,
        processor: "Intel Core i5",
        specification: {
            RAM: "8GB",
            storage: "256GB"
        },
        image: hp
    },
    {
        id: 4,
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon",
        price: 189900,
        processor: "Intel Core i7",
        specification: {
            RAM: "16GB",
            storage: "1TB"
        },
        image: lenovo
    },
    {
        id: 5,
        brand: "Asus",
        model: "ZenBook Duo",
        price: 129900,
        processor: "Intel Core i7",
        specification: {
            RAM: "16GB",
            storage: "512GB"
        },
        image: asus
    },
    
];

export default laptops