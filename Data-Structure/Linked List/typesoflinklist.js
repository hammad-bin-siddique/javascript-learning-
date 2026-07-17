//! Phase 2: Types of Linked List

// Singly Linked List
// Doubly Linked List
// Circular Linked List
// Kab konsi type use hoti hai

//? Single Linked list

//  Singly Linked List — har node ke paas sirf ek pointer hota hai: next. Koi prev nahi hota.

class SingleNode {
  constructor(data) {
    this.data = data; // is main node ka data ho ga mean ke us ke value
    this.next = null; // is main sirf agle node ka pata ho ke kn sa ha koi previous nahi
  }
}

const singleNode1 = new SingleNode("Faizan");
const singleNode2 = new SingleNode("Hamza");

singleNode1.next = singleNode2; // yaha ham ne nodes ko link kar dia ha or bata dia ha ke agla node kn sa ha

console.log(singleNode1);

//? Key Characteristics:

// One-directional traversal — sirf aage ja sakte ho, pichay nahi
// Memory efficient — Doubly Linked List se kam memory leta hai (kyunke ek
// extra pointer prev nahi hota)
// Insertion/Deletion at beginning — bohat fast (O(1)) kyunke sirf head ka
// pointer change karna hota hai
// Insertion/Deletion at end ya middle — traverse karna parta hai, isliye O
// (n)
// Agar head khatam ho jaye (kisi wajah se lost ho jaye), to pura list
// access se nikal jata hai — kyunke wapis jane ka koi raasta nahi

//! Tasks

//? Task One;

class Task1Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
console.log("===Task One===");

const firstTask1 = new Task1Node("Hammad");
const secondTask1 = new Task1Node("Bilal");
const thirdTask1 = new Task1Node("Faizan");
const fthTask1 = new Task1Node("Fahad");

firstTask1.next = secondTask1;
secondTask1.next = thirdTask1;
thirdTask1.next = fthTask1;

let current = firstTask1;

while (current !== null) {
  console.log(current.data);
  current = current.next;
}

function findLength(head) {
  let current = head;
  let counter = 0;
  while (current !== null) {
    counter++;
    current = current.next;
  }
  return counter;
}

console.log("===Task Two Find Node length without using array method===");
console.log(findLength(firstTask1));

function search(head, value) {
  let current = head;
  while (current !== null) {
    if (current.data === value) {
      return true;
    }
    current = current.next;
  }

  return false;
}

console.log("===Task Three===");

console.log(search(firstTask1, "Faizan")); // true ai ga keuke ye exist karta ha
console.log(search(firstTask1, "Subhan")); // false ai ga keuke ye exist nahi karta

//! Mini Project

class PassengerNode {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.next = null;
  }
}

let head = null;

function addPassenger(name, token) {
  let newNode = new PassengerNode(name, token);

  if (head === null) {
    head = newNode;
    // yani agar head khali ha to head ke andar new node add kar do
  } else {
    let current = head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
}

function printQueue() {
  let current = head;

  while (current !== null) {
    console.log(`Current Name: ${current.name} => Token ${current.token}`);
    current = current.next;
  }
}

function removeFirst() {
  if (head === null) {
    console.log("There is nothing to Remove");
    return;
  }

  head = head.next;
}

console.log("===Mini Project===");
addPassenger("Hammad", 1);
addPassenger("Bilal", 2);
addPassenger("Faizan", 3);
addPassenger("Fahad", 4);

console.log("=== Initial Queue ===");
printQueue(); // hammad bilal faizan fahad

removeFirst();
console.log("=== After removeFirst ===");
printQueue(); // bilal faizan or fahad


//! 🔹 Doubly Linked List

class DoubleLinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  };
};

const doubleOne = new DoubleLinkedList("Waleed");
const doubleTwo = new DoubleLinkedList("Ahsan");
const doubleThree = new DoubleLinkedList("Momina");
console.log("===Double Linked List===")
doubleOne.next = doubleTwo;
doubleTwo.prev = doubleOne;
doubleTwo.next = doubleThree;
doubleThree.prev = doubleTwo;

console.log(doubleOne)
console.log(doubleThree.prev.data); // Ahsan ha previous 
console.log(doubleOne.next.next.data); // Momina next ke next ka 


//? abhi print forward wala function banai ge jo first se start ho kar last node tak itriate kare ga 


function printForward() {
  let current = doubleOne;

  while(current !== null) {
    console.log(current.data);
    current = current.next;
  };
};
console.log("===Print Forward Function===");
printForward();

//? ab print backword wala function banai ge jo last node se start ho ga or apne se pehle wale nodes print karta jai ga jab tak prev node null naw ho jai 

function printBack() {
  let lastNode = doubleThree; 

  while(lastNode !== null) {
    console.log(lastNode.data);
    lastNode = lastNode.prev;
  };
};
 
console.log("===Print Back Function===");
printBack();


//! 🔹 Circular Linked List

// is linked list main circular kam ho ga mean ke jaha se start kia tha wha he khatam ho ga or waha se chale ga mean ke infinite loop but hame ye nahi karna hame sirf 1 bar chalana ha loop or phir rokna ha 

class CircularNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
};

const circularOne = new CircularNode("Hammad");
const circularTwo = new CircularNode("Waleed");
const circularThree = new CircularNode("Ahmad");

circularOne.next = circularTwo;
circularTwo.next = circularThree;
circularThree.next = circularOne; // yaha ham ne wapis head ko link kar dia last node ke sath 

function printCircular() {

  let head = circularOne;
  let current = head;

  do {
    console.log(current.data);
    current = current.next; 
  
  } while (current !== head);
};

console.log("===Circular Linked List===");
printCircular();


//! ab circular doubly  linked list banai ge mean ke prev or next dono linked ho ge 

class CircularDoublyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  };
};


const circularDoublyOne = new CircularDoublyNode("Fahad");
const circularDoublyTwo = new CircularDoublyNode("Umair");
const circularDoublyThree = new CircularDoublyNode("Faizan");

circularDoublyOne.next = circularDoublyTwo;
circularDoublyTwo.next = circularDoublyThree;
circularDoublyTwo.prev = circularDoublyOne;
circularDoublyThree.prev = circularDoublyTwo;
circularDoublyThree.next = circularDoublyOne;
circularDoublyOne.prev = circularDoublyThree;

function printForwardCircular() {
  let head = circularDoublyOne;
  let current = head;

  do{
    console.log(current.data);
    current = current.next;
  }
  while(current !== head);
};

console.log("===Forward Circular===");

printForwardCircular();  // fahad umair faizan


function  printBackwardCircular(){
  let head = circularDoublyOne;
  let current = head;

  do{
    console.log(current.data);
    current = current.prev;
  }
  while(current !== head);
};

console.log("===printBackwardCircular===");
printBackwardCircular(); // fahad faizan umair

