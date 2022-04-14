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
    let template = [];

    // Arithmetic sequence formula (2n-1)
    let columnCount = 2 * n - 1;
    for (let i = 0; i < columnCount; i++) {
        template.push('#');
    }

    if (n === 1) {
        console.log(template[0]);
        return;
    }

    // Add the last row, first
    let results = [template.join('')];
    // Add the other rows, accounting for the already added row by
    // subtracting 1.
    for (let i = 0; i < n - 1; i++) {
        template[i] = ' ';
        template[columnCount - i - 1] = ' ';
        results.push(template.join(''));
    }

    // Print out the rows in reverse order since they were added in reverse
    // (i.e. the bottom row was added first, so print it last)
    for (let i = results.length - 1; i >= 0; i--) {
        console.log(results[i]);
    }
}

module.exports = pyramid;
