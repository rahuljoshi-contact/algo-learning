// recursion example of factorial, cool code
// var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
// console.log(factorial(6));


// Singleton =
// (
//   function ()
//   {
//     var instantiated;
//     function init()
//     {
//       return {
//         publicMethod: function () { console.log('hello world');},
//         publicProperty: 'test'
//       };
//     }
//
//     return {
//       getInstance: function () {
//         if (!instantiated){ instantiated = init(); }
//         return instantiated ;
//       }
//     };
//   }
// )();

Singleton = (function () {

  var instance ;

  function init(x){
    var object = new Object();
    console.log("instance created: " + x);
    return object ;
  }

  return {
    getInstance: function (x) {
      if (!instance){
        instance = init(x);
      }
      return instance ;
    }
  };

})();


Singleton.getInstance(5);
Singleton.getInstance(6);
