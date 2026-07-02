//! Phase 4: Types of Queue 🗂️

// Phase 4 Mein 4 Types Hain:

// Topic 15 — Simple Queue      → basic FIFO
// Topic 16 — Circular Queue    → last se wapas first pe
// Topic 17 — Priority Queue    → important elements pehle
// Topic 18 — Deque             → double ended queue


//? Topic 15: Simple Queue — Basic FIFO 📋


class SimpleQueue {

    constructor() {
        this.items = [];
    };

    enqueue(element) {
        this.items.push(element);
    };
    
    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        return this.items.shift();
    };

    isEmpty() {
        return this.items.length === 0;
    };

    peek() {
        if(this.isEmpty()) {
            return null
        }
        return this.items[0];
    };

    size() {

        return this.items.length;
    };

    print() {
        console.log(this.items);
    };
};

const typeOneQueue = new SimpleQueue();

typeOneQueue.enqueue("Pakistan");
typeOneQueue.enqueue("India");
typeOneQueue.enqueue("China");
typeOneQueue.enqueue("Japan");
typeOneQueue.print(); 
console.log(typeOneQueue.dequeue()); // pakistan nikla
console.log(typeOneQueue.dequeue()); // india nikla

typeOneQueue.print(); // sirf 2 ho ge or front per china ho ga 

typeOneQueue.enqueue("Iran");
typeOneQueue.print(); //china front per ho ga or japan rear per or sab se last main iran ho ga 

console.log(typeOneQueue.peek()); // china ho ga 