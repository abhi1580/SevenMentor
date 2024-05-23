// Import Account class from account module
import Account from "../Assignment8/account.mjs";
// Import Savings Account class from saving_account module
import Saving_Account from "../Assignment9/saving_acc.mjs";
// Import Fixed Deposit Account class from fixed_deposit_account module
import Fixed_Deposit_Account from "../Assignment10/fixed_deposit_account.mjs";

// Create objects of all classes - Account, SavingAccount, Fixed Deposit Account
let accountObj = new Account(1234567899874562, "Abhay Panchal", 14500000.0);
let savingAccountObj = new Saving_Account(4547986247899445, "Gaurav Ahuja", 2500000.0, 14);
let fdObj = new Fixed_Deposit_Account(4562478964422146, "Sham Pandit", 9450000.0, 160000.0, 24);

// Log details of each object and invoke appropriate methods
console.log("Account object details:");
accountObj.printAccount(); // Call printAccount method of Account class

console.log("----------------------------------------------------------------------------------")

console.log("Saving Account object details:");
savingAccountObj.printAccount(); // Call overridden printAccount method from Saving_Account class
console.log("Duration of Saving Account in Month:", savingAccountObj.getDuration()); // Invoke getDuration method of Saving_Account class

console.log("----------------------------------------------------------------------------------")

console.log("Fixed Deposit Account object details:");
fdObj.printAccount(); // Call overridden printAccount method from Fixed_Deposit_Account class
console.log("Term of Fixed Deposit Account:", fdObj.getTerm()); // Invoke getTerm method of Fixed_Deposit_Account class

console.log("----------------------------------------------------------------------------------")
