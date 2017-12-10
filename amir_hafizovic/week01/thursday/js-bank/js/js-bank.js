console.log('Hello world!');

const bank = [
  {balance: 5.00, name: 'Tom'},
  {balance: 10.00, name: 'Dick'},
  {balance: 20.00, name: 'Harry'}
];
console.log(bank);
const totalSum = function(cash){
  let sum = 0; //total value per each loop iteration
  for (var i = 0; i < cash.length; i++) { //loop for the array
    sum = sum + cash[i]['balance']; //++ amnt from arrays obj 'balance' key
    //console.log(sum);
  }
  return sum;
};
console.log(totalSum(bank));

const addAccount = function(newObject){

  const pushObject = bank.push(newObject);//pushes object from argument to bank array
  //console.log(pushObject);

};

addAccount({'balance': 80.00, 'name': 'Alan'});
addAccount({'balance': 100.00, 'name': 'Lou'});
console.log(totalSum(bank));

const getAccount
