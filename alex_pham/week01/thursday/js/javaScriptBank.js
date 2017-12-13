// JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts

// Accounts have a current balance and owners name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips

// Don't overthink this. Shorter code is probably the answer.
//
// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

 // Accounts have a current balance and owner's name
 const Account = function (name, balance) {

   this.name = name;
   this.balance = balance;

   console.log("Name: " + name + "; Balance: " + balance);
 };

 // Deposit from an account to change the balance.
 Account.prototype.deposit = function (depositAmount) {
   this.balance += depositAmount;
   console.log("Your balance is now " + this.balance);
 };

 // Withdraw from an account to change the balance
 Account.prototype.withdraw = function (withdrawAmount) {
   var newBalance = this.balance - withdrawAmount;

   // Check for the accounts cannot have negative values
   if (newBalance <= 0) {
     console.log("You have insufficient funds!!!");
     return false;
   } else {
     this.balance = newBalance;
     console.log("Your balance is now " + this.balance);
     return true;
   }
 };

 // Allow account can transfer amounts between two accounts.
 // check if withdraw amount have enough amount before withdraw.
 Account.prototype.transfer = function (transferAmount, account){
   if (account instanceof Account) {
     if (this.withdraw(transferAmount)) {
       account.deposit(transferAmount);
       return true;
     } else {
       console.log("An error occured withdrawing that amount");
       return false;
     }
   }
   
   console.log("Provided account was not an account with our bank");
   return false;
 };



  const AlexPhamAccount = new Account ("Alex Pham", 5000);
  const KateNguyenAccount = new Account ("Kate Nguyen", 10000);
  const OJSimsonAccount = new Account ("OJ Simson", 70000000);
  const WillSmithAccount = new Account ("Will Smith", 900000000);

  AlexPhamAccount.transfer(300, KateNguyenAccount);
  console.log(AlexPhamAccount.balance);
  // AlexPAccount.transfer(300, KateNguyenAccount);
