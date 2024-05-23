/* Create Module file saving_acc.mjs
import Account class (Superclass) from account module Create Account's Sub class Savings Account using ES6
durationInMonths ( special attribute or data member)
getDuration() // special method which returns durationInMonths
Override printAccount() method of Super class (Polymorphism)
Inside this method call super.printAccount() method and also display durationInMonths
export Savings Account class */

import Account from "../Assignment8/account.mjs";

class Saving_Account extends Account {
  constructor(accountNumber, ownerName, balance, durationInMonths) {
    super(accountNumber, ownerName, balance);
    this.durationInMonths = durationInMonths;
  }
  getDuration() {
    return this.durationInMonths;
  }
  //Method overriding or method shadowing
  printAccount() {
    super.printAccount(); //calling super class method using super reference
    console.log("Duration in months : ", this.durationInMonths);
  }
}
export default Saving_Account;
