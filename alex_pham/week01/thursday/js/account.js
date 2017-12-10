z
const Account = function (amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
};
const deposit = function (amount) {
    this.balance += amount;
};

const withdraw = function (amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
       console.log("Insufficient funds");
    }
};

const toString = function () {
    return "Balance: " + this.balance;
};

// const account = new Account(50);
Account(50);
Account.deposit(10);
console.log(Account.toString());
Account.withdraw(7);
console.log(Account.toString());
Account.withdraw(8);
console.log(Account.toString());
