//! 📚 Topic 4: push() Operation

//? 📖 push() Kya Karta Hai?

// push() → Stack mein element ADD karta hai
//          HAMESHA TOP pe add hota hai
//          TOP pointer upar ho jaata hai
//          Size 1 badh jaata hai

let stack = [];

stack.push(10); // 10 add hua top per
stack.push(20); // ab stack ka size 2 ho gia or 20 top per chala gia
stack.push(30); // ab 30 top per a gia ha
// push se multiple value bhi add kar sakte hain

stack.push(40, 50, 60);
console.log(`Stack Size: ${stack.length}`); // size ab six ho gia keuke ab 1 sath 3 values add kar di hain

console.log(stack); // total 3 ai ga 10 neache phir 20 phir 30 top per

let nameStack = [];

nameStack.push("Ali");
nameStack.push("Fahad");
nameStack.push("Hamza");
nameStack.push("Wasib");

console.log(`Whole Stack: ${nameStack}`);

console.log(`Last Element of Stack: ${nameStack[nameStack.length - 1]}`); // sab se top wale elemnt print ho ga jo ke wasib ha
console.log(`Stack Size: ${nameStack.length}`); // total stack length print ho gi jo ke 4 ha

let stackSize = [];
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

console.log(removed); // jo remove hua wo ai ga yani 40

console.log(stackPop); // 10 20 30

//? Empty Stack ko pop kare to

let emptyStack = [];

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
  return stackPeek[stackPeek.length - 1];
}

console.log(peek(stackPeek)); // last element show karai ga jo ke 50 ha

console.log(stackPeek); // pura stack print ho ga 10 20 30 40 50

//! 📚 Topic 7: isEmpty() Operation

//? 📖 isEmpty() Kya Karta Hai?

// isEmpty() → Stack khali hai ya nahi CHECK karta hai
//             Khali hai  → true  return karta hai
//             Bhara hai  → false return karta hai
//             Stack mein KOI CHANGE nahi aata

//? 💻 isEmpty() Banana

let stackNew = [1, 3, 4, 5, 6];

// agar bhare hue stack per is empty ka function lagai ge to kia retrun kare ga

function isEmpty(stackNew) {
  return stackNew.length === 0;
} // false ai ga keuke stack khali nahi ha

console.log(isEmpty(stackNew));

// agar stack khali ho to phir kia retrun kare ga

const myStack = [];

function empty(myStack) {
  return myStack.length === 0;
} // true return kare ga keuke stack khali ha

console.log(empty(myStack));

console.log(stackNew); // is empty ke bad bhi stack main kuch bhi change nahi hua

//? 🎯 isEmpty() Ka Real Use:

let mainStack = [1, 2, 3, 4];

if (!isEmpty(mainStack)) {
  mainStack.pop();
  console.log("Element Remove Hua");
} else {
  console.log("Element Remove Nahi hua Keuke stack main he kuch nahi");
} // yaha first wala chale ga keuke element khali nahi ha


// agar khali stack per try kare to 
//! uper function or stack dono bane hue hain 

if(!isEmpty(myStack)) {
    myStack.pop(); 
    console.log("Element Remove hua");
} else {
    console.log("Element Remove Nahi Hua Keuke Stack Ha he khali");
};


//! ⚠️ isEmpty() Ko Pop Ke Saath Use Karna:


let newMainStack = [1, 2, 3, 4, 5]; 

if(!isEmpty(newMainStack)) {
    let removed = newMainStack.pop(); 
    console.log("Removed:", removed); // removed ho ga 5 keuke stack khali nahi ha lifo rule se 
} else {
    console.log("Stack Khali Ha");
};

let newMainStackEmpty = [];

if(!isEmpty(newMainStackEmpty)) {
    let removed = newMainStackEmpty.pop();
    console.log("Removed:", removed);
} else {
    console.log("Stack khli ha"); // yaha ye wala chale ga keuke stack khali ha
};


//? isEmpty() ka result
// kisi variable mein store karna!

let emptyResult = isEmpty(newMainStackEmpty);

console.log(emptyResult); // true ai ga keuke khali ha 

let fillResult = isEmpty(newMainStack); 
console.log(fillResult); // false ai ga keuke empty nahi ha 


//! 📚 Topic 8: size() Operation

//? 📖 size() Kya Karta Hai?

// size() → Stack mein kitne elements hain BATATA hai
//          Number return karta hai
//          Stack mein KOI CHANGE nahi aata
//          Khali stack → 0 return karta hai


const sizeStack = [1, 3, 4, 2, 5];

function size(sizeStack) {
  return sizeStack.length;
};

console.log("Size", size(sizeStack)); // 5 retrun kare ga abhi 5 elements hain 

//? push Kar ke size Check karna 

sizeStack.push(6, 7);

console.log("Size", size(sizeStack)); // 7 ai ga abhi 2 add ho gia hain

//? pop kar ke size check karna 

sizeStack.pop(); // last wala element gia jo ke 7 ha 

console.log("Size", size(sizeStack)); // abhi 6 size ai ga 


//? Khali stack ka kia size return kare ga 

const sizeStackEmpty  = []; 

console.log("Empty Stack Size",size(sizeStackEmpty));


//? size() aur isEmpty() ko saath use karna!

//! size or isempty ka function uper bana hua ha usi ko use kare ge 

const newStack = [1,2,3];

console.log("Empty?", isEmpty(newStack)); // false ai ga 
console.log("Stack Size", size(newStack));  // 3 ai ga 

// ab stack main se all elements ko pop karte hain 

newStack.pop();
newStack.pop();
newStack.pop();

console.log("Empty?", isEmpty(newStack)); // true ai ga ab stack khali ha

console.log("Stack Size:", size(newStack));
