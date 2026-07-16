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

