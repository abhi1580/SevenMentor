/* Create class Hotel using parameterized constructor function with below data and method properties
name
city
state
country
noOfRooms */
class Hotel {
  constructor(name, city, state, country, noOfRooms) {
    (this.hotelName = name),
      (this.city = city),
      (this.state = state),
      (this.country = country),
      (this.noOfRooms = noOfRooms);
  }
  displayDetails() {
    console.log(
      `Hotel name : ${this.hotelName} City : ${this.city} State : ${this.country} No. of Rooms : ${this.noOfRooms}`
    );
    console.log(
      "**********************************************************************************************************************************************************"
    );
  }
}
//Create 4 objects of hotel class with different data

let hotel1 = new Hotel("Vrundavan", "Latur", "Maharashtra", "India", 44);
let hotel2 = new Hotel("Panchdevi", "Nilanga", "Maharashtra", "India", 50);
let hotel3 = new Hotel("Sadguru", "Pune", "Maharashtra", "India", 60);
let hotel4 = new Hotel(
  "JW Marriott Hotel",
  "Pune",
  "Maharashtra",
  "India",
  415
);

//Display details of each hotel object on console
hotel1.displayDetails();
hotel2.displayDetails();
hotel3.displayDetails();
hotel4.displayDetails();
