//! Phase 5 Topic 1 Doubly Linked List:

// is topic main ham nodes ko dono side se link kare ge mean ke next or previous dono side se

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

//! Topic: DoublyLinkedList Class + Forward/Backward Traversal

class DoublyLinkedList {
  constructor() {
    this.head = null; // start main head null ha abhi kisi ko head nahi banaya
    this.tail = null; // start main tail null ha abhi kisi ko tail assign nahi kia
    this.length = 0; // abhi length 0 ha keuke koi node add nahi kia
  }

  //! Topic: Insertion (Doubly Linked List)

  // Hum insertion ko teen parts mein todein ge:

  //? append (end mein add karna) yani end main add karna ho koi node to kese kare ge

  append(item) {
    const newNode = new Node(item);

    // Case 1 agar pehle list main koi node nahi ha to is new node ko head or tail dono banao

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //  agar pehle se node ha to phir is node ke next ko tail bana do
      this.tail.next = newNode; // abhi tail ka age new Node add kar dia ha
      newNode.prev = this.tail; // new node ka jo pitchla node ha wo is ka previous bana dia ha
      this.tail = newNode; // ab jo new Node add kia tha us ko tail bana dia keuke tail sab se last wala node hota ha
    }

    this.length++;
  }

  //? Ab prepant method likhe ge yani agar start main koi node add karna hua to 

  prepend(item) {
    const newNode = new Node(item);

    // Case 1 agar head null yani ye first node ho to 

    if(this.head === null) {
        this.head = newNode;
        this.tail = newNode;
    }
    else {
        // agar pehle se node ho to phir is node ke next ko head bana do reference ke lia 

        newNode.next = this.head;
        newNode.prev = null;
        this.head.prev = newNode;
        this.head = newNode;
        
    };

    this.length++;
  };

  //? ab inset at index method likhe ge mean ke nodes ke beach main kahi add karna ho node to kese kare ge 

  insertAt(index, item) {

    // Edge case 1 mean ke agar start main add karna ho to ham prepend method he call kare ge 

    if(index === 0) {
      this.prepend(item);
      return; // function close
    };

    //  Edge Case 2 agar index lenght ke barabar ha to mean ke last main add karna ho to 

    if(index === this.length) {
      this.append(item);
      return;
    };

    //  Ab main topic agar beach main add karna ho to 

    const newNode = new Node(item);

    let prevNode = this.head; // ab head ko prev node bana dia ha 
    for(let i = 0; i < index -1; i++) {
      prevNode = prevNode.next; 
      // mean ke index 0 se start karo or jab tak index ke length apne target se -1 ponch jai to us waqt loop ko rok do man lo 2 index per change karna ha ab loop 2 se -1 1 per ja kar ruk jai ge ab loop head se start ho ga or age chalta jai ga 
    };

    let nextNode = prevNode.next; // abhi jo new ham add kare ge us ke next node ka reference secure kar rahe hain 

    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.length++;
  };
}

const hammad = new Node("Hammad");
const bilal = new Node("Bilal");
const faizan = new Node("Faizan");

hammad.next = bilal;
bilal.next = faizan;
faizan.next = null;
faizan.prev = bilal;
bilal.prev = hammad;
hammad.prev = null;

const doubly = new DoublyLinkedList();

doubly.head = hammad;
doubly.tail = faizan;
doubly.length = 3;

//! Phase 5 Topic 2: Forward aur backward traversal

//? Ye Ham ne forward Travarsal kia ha mean ke head se start kia or tail per khatam kia ha
function forwardTraversal() {
  let current = doubly.head;
  while (current !== null) {
    console.log(current.item);
    current = current.next;
  }
}
console.log("===Forward Travarsal===");
forwardTraversal();

//? Ab ham Backward Travarsal Kare ge mean ke Tail se loop start ho ga or head per khatam ho ga

console.log("===Backward Travasal===");
backwardTravarsal(); // function execute hone se pehle call ho sakte hain hoisting main

function backwardTravarsal() {
  let current = doubly.tail;
  while (current !== null) {
    console.log(current.item);
    current = current.prev;
  }
}

console.log("===Append Method===="); // Add in last
const doubly2 = new DoublyLinkedList();
doubly2.append("Hammad");
doubly2.append("Bilal");
doubly2.append("Faizan");

console.log(doubly2.head.item); // Hammad
console.log(doubly2.tail.item); // Faizan
console.log(doubly2.head.next.item); // Bilal
console.log(doubly2.length); // 3
console.log(doubly2.tail.prev.item); // Bilal Faizan Ka privious Node ha


console.log("===Prepend Method===");
doubly2.prepend("Fahad");
console.log(doubly2.head.item);         // Fahad
console.log(doubly2.tail.item);         // Faizan
console.log(doubly2.length);            // 4
console.log(doubly2.head.next.prev.item); // Fahad he ho ga head ka agla hammad ha hammad ka prev Fahad ha 

console.log("===InsertAt Method===");
doubly2.insertAt(2, "Bilal2");

let current = doubly2.head;
while(current !== null) {
  console.log(current.item);
  current = current.next;
};
console.log("Length:", doubly2.length); //  predection Fahad Hammad bilal2 bilal faizan total lengty 5

console.log(doubly2.head.next.next.item); // bilal2;
console.log(doubly2.head.next.next.prev.item); // Hammad head ka next hammad ka next bilal2 or bilal2 ka prev Hammad he ha 