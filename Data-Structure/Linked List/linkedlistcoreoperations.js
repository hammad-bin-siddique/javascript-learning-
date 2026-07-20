//! Phase 3: Core Operations

//? Phase 3 — Topic 1: Node Class

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

const node1 = new Node(10);
// console.log(node1); // Node { item: 10, next: null }

//? Phase 3 — Topic 2: LinkedList Class (head, tail, length tracking)

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

  // ? prepand method banai ge mean ke ab agar koi aisa banda a jata ha jis ko importance deni or sab se agey karna ha to kese ho ga

  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // yani ke new node ka jo agla person ha wo head ha
      this.head = newNode; // ab phir head is new node ko bana dia ha
    }

    this.length++;
  }

  //? ab insert function banai ge mean ke agar beach main kisi index per koi new node link karna ho to kese kare ge

  insert(index, data) {
    //  Case 1 agar index 0 ha to waha beach main add nahi kar sakte is lia waha prepend method use kare ge

    if (index === 0) {

        this.prepend(data);
        return;
    };

    // Case 2 agar last main kuch add karna ho to waha bhi insert method nahi balke append method use ho ga 

    if(index === this.length) {
        this.append(data);
        return;
    };

    // ab yaha se insert method ka flow start ho ga 

    const newNode = new Node(data);

    //  ab ham previous linking ke lai traverse kare gain"

    let previousNode = this.head; // abhi pichla node ham ne head ko bana dia mean ke first node ko 

    for(let i = 0; i < index -1; i++) {
        //  yani ke head se start karo wo abhi 0 ha head jab tak akhiri index tak nahi ponch jata tab tak chalao loop ko or head main + 1 head karte jao her itreation per 

        previousNode = previousNode.next
    }

    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;

  }

}

const items = new LinkedList();
items.append(20);
items.append(30); // tail
items.prepend(10); // ye akhir main aya ha but is ko importance di ha is lia ye head ho ga
items.insert(2, 25); // index 2 pe 25 daalna hai


console.log(items.head.item); // 10 
console.log(items.head.next.item); // 20
console.log(items.head.next.next.item); // 25 
console.log(items.head.next.next.next.item); // 30
console.log(items.length); // 4
