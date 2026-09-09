//! Part F  Array Creation Utilities 



//? Part F Topic 1 Array.from()

//! Formal Definition

// Array.from(source, mapFunction) — ek naya array banata hai kisi iterable ya array-like object se, aur chahe to har element pe ek mapping function bhi apply kar sakta hai (map() ki tarah sath sath)

// Normal function
//! Array.from(source, function(item, index) {
//   return item * 2;
// });

// Arrow function
//! Array.from(source, (item, index) => item * 2);
// Bina map function ke
//! Array.from(source);


//! Example

//? Strings ko Array Main Convert Karna 


const name = "HammadSiddique"; 

const stringToArray = Array.from(name); 
console.log(stringToArray);


//? Set To Array 

const uniqueNumbers = new Set([101, 102, 101, 103, 102]); 

const setToArray = Array.from(uniqueNumbers); 

console.log(setToArray); 
console.log(Array.isArray(uniqueNumbers)); // false cuz it's a set 
console.log(Array.isArray(setToArray)); // true cuz it is now an array 


//? Real Use Length se array banana 

const tokens = Array.from({length: 10}, (_, i) => (i + 1)); // ye function ab 1 se 10 tak array values generate karta ha 

console.log(tokens); 

// Now Double The values 

const doubleToken = Array.from({length: 10}, (_, i) => (i + 1) * 5); 
console.log(doubleToken); // Table of 5 10 time: 5, 10, 15 so on 

const doubleToken1 = Array.from(tokens, (num) => (num * 2)); 
console.log(doubleToken1); // ye map ka use kar ke value double ki


//? Using Map Function 


const elements = [1, 2, 3, 4, 5]; 

const doubleElement = Array.from(elements, (num) => (num * 10));
console.log(doubleElement); // double the elements 10 time using map function in Array.from

//! Important Points

// { length: 5 } ek array-like object hai  isme actual indexes nahi hain, sirf length property hai. Array.from() is length ko dekh kar utne undefined slots bana deta hai, phir map function chalata hai.


// Agar Array.from({length: 5}) bina map function ke likho, to har element undefined hoga — is liye second parameter (map function) bohot powerful hai range generate karne ke liye.

// Array.from() naya array return karta hai, original source ko change nahi karta.

// Ye arguments object (function ke andar) ko bhi array bana sakta hai — jo ke array-like hota hai, real array nahi.

//! Practice Task Array.form(); 


//? Task One

console.log("===Task One==="); 

const taskOne = Array.from({length: 10}, (_, i) => (i + 1)); 

console.log(taskOne);


//? Task Two 

console.log("===Task Two==="); 



const taskTwo = Array.from({length: 5}, (_, i) => (i + 1) * 5); 

console.log(taskTwo);


//? Task Three 

console.log("===Task Three==="); 

const taskString = "Pakistan"; 

const UpperString = Array.from(taskString, (char, i) => (char.toUpperCase()));

console.log(UpperString); 