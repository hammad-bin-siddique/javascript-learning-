//! STEP 1 — Array Banane Ke SAARE Tarike


//!  1 Array Literal (Sabse Common)

let fruits = ["Mango", "Apple", "Banana", "Peach"];

console.log(`Array literal se Array: ${fruits}`);
console.log(fruits);

//! 2 — Array Constructor

let fruits2 = new Array("Pineapple", "Apricot", "Cherry");
console.log(fruits2);

//! 3 — Sirf Size Dena, Values Baad Mein

let box = new Array(5); // yaha ab is ne 5 value ki jaga reserve kar di 5 show nahi ho ga
console.log(box); // emtpy ho ga  [ <5 empty items> ]
console.log(box.length); // yaha length 5 batai ga 

// bad main value add karna 

box[0] = "Hammad";
box[1] = "Fahad";
console.log(box); // [ 'Hammad', 'Fahad', <3 empty items> ] ye output ho gi abhi is main 2 add ho gay hain 

//? Trap! new Array(5) — 5 elements nahi banata, sirf 5 jagah reserve karta hai

//! 4 — Khali Array, Baad Mein Push

let student = [];
student.push("ali");
student.push("faizan");
student.push("fatima");  // ab pehle array khali tha bad main ham ne add kia push ke sath value 
console.log(student);

//! 5 — Array.of()

const num =  Array.of(5); // yaha 5 empty items nahi ai ga balke value ai gi 5 
console.log(num); 

// Constructor se farq:
let a = new Array(3); // output 3 empty items
let b = Array.of(3); // yaha per 3 value print ho gi 

console.log(a, b); 

//! 6 Array.from()

// Case 1 — String se Array

let name = "Ali";
let letter = Array.from(name); // yaha us ke letter print ho ge 
console.log(letter);

let city = "Abbottabad";
let cityLetter = Array.from(city); 
console.log(cityLetter);

// Case 2 — Length aur Formula se Array

let arr = Array.from({length: 10},(_, i) => i);

// _ = value (khali hai, use nahi karna) underscore use kia mean ke value khali ha 
//  i = index (0, 1, 2, 3, 4) up to 9 mean ke 0 se start ho ga or 9 tak chale ga 
console.log(arr); // ! i har baar badalta hai — 0, 1, 2, 3, 4 depend on length 

// Case 3 — Range Banana (1 to 5)

// 0 se shuru — i waise hi use karo
let zeroToFour = Array.from({length: 5},(_,i) => i);
console.log(zeroToFour); // 0 se 4 tak chale ga 

// 1 se shuru karna ho to index main 1 add karo i mean ke i main 

let oneToFive = Array.from({length:5},(_,i) => i + 1); // ab yaha = 0 ke bajai 1 se start ho ga 
console.log(oneToFive);

// 4 ka table

let table4 =  Array.from({length: 10},(_, i) => (i + 1) * 4);
// let table4 =  Array.from({length: 10},(_, i) => i  * 4); // agar ham 1 add naw kare to 0 se start ho ga or 36 tak jai ga 

console.log(table4);

// Case 4 — Set se Array

// Set mein unique values hoti hain mean ke ham 123334455 nahi kar sakte is ka output 12345 ai ga 

let uniqueNames = new Set([1,2,2,3,3,4,5]);
console.log(uniqueNames); // Set(5) { 1, 2, 3, 4, 5 } ye output ai ga mean ke ye unique value uthata ha 

// abhi is ko array bana deta ha array .from se 
let makeArray = Array.from(uniqueNames);
console.log(makeArray);

// Case 5 — Map se Array

let myMap = new Map(
    [
        ["name", "Ali"],
        ["age", 23]
    ]
);

let mapArray = Array.from(myMap);
console.log(mapArray);


// Spread      = Dabba palatna — sab cheezein girti hain
//               Bas nikaalta hai, kuch nahi karta

// Array.from() = Conveyor belt — har cheez pe
//                kuch kaam karke dabbe mein daalta hai


// ! spread ke example

let x = "Pakistan";
let arr1 = [...x];
console.log(x,arr1);

//! STEP 2 — Array Ki Properties

let mainCities = ["Lahore", "Peshawer", "Malakand", "Islamabad"];
console.log(mainCities.length); // 4 ai ga
console.log(mainCities[mainCities.length -1]); // lenght se last element select karna

// lenght change kar ke array chota karna 
//? mainCities.length = 2;
console.log(mainCities); // ab 2 he ai ga


// STEP 3 — Array Access Karna

// left to right se 

console.log(mainCities[0]); // lahore ho ga
console.log(mainCities[2]); // Malakand ai ga 
console.log(mainCities[3]); // islamabad ai ga
console.log(mainCities[10]); // undefined ai ga keuke exist he nahi karta 

// right to left using at() method modern way 

console.log(mainCities.at(-1)); // islamabad ai ga last se 
console.log(mainCities.at(-3)); // peshawer ai ga 


//! STEP 4 — Array Types

//? Simple Array

const number = [1,2,3,4,5,6];

//? Mixed Array

const info = ["hammad", 20, true, null, undefined, 0];


//? Nested Array 

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix); // all array 
console.log(matrix[0]); // first row 1 2 3 
console.log(matrix[0][2]); // first row third column 3
console.log(matrix[2][1]); // third row second column 8

//! Array of Objects (Sabse Zyada Use Hota Hai Real Projects Mein) javascript

let studentData = [
    {name: "Ali", age: 22, marks: 98},
    {name: "Fahad", age: 23, marks: 85},
    {name: "Sara", age: 20, marks: 70}
];

console.log(studentData); // whole students ka data print ho ga 
console.log(studentData[0]);  // ali wala print ho ga
console.log(studentData[2]); // last wala print ho ga

//! STEP 5 — Array Modify Karna

studentData[0].name = "Farhan";
console.log(studentData[0]); // ab ali ka name change ho kar farhan ho gia ha 
studentData[2].marks = 100;
console.log(studentData[2]); // ab yaha sara ke number 70 se 100 ho gay hain 

console.log(studentData); // all changed data of students 

//! STEP 6 — Array Check Karna


console.log(Array.isArray(studentData)); // true ai ga uper array bana hua ha is ka 
console.log(Array.isArray("hello")); // false ai ga is name ka koi bhi array nahi bana hua 
