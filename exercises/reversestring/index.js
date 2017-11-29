// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // using array bu substring
    // var len = str.length -1;
    // var r = '';
    // for (i=0;i<=len;i++)
    // {
    //   r = r + str.substr(len-i,1);
    // }

    // using split, array and join with empty string
    var res = str.split('');
    res = res.reverse();
    return res.join('');
}

module.exports = reverse;
