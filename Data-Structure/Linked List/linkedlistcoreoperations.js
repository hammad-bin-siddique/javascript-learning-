//! Phase 3: Core Operations 


//? Phase 3 — Topic 1: Node Class


class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    };
};

const node1 = new Node(10);
console.log(node1); // Node { item: 10, next: null }


//? Phase 3 — Topic 2: LinkedList Class (head, tail, length tracking)


class LinkedList {
    constructor() {
        this.head = null; // start main first node null ha filhal
        this.tail = null; // akhiri node start main null ho ga 
        this.length = 0; // total nodes ke length count kare ga start main 0 ha 
    };

    //? Phase 3 — Topic 3: Insertion — append() (list ke end mein naya node add karna)

    //? appent method

    append(data) {
        // abhi new node bane ga 

        const newNode = new Node(data);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;

        };
        this.length++;
    }
}


const items = new LinkedList();
items.append(10); // head;
items.append(20);
items.append(30); // tail

console.log(items.head); // 10
console.log(items.tail); // 30
console.log(items.length); // 3