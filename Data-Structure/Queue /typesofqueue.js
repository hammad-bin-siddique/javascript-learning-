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



//? Topic 16: Circular Queue 🔄
// yani jab fixed size ka queue ho to phir us main or dynamically change naw mean ke jab rear end pe ponch jai ga to ye lage ga ke jaga fill ha halake 0 index ya one jaha se kuch dequeue hua wo kahli rahi gi usi ke lia circular queue ka use karte hain javascript main simple queue bhi dynamically work karta ha yaha sirf concept ke lia circular queue ka use karte hain 

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.item = new Array(size).fill(null);
        this.front = -1;
        this.rear = -1;
        this.count = 0;
    };

    isFull() {
        return this.count === this.size;
    }

    isEmpty() {
        return this.count === 0;
    };
    enqueue(push) {
        if(this.isFull()) {
            console.log("Queue Full");
            return;
        }
        if(this.isEmpty()) {
            this.front = 0;
        };
        this.rear = (this.rear + 1) % this.size;
        this.item[this.rear] = push;
        this.count++;
    };

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }
        let removed = this.item[this.front];
        this.item[this.front] = null;
        this.front = (this.front + 1) % this.size;
        this.count--;
        if(this.isEmpty()) {
            this.front = -1;
            this.rear = -1
        };
        return removed;
    };

    peek() {
        if(this.isEmpty()){
            return null;
        }
        return this.item[this.front];
    };

    print(){
        console.log(this.item);
        console.log(`Front: ${this.front}, Rear: ${this.rear}, Count: ${this.count}`);
    };
};


const circularQueue = new CircularQueue(4);

console.log("====Circular Queue===")
circularQueue.enqueue("A");
circularQueue.enqueue("B");
circularQueue.enqueue("C");
circularQueue.enqueue("D");
circularQueue.print();

console.log(circularQueue.dequeue()); // A nikla
console.log(circularQueue.dequeue()); // B nikla

circularQueue.print(); // yaha 0 or 1 main null ai ga or c d 2 3 index per ai ge 
circularQueue.enqueue("E"); // E rear per ho or front ka abhi index 2 ho ga jaha C ha first in first out rule se ye index 0 per to ho ga but dequeue karne per C nikle ga naw ke ye
circularQueue.enqueue("F"); // F aya rear per 
circularQueue.print(); // E F C D is tara ho ga 