// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    var s = n.toString();
    var res = s.split('');
    res = res.reverse();
    var ans = res.join('');

    //remove and keep negative sign
    // var neg = new Boolean(false);
    // if (s.substr(0,1) == '-') {
    //   neg = true;
    //   s = s.substr(1,s.length-1);
    // }
    //if(neg == true)
    //    ans = '-' + ans ;
    debugger;
    return parseInt(ans) * Math.sign(n);
}

reverseInt(12);
module.exports = reverseInt;
