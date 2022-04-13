// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let stringAMapped = mapString(stringA);
    let stringBMapped = mapString(stringB);

    if (Object.keys(stringAMapped).length !== Object.keys(stringBMapped).length) {
        return false;
    }

    for (let k in stringAMapped) {
        if (stringAMapped[k] !== stringBMapped[k]) {
            return false;
        }
    }

    return true;
}

function mapString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split("")
        .reduce((acc, val, _i, _arr) => {
            if (acc[val]) {
                acc[val] += 1;
            } else {
                acc[val] = 1;
            }
            return acc;
        }, {});
}

module.exports = anagrams;
