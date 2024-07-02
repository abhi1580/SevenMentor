import lg from './images/lg.png'
import samsung from './images/samsung.png'
import whirlpool from './images/whirlpool.png'
import bosch from './images/bosch.png'
import haier from './images/haier.png'

let refrigerators = [
    {
        id: 1,
        brand: "LG",
        model: "GL-T292RSPN",
        price: 28900,
        capacity: "260 L",
        energy_rating: "3 Star",
        specification: {
            compressor: "Smart Inverter",
            defrosting_type: "Frost Free",
            door_type: "Double Door"
        },
        image: lg
    },
    {
        id: 2,
        brand: "Samsung",
        model: "RT28T3743S8",
        price: 24900,
        capacity: "253 L",
        energy_rating: "3 Star",
        specification: {
            compressor: "Digital Inverter",
            defrosting_type: "Frost Free",
            door_type: "Double Door"
        },
        image: samsung
    },
    {
        id: 3,
        brand: "Whirlpool",
        model: "IF INV CNV 278",
        price: 21900,
        capacity: "265 L",
        energy_rating: "3 Star",
        specification: {
            compressor: "Intellisense Inverter",
            defrosting_type: "Frost Free",
            door_type: "Double Door"
        },
        image: whirlpool
    },
    {
        id: 4,
        brand: "Bosch",
        model: "KDN42VS20I",
        price: 34900,
        capacity: "327 L",
        energy_rating: "2 Star",
        specification: {
            compressor: "Inverter",
            defrosting_type: "Frost Free",
            door_type: "Double Door"
        },
        image: bosch
    },
    {
        id: 5,
        brand: "Haier",
        model: "HRB-3404PKG-E",
        price: 28900,
        capacity: "320 L",
        energy_rating: "3 Star",
        specification: {
            compressor: "Inverter",
            defrosting_type: "Frost Free",
            door_type: "Double Door"
        },
        image: haier
    }
];

export default refrigerators;
