//! Phase 2 Start — Topic 6: enqueue() 🚀


// 📝 Sabse Simple Tarika — Array Se
// JavaScript mein array ko Queue ki tarah use kar sakte hain:

let queue = [];

queue.push("Hammad");
queue.push("Fahad");
queue.push("Ali");

console.log(queue); // yaha hammad fahad ali ai ga 


let routeQueue = [];

routeQueue.push("Multan");
routeQueue.push("Islamabad");
routeQueue.push("Rawalpindi");
console.log(routeQueue); // multan islamabad rawalpindi
routeQueue.push("Lahore");

console.log(routeQueue); 


//! Topic 7: dequeue() — Front Se Remove Karna 🗑️


let queueTwo = [];

queueTwo.push("Faizan"); 
queueTwo.push("Hammad"); 
queueTwo.push("Fahad");
queueTwo.push("Jamal");


console.log("====Topic 7: Dequeue=====")
//dequeue se pehle pura queue
console.log(queueTwo); // all 4 ho ge 

console.log(`Front First Element: ${queueTwo.shift()}`); // Faizan  nikle ga fifo method ke waja se 
console.log(queueTwo); // yaha abhi sirf  Hammad fahad or jamal ho ge 

console.log(`Second Front Element: ${queueTwo.shift()}`); // abhi Hammad nikal jai ga

console.log(queueTwo); // yaha abhi sirf Fahad or Jamal ho ge 


//! Topic 8: peek() — Front Element Dekhna 👀

// peek = Queue ka FRONT element dekhna — 
//        lekin REMOVE nahi karna!

let peekQueue = [];

peekQueue.push("Daniyal"); 
peekQueue.push("Ehtesham"); 
peekQueue.push("Imran"); 
peekQueue.push("Usman");


// ab peek kare ke front element ko 


console.log("===Topic 8 Peek===");
console.log(peekQueue[0]); // Daniyal ai ga 

console.log(peekQueue); // is per koi fark nahi pare ga 

console.log(peekQueue.shift()); // ab danial remove ho gia 
console.log(peekQueue[0]); // ab yaha per daniyal nahi ho ga balke ehtesham ho ga danial remove ho front se 
console.log(peekQueue); // daniyal ke ilawa sab ho ge 

//! Topic 9: isEmpty() — Queue Khali Hai Ya Nahi? 🔍

// isEmpty = Check karna ke queue mein 
//           koi element hai ya nahi


let emptyQueue = [];

emptyQueue.push("PUBG");
emptyQueue.push("GTA 6");


console.log("===Topic 9 Is Empty===");
console.log(emptyQueue); // abhi dono ho ge 
console.log(emptyQueue.length === 0); // false ai ga keuke abhi is mian items hain 

console.log(emptyQueue.shift()); // Pubg gai

console.log(emptyQueue.length === 0); // false ai ga kueke abhi bhi 0 nahi hua

console.log(emptyQueue.shift()); // ab gta bhi gai
console.log(emptyQueue.length === 0); // ab true ai ga keuke queue khali ha 


//! Topic 10: size() — Queue Mein Kitne Elements Hain? 📏


// size = Queue mein abhi kitne 
//        elements hain — count karna


let sizeQueue = [];

sizeQueue.push("Minar -e- Pakistan");
sizeQueue.push("Badshahi Masjid");
sizeQueue.push("Monoment"); 
sizeQueue.push("Taj Mahal");


console.log("===Topic 10 Size===");
console.log(sizeQueue.length); // abhi 4 ha size

sizeQueue.shift(); // 1 kam hua minare pakistan
console.log(sizeQueue.length); // abhi 3 ho ge 
sizeQueue.shift(); // abhi 1 or kam hua badshahi masjid bhi gai 
console.log(sizeQueue.length); // abhi 2 show ho ga

sizeQueue.push("Data Darbar");

console.log(sizeQueue.length); // abhi phir se 3 show ho ga 

// shift ya pop karne se size kam ho or push karne se size ziada ho ga 


//! Topic 11: print() — Poori Queue Print Karo 🖨️

// print = Queue ke saare elements 
//         ek ek karke display karna


let printQueue = [];
printQueue.push("Hammad"); 
printQueue.push("Usman");
printQueue.push("Tayyab");
printQueue.push("Umer");


console.log("===Topic 11 Print===");
// pura queue print karna 1 sath 
console.log(printQueue);

// loop chala kar sab ko 1 1 kar ke play karna 

for(let i = 0; i < printQueue.length; i++) {
    console.log(printQueue[i]);
    // yani jab tak print queue ke value 0 nahi ho jati tab tak loop ko chalao or i main add karte jao 1 1 kar ke or jese he 0 ho to loop close kar do yaha i se mean ke index 
};


// ab i ko remove kar ke phir loop chalate hain 

printQueue.shift(); // Hammad out ho gia 


console.log("===Loop after remove the front element===");
for(let x = 0; x < printQueue.length; x++) {
    console.log(printQueue[x]);
}; 

// ab sirf teen bar he chale ga or hammad nahi ho ga or front per Usman ho ga 

