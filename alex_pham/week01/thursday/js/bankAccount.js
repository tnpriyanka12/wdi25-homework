const Account = function (name, balance) {

  this.name = name;
  this.balance = balance;

  console.log("Name: " + name + "; Balance: " + balance);
};

Account.prototype.deposit = function (depositAmount) {
  this.balance += depositAmount;
  console.log("Your balance is now " + this.balance);
};

Account.prototype.withdraw = function (withdrawAmount) {
  var newBalance = this.balance - withdrawAmount;
  if (newBalance <= 0) {
    console.log("You have insufficient funds!!!");
    return false;
  } else {
    this.balance = newBalance;
    console.log("Your balance is now " + this.balance);
    return true;
  }
};

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



const AlexPhamAccount = new Account ("Alex Pham", 500);
const KateSmithAccount = new Account ("Kate Smith", 10000);
const OJSimsonAccount = new Account ("OJ Simson", 70000000);
const WillSmithAccount = new Account ("Will Smith", 900000000);

AlexPhamAccount.transfer(300, KateSmithAccount);
console.log(AlexPhamAccount.balance);
