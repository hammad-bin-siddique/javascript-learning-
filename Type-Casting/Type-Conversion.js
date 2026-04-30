//! 📌 Type Conversion

// Jab programmer khud — apni marzi se — ek type ko doosre type mein badle.
// Isko Explicit bhi kehte hain — matlab saaf zahir hota hai ke convert ho raha hai.

let age =  '23';
let result = Number(age);  // Yahan Number() likh ke main khud JavaScript ko bataya — "bhai yeh string hai, isko number banao."
console.log(typeof age, age); // yaha string ai ga typeof
console.log(typeof result, result); // yaha typeof number ai ga 

// More Examples of string to numbers
 
let a = "33.4"; // decimal numbers
let b = "0"; // 0 sirf
let c = "" // empty strings
let d = "abc" // letter string 

let resultA = Number(a);
let resultB = Number(b); // 
let resultC = Number(c); // empty 0 ke tara ha 
let resultD = Number(d); // ye wala number to ban gia but letter ha is lia Nan result ai ga mean ke not a number

// in sab ko ab main ne string se number main convert kar dia ha 

console.table([typeof resultA, resultA, typeof resultB, resultB, typeof resultC, resultC, typeof resultD, resultD]);


//! Numbers ko string main convert karna 

let x = 343;
let y = 88.38;
let z = false; // ye boolean ha is ko string mian convert karo ga 

console.log(typeof Boolean(x),Boolean(x));
console.log(typeof z,z);

let resultX = String(x);
let resultY = String(y);
let resultZ = String(z);

console.table([typeof resultX, resultX, typeof resultY, resultY, typeof resultZ, resultZ]);


// ! Anything → Boolean Conversion

// 6 Falsy Values yaad karo:
//? 0, "", null, undefined, NaN, false


// Yeh 6 cheezein Boolean() mein daalo — hamesha false milega.
// Baaki sab kuch — true milega. Isko Truthy kehte hain.


console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(false)); // false
console.log(Boolean([])); // true
console.log(Boolean("0")); // true

