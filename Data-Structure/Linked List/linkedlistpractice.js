//! Phase 6 - Practice Problems, Topic 1: Reverse a Linked List.

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // start main first node null ha filhal
    this.tail = null; // akhiri node start main null ho ga
    this.length = 0; // total nodes ke length count kare ga start main 0 ha
  }

  //? Phase 3 — Topic 3: Insertion — append() (list ke end mein naya node add karna)

  //? appent method

  append(data) {
    // abhi new node bane ga

    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //? Ab reverse a linked list kare ge

  reverse() {
    let prev = null; // start main prev variable banaya or us ke value null ki
    let current = this.head; // current variable banaya or first node us ko assign kia

    while (current !== null) {
      // yani jab tak current null nahi ho jata loop ko chalao
      let next = current.next; // current ke next node ka link change karne se pehle us ko variable main store kia
      current.next = prev; // ab current se agla jo element ha us ko previous banaya
      prev = current; // ab previous ko current banaya
      current = next; // ab current element ko age chalaya
    }

    this.tail = this.head; // tail jo tha ab wo head  ban gia ha  keuke reverse se wo pehle a gia ha
    this.head = prev; // or head abhi tail ban gia ha
  }

  //!   Topic 2: Find Middle Element (Slow-Fast Pointer Technique)
  //   is topic main ham slow fast pointer technique se middle element find kare ge

  findMiddle() {
    let slow = this.head; // start main slow pointer Head ha mean ke fist element;
    let fast = this.head; // or fast ka bhi first pointer head ha mean ke jaha se start ho ga

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow.item;
  }
}

console.log("===Reverse A Linked List===");
const list = new LinkedList();
list.append("Hammad");
list.append("Hashim");
list.append("Wasib");
list.append("Hamza");

let current = list.head;
while (current !== null) {
  console.log(current.item);
  current = current.next;
}

console.log(list.head.item); // Hammad Head
console.log(list.tail.item); // Hamza Tail

console.log("===Reverse===");
list.reverse();
let currentReverse = list.head;
while (currentReverse !== null) {
  console.log(currentReverse.item);
  currentReverse = currentReverse.next;
}
console.log(list.head.item); // Hamza Head
console.log(list.tail.item); // Hammad Tail

console.log("===Find Middle Element===");
const list2 = new LinkedList();
list2.append(10);
list2.append(20);
list2.append(30);
list2.append(40);
list2.append(50);

console.log(list2.findMiddle()); // odd list (5 elements) middle element = 30

const list3 = new LinkedList();
list3.append("Ahmad");
list3.append("Hamza");
list3.append("Sunny");
list3.append("Waleed");

console.log(list3.findMiddle()); // even list (4 elements) Middle Element = Sunny
