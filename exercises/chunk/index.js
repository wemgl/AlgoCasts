// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunks = [];
    let chunk = [];
    let currentSize = 0;

    for (let i = 0; i < array.length; i++) {
        if (currentSize === size) {
            chunks.push(chunk);
            chunk = [array[i]];
            currentSize = 1;
        } else {
            chunk.push(array[i]);
            currentSize += 1;
        }
    }

    if (chunk.length > 0) {
        chunks.push(chunk);
    }

    return chunks;
}

module.exports = chunk;
