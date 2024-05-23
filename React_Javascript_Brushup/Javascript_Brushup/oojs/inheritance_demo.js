class Employee {
  constructor(empId, name) {
    //initializes data members of object
    (this.empId = empId), (this.name = name);
  }
  //Instance method
  show() {
    console.log("Employee id : ", this.empId + " Employee name : ", this.name);
  }
} //End of Employee super class

//Create subclass manager

class Manager extends Employee {
  constructor(empId, name, incentives) {
    super(empId, name); //Super must be first statement of subclass constructor
    //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.incentives = incentives; //special property of subclass
  }
  //special method of subclass
  getIncentives() {
    return this.incentives;
  }
} //End of subclass

//Creating object of super class
let e1 = new Employee(8096, "Abhay Panchal");
console.log("Employee object details :");
e1.show();

//Creating object of sub class
let m1 = new Manager(8096, "Abhay Panchal", 4500);
console.log("Manager object details :");
m1.show(); //calling inherited method

let incentive = m1.getIncentives(); //calling special method of subclass
console.log("Incentive= ", incentive);
