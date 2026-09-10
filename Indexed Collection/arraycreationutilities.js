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

console.log("===Part F Array Method: Array.of()===");

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

//! Part F: Topic Two Array.of()

// Array.of(element1, element2, ..., elementN) — jitne bhi arguments do, unko seedha ek naye array mein daal deta hai — chahe wo ek number ho, ya kai numbers ho.


//? Syntax

// Array.of(element1, element2, element3, ...)
console.log("===Part F: Topic 2 Arrar Method Array.of()===");
//! Example

//? Multiple Elements

const token1 = Array.of(1, 2, 4); 

console.log(token1); 

//? Single Value/Element

const token2 = Array.of(2); 
console.log(token2);


//! Practice Tasks of Array.of()

console.log("===Task One==="); 

const task1ArrayOf = Array.of(100); 
console.log(task1ArrayOf); // output will be 100 

const task2ArrayOf = Array(100); // output will be 100 empty item Array ko agar single value do to wo use length samjta ha jabke array.of ko single value do to wo use element treat karta ha 
console.log(task2ArrayOf)

console.log("===Task Two===");

const taskMyself = Array.of(23, "22:02", 2026); 
console.log(taskMyself);

console.log("===Task Three==="); 

const taskEmpty = Array.of();  // ye empty brackets return kare ga 

console.log(taskEmpty); // []


//! Parf F Topic 3 Array.fill()

// array.fill(value, startIndex, endIndex) — array ke andar ek specific range (start se end tak, end exclusive) ko ek hi value se bhar deta hai. Agar start/end na do, to pura array fill ho jata hai.


//! Syntax

// array.fill(value);                  // pura array fill
// array.fill(value, startIndex);      // startIndex se end tak fill
// array.fill(value, startIndex, endIndex); // startIndex se endIndex-1 tak fill

//! Example
console.log("===Array Method fill()===");
// Example 1: All Array Fill karna 

const register = new Array(5); 
console.log(register); // [5 empty items]

const fillRegister = register.fill("Hello");
console.log(fillRegister);

// Example 2 Partial Fill karna sirf start index dena or end tak sab value same rakh dena 


const numbers = [1, 2, 3, 4, 5, 6]; 
console.log(numbers); 

const partialFillNum = numbers.fill(-1, 3); 
console.log(partialFillNum); // output will be 1, 2, 3, -1, -1, -1


// Example 3 Partial fill from Start and end 

const numbers1 = [1, 2, 3, 4, 5, 6];

const partialFillNumStartEnd = numbers1.fill(-1, 2, 5); 

console.log(partialFillNumStartEnd); // 1, 2, -1, -1, -1, 6

//! Important Points 

// End index exclusive hota hai — end tak nahi jata, end se pehle tak

// fill() mutate karta hai — is liye same array baar baar reuse karne se purane changes carry forward hote hain (jaisa Example 2 → Example 3 mein hua tha)


//! Combined Practice Tasks 

console.log("===Array Creation Utilities Combined Tasks===");

//? Task 1: 
console.log("===Task One===");
const combinedTask1 =  Array.from({length: 6}, (_) =>  {return null});

console.log(combinedTask1); 

//? Task Two 

console.log("===Task Two===");
const favoriteSubject = Array.of("Computer", "Math", "Physics"); 

console.log(favoriteSubject);

//? Task Three

console.log("===Task Three===");
const marks = [50, 60, 70, 80, 90];
marks.fill(0, 1, 3);
console.log(marks); // output will be 50, 0, 0, 80, 90


//! Mini Project Seat Booking System 
console.log("===Mini Project==="); 
const project = Array.from({length: 10}, (_) => "Available");

console.log(project); 

const booked = project.fill("Booked", 3, 6); 
console.log(booked) 

console.log(project === booked); // true 

console.log(project)