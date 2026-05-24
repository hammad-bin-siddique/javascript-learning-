//! 📚 Topic 4: push() Operation


//? 📖 push() Kya Karta Hai?

// push() → Stack mein element ADD karta hai
//          HAMESHA TOP pe add hota hai
//          TOP pointer upar ho jaata hai
//          Size 1 badh jaata hai


let stack = []

stack.push(10); // 10 add hua top per 
stack.push(20); // ab stack ka size 2 ho gia or 20 top per chala gia 
stack.push (30); // ab 30 top per a gia ha 
// push se multiple value bhi add kar sakte hain 

stack.push(40, 50, 60); 
console.log(`Stack Size: ${stack.length}`); // size ab six ho gia keuke ab 1 sath 3 values add kar di hain 

console.log(stack); // total 3 ai ga 10 neache phir 20 phir 30 top per 


let nameStack = []

nameStack.push("Ali"); 
nameStack.push("Fahad"); 
nameStack.push("Hamza"); 
nameStack.push("Wasib");

console.log(`Whole Stack: ${nameStack}`); 

console.log(`Last Element of Stack: ${nameStack[nameStack.length -1]}`); // sab se top wale elemnt print ho ga jo ke wasib ha 
console.log(`Stack Size: ${nameStack.length}`);  // total stack length print ho gi jo ke 4 ha 

let stackSize = []
let result = stackSize.push("Ali");
console.log(result); // 1 ai ga

result = stackSize.push("Hamza"); 

console.log(result); // 2

result = stackSize.push("Fahad"); 

console.log(result); // 3


//! 📚 Topic 5: pop() Operation

//? 📖 pop() Kya Karta Hai?

// pop() → Stack se TOP element REMOVE karta hai
//         TOP element RETURN bhi karta hai
//         TOP pointer neeche aa jaata hai
//         Size 1 kam ho jaata hai


let stackPop = [];

stackPop.push(10, 20, 30, 40); 

console.log(stackPop); 

let removed = stackPop.pop(); // 40 remove ho gia 

console.log(removed);  // jo remove hua wo ai ga yani 40

console.log(stackPop); // 10 20 30


//? Empty Stack ko pop kare to 

let emptyStack = []

let result1 = emptyStack.pop(); 

console.log(result1); // undefined ai ga keuke kuch tha he nahi pop karne ke lia 


//! 📚 Topic 6: peek() Operation

//? 📖 peek() Kya Karta Hai?

// peek() → TOP element DEKHTA hai
//          TOP element REMOVE nahi karta
//          Stack mein KOI CHANGE nahi aata
//          Sirf VALUE return karta hai


//? 🔑 push(), pop(), peek() Ka Farq

// push()  → element ADD karta hai    → stack BADALTA hai
// pop()   → element REMOVE karta hai → stack BADALTA hai
// peek()  → element DEKHTA hai       → stack NAHI BADALTA

//! 💡 Interesting Baat
// JavaScript Array mein peek() built-in nahi hai — jaise push() aur pop() hain!
// Isliye hum khud banate hain:

let stackPeek = [10, 20, 30, 40, 50]; 

// peek() Banana Function ke help se 

function peek(stackPeek) {
    return stackPeek[stackPeek.length -1];
}; 

console.log(peek(stackPeek)); // last element show karai ga jo ke 50 ha 

console.log(stackPeek); // pura stack print ho ga 10 20 30 40 50 
