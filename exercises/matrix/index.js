// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = [];
    let gridSize = n;

    // Create NxN grid - O(n^2)
    for (let r = 0; r < gridSize; r++) {
        result.push([]);
    }

    let counter = 1;
    let maxCount = n * n;
    let r = 0, c = 0;

    while (counter <= maxCount) {
        // Increment the counter up the top row
        while (c < gridSize && counter <= maxCount) {
            result[r][c] = counter;
            counter += 1;
            c += 1;
        }

        // Increment the counter down the right column
        r += 1;
        c -= 1; // Correct c for last iteration of the previous while loop
        while (r < gridSize && counter <= maxCount) {
            result[r][c] = counter;
            counter += 1;
            r += 1;
        }

        // Increment the counter down the bottom row
        c -= 1;
        r -= 1; // Correct r for last iteration of the previous while loop
        while (c >= 0 && counter <= maxCount) {
            result[r][c] = counter;
            counter +=1;
            c -= 1;
        }

        // Increment the counter up the left column
        r -= 1;
        c += 1; // Correct c for last iteration of the previous loop
        while (r >= 1 && counter <= maxCount) {
            result[r][c] = counter;
            counter += 1;
            r -= 1;
        }

        // Shrink the grid
        gridSize -= 1;

        // Start at first row in the inner grid
        r += 1;

        // The inner square starts along the diagonal
        // e.g. (r0, c0) -> (r1, c1) -> (r2, c2) -> , …, -> (rn, cn)
        c = r;
    }

    return result;
}

module.exports = matrix;
