// Import Account class (Superclass) from account module
import Account from "../Assignment8/account.mjs";

// Create Account's Subclass Fixed Deposit Account using ES6
class Fixed_Deposit_Account extends Account {
  constructor(accountNumber, ownerName, balance, depositAmount, termInMonths) {
    super(accountNumber, ownerName, balance);
    this.depositAmount = depositAmount; // Special attribute
    this.termInMonths = termInMonths; // Special attribute
  }

  // Method to get term in months
  getTerm() {
    return this.termInMonths;
  }

  // Override printAccount() method of Superclass (Polymorphism)
  // Inside this method call super.printAccount() method and also display depositAmount & termInMonths
  printAccount() {
    super.printAccount(); // Call superclass method using super keyword
    console.log(
      "Deposit Amount: ₹" +
        this.depositAmount +
        " || " +
        "Terms in Months: " +
        this.termInMonths
    );
  }
}
export default Fixed_Deposit_Account;
