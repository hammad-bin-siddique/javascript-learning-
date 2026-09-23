//! Part J. Array Performance & Behavior


//? Array vs Object internally

// JavaScript mein sab kuch (functions, arrays) internally Object hi hote hain (primitive types jaise number, string ke ilawa).
// Array ek special object hai jiski keys 0, 1, 2, 3... (numeric-like strings) hoti hain, aur ek built-in length property hoti hai.
// Engine level par (V8 jaisa engine jo Node.js/Chrome use karta hai), arrays ko optimize kiya jata hai — agar array "dense" hai (koi gap nahi, sab elements same type ke) to engine ise ek fast, contiguous memory block ki tarah treat karta hai (C-style array jaisa). Lekin agar tum ismein gaps chhodo ya mixed types daalo, to engine "slow mode" mein chala jata hai — phir woh normal object ki tarah treat hota hai (hash-map jaisa), jo slower hai.


//?  Syntax / Proof
console.log("===Array Vs Object Internally===");
let arr = [10, 20, 30]; 

console.log(typeof arr); // object ai ga typeop 
console.log(Array.isArray(arr)); // true keuke ye array ha 
console.log(arr.length); // 3
console.log(arr["0"]); // 10 String se bhi access kar sakte hain keuke array Ojbect he ha 

//! Real Code Example

let obj = {name: "Hammad", age: 23}; 
let arr2 = ["A", "B", "C"];


console.log(typeof obj); // Object 
console.log(typeof arr2); // Object 
console.log(Array.isArray(obj)); // false keuke ye object ha 
console.log(Array.isArray(arr2)); // true 
arr2.custom = "Hello"; // ye array ke andar add to ho jai keuke array 1 object he ha 
console.log(arr2.length); // but length 3 he rahe gi keuke array numeric index count karta ha like 0, 1, 2, 3 or ye 1 strink ke ha 
console.log(arr2);

//? agar ham array ke beach main index skip kar ke kisi specific index main value add kare to ? 


let newArr = [1, 2, 3]; 
// yaha ab length 3 ha 

newArr[10] = 11; // ab yaha main ne 11 index per element add kia ha 

console.log(newArr.length); // 11 keuke total 11 index hain 0 se 10 tak 
console.log(newArr); // 1, 2, 3, <7 empty item> 11;