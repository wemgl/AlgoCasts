// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// This implementation is a modified version of the depth first traversal algorithm.
// Keep that in mind!
function levelWidth(root) {
    // Initialize array of counts for each level. Each index in the counts array
    // is one level in the tree.
    let counts = [0];
    // Initialize a buffer containing two elements
    // 1. The root node as the first element
    // 2. A value to flag that the last child of a node has been reached (a.k.a stopper)
    let buf = [root, null];

    // Iterate over the buffer of nodes while there's more than one element
    // (If there's a single element left, then that means only the stopper element is left
    // and all the node's children have been processed).
    while (buf.length > 1) {
        // 1. Take the first element out of the buffer
        let node = buf.shift();
        // 2. Check whether the element is an actual node or the stopper (which is null)
        //  If the element is an actual value, then add its children to the buffer and
        //  increment the count of children at its row.
        if (node) {
            buf.push(...node.children);
            counts[counts.length - 1] += 1;
        } else {
            // Else, push a new stopper at the end of buffer to signify that a new row's children
            // is about to be processed.
            buf.push(null);
            // Add a new element to start counting
            counts.push(0);
        }
    }
    return counts;
}

module.exports = levelWidth;
