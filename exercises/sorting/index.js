// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
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
    const tmp = arr[first];
    arr[first] = arr[second];
    arr[second] = tmp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }
        swap(arr, i, indexOfMin);
    }
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = {bubbleSort, selectionSort, mergeSort, merge};
