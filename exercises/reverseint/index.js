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

    var neg = new Boolean(false);
    var s = n.toString();
    //remove and keep negative sign
    if (s.substr(0,1) == '-') {
      neg = true;
      s = s.substr(1,s.length-1);
    }

    var res = s.split('');
    res = res.reverse();
    var ans = res.join('');

    if(neg == true)
        ans = '-' + ans ;

    debugger;
    return Number(ans);
}

reverseInt(12);
module.exports = reverseInt;
