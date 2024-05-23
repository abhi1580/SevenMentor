/*Create class TouristPlace using ES6 class keyword with below data and method properties
name
location
country
typeOfPlace (for example : beach,hill station, etc)
sighSeeingSpots(array property which is a collection of multiple sighSeeing spots at TouristPlace)
getInfo() (Which returns all the details) */

class TouristPlace {
  constructor(name, location, country, typeOfPlace, sightSeeingSpots) {
    (this.name = name),
      (this.location = location),
      (this.country = country),
      (this.typeOfPlace = typeOfPlace),
      (this.sightSeeingSpots = sightSeeingSpots);
  }
  getInfo() {
    console.log(
      "**********************************************************************************************************************************************************"
    );
    return `Hotel name : ${this.name} location : ${this.location} country : ${this.country} typeOfPlace : ${this.typeOfPlace} sightSeeingSpots : ${this.sightSeeingSpots}`;

    
  }
}

//Create 5 objects of TouristPlace class with different values
let tp1 = new TouristPlace(
  "Hotel Lake View",
  "Matheran",
  "India",
  "Hill station",
  ["Lousa Lake", "Echo Point", "One tree hill", "Matheran StarGazing"]
);
let tp2 = new TouristPlace(
  "Zanskar Courtyard",
  "Zanskar ",
  "India",
  "Hill station",
  [
    "Pangong Tso",
    "Stok Palace",
    "Diskit Monastery",
    "Thiksey Gompa",
    "Tso Moriri",
  ]
);
let tp3 = new TouristPlace("Goa Woodlands Hotel", "Madgaon", "India", "Beach", [
  "Colva Beach",
  "Goa Chitra",
  "Our Lady Of Mercy Church Goa",
  "Church Of the Holy Spirit Goa",
]);
let tp4 = new TouristPlace(
  "Meritas Seawind Beach Resort",
  "ShreeVardhan",
  "India",
  "Beach",
  [
    "ShreeVardhan Beach",
    "Lord Sheeva Temple",
    "Kondivali Beach",
    "Peshwe Smarak",
  ]
);
let tp5 = new TouristPlace("Maitai Bay", "Nelson", "New Zealand", "Beach", [
  "Far north dive",
  "Gumdiggers Park",
  "Butler Point Whaling Museum",
  "Taupo Bay Beach",
  "Mathew's Vintage Museum",
]);

//Get all the details by calling getInfo method and print on console
console.log(tp1.getInfo())
console.log(tp2.getInfo())
console.log(tp3.getInfo())
console.log(tp4.getInfo())
console.log(tp5.getInfo())