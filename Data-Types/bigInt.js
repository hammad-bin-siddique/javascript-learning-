// Pehle Normal Number Ki Problem Samjho:
// Socho tumhare paas ek chota calculator hai — woh sirf 15-16 digit tak sahi kaam karta hai. Isse zyada karo toh galat jawab deta hai!
// JavaScript ka normal Number bhi aisa hi hai:

console.log(Number.MAX_SAFE_INTEGER + 5); // ab ye sahi calculate nahi kar raha is se age 

// Normal Number = Choti almari → sirf 9007199254740991 tak
// BigInt        = Badi almari  → jitna chahو rakho!

let bigNum = 495820858209582058n;
console.log(bigNum + 90090n);//! bigint ke sath ap unlimited numbers add kar sakte ho 


// BigInt Ka typeof:

let a = 49029409580295n;
console.log(typeof a, a); // typeof BIGINT ai ga

let b = Number.MAX_SAFE_INTEGER;
console.log(typeof b, b); // typeof Number ai ga 

// BigInt Pe Maths — Bilkul Normal:

let x = 500n;
let y = 490n;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // divide
console.log(x % y); // reminder

// !Sabse Important Rule — Mix Nahi Kar Sakte!

let c = 100n;
let d = 490;
// console.log(c + d); // TypeError: Cannot mix BigInt and other types, use explicit conversions
// ye wala error ai ga is lia dono ko mix nahi kar sakte;

// ! Ha convert kar sakte ho 

let e = 390n;
let f = 400;
console.log(e + BigInt(f)); // ab ye proper kam kare ga ham ne normal number ko bigint bana dia 
console.log(f + Number(e)); // ye bhi proper kam kare ga yaha bigint ko number bana dia normal


// yaha number ko bigint kia 
let num = 500;
let big = BigInt(num);
console.log(typeof big, big);

// yaha bigint ko number banaya

let bigNumber = 500n;
let normalNumber = Number(bigNumber);
console.log(typeof normalNumber, normalNumber);


//! Decimal BigInt Mein Nahi Hota! 

// let g = 390.5n; // SyntaxError: Invalid or unexpected token ye sirf whole number leta ha decimal nahi 

// Real Life Use Cases:
// 1. Bank — big Transactions:

let bankBalance = 499594959020284339n;
let deposit = 94959029584444029502n;
let newBalance = bankBalance + deposit;
console.log(`New Balance is: ${newBalance}`);

// 2. Space Science — Distance Measure 

let sunDistance = 1496000000084859020000n;
console.log(`Sun Distance From Earth is: ${sunDistance} Kilo Meter`);

//3. Unique ID System:

let userId1 = 9340248001840194n;
let userId2 = 9010480138049029n;
console.table([typeof userId1,userId1,typeof userId2, userId2]);