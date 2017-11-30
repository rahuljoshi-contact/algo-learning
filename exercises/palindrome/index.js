// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str)
{
    // var len = str.length -1 ;
    // var c = str.length / 2 ;
    // var res, cl, rl;
    // for (i=0;i<c;i++){
    //   cl = str.substr(i,1);
    //   j = len-i;
    //   rl = str.substr(j,1);
    //   if (cl != rl)
    //     return false ;
    // }

    var res = str.split('');
    var rev = res.reverse();
    rev = rev.join('');
//debugger;
    return (str === rev)
}
//palindrome("abccba");

module.exports = palindrome;
