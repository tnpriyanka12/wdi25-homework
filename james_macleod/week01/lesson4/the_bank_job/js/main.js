//The bank job

//Create an object to represent a bank
let balance = null;

const theBank = {
  //The object will contain:
  //  an array the accounts.
  //    each account will be an object that includes:
  //      a name,
  //      a current balanace.
  accounts: [
    {
      name: "Nathan",
      balance: 24574
    },
    {
      name: "Sophie",
      balance: 43732
    },
    {
      name: "Francis",
      balance: 9894
    },
    {
      name: "Harry",
      balance: 18373
    },
    {
      name: "Jen",
      balance: 9383
    }
  ],

  //  a total amount held method.

  addTotal: function() {
    for (var i = 0; i < theBank.accounts.length; i++) {
      let current = theBank.accounts[i].balance;
      balance += parseInt(current);
      // return result;
    }
    console.log(balance);
  },

  //  an add account method.

  addAccount: function(newName, newBal) {
    theBank.accounts.push({
      name: newName,
      balance: newBal
    });
  },
  // Add methods to;
  //    deposit and amount into account
  deposit: function(account, amount) {
    for (var i = 0; i < theBank.accounts.length; i++) {
      let accountHolder = theBank.accounts[i];
      if (account === accountHolder.name) {
        let newBalance = accountHolder.balance + amount;
        accountHolder.balance = newBalance;
        console.log(
          `Deposit complete. ${account}\'s new balance is \$${newBalance}.`
        );
      }
    }
  },
  //    withdraw an amount from an account (the account must have the funds)
  withdraw: function(account, amount) {
    //run through accounts to find match
    for (var i = 0; i < theBank.accounts.length; i++) {
      let accountHolder = theBank.accounts[i];
      if (account === accountHolder.name) {
        //log account info
        console.log(accountHolder);
        //check if the account has the appropriate funds
        if (amount < accountHolder.balance) {
          //if so withdraw from account
          let newBalance = accountHolder.balance - amount;
          accountHolder.balance = newBalance;
          //display new balance
          console.log("Withdraw successful. New balance is $" + newBalance);
          //if not display message
        } else {
          console.log(
            `Balance is \$${accountHolder.balance}. There are insufficient funds for this transaction (deadbeat).`
          );
        }
      }
    }
  },
  //    transfer from one account to another.
  transfer: function(fromAcc, toAcc, amount) {
    //run through accounts to find fromAcc
    for (var i = 0; i < theBank.accounts.length; i++) {
      let transferer = theBank.accounts[i].name;
      let transBal = theBank.accounts[i].balance;
      if (fromAcc === transferer) {
        //check if there is the appropriate funds for transfer
        if (transBal > amount) {
          //if so minus the amount from the Balance
          newBal = transBal - amount;
          transBal = newBal;
          //console.log(newBal);
          //run through accounts to find toAcc
          for (var i = 0; i < theBank.accounts.length; i++) {
            let reciever = theBank.accounts[i].name;
            if (reciever === toAcc) {
              let recBal = theBank.accounts[i].balance;
              //add amount to toAcc Balance
              newRecBal = recBal + amount;
              recBal = newRecBal;
              console.log(
                `Transfer complete. ${reciever} new balance = \$${recBal}.`
              );
            }
          }
        } else {
          console.log(
            `Insufficient funds available in ${fromAcc}\'s account for transfer. Account balance = \$${transBal}.`
          );
        }
      }
    }

    //display success message
    //if not display insufficient funds message
  }
};

theBank.withdraw("Harry", 484733);
// Balance is $18373. There are insufficient funds for this transaction (deadbeat)

theBank.transfer("Francis", "Sophie", 7283);
//Transfer complete. Sophie new balance = $51015.

theBank.deposit("Jen", 3822);
//Deposit complete. Jen's new balance is $13205.
