//! Part E. Array Methods — Combining / Checking


//? Part E Topic 1 concat() Method

// concat() ek array method hai jo do ya zyada arrays (ya values) ko join kar ke ek naya array return karta hai. Ye original arrays ko mutate nahi karta  bilkul immutable operation hai.


//? Syntax

// let newArray = array1.concat(array2);
// let newArray2 = array1.concat(array2, array3, array4); // multiple arrays
// let newArray3 = array1.concat(5, 6, 7); // values bhi de sakte ho


//? agar hum ise kisi apne function ke andar arrow fn se wrap karein to:

//! const combineArrays = (arr1, arr2) => arr1.concat(arr2);

//? Real Example

const kipsStudents = ["Faizan", "Hammad", "Umair", "Bilal", "Ali"]; 
const gpgcStudents = ["Hamza", "Umair", "Fani", "Wasib", "Umar"]; 

const combinedStudents = kipsStudents.concat(gpgcStudents); 

console.log("Part E: Array concat() Method")
console.log("Combined Students:", combinedStudents); // 2 arrays 1 jaga connect ho gay hain 

console.log("Kips Students:", kipsStudents); // Kips originall safe 
console.log("Gpgc Students:", gpgcStudents); // Gpgc Orginal Safe 

//! Important Points

// concat() shallow copy karta hai — agar array ke andar objects hain, to unke references copy hote hain, actual objects nahi (deep copy nahi hoti).

const arrayWithObject = ["Hammad", {name: "Fahad", age: 30}, "Farhan"]; 

const joinObjectArray = kipsStudents.concat(arrayWithObject); 
console.log(joinObjectArray);

// Ye originals ko modify nahi karta — hamesha naya array return karta hai. Isliye result ko variable mein store karna zaroori hai, warna value "lost" ho jayegi.

//? Sirf arrays hi nahi, aap direct values bhi concat kar sakte ho: arr.concat(1, 2, 3).

const arrayValue = kipsStudents.concat("Subhan", "Usama", "Daniyal"); 
console.log(arrayValue);


//? Modern alternative: Spread operator [...arr1, ...arr2] bhi same kaam karta hai — dono common hain in production code.

const combinedStudentsWithSpread = [...kipsStudents, ...gpgcStudents]; 

console.log("Combined Arrays With Spread Operator:", combinedStudentsWithSpread);


//! Practice Tasks: 
//? Task One 

console.log("===Task One===");

const fruits = ["Banana", "Orange", "Grapes"]; 
const vegetables = ["Onion", "Potato", "Turnip"]; 
const dairy = ["Milk", "Butter", "Cheez"];

const groceryList = fruits.concat(vegetables, dairy);

console.log(fruits); // remain the same 
console.log(vegetables); // same like fruits no changes
console.log(dairy); // same like fruits and veg
console.log(groceryList); // all in one 

//? Task Two 

console.log("===Task Two==="); 

const numbers = [10, 20, 30]; 
const updatedNumbers = numbers.concat(40, 50); 

console.log(updatedNumbers); 

//? Task Three 

console.log("===Task Three==="); 

const nums = [1, 2, 3]; 
const nestedNums = [4, [5, 6]]; 

const combinedNums = nums.concat(nestedNums); 

console.log(combinedNums); // nested array flat nahi ho ga mean ke output will be 1,2,3,4,[5,6] ho ga