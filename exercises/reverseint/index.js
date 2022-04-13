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
    let num = Math.abs(n);
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed * Math.sign(n);
}

// function reverseInt(n) {
//     let nStr = n.toString();
//     let reversed = '';
//     for (let c of nStr) {
//         reversed = c + reversed;
//     }
//     let result = parseInt(reversed);
//     return Math.sign(n) * result;
// }

module.exports = reverseInt;
