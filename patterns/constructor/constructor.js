// simple constructor pattern

// A car "class"
function Car( model ) {

  this.model = model;
  this.color = "silver";
  this.year = "2012";

  this.getInfo = function () {
    return this.model + " " + this.year;
  };

}
var myCar = new Car("ford");
myCar.year = "2010";
console.log( myCar.getInfo() );

// has issues with inheritance and re-use of the code

//prototype pattern

function account (startDate, initialDeposit, typeString) {
  this.startDate = startDate;
  this.initialDeposit = initialDeposit;
  this.typeString = typeString;
}

// single instance of toString function will be used by all accont type objects
account.prototype.toString = function () {
  return 'StartDate: ' + this.startDate + ' amount:' + this.initialDeposit + ' and of type:' + this.typeString ;
}

var checkingAcc = new account('10/01/2017', 2000, 'checking');
console.log(checkingAcc.toString()) ;
var savingsAcc = new account('01/01/2005', 255, 'savings') ;
console.log(savingsAcc.toString()) ;
