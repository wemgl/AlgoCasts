// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    if (!list.head) {
        return null;
    }

    let slow = list.getFirst();
    let fast = list.getFirst();

    // Move fast up by n nodes
    let count = 0;
    while (count < n) {
        fast = fast.next;
        count += 1;
    }

    // Now move slow and fast one node at a time
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // When fast reaches the tail that means slow is n nodes from the tail, so return it
    return slow;
}

module.exports = fromLast;
