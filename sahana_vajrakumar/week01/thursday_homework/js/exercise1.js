// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

let accounts = [
  {name: "john" , currentBalance : 100 } ,
  {name: "mx" , currentBalance : 100 } ,
  {name: "david" , currentBalance : 100 }
];

let bankTotalBalance =0;

let bank = {
  totalAmount:function(){
    for ( var i = 0; i < accounts.length; i++ ) {
 bankTotalBalance = bankTotalBalance + accounts[ i ].currentBalance;
}
console.log(`Total Bank Balance : ${bankTotalBalance}`);
},

addNewAccount:function(newName , deposit){
  let userNameExists = false;
  for(i = 0 ; i < accounts.length ; i++){
    if(newName === accounts[i].name){
      userNameExists = true;
    }
  }
  if(!userNameExists){
    accounts.push({ name:newName , currentBalance:deposit });
    }else{
    console.log('account already exists');
    }



},
withdraw:function(name , amount){
  let accountExists = false;
  for(i=0 ; i < accounts.length ; i++){
    if(name === accounts[i].name ){
      accountExists = true;
      if(amount < accounts[i].currentBalance){
        accounts[i].currentBalance = accounts[i].currentBalance - amount;
        console.log(`amount withdrawn from ${name} is ${amount} and the current balance is ${accounts[i].currentBalance}`);
      }else{
        console.log('insufficient balance');
      }
    }
  }
  if(!accountExists){
    console.log('Account not found');
  }

},
deposit:function(name , amount){
  let accountExists = false;
  for(i=0 ; i < accounts.length ; i++){
    if(name === accounts[i].name ){
      accountExists = true;
        accounts[i].currentBalance = accounts[i].currentBalance + amount;
        console.log(`amount deposited to ${name} is ${amount} and the current balance is ${accounts[i].currentBalance}`);

    }
  }
  if(!accountExists){
    console.log('Account not found');
}
},

transfer:function(fromAccount , toAccount , transferAmmount){
  let accountExists = false;
  for(i=0 ; i < accounts.length ; i++){
    if(fromAccount === accounts[i].name ){
      for(j=0 ; j < accounts.length ; j++){
      if(toAccount === accounts[j].name){
        accountExists = true;
        accounts[i].currentBalance = accounts[i].currentBalance - transferAmmount;
        accounts[j].currentBalance = accounts[j].currentBalance + transferAmmount;
        console.log(`The amount transfered from ${fromAccount} to ${toAccount} is ${transferAmmount}`); console.log(`current balance of ${fromAccount} is ${accounts[i].currentBalance} and ${toAccount} is ${accounts[j].currentBalance}`);
      }
    }
    }
  }
  if(!accountExists){
    console.log('account not found');
  }
}
};

bank.addNewAccount("XYZ" , 100);
bank.withdraw("david" , 10);
bank.deposit("john" , 20);
bank.transfer("john", "mx" , 20);
bank.totalAmount();
