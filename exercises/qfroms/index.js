// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.left = new Stack();
        this.right = new Stack();
    }

    add(record) {
        this.left.push(record);
    }

    remove() {
        while (this.left.peek()) {
            this.right.push(this.left.pop());
        }
        let result = this.right.pop();
        while (this.right.peek()) {
            this.left.push(this.right.pop());
        }
        return result;
    }

    peek() {
        while (this.left.peek()) {
            this.right.push(this.left.pop());
        }
        let result = this.right.peek();
        while (this.right.peek()) {
            this.left.push(this.right.pop());
        }
        return result;
    }
}

module.exports = Queue;
