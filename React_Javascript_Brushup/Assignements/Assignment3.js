let Bike = {
  model: "Hunter 350",
  brand: "Royal Enfield",
  price: 245000.0,
  specification: {
    wheelbase: "1370 mm",
    frontSuspension: "Telescopic, 41 mm forks, 130 mm travel",
    engine: {
      engineCc: "349.34cc",
      power: "20.2 bhp",
    },
  },
};
//Display the object on console
console.log("Bike Object : ", Bike);
console.log(
  "**********************************************************************************************************************************************************"
);

//Create the clone of bike object using deep copying

let BikeCopy = { ...Bike };

BikeCopy.specification = { ...Bike.specification };
BikeCopy.specification.engine = { ...Bike.specification.engine };

//Display cloned object on console
console.log(BikeCopy);


//Change the value of frontSuspension of cloned bike
BikeCopy.specification.frontSuspension =
  "Telescopic, 41 mm forks, 1500 mm travel";

//Display both original and cloned bike object
console.log("Original Bike Object : ", Bike);
console.log("Cloned Bike Object : ", BikeCopy);
console.log(
  "**********************************************************************************************************************************************************"
);

//Change the value of engineCc of original bike

Bike.specification.engine.engineCc = "340Cc";

console.log("Original Bike Object : ", Bike);
console.log("Cloned Bike Object : ", BikeCopy);
console.log(
  "**********************************************************************************************************************************************************"
);
