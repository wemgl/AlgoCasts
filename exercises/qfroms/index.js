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
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        let result = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        let result = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return result;
    }
}

module.exports = Queue;
