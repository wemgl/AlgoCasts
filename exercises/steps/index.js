// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right-hand side!
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
    let template = [];
    for (let i = 0; i < n; i++) {
        template.push(' ');
    }
    for (let i in template) {
        template[i] = '#';
        console.log(template.join(''));
    }
}

module.exports = steps;
