// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const charMap = {};
  for (let i of str){
    if (charMap[i])
      charMap[i]++
    else {
      charMap[i] = 1
    }
  }
  console.log(charMap);
  var max = 0 ;
  var maxChar = '';
  for (var key in charMap){
    if (charMap[key] > max) {
        max = charMap[key]
        maxChar = key ;
    }
  }

  return maxChar;
}

module.exports = maxChar;
