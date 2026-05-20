//! 📦 Topic 5: Set → Array Conversion



//? Set ko Array mein convert karne ke 2 tarike hain:

// 1️⃣ Spread Operator  → [...set]
// 2️⃣ Array.from()     → Array.from(set)

//? 1️⃣ Spread Operator — [...set]

// 📌 Definition

// Spread operator ... kisi bhi iterable (Set, String) ki saari values ko ek ek karke bahar nikaal deta hai — aur hum unhe [] mein rakh ke Array bana lete hain.

//? 📌 Syntax
// let arr = [...set];

//? 📌 Basic use

const mySet = new Set([5, 3, 2, 6, 1, 4, 7]);

let arr = [...mySet];

console.log(arr); // or ab ye set se array ban gia ha 
console.log(mySet); // ye set ha 

//? TypeOf Check karna 

console.log(typeof mySet); // object
console.log(Array.isArray(arr)); // ye abhi true value return kare ga keuke ke ye array ha 


// 📌 Convert karne ke baad Array powers use karo

arr.sort((a,b) => a - b);
console.log(arr); // set main sort nahi hota array main ho gia ha 

//? 📌 Real world example — Duplicate remove karna

const rawData = [1, 2, 4, 5, 3, 3, 2, 6]; // raw array bana with duplicate values
const makeSet = new Set(rawData); // array ko set main convert kia duplicate values gai 
const cleanData = [...makeSet]; // wapis array ban gia 

console.log(`Raw Data: ${rawData}`); // raw array print ho ga 
console.log("Set Data:", makeSet); // set print ho ga duplicate values gai 
console.log(`Clean Data Without Sorting: ${cleanData}`); // wapis array hua ab is main array ke features bhi add ho sakte hain or duplicate values bhi khatam ho gai 

cleanData.sort((a, b) => a - b); // ab numbers ko sort kia mean ke tarteeb de
console.log(`Clean Data With Sorting: ${cleanData}`); // ab number sorting ke sath print ho ge 

//? 📌 Strings ke saath spread

const stringSet = new Set(["Ali", "Hammad", "Hamza"]); 

const stringArr = [...(stringSet)]; // set ko array main badla

console.log(stringArr[0]); // ab index se ham value nikal sakte array ban gia ha Ali Value Print ho gi 
console.log(stringArr[2]); // Hamza

//! 2️⃣ Array.from()

// 📌 Definition

// Array.from() ek built-in JavaScript method hai jo kisi bhi iterable (Set, String, Map) ko Array mein convert karta hai.

//? 📌 Syntax

// let arr = Array.from(set);

//? 📌 Basic use

const numSet = new Set([1, 2, 3, 4, 5, 6]);
const setToArray = Array.from(numSet); // is ko Array.from se Array main convert kia

console.log(typeof numSet, numSet); // typeof object ai ga 
console.log(Array.isArray(setToArray)); // true ai ga 
console.log(setToArray);

//? 📌 Real world example

const registeredUser = new Set(["Hammad", "Ali", "Sara"]);
const userList = Array.from(registeredUser); // is ko array main convert kia 

console.log(`Total Users: ${userList.length}`);
console.log(`First User: ${userList[0]}`); // first user Hammad
console.log(`Last User: ${userList[userList.length - 1]}`); // Last User Sara

//? ⚠️ Important — Original Set change nahi hoti!

const mySet1 = new Set([1, 2, 3]);
const set1Array = Array.from(mySet1);

set1Array.push(4);
console.log(set1Array); // 4 tak print ho ga 4 push se add kia 
console.log(mySet1); // 3 tak he ho ga


//! Tasks

console.log("=====Tasks=====");

//? Task 1

const cities = new Set(["Peshawar", "Islamabad", "Abbottabad", "Karachi"]);

const citiesArray = [...(cities)];

console.log("====Task One====");
console.log(citiesArray[2]); // abbotabad print ho ga 
console.log(citiesArray.length); // 4 ho gi 

//? Task 2

console.log("===Task Two===");

const task2 = new Set([1, 2, 3, 4, 5]);
const task2Array = Array.from(task2);

task2Array.forEach((num) => {
    console.log(`Square: ${num} => ${num * num}`);
});


//? Task Three

const task3 = ["Ali", "Sara", "Hammad", "Sara"];

const task3Set = new Set(task3);

console.log("===Task Three===");
console.log(task3Set);