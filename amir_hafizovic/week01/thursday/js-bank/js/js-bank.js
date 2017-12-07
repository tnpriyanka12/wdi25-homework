console.log('Hello world!');

const bank = [
  {balance: 5.00, name: 'Tom'},
  {balance: 10.00, name: 'Dick'},
  {balance: 20.00, name: 'Harry'}
]
const totalSum = function(cash){
  let sum = 0;
  for (var i = 0; i < cash.length; i++) {
    sum = sum + cash[i]['balance'];
    //console.log(sum);
  }
  return sum;
}
console.log(totalSum(bank))
