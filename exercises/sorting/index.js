// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // The largest number will be at the end of the array at the end of each iteration
    // of this outer loop.
    for (let i = 0; i < arr.length; i++) {
        // This loop should iterate up to one less than the outer loop because it needs
        // and element to the right for its comparison (therefore it won't try to access
        // an element that's out-of-bounds).
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function swap(arr, first, second) {
    // Don't swap anything if the first and second indices are the same.
    if (first === second) {
        return;
    }
    const tmp = arr[first];
    arr[first] = arr[second];
    arr[second] = tmp;
}

function selectionSort(arr) {
    // The smallest number will be at the beginning of the array at the end of each iteration
    // of this outer loop.
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            // The element we thought was the minimum is not actually the minimum
            // (because the element at j is smaller), so update the indexOfMin.
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }
        swap(arr, i, indexOfMin);
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    // Slice from mid to end of arr
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges two sorted arrays into a single sorted array.
 * @param left A sorted array.
 * @param right A sorted array.
 * @returns A single sorted array.
 */
function merge(left, right) {
    let results = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    // while (left.length) {
    //     results.push(left.shift());
    // }
    // while (right.length) {
    //     results.push(right.shift());
    // }
    // return results;
    return [...results, ...left, ...right];
}

module.exports = {bubbleSort, selectionSort, mergeSort, merge};
