// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left-hand child is
// less than the parent node's value, and that
// every node's right-hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // If the current node's data is outside the range of the minimum and maximum
    // values, then return false because the BST is not valid.
    if (min && node.data < min || max && node.data > max) {
        return false;
    }
    // Check that there's a left node, and if there is, then call validate again
    // with the left node. Pass the whatever value was given in the min arg as minimum, but
    // use the current node's data as maximum because no nodes in the left subtree
    // should be larger (i.e. this node's data is the maximum amount any data
    // in the subtree can be)
    if (node.left) {
        return validate(node.left, min, node.data);
    } else if (node.right) {
        // Check that there's a right node, and if there is, then call validate again
        // with the right node. Pass the whatever value was given in the max arg as maximum, but
        // use the current node's data as minimum because no nodes in the right subtree
        // should be smaller (i.e. this node's data is the minimum amount any data
        // in the subtree can be)
        return validate(node.right, node.data, max);
    } else {
        // The node has no children, so return true—assume the node is valid when it has no children.
        return true;
    }

}

module.exports = validate;
