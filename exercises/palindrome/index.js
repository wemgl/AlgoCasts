// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let isPalindrome;
    for (let i = 0; i < str.length; i++) {
        isPalindrome = str[i] === str[str.length - i - 1];
    }
    return isPalindrome;
}

// function palindrome(str) {
//     let reversed = '';
//     for (let c of str) {
//         reversed = c + reversed;
//     }
//     return str === reversed;
// }

module.exports = palindrome;
