// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function memoize(fn) {
//     let memo = {};
//     return function (...args) {
//         let n = args[0];
//         if (memo[n]) {
//             return memo[n];
//         }
//         memo[n] = fn(n);
//         return memo[n];
//     };
// }

// Slow recursive solution that will be wrapped by a generic memoize function
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// fib = memoize(fib);

// Solution using memoization inside the fib function (the memo is a global variable)
// let memo = {
//     0: 0,
//     1: 1
// };
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//     if (memo[n]) {
//         return memo[n];
//     }
//     memo[n] = fib(n - 1) + fib(n - 2);
//     return memo[n];
// }

// Iterative solution
function fib(n) {
    let result = [0, 1];
    if (n === 0) {
        return result[0];
    } else if (n === 1) {
        return result[1];
    } else {
        for (let i = 2; i <= n; i++) {
            let tmp = result[1];
            result[1] = result[0] + result[1];
            result[0] = tmp;
        }
        return result[1];
    }
}

module.exports = fib;
