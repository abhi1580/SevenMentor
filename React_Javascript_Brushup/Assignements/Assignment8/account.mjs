// Create Module file account.mjs
/* Create and export ES6 class Account with below data members and methods
accountNumber
ownerName
balance
printAccount() // which displays all the details of Account object*/

export default class Account {
  constructor(accountNumber, ownerName, balance) {
    (this.accountNumber = accountNumber),
      (this.ownerName = ownerName),
      (this.balance = balance);
  }
  printAccount() {
    console.log(
      `Account No. : ${this.accountNumber} || Owner Name : ${this.ownerName} || Balance : ₹${this.balance}`
    );
  }
}
