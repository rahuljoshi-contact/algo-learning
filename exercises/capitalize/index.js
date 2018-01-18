// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  // break string at space
  // split to each letter, capitalize first and then join again, repeat

/*
  var ans = [];
  for (var word of str.split(' ')){
    word = word.split('');
    word[0] = word[0].toUpperCase();
    ans.push(word.join(''));
  }
  return ans.join(' ');
*/
/*
var space_found = false;
var first_char = true ;
var ans = [] ;
for (var char of str.split('')){
  if (space_found === true  || first_char === true){
    char = char.toUpperCase();
    space_found = false;
    first_char = false;
  }
  if (char === ' '){
    space_found = true;
  }
  ans.push(char);

  return ans.join('');
}
*/

var ans = [];
for (let word of str.split(' ')){
  ans.push(word[0].toUpperCase() + word.slice(1));
}
return ans.join(' ');

}

module.exports = capitalize;
