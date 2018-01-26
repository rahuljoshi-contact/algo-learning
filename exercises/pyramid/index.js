// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        var text = '';
        var space = '';
        var numHashes = i + i - 1;
        var numSpaces = (n + n - 1 - numHashes) / 2;
        for (var hashCount = 0; hashCount < numHashes; hashCount++) {
            text += '#';
        }
        for (var spaceCount = 0; spaceCount < numSpaces; spaceCount++) {
            space += ' ';
        }

        console.log(space + text + space);
    }
}

//pyramid(3);

module.exports = pyramid;
