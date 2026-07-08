//! 🔷 Problem 1 (Easy) — Queue Implement Karo

class Queue {
  constructor() {
    this.items = [];
  }

  //? Enqueue Function banana

  enqueue(element) {
    this.items.push(element);
  }

  //? Dequeue Function banana

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items.shift();
  }

  //? Peek Function banana

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  //? isEmpty Function banana

  isEmpty() {
    return this.items.length === 0;
  }

  //? size function banana

  size() {
    return this.items.length;
  }

  //? Print function banana

  print() {
    console.log(this.items);
  }
}

const theQueue = new Queue();
console.log("===Queue Implementation Using Class===");
theQueue.enqueue("Hammad");
theQueue.enqueue("Bilal");
theQueue.enqueue("Waleed");
theQueue.enqueue("Hamza");

theQueue.print(); // front hammad, bilal waleed hamza
console.log(theQueue.size()); // 4
console.log(theQueue.dequeue()); // Hammmad Nikal gia
console.log(theQueue.size()); // 3 hammad nikal gia

console.log(theQueue.peek()); // Bilal
console.log(theQueue.dequeue()); // ab bilal bhi gia
console.log(theQueue.size()); // 2 ai ga

console.log(theQueue.dequeue()); // waleed gia
console.log(theQueue.isEmpty()); // false ai ga abhi empty nahi ha
console.log(theQueue.dequeue()); // hamza bhi gia
console.log(theQueue.peek()); // null ai ga keuke kuch nahi ha dekhne ko
console.log(theQueue.size()); // 0 ai ga
console.log(theQueue.isEmpty()); // true ai ga abhi empty ha
