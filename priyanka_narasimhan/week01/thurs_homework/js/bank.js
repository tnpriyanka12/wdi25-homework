/*
1 bank
array of accounts
accounts ----- objects

methods
->add accounts() - add new account to array of accounts
->totalMoney () - Sum of money in all accounts
*/




//BASIC ACCOUNT OBJECT
const theBigBank = {

    //All accounts in cartForParty
     allAccounts : [],


  ownerName : "",
  accBalance : 0,

  //Total amount in bank function - returns total sum of all accounts
   totalAmtInBank : function(allaccounts){
    var sum = 0;
        if (this.allAccounts.length === 0) {
        } else {
           for( let i = 0; i < this.allAccounts.length; i++ ) {
             sum += parseFloat(allaccounts[i].accBalance);
            }
        }
    console.log(` Total MONEY in the bank is ${sum}`);
    return sum;
  },
  //Adding account
   addAccount : function(newAccount) {
    console.log(`Adding new account`);
    var newTotalSumInBank = 0;
    this.allAccounts.push(newAccount);
    this.totalAmtInBank(this.allAccounts);
  },
  depositMoney : function(name , depAmt){
    console.log(`Money deposited is ${depAmt}`);
    for(var i=0; i<this.allAccounts.length;i++){
      if(this.allAccounts[i].ownerName === name){
        this.accBalance += depAmt;
      }
    }

    return this.accBalance;
  },

// add two inputs for withdrawMoney function - one for the account name and another for the amount
  withdrawMoney : function(name, withdrawAmt){
    console.log(`Money withdrawn is ${withdrawAmt}`);
    for(var i=0; i<this.allAccounts.length;i++){
      if(this.allAccounts[i].ownerName === name){
        this.accBalance -= withdrawAmt;
      }
    }
    console.log(`Current Balance is:  ${this.accBalance}`);
    return this.accBalance;
  }



};







//Adding new accounts
theBigBank.addAccount({ownerName: 'Tom', accBalance: 0.50});
theBigBank.addAccount({ownerName: 'Tommy', accBalance: 3.50});
theBigBank.addAccount({ownerName: 'Timmy', accBalance: 70.50});
theBigBank.addAccount({ownerName: 'Timothy', accBalance: 100.50});
theBigBank.addAccount({ownerName: 'Tilly', accBalance: 5660.50});
theBigBank.addAccount({ownerName: 'Silly', accBalance: 10.50});
theBigBank.withdrawMoney('Tom', 1);
theBigBank.depositMoney('Tom', 100);
theBigBank.withdrawMoney('Tom', 10);
theBigBank.withdrawMoney('Tom', 20);
theBigBank.depositMoney('Tom', 100);
theBigBank.withdrawMoney('Tom', 10);
theBigBank.withdrawMoney('Tommy', 20);
theBigBank.depositMoney('Timmy', 100);
theBigBank.withdrawMoney('Tom', 10);
theBigBank.withdrawMoney('Tom', 20);
theBigBank.depositMoney('Timothy', 100);
theBigBank.withdrawMoney('Silly', 10);
theBigBank.withdrawMoney('Tom', 20);
theBigBank.depositMoney('Tom', 100);
theBigBank.withdrawMoney('Tom', 10);
theBigBank.withdrawMoney('Tom', 20);
theBigBank.addAccount({ownerName: 'Hully', accBalance: 100.00});
theBigBank.depositMoney('Hally', 500);
theBigBank.withdrawMoney('Hally', 600);
