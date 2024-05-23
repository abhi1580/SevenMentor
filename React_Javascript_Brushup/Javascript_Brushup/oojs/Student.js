//class in traditional js prior to ES6

function Student() {
  (this.stud_name = "Abhay"),
    (this.roll_no = 1580),
    (this.getinfo = function () {
      console.log(
        `Student name : ${this.stud_name} and roll number is : ${this.roll_no}`
      );
    });
} //End of student class
//creating object of student class
let obj = new Student();
//calling method of student class using object
obj.getinfo();
