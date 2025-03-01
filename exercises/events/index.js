// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        this.registry = {};
    }

    // Register an event handler
    on(eventName, callback) {
        if (this.registry[eventName]) {
            this.registry[eventName].push(callback);
        } else {
            this.registry[eventName] = [callback];
        }
    }

    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
        if (!this.registry[eventName]) {
            return;
        }
        for (let callback of this.registry[eventName]) {
            callback();
        }
    }

    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        delete this.registry[eventName];
    }
}

module.exports = Events;
