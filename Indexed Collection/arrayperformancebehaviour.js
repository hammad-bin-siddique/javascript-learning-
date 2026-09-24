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