//! 📚 Topic 11: Stack Using Linked List

//? 📖 Linked List Ki Proper Definition

// Linked List ek aisi data structure hai
// jisme har element (node) ke paas:

// 1. Data hota hai      → jo store karna hai
// 2. Next pointer hota  → agla node kahan hai

// Sab nodes ek chain ki tarah
// ek doosre se jude hote hain!

//? 🔍 Node Kya Hota Hai?

// Node = Ek dabba

// ┌─────────────┐
// │   Data: 10  │  → agla node
// │   Next: ●───┼──→ [ Data: 20 | Next: ●───]──→ NULL
// └─────────────┘

// Pehla Node    Doosra Node    NULL = khatam

//? 👁️ Array vs Linked List

// ARRAY:                    LINKED LIST:
// ══════                    ════════════
// Ek jagah store hota       Alag alag jagah
//                           store hota

// [ 10 | 20 | 30 | 40 ]    10 → 20 → 30 → 40 → NULL

// Size pehle se fix         Size flexible
//                           jitna chahiye
//                           utna badha lo

// Beech se access           Sirf start se
// kar sakte ho              aage jaate hain
// arr[2] = 30 ✅            Direct access ❌

//! Linked List banana

class Node {
  constructor(element) {
    this.element = element; // mean ke node mian kia store ha
    this.next = null; // mean ke is se agla node kia ha filhal null ha
  }
}

//? ab Node banai ge

const node1 = new Node("Hammad"); // first node ban gia ha
const node2 = new Node("Ali");
const node3 = new Node("Faizan"); // 3 node bana dia hain

console.log(node1, node2, node3);

//! Node { element: 'Hammad', next: null } Node { element: 'Ali', next: null } Node { element: 'Faizan', next: null }
// abhi ye output ai ga keuke abhi ham ne node ko link nahi kia next wale ke sath

//? Ab chain banai ge yani her node ko dosre se connect kare ge

node1.next = node2;
node2.next = node3;

// head se itreate kare ga mean ke first node se jo ke hammad ha

let current = node1;

while (current !== null) {
  console.log(current.element);
  current = current.next;
}

//! ✅ Summary

// class Node    → dabby ka blueprint
// this.data     → andar kya hai
// this.next     → agla dabba kaun

// node1.next = node2 → connect karo
// node2.next = node3 → connect karo

// current       → pointer (hum kahan hain)
// while loop    → jab tak nodes hain chalo
// current.data  → node ka data print karo
// current.next  → agle node pe jao
// null          → chain khatam → loop band

//!  Stack Using Linked List — Complete Code

//? Step 1: Node Class

class MyNode {
  constructor(item) {
    this.item = item; // mean ke node ke andar kia store ho ga
    this.next = null; // mean ke next node start main null ho ga
  }
}

//? Step 2: Stack Class — Constructor

class Stack {
  constructor() {
    this.top = null; // start main koi node nahi
    this.length = 0; // abhi length bhi zero ha keuke kuch push he nahi hua
  }

  //? Step 3: push()

  push(item) {
    const newNode = new MyNode(item); // abhi new Node banaya
    newNode.next = this.top; // mean ke node ko chain kia or bataya ke stack main jo top per node ho ga wo next node ho ga

    this.top = newNode; // ab jo top per node  ha wo new node ban gia keuke ab wo top per a gia ha

    this.length++; // size 1 barh gia mean ke jese jese push hota jai ga 1 1 size barhta jai ga
  };

//?   Step 4: pop()

pop() {
    if(this.isEmpty()) {
        return null;
    }
    const removed = this.top.item; // yani jab pop kare to jo top per item ho wo removed ho mean ke top wala item removed varaiable main store ho 
    this.top = this.top.next; // ab jo pehle top tha wo to remove ho gia ab us ke jaga jo neache ha us ko top kar do ya jo agla ha us ko top kar do 

    this.length--; // yaha minus ka increament lagaya keuke jab pop ho ga to size main bhi 1 kam ho 

    return removed; // removed data return kare ga wo mean jo bhi removed ho ga wo return kare ga 
};


//? Step 5: peek()

peek(){
    if(this.isEmpty()){
        return null; // yani agar this stack mean ke agar stack khali ho ga to null return kare ga 
    }
    return this.top.item; // warna last element show karai ga jo bhi hua top per or stack per koi fark nahi pare ga 
};

//? Step 6: isEmpty() aur size()

isEmpty() {
    return this.top === null; 
     // agar top null hua to return true kare ga or abhi filhal top null he ha keuke abhi push he kuch nahi kia is lia true kare ga.
     // or agar top null nahi hua to false return kare ga keuke phir data ho ga stack main naw ke empty
};

size(){
    return this.length; // bas length return karo jo bhi ho 
};

//! Step 7: print()

print() {
    let current = this.top; // mean ke stack ka top element abhi current element ha 
    let result = [];  // abhi result jo ha wo 1 khali array ka daba banaya 

    while(current  !== null) {

        result.push(current.item); // yani jab tak current element null nahi ho jata tab tak current data ko khali array main push karte jao 

        current = current.next;// or next element ko current bana do mean jab tak nodes hain array mian dalte jao or next element ko current banate jao jese he nodes khatam ho jao loop ko close kar do 
    };
    console.log(result);
};

};


// ab new keyword stack banai ge 

const myStack = new Stack();


myStack.push("Hammad"); // hammad push hua top element ban gia 
myStack.push("Ali"); // ab top element ali ban gia or current bhi 
myStack.push(30); // ab top element ye ban gia 

myStack.print();
console.log("Top Node:", myStack.peek()); // output 30 ai ga 
console.log("Size:", myStack.size()); // 3 ai ga 
console.log("Empty?", myStack.isEmpty()); // false ai ga keuke stack khali nahi ha 

let removed = myStack.pop(); // top element removed ho gia 
console.log("Removed", removed);

myStack.print(); // ab sirf ali or hammad he print ho ge 
console.log("Size After Poping: ", myStack.size()); // ab size 2 ho ga 30 removed ho gia ha 

//? Sab elements ko pop karne ke bad size peek pop isempty check karna 

myStack.pop(); 
myStack.pop(); 

console.log(myStack.pop()); // null ai ga keuke abhi stack khali ha 
console.log(myStack.peek()); // yaha bhi null ai ga keuke stack khali ha 
console.log(myStack.isEmpty()); // true ai ga keuke stack khali ha 
console.log(myStack.size()); // 0 ai ga 

