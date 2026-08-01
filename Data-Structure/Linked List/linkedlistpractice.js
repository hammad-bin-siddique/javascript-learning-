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
  };

  //! Topic 3: Detect Cycle in Linked List (Floyd's Algorithm)

  // Ek technique jo check karti hai ke Linked List mein koi cycle (loop) exist karti hai ya nahi — yani koi node wapas kisi purane node ki taraf point to nahi kar raha (jiski wajah se list kabhi null pe khatam na ho).

  detectCycle() {
    let slow = this.head;
    let fast = this.head;

    while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if(fast === slow)  {
        console.log("Cycle Detected");
        return true;
      };
      
    };
    return false;
  };

  //! Topic 4: Remove Duplicates from Linked List
  // is topic main ham linked list ke duplicate values ko identify kare ge set ke help se or phir remove kar ke clean list nikale ge 


  removeDuplicates() {
    let seen = new Set(); // is main clean nodes store ho ge
    let current = this.head; // filahl current head ha mean ke first node 
    let prev = null; // or previous node abhi null ha link nahi kia 

    // ab yaha se condition lage gi 

    while (current !== null) {
      if(seen.has(current.item)) {
        prev.next = current.next; // yani ke agar seen main wo node pehle se jo abhi current item ha to us ko remove kar do or current ke next node ko prev ka next node bana do 

        //? Edge Case ager tail node duplicate a jai to phir kia kare ge 

        if(current.next === null) {
          this.tail = prev; // yani agar current ka agle element null ho mean ke tail ho to phir prev node ko he tail bana do 
        };
      }
      else {
        seen.add(current.item) 
        prev = current; // agar duplicate value nahi ha to us ko seen ke andar dal do or prev ko agey chala do 
      }
      current = current.next;
    };
  };

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


console.log("===Detect Cycle===");

// Test 1: No cycle
const list4 = new LinkedList();
list4.append(10);
list4.append(20);
list4.append(30);
console.log(list4.detectCycle()); // yaha per no cycle detected ai ga

// Test 2: Cycle exists (manually banayenge)
const list5 = new LinkedList();
list5.append(10);
list5.append(20);
list5.append(30);
list5.tail.next = list5.head; // yaha ab tail null nahi ha or wo head ke taraf point out kar raha ha is lia cycle detect ho jai ga or ture return ho ga

console.log(list5.detectCycle()); // cycle detected and return  false


console.log("===Remove Duplicates===");
const list6 = new LinkedList();
list6.append("Hammad");
list6.append("Faizan");
list6.append("Hammad");
list6.append("Bilal");
list6.append("Faizan");
list6.append("Fahad");

list6.removeDuplicates();

let curr = list6.head;
while (curr !== null) {
  console.log(curr.item);
  curr = curr.next;
}

console.log("Tail:", list6.tail.item); // Fahad Tail ho ga yaha 

console.log("===Remove Duplicates Edge Case===");
const list7 = new LinkedList();
list7.append("Hammad");
list7.append("Faizan");
list7.append("Hammad");
list7.append("Bilal");
list7.append("Faizan");

list7.removeDuplicates();
let currRmEdge = list7.head;
while(currRmEdge !== null) {
  console.log(currRmEdge.item);
  currRmEdge = currRmEdge.next;
};

console.log("Tail:", list7.tail.item); // Yaha per Bilal tail ho ga keuke faizan last node ha or duplicate ha is lia prev ko he tail bana dia ha 