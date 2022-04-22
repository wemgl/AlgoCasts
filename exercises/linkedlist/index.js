// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertFirst(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            this.head = new Node(data, this.head);
        }
    }

    size() {
        let node = this.head;
        let size = 0;
        while (node) {
            size += 1;
            node = node.next;
        }
        return size;
    }

    getFirst() {
        return this.head;
    };

    getLast() {
        let node = this.head;
        if (!node) {
            // node is null here, so return immediately
            return node;
        }
        // The tail will have a `next` reference that's null, so iterate
        // until you find a node where `next` is null—that's going to be the tail.
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        // Any other nodes that were previously linked will be garbage collected
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        let previousNode;
        while (node.next) {
            previousNode = node;
            node = node.next;
        }
        if (previousNode) {
            previousNode.next = null;
        } else {
            // previousNode was never initialized because node.next is null,
            // which means there's only a single node in the list, and it's the
            // head/tail node. Remove the "last node" by setting the head to null.
            this.head = null;
        }
    }

    insertLast(data) {
        if (!this.head) {
            // If there's no head node, then assign a Node with data
            // to be the new head.
            this.head = new Node(data);
            return;
        }
        let node = this.getLast();
        node.next = new Node(data);
    }

    getAt(index) {
        let pos = 0;
        let node = this.head;
        while (node) {
            if (index === pos) {
                return node;
            }
            node = node.next;
            pos += 1;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            // Remove the head node if there is one by making the second
            // node the new head.
            this.head = this.head.next;
            return;
        }
        // Remove all other nodes in the list.
        let previous = this.getAt(index - 1);
        // Make sure there's a previous node and that it has a next node.
        // (i.e. we're not trying to remove a node outside the list)
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        // If there's no head, then make newNode the head.
        if (!this.head) {
            this.head = new Node(data);
        }
        // If there's already a head node, then make the new node the
        // new head of the list.
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // Make the node prior to the one at index point to new node and have
        // the new node point to anything the previous node used to point to.
        let previous = this.getAt(index - 1);
        if (!previous) {
            // If the index at which to insert the new node is greater than the
            // size of the list, then make newNode the new tail.
            let last = this.getLast();
            last.next = new Node(data);
            return;
        }
        previous.next = new Node(data, previous.next);
    }

    forEach(cb) {
        let node = this.head;
        if (!node) {
            return;
        }
        let index = 0;
        while (node) {
            cb(node, index);
            node = node.next;
            index += 1;
        }
    }

    // Special syntax that turns this List type into something that works
    // with the for…of syntax in JavaScript.
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = {Node, LinkedList};
