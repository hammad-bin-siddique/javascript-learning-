//! 📌 Definition

// WeakSet ek special Set hai jisme sirf Objects store ho sakte hain — aur yeh objects ko weakly hold karta hai, matlab agar object ka koi aur reference nahi raha toh JavaScript automatically us object ko memory se hata deta hai.

//? ⚠️ Important — WeakSet mein sirf Objects!

const wSet = new WeakSet();

const obj = {name: "Hammad"};

wSet.add(obj); // sirf object weak set ke andar rakh sakte hain 
// wSet.add(1); // type error
// wSet.add(true); // type error
// wSet.add("hello"); // error ai ga TypeError: Invalid value used in weak set

//? WeakSet mein sirf objects ja sakte hain — numbers, strings, booleans nahi! ✅

//? 📌 WeakSet banana

const setW = new WeakSet();

let user1 = {name: "Ali"};
let user2 = {name: "Hammad"};
let user3 = {name: "Fahad"};
let user4 = {name: "Sara"};

setW.add(user1);
setW.add(user2);
setW.add(user3);
setW.add(user4);

console.log(setW);

//? WeakSet print karne pe items show nahi hote — kyunki yeh intentional hai! 


//? 📌 WeakSet ke Methods
// WeakSet mein sirf 3 methods hain:
// 1️⃣ .add(object)     → object add karna
// 2️⃣ .has(object)     → object check karna
// 3️⃣ .delete(object)  → object hatana

//? has se check karna 

console.log(setW.has(user3)); // true ai ga 
console.log(setW.has({name: "Fahad"})); // false referance error ai ga 

//? ⚠️ Important — WeakSet iterable nahi hai!

// yani ham is ko loop main nahi chala sakte 

// for (let name of wSet) {
//     console.log(name);
// };
//! TypeError: wSet is not iterable



//! Tasks 




const taskSet = new WeakSet();

let user5 = { name: "Ali", age: 25 };
let user6 = { name: "Sara", age: 22 };

console.log("====Task 1====");
taskSet.add(user5);
taskSet.add(user6);

console.log(taskSet.has(user5)); // true ai ga 
console.log(taskSet.has(user6)); // ye bhi true ai ga


console.log("===Task 2====");
taskSet.delete(user5); //  user5 delete ho gia 

console.log(taskSet.has(user5)); // false ai ga keuke wo exist he nahi karta delete ho gia 

