// !hoisting of var is main value undefined hoti ha mean ke variable ban jata ha but value undefined hoti ha 

console.log(city);
var city = "karachi" //!value undefined ai gi is main 
console.log(city);


//!let is main variable to ban jai ga but value tdz main ho gi is lia error ai ga 

// console.log(mark);
let mark = "Pakistan" // ! let and const same ha but tdz tak mean ke is const ke value change nahi ho sakti

console.log(mark);


// Student card

const studentName = "Hammad Siddique"
const rollNumber = 204
let marks = 75
let grade;

console.table ([studentName,rollNumber,marks,grade]);
marks = 90;
grade = "A";

console.table([marks,grade]);

// ! Vairable Naming Rules


// // ────── RULES (toro toh ERROR) ──────
// let 1naam;          // ❌ number se shuru
// let user-name;      // ❌ dash allowed nahi
// let user name;      // ❌ space nahi
// let if = 5;         // ❌ reserved word

// // ────── CONVENTIONS (toro toh bad practice) ──────
// let firstname;      // ❌ camelCase nahi — firstName hona chahiye
// let a = "Hammad";   // ❌ meaningless naam
// let ACTIVE = true;  // ❌ boolean ke liye isActive hona chahiye

// // ────── SAHI TARIKA ──────
// let firstName = "Hammad";     // ✅ camelCase
// let examScore = 95;           // ✅ meaningful
// let isLoggedIn = true;        // ✅ boolean ke liye is
// const MAX_SCORE = 100;        // ✅ constant ke liye SCREAMING_SNAKE


const firstName = "Asad"
let rollNum = 124
let passed = true
let grades = "A"
console.table([firstName,rollNum,passed,grades]);