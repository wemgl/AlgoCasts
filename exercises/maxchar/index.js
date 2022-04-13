// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    for (let c of str) {
        if (chars[c]) {
            chars[c] += 1;
        } else {
            chars[c] = 1;
        }
    }

    let result = {char: '', count: -1};
    for (let k in chars) {
        if (chars[k] > result.count) {
            result.char = k;
            result.count = chars[k];
        }
    }

    return result.char;
}

module.exports = maxChar;
