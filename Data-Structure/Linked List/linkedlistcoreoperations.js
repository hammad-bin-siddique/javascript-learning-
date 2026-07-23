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

  // ? phase 3 topic 4 prepand method banai ge mean ke ab agar koi aisa banda a jata ha jis ko importance deni or sab se agey karna ha to kese ho ga

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

  //? Phase 3 topic 5 ab insert function banai ge mean ke agar beach main kisi index per koi new node link karna ho to kese kare ge

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

  };

  //? Phase 3 — Topic 6: Deletion — removeFromStart() is topic main ham linked list ke start se item ko nikale ge or us se agle ko head bana de ga 

  removeFromStart() {
    if(this.head === null) {
      console.log("Head is Empty");
      return null;

      // agar head pehle se he khali ha to return karo  null or console message bhi kar do ke Head is empty 
    };

    const removeNode = this.head; // head ko remove kar do 
    this.head = this.head.next; // ab head se agle wale ko head bana do 

    if(this.head === null) {
      this.tail = null;
    };

    this.length--;

    return removeNode.item;
  };

  //? Phase 3 — Topic 7: removeFromEnd() is case main sab se last se banda nikle ga 


  removeFromEnd() {
    // Case 1 Agar head khali ho to 
    if(this.head === null) {
      console.log("Head is Empty");
      return null;
    };

    // Case 2 Agar head or tail dono 1 he node ho to 

    if(this.head === this.tail) {

      const removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removeNode.item;
    };

    // Case 3 agar 2 ya ziada node ho to phir kia karna ha 

    let current = this.head; // head ko current variable main rakho reference ke lia 

    while (current.next.next !== null) {
      current = current.next; 
      //  yani jab tak current ke next ka next null nahi hota tab tak loop chalao or current ke jaga badalte jao man lo 10 20 30  40 null ha current abhi 10 ha 20 1 step phir 30 2 step  us ke bad null nahi ha to loop chalao mean ke 40 ha loop chale ga or 20 per abhi current a jai ga is tara loop chalta jai ga jab tak condition match nahi ho jati 
    };

    const removeNode = current.next;
    current.next = null;
    this.tail = current;
    this.length--;
    return removeNode.item;


  };


  //? Phase 3 — Topic 9: removeAt(index)
  // is topic main ham beach main se index ke help se kisi bhi node ko delete kare ge or phir node ko connect kare ge take chain toote naw 


  removeAt(index) {
    if(index === 0) {
      this.removeFromStart();
      return;
    }; // mean ke agar index 0 ho to  phir remove from start wala method use karo 

    if(index === this.length - 1) {
      this.removeFromEnd();
      return;
    };
    //  yani agar akhri node ho to waha remove from end wala method use karo 

    let previousNode = this.head;

    for(let i = 0; i < index - 1; i++) {
      previousNode = previousNode.next; 
      //  yani jab tak last index nahi a jata tab tak loop ko chalao or count main increament karte jao 
    };

    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;

    return removed.item;
  };


  //? Phase 3 — Topic 10: Traversal (Print/Loop through saari list)

  printList() {
    let current = this.head;

    while(current !== null) {
      console.log(current.item);
      current = current.next;
    }
    
  };


}

const items = new LinkedList();
items.append(20);
items.append(30); // tail
items.prepend(10); // ye akhir main aya ha but is ko importance di ha is lia ye head ho ga
items.insert(2, 25); // index 2 pe 25 daalna hai
console.log(`Removed From Start ${items.removeFromStart()}`); // yaha se ab 10 nikal gia

console.log(items.head.item); // 20
console.log(items.head.next.item); // 25
console.log(items.head.next.next.item); // 30 
//! console.log(items.head.next.next.next.item);
//yaha per error ai ga keuke 25 ka next 30 ha or 30 ka next null ha or ham null mian item ko dhond rahe ha or javascript null ke andar ja he nahi sakta ke wo waha property ka access kare is lia error ai ga 
console.log(items.length); // 3  10 nikal gia


console.log("====Remove from First and last===");

const list = new LinkedList();
list.append(10); 
list.append(20);
list.append(30);
list.prepend(40); 
console.log(list.length); 4
console.log(list.removeFromEnd()); // 30 gia
console.log(list.head.item); // 40
console.log(list.tail.item); // 20
console.log(list.length); // 3
console.log(list.removeFromStart()); // ab 40 gia 
console.log(list.head.item); // 10
console.log(list.tail.item); // 20
console.log(list.length); // 2

console.log("===Removed From index")
const removeList = new LinkedList();
removeList.append(10);
removeList.append(20);
removeList.append(30);
removeList.append(40);

const removed = removeList.removeAt(1);   

console.log(removed);              // 20 removed hua
console.log(removeList.head.item);       // 10 ho ga keuke wo remove nahi hua 0 index per ha 
console.log(removeList.head.next.item);  // 30 ha keuke 20 remove ho gia or  us next node ko link kar dia ha head ke next ke sath 
console.log(removeList.tail.item);       //  40 ho ga wo last main 
console.log(removeList.length);          //  3 ho gi 
console.log(removeList.printList())