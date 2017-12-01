// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    // solution #3
    stringA.replace(/[^\W]/g, "").toLowerCase();
    stringB.replace(/[^\W]/g, "").toLowerCase();

    // solution #2
    // var sA = [];
    // var sB = [];
    // for (var char of stringA.toLowerCase())
    // {
    //   if (char.match(/[a-z]/i))
    //     sA.push(char);
    // }
    // for (var char of stringB.toLowerCase())
    // {
    //   if (char.match(/[a-z]/i))
    //     sB.push(char);
    // }
    if (stringA.length != stringB.length)
      return false;
    else {
      for (var item of stringA){
        console.log(item);
        if (!stringB.includes(item))
          return false;
      }
    }
    return true ;

    //solution #1
    // split the first stringA
    // convert to lower case and make sure character is not a special character
    // then see if it is present in the other string in lowercase
    // also check if the size of the two strings is same

/*
    var retVal = true;
    var c1 = 0;
    var c2 = 0 ;
    //var temp = stringA.toLowerCase();
    for (var char of stringA.toLowerCase())
    {
      if (char.match(/[a-z]/i)) {
        if (!stringB.toLowerCase().includes(char)){
          retVal = false ;
          break;
        }
        c1++;
      debugger;
      }
    }
    for (var char of stringB.toLowerCase())
    {
      if (char.match(/[a-z]/i)) {
        if (!stringA.toLowerCase().includes(char)){
          retVal = false ;
          break;
        }
        c2++;
      debugger;
      }
    }
    if (c1 == c2 && retVal)
      return retVal ;
    else {
      return false;
    }
*/

}
//anagrams('One One', 'Two two two')

module.exports = anagrams;
