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


//! Part J Topic B Sparse Arrays

// Sparse array wo array hai jismein kuch indices "missing" hon — matlab unpe koi value assign nahi hui, sirf gap hai memory mein.

console.log("===Sparse Array===");

let normalArr = [1, undefined, 3]; // yaha index 1 ko khali nahi chora hua ha waha per jan bohj kar undefined value di ha 

let sparseArr = [1, , 3]; // Sparse Array yaha index one per koi slot he nahi ha mean ke wo khali ha 

console.log(normalArr.length); // 3
console.log(sparseArr.length); // 3

console.log(1 in normalArr); // true keuke 1 index exist karta  khali nahi ha is lia true ai ga 
console.log(1 in sparseArr); // false keuke 1 index exist he nahi karta ha 
console.log(normalArr); 
console.log(sparseArr); // 1 <1 empty item> 3 is tara ai ga 


let loopArr = [1, 2, 3]; 
loopArr[10] = 99;

loopArr.forEach((val, index) => {
    console.log(index, val);
});

console.log(loopArr.length); // 11

console.log(loopArr.includes(undefined)); // true keuke includes holes ya nan ko undefined treat karta ha 

//? Lekin agar ham for loop chalai ge to empty slots per bhi cale ge or undefined mile ga jabke for each skip kar deta ha 


for (let i = 0; i < loopArr.length; i++) {
    console.log(i, loopArr[i]);
};


//! Practice Tasks (Sparse Array + Array-vs-Object)


//? Task One 

console.log("===Task One==="); 

let task1Arr = [1, 2, 3, 4, , 6]; 
console.log(task1Arr.length); // 6 
console.log(task1Arr); // 1, 2, 3, 4, <1 empty item>, 6
task1Arr.forEach(x => console.log(x)); // ye sirf 5 bar chale ga keuke holes skip ho jate hain 


//? Task Two 
console.log("===Task Two===")

let scores = [10, 20, 30]; 
scores[7] = 100; 

for(let i = 0; i < scores.length; i++) {
    console.log(i, scores[i]);
}; 

// is main index 3 se 7 tak undefined ai ga 

scores.forEach(element => {
    console.log(element);
}); 

// ye loop sirf 4 bal chale ga or 10, 20, 30, 100 print kare ga or empty slots skip ho jai ga 

console.log(scores); // 10, 20, 30, <4 empty items>, 100

//? Task Three 

console.log("===Task Three==="); 

let x = Array(3); 
console.log(x.length); // 3
console.log(0 in x); // false keuke exist he nahi karta ha wo index holes hain 



//! Mini-Project Sparse Array Cleaner

console.log("===Mini Project==="); 


function cleanSparseArray(arr) {
    let cleaned = []
    for (let i = 0; i < arr.length; i++) {
        if(i in arr) {

            cleaned.push(arr[i]);
        };
    };

    return cleaned;
}; 

let test = [1, 2, 3, undefined, , , 6, 7]; 
console.log(test); // 1, 2, 3, undefined, <2 empty item>, 6, 7
let clean = cleanSparseArray(test);
console.log(clean); // 1, 2, 3, undefined, 6, 7


//! Part J Topic C: Array-like Objects (arguments, NodeList) vs Real Arrays


console.log("===Array Like Object VS Real Arrays===");

// Array-like Object ek aisa object hai jo dikhne mein Array jaisa lagta hai — usme numeric indices (0, 1, 2...) hoti hain aur ek length property hoti hai — lekin woh actual Array nahi hota, kyunki:

// Array.isArray() check karne par false return karta hai
// Iska prototype Array.prototype se link nahi hota — isliye Array ke built-in methods (push, pop, map, filter, forEach, slice, etc.) is par directly available nahi hote


//? Common Examples

// a) arguments object (function ke andar automatically milta hai — sirf regular functions mein, arrow functions mein nahi):


function showArgs() {
    console.log(arguments);  // Jab bhi tum ek regular function (function keyword se banaya hua, arrow function nahi) define karte ho, JavaScript automatically, bina tumhare kahe, uss function ke andar ek special variable bana deta hai jiska naam arguments hota hai.
    console.log(arguments.length); // ye length batata ha ke kitne ha
    console.log(arguments[2]); 
}; 


showArgs(1, 2, 3);


//! Important Point 

// arguments parameter declare karne se independent hai

function example(a, b) {
    console.log(a); // w
    console.log(b); //x
    console.log(arguments); 
    console.log(arguments.length) // yaha lenght 2  nahi ai gi balke 4 ai gi even though function main sirf 2 parameters decalre kiya the!
}; 

example("w", "x", "y", "z");

//! arguments sirf regular function declarations mein available hota hai. Arrow functions (() => {}) mein arguments khud ka nahi hota — agar tum arrow function ke andar arguments likhoge, to woh outer/parent function ka arguments utha lega (ya agar koi outer function nahi to error dega).


// const arrowTest = () => {
//     console.log(arguments);
// }; 

// arrowTest(1, 2); 
//? Error arguemnt is not defined ai ga or yaha ye he ai ga keuke yaha koi outer regular function nahi ha but yaha terminal main node js ka her file ko secretly 1 function main wrap kar deta ha is lia yaha ye lage ka function sahi kam kar gia ha but ye actually 1 silent bug ha. 


//? Let's wrap it in actual outer function and see what happens 

function outer() {
    const arrTest = () => {
        console.log(arguments);
    }; 
    arrTest(1, 2); // arrow text ke argument main 1 2 ha 
};

outer(9, 10); // ab ye 1, 2 ke bajai 9 10 print kare ga keuke arrow function ka arguments nahi hota ha agar outer function ho to wo us ka argument le leta ha is lia yaha per outer function ke values print ho gi instead of arrow function 



// b) NodeList (jab tum DOM se multiple elements select karte ho, jaise document.querySelectorAll('.item') — abhi hum DOM tak nahi pahunche, lekin concept yahan samajh lo, baad mein practically use hoga)


//! NodeList Kya Hai?

// Jab tum kisi webpage (HTML) mein multiple elements select karte ho JavaScript se, jaise:


// let item = document.querySelectorAll('.item'); // All elements ko pick karo jin ke class item ha 

// console.log(item);


//! 3. Proof — Yeh Array Nahi Hai


function profArgs() {
    console.log(Array.isArray(arguments)); // false 
    console.log(typeof arguments); // "object"; 
    console.log(arguments.length); // 2
}; 

profArgs(1, 2);



//! Tasks 

//? Task one
console.log("===Task One===");

function checkArray() {
    console.log(Array.isArray(arguments)); // false cuz this is not an array 
}; 

checkArray(1, 2, 3); // false


//? Task Two 

// function tryMap() {
//     return arguments.map(x => x * 2);
// }; 

// tryMap(1, 2, 3); // output will TypeError: arguments.map is not a function keuke ye real array nahi ha or is per array method work nahi karte hain 


//! How to fix 
console.log("===Task Two==="); 

function tryMap() {
    let realArr = [...arguments]; // ya phir Array.form(argument); dono tara se bana sakte hain 

    return realArr.map((x) => x * 4);
}; 

console.log(tryMap(1, 2, 3, 4)); // ab ye real array ha or output ho gi 4, 8 ,12, 16

