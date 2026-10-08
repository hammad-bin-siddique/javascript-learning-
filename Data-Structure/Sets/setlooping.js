//! 📦 Topic 4: Set ko Iterate karna (Looping)

// ⚠️ Important — Set mein index nahi hota!
// Array mein hum index se value nikaal sakte hain:
// let arr = ["Ali", "Sara", "Hammad"];
// console.log(arr[0]); // Ali

//? Set mein index nahi hota — isliye hum directly set[0] nahi kar sakte. Isliye iteration ke liye special methods use karte hain.

//! Set iterate karne ke 2 tarike hain:

// 1️⃣ for...of loop
// 2️⃣ .forEach() method

//? 1️⃣ for...of Loop

// 📌 Definition

// for...of ek loop hai jo kisi bhi iterable (Set, Array, String) ki har ek value ko ek ek karke access karta hai.

//? 📌 Syntax

// for (let value of set) {
// har value ke saath kuch karo
// }

// value — har baar current value hogi
// set — jis Set ko loop karna hai

//? 📌 Basic use

console.log("===For of In Sets===");
const names = new Set(["Hammad", "Ali", "Wasib", "Bilal", "Hussan", "Hamza"]);
console.log("====Basic Use====");

for (let value of names) {
    console.log(`Name: ${value}`);
};

//? 📌 Numbers ke saath

const nums = new Set([10, 20, 30, 40, 60, 80, 100]);
console.log("====With Numbers====");

for (num of nums) {
    console.log(`Number: ${num}`);
}; 

//? 📌 Loop ke andar calculation bhi kar sakte hain
console.log("====With Calculated Numbers====");

for (let num of nums) {
    console.log(`Calculated Numbers: ${num * 2}`);
};

//? 📌 Loop ke andar if condition bhi laga sakte hain

const conditionNums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("====Looping With Conditions====");

for (num of conditionNums) {
    if(num % 2 === 0) {
        console.log(`Even: ${num}`);
    } else {
        console.log(`Odd: ${num}`);
    };
};

//? 📌 Real world example — Online store

const cart = new Set(["Iphone", "Shoes", "Perfume"]);

console.log("Cart:");
for (item of cart) {
    console.log(`-${item}`);
};

//? ⚠️ Important — for...of insertion order follow karta hai

const orderSet = new Set([30, 10, 20]);
for (num of orderSet) {
    console.log(num);
};
// mean ke jo pehle add hua whi pehle print ho ga naw ke ascending decending dekhe ga 

//? for...of String pe bhi kaam karta hai

for (letter of "Hammad") {
    console.log(letter);
};

//! for...of sirf Set ke liye nahi — har iterable pe kaam karta hai! ✅


//? 2️⃣ .forEach() Method

// 📌 Definition

// .forEach() ek Set method hai jo Set ki har ek value pe ek function chalata hai — ek ek karke.

//? 📌 Syntax

// set.forEach(function(value) {
// har value ke saath kuch karo
// });

//? Ya arrow function ke saath:

// set.forEach((value) => {
// har value ke saath kuch karo
// });

//? 📌 Basic use
console.log("====ForEach in Sets====");
const fruits = new Set(["Apple", "Mango", "Grapes", "Gauva", "Pineapple"]);

fruits.forEach(function(item) {
    console.log(`Fruit: ${item}`);
});

//? 📌 Arrow function ke saath — short tarika

console.log("====Arow Function====");
fruits.forEach((fruit) => {
    console.log(`Fruit: ${fruit}`);
});


//? 📌 .forEach() ke andar calculation

let price = new Set([500, 200, 300, 499, 599, 88, 30]);

price.forEach((prices) => {
    console.log(`Price With Tax: ${prices * 1.1}`);
});


//? 📌 Real world example — Students ki list

const students = new Set(["Hammad", "Ali", "Danial", "Usman", "Zubair"]);

students.forEach((student) => {
    if(student === "Ali"){
        console.log(`${student} => Absent!`);
    } else{
        console.log(`${student} => Present!`)
    }
});

//! Break in loop 
//? break for of main kam karta ha but forEach main kam nahi karta 
// break ek JavaScript keyword hai jo loop ko beech mein rokta hai — jaise hi break execute hota hai, loop turant band ho jaata hai aur baaki values process nahi hoti.

//? 📌 Syntax

// for (let value of set) {
//     if (condition) {
//         break; // loop band!
//     }
// }


let breakSet = new Set(["Hammad", "Ali", "Fatima", "Saba", "Faizan"]);

// break sirf for of main kam karta ha 
console.log("===Break In for of Loop===");

for (let names of breakSet) {
    if(names === "Fatima") {
        console.log("Stop Fatima name has been found"); break;
    }
    else{
        console.log(`${names} ....Checking!`);
    };
};

//? ⚠️ Important — break sirf for...of mein kaam karta hai, .forEach() mein nahi!

// breakSet.forEach((names) => {
//     if(names === "Ali"); break;
//     {
//         console.log("Ali Name Mil Gia");
//     } else {
//         console.log(`${names} ...Checking`);
//     };
// });

//?  SyntaxError: Illegal break statement Ye Error ai ga

// forEach hamesha saari values pe chalega — beech mein rokna nahi hota! ✅


//! Tasks 
console.log("===Tasks===");


//? Task One

const languages = new Set(["HTML", "CSS", "JavaScript", "PHP", "Python"]);

console.log("====Task One====");

for (let value of languages) {
    console.log(`Language: ${value}`);
};

//? Task Two
console.log("====Task Two====");
const loopTaskTwo = new Set([5, 10, 15, 20, 25]);

loopTaskTwo.forEach((num) => {
    console.log(`Square of  ${num} => ${num * num}`);
});

//? Task 3 
console.log("====Task Three====");

const loopTaskThree = new Set([10, 20, 30, 40, 50]);

for (let num of loopTaskThree) {
    if(num === 30){
        console.log(`${num} Mil Gia`); break;
    } else {
        console.log(`${num} ....Checking`);
    };
};

