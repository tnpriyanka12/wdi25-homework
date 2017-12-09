
function BankAccount()
{
    this.status = true;
}
BankAccount.prototype.getStatus = function getAccountType(){
    return this.status;
};

function SavingsAccount( name, amount )
{
    this.name   = name;
    this.amount = amount;
}

SavingsAccount.prototype = new BankAccount(); // Inheritance

var JacksAccount = new SavingsAccount( 'Jack', 20 );
document.write( "Is " + JacksAccount.name + "'s bank account active? " + JacksAccount.getStatus() );
