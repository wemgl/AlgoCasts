// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let shouldCapitalize = true;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (shouldCapitalize) {
            result += str[i].toUpperCase();
            shouldCapitalize = false;
        } else {
            if (str[i] === ' ') {
                shouldCapitalize = true;
            }
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;
