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


  //! Topic 5: Merge Two Sorted Linked Lists 

  // is topic main ham 2 sorted linked list ko apas main merge kare ge 

  mergeSorted(list1, list2)  {
    let dummy = new Node(null); // mean ke ham yaha 1 fake starting point banai ge take hame sort karte waqt bar bar ye naw dekhna pare ke kia ye result list ka pehle node ha 

    let tail = dummy; // ye result list ka akhri node track kare ga 

    let p1 = list1.head; 
    let p2 = list2.head; // ye dono list ke ham ne starting point bana dia ha 

    while (p1 !== null && p2 !== null) {
      // yaha condition check kare ge ke agar p1 or p2 dono main se koi 1 jab tak null nahi ho jata tab tak loop chalao 
      if(p1.item <= p2.item) {
        tail.next = p1;
        p1 = p1.next;
        // yaha condition rakhi ke agar p1 ka item p2 se chota ya brabar ha to placeholder jo ha us ko p1 bana do mean ke dummy ko p1 node se badal do mean ke result ko or p1 ko 1 step age le kar chlao like p1 agar 10 ha or p2 20 ha or p1 yaha p2 se chota ha is lia p1 ab placeholder ke age a jai ga or p1 10 se agle node per chala jai ga yani 30 per 
      }
      else{
        tail.next = p2;
        p2 = p2.next; // man lo agar p1 p2 se chota nahi ha to phir placeholder per agla node p2 ka ho ga or p2 1 step agey chala jai ga mean ke 20 se 40 per 
      };

      tail = tail.next; // is ke sath sath agar condition match hoti ha to tail ko bhi age karte jao 1 1 step
    };

    // while loop ruk gia man lo koi 1 null ho gai list phir 

    if(p1 !== null) {
      tail.next = p1; // agar p1 null nahi ha p2 ha to phir tail yani placeholder ke age p1 ko add karte jao 

    }  
    else {
      tail.next = p2; // or agar p1 null ho gai to p2 ko add karte jao tail ke age 
    };

    return dummy.next; // dummy placeholder yaha se nikal gia or asli head return kar do 
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


console.log("===Merge Two Sorted Linked Lists===");

const listA = new LinkedList();
listA.append(10);
listA.append(30);
listA.append(50);

const listB = new LinkedList();
listB.append(20);
listB.append(40);
listB.append(60);

const mergedList = new LinkedList(); 
let mergedHead = mergedList.mergeSorted(listA, listB); // yaha ham ne variable banaya jis main mergelist ko sort kia list a or b 

while (mergedHead !== null) {
  console.log(mergedHead.item);
  mergedHead = mergedHead.next;
};