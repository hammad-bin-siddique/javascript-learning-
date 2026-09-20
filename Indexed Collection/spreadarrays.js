//! Part i. Spread / Rest with Arrays

// Spread operator (...) ek array (ya iterable) ke elements ko individually "unpack" karta hai. Do main uses (Arrays ke context mein):


//? Copying — array ki naye reference wali copy banana
//? Merging — do ya zyada arrays ko ek mein combine karna


//! Real Code Example
console.log("===Spread Arrays===");
//? Copying

let hammadMarks = [89, 90, 83]; 
let subhanMarks = [...hammadMarks]; // New nIdependant Array

subhanMarks[0] = 100; // abhi subhan wale first index ke marks change ho ge khali 

console.log(subhanMarks); // 100, 90, 83
console.log(hammadMarks); // 89, 90, 83

//? Merging 

let group1 = ["Bilal", "Hamza", "Imran"]; 
let group2 = ["Faizan", "Fahad", "Ali"]; 
let wholeClass = [...group1, ...group2]; 

console.log(wholeClass); // group1 and 2 merged 

// Compare with old (reference) tarika:


let arr1 = [1, 2, 3]; 
let arr2 = arr1; 

arr2[0] = 90;
console.log(arr1); // 90, 2, 3
// reference same ha is lia arr1 main bhi changes ho gi 


//? Shallow Copy Concept 

const students = [{name: "Hammad", marks: 89}]; 

const studentCopy = [...students]; 

studentCopy[0].marks = 99; // ye shallow copy karta ha mean ke object khud copy nahi hota ha khali un ka reference copy hota ha or ye shared object ban jata ha 

console.log(studentCopy); // Hammad, 99
console.log(students); // will be same 
