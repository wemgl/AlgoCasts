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
        const callbacks = this.registry[eventName];
        if (!callbacks) {
            return;
        }
        for (let callback of callbacks) {
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
