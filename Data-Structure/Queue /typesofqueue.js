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


//? Topic 17: Priority Queue 🏆

// 🧠 Priority Queue Kya Hai?
// Normal Queue = pehle aao, pehle jao (FIFO)

// Priority Queue = jo IMPORTANT hai — woh pehle nikle ga!
//                  chahe baad mein aaya ho!


class PriorityQueue {
    constructor(){
        this.item = []; // khali array banaya is main object store ho ge khali string nahi keuke priority bhi add karni ha name ya chez ke sath 
    };

    // ab enqueue kare ge element ke sath priority bhi ai gi 
    // 1 variable banaya jis main element or priority save ho gi or abhi ke lia added false kia ha mean ke jab koi new element priority ke sath dale ge agar us ke priority kam hui existing wale to added false ho ga or agar ziada hui to true ho or add ho jai ga front per 


    enqueue(element, priority) {
        let newItem = {element, priority};
        let added = false;

        for (let i = 0; i < this.item.length; i++) {
            if(newItem.priority < this.item[i].priority) {
                this.item.splice(i, 0, newItem);
                added = true;
                break;

                //abhi loop chalaya ha index filhal 0 ha or i main add karte jao elements ko jab tak ke array ke length 0 nahi ho jati 
                //acha neache condition lagai ha ke agar new item ke priority kam hui existing se to added ko true kar do mean ke pehle zaid aya 4 priority ke sath phir ali aya 1 priority ke sath ali ke priority kam ha zaid se is lia is ko front per le ai ge or zaid ko age or added true ho jai ga 
            }
        }

        if(!added) {
            this.item.push(newItem);
            // mean ke agar man lo new item ke priority ziada ha existing se to phir added false ho jai ga or ye new item push ho jai ga rear per 
        }
    };

    //?dequeue Function banana 
    dequeue() {
        if(this.isEmpty()) {
            return null;
        }
        return this.item.shift();
    };

    //? Peek Function banana 

    peek() {
        if(this.isEmpty()) {
            return null;
        }
        return this.item[0];
    };

    //? Is Empty function banana 

    isEmpty() {
        return this.item.length === 0;
    };

    //? Size Function banana 

    size() {
        return this.item.length;
    };

    print() {
        this.item.forEach(items => {
            console.log(`Items => ${items.element} Priority => ${items.priority}`);
        });
    };
};

const priorityQueue = new PriorityQueue();


priorityQueue.enqueue("Faizan", 3);
priorityQueue.enqueue("Bilal", 4);
priorityQueue.enqueue("Hammad", 1);
priorityQueue.enqueue("Momina", 2); 

priorityQueue.print(); // front per hammad ho ga second per momina phir faizan and last mian bilal
console.log(priorityQueue.peek()); // Hammad ho ga peek per 
console.log(priorityQueue.dequeue()); // Hammad Nikal gia 

priorityQueue.print(); // abhi hammad nahi ho ga highest priority Momina ki ho gi 
console.log(priorityQueue.peek()); // Momina ho gi 
