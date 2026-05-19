//! Task 1 — Conversion Practice
// Har line ka output pehle GUESS karo — comment mein likho — phir run karo
console.log(Number("")); // 0 ai ga empty ha
console.log(Number("  "));  // ye bhi zero ai ga
console.log(Number(null)); // 0 ai ga 
console.log(Number(undefined)); // Nan ai ga
console.log(Number(true)); // 1 ai ga
console.log(Number("123abc")); // Nan ai ga not a number
console.log(parseInt("42px")); // 42 ai ga but parse Int ka mjhe nahi bataya px kaha gia ye zara define karna 
console.log(parseFloat("3.99 dollars")); // 3.99 ai ga but parseFloat ka bhi nahi batana 
console.log(String(null));  // null he ai ga
console.log(Boolean("0"));    // ← tricky! // ture ai ga string khali nahi ha 
console.log(Boolean([]));     // ← tricky! // true ai ga array ha khali nahi 
console.log(Boolean(-1));   // ye bhi true ai ga value to ha bhale minus ho 

//! parseInt() — Yeh function string ko left se right padhta hai aur sirf pehla
// whole number (integer) leta hai. Jaise hi koi letter, symbol ya space aaye —
// wahan ruk jaata hai aur baaki sab ignore kar deta hai. Agar string ki shuruat
// mein hi letter ho toh NaN deta hai. Decimal point pe bhi ruk jaata hai.
// Example: parseInt("42px") = 42 | parseInt("3.99") = 3 | parseInt("px42") = NaN

//! parseFloat() — Yeh bhi left se right chalta hai lekin parseInt se zyada
// flexible hai — yeh decimal point bhi le leta hai. Jaise hi letter aaye
// ruk jaata hai. Agar shuruat mein letter ho toh NaN. Jahan parseInt decimal
// pe ruk jaata hai — parseFloat wahan se aage bhi jaata hai.
// Example: parseFloat("3.99abc") = 3.99 | parseFloat("px3") = NaN


//! Task 2 — Coercion Pakdo

console.log("10" + 5); // "105" ai ga string jeet'ta ha + operator main 
console.log("10" - 5); //  5 ai ga - operator win kare ga 
console.log(1 + 2 + "3"); // 33 ai ga js ltr chalti ha pehle 2 value number thi to plus hui age string tha to mil gia 
console.log("1" + 2 + 3); // 123 ai ga start se he string tha is lia 
console.log(true + true); // 2 ai ga 
console.log(false + 1); // 1 he ai ga 0 + 1 = 1
console.log(null + 1); // 1 he ai ga null bhi 0 he count kia jata ha 
console.log(undefined + 1); // Nan not a number error ai ga
console.log("5" == 5); // true ai ga strict check nahi ha value same ha type chal jata ha 
console.log("5" === 5); // false ai ga type same nahi ha strict rule ha 
console.log(null == undefined); // Yeh JavaScript ki ek special hardcoded rule hai —
// null sirf undefined ke saath equal hai — aur kisi ke saath nahi!
console.log(null === undefined); // false ai ga strict ha yaha 

//! Task 3 — Mini Project: Smart Calculator 🧮

// User ne yeh values di hain — sab strings hain (jaise real input hota hai)
// 1. Dono ko proper numbers mein convert karo
// 2. Phir yeh sab calculate karo:
//    - Jama (addition)
//    - Tafreq (subtraction)  
//    - Zarb (multiplication)
//    - Taqseem (division)
// 3. Har result console.log karo — clearly label karo
// 4. Ek bhi + se concatenation na ho — sab asli hisaab ho!

let num1 = "45";
let num2 = "15";

let convert1 = Number(num1); // convert num1 string to number
let convert2 = Number(num2); // convert num2 string to number

console.log(`Addtion is ${convert1 + convert2}`); // addition
console.log(`Subtraction is ${convert1 - convert2}`); // Subtraction
console.log(`Multiplication is ${convert1 * convert2}`); // Multiplication
console.log(`Division  is ${convert1 / convert2}`); // Division


console.log(String([]));
console.log(String({}));
console.log([] + []);