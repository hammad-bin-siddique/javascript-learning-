
//! Part One Basic Array 

let fruits = ["Apple", "Banana", "Orange", "Grapes"];


//! Array can be made by two ways 


//? 1. Array Literal

let nums = [1, 2, 3, 4, 5];


//? 2. new Array()

// ye array new keyword se banaya jata ha or ye kam use hota ha 

let nums2 = new Array(1, 2, 3, 4);

//! Agar new array main sirf 1 number to to wo array ka content nahi banta ha balke wo array ke length set kar deta ha 

let arr = new Array(5); 
console.log(arr); // yaha [ <5 empty items> ] bann jai ge 
console.log(arr.length); // 5 length show karwai ga 

//! Zero-Indexing Ka Concept
console.log("===Array Index===");
// array main index 0 se start hota ha 

let vegetables = ["Onion", "Potato", "Tomato"];

console.log(vegetables[0]); // Onion
console.log(vegetables[2]); // Tomato
console.log(vegetables[3]); // undefined agar koi index exist nahi karta ha to undefiend return kare ga


//! length Property

// ye property batati ha ke array main kitne element hain or is se ham manually change bhi kar sakte hain 

console.log("===Length Property===");

let arrLen = [1, 2, 3, 4, 5]; 

console.log(arrLen); 
console.log(arrLen.length); // 5

// Change karna length ko 

arrLen.length = 2; 
console.log(arrLen); // 1 2  ho ga agle hat gay 

arrLen.length = 5; // ab 1 2 or 3 new empty item add ho jai ge 
console.log(arrLen); 


//? Real world use case last element nikalna 

let students = ["Ali", "Hammad", "Faizan", "Bilal"];

console.log(students[0]); // Ali
console.log(students.length); // 4
console.log(students[students.length - 2]); // Faizan Second Last Element
console.log(students[students.length - 1]); // Bilal Last Element 


//! Tasks 


//? Task One 

let cities = ["Abbottabad", "Lahore", "Multan", "Karachi", "Peshawar"];

console.log("===Task One===");
console.log(cities[0]); // Abbottabad
console.log(cities[cities.length - 1]); // Peshawar


//? Task Two 

let myArr = new Array(7); 
console.log("===Task Two==="); 
console.log(myArr.length); //new Array(7) single numeric argument leta hai to wo length set kar deta hai (7 empty slots), array elements nahi. Agar new Array(7, 8) likhte to wo actual elements [7, 8] ban jate. Ye JS ka special/quirky behavior hai jab constructor ko sirf ek number diya jaye.
console.log(myArr); // 7 empty spaces 


//? Task Three 

let marks = [90, 39, 94, 95, 83, 90];

console.log("===Task Three==="); 

marks.length = 3; 

console.log(marks); // 90 39 94 or agle 3 nikal gay hain 


//! Mini Project Nadra Token Board


console.log("===Mini Project==="); 

let tokenBoard = ["Hammad", "Bilal", "Faizan", "Umair", "Imran"];

console.log(`Total Token Waiting: ${tokenBoard.length}`); // 5

console.log(`Currently Serving: ${tokenBoard[0]}`); // Hammad
console.log("Last In Line: ", tokenBoard[tokenBoard.length - 1]); // Imran

