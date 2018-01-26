// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  var text = '';
  for (let row = 1; row <= n; row++) {
    text += '#';
    // console.log('\'' + text + spaces +  '\'');
    console.log(text + getspaces(n - row));
  }
}

function getspaces(n) {
  var spaces = '';
  for (let columns = 0; columns < n; columns++) {
    spaces += ' ';
  }
  return spaces;
}

<<<<<<< HEAD
steps(4);
=======
steps(5);

>>>>>>> e47a701e87f444687e7c0207e4aece0ba1f70eee
module.exports = steps;
