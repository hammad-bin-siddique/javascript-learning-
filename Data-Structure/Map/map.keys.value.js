//? 🗺️ Topic 11 — .keys() .values() .entries()

    const myMap = new Map([
        ["name", "Hammad"],
        ["age", 23],
        ["isPassed", true],
        ["isEmployed", true]
    ]);



//? 1️⃣ .keys() — Sirf Keys Nikalo

console.log(myMap.keys()); // sirf keys print ho ge 

// loop se keys print karna 

for (const [key] of myMap) {
    console.log(`Keys => ${key}`)
};

//? 2️⃣ .values() — Sirf Values Nikalo

console.log(myMap.values()); // sirf values print ho gi 

// loop se value print karna 

for (const [, values] of myMap) {
    console.log(`Values => ${values}`);
};


//? 3️⃣ .entries() — Key + Value Dono Nikalo

console.log(myMap.entries()); // value or keys dono print ho ge 

// loop se print karna keys or values ko 

for (const [key, value] of myMap) {
    console.log(`${key} => ${value}`);
};


//? ⚠️ MapIterator Kya Hai?
// Jab directly console.log karo — MapIterator aata hai:
// jsconsole.log(student.keys())
// MapIterator { 'name', 'city', 'age', 'passed' }
// Yeh ek special object hai — seedha use nahi hota!
// Isko use karne ke 2 tariqe hain:

//? Loop se 

for (const [key] of myMap) {
    console.log(`First Method Loop se Keys Nikalna => ${key}`);
};

//? Tarika 2 — Array Mein Convert Karo

const keyArr = Array.from(myMap.keys()); // keys bhi kar sakte ho or value bhi 

console.log(keyArr);

//? for...of vs .entries() — Farq?


// ye dono same kam karte hain 

// for of seedha map pe

for (const [key,value] of myMap) {
    console.log(`Keys Are => ${key} and the values Are => ${value}`);
};

// .entries ke sath 

for (const [key, value] of myMap.entries()) {
    console.log(`Keys and values in loop using .entries ${key} => ${value}`);
};


//? Real Life Example — Marks System 

const marks = new Map([
    ["math", 89],
    ["urdu", 78],
    ["physics", 84],
    ["chemistry", 99],
    ["biology", 78]
]); 

// sirf subject name chaia ho 

console.log("=====Subject======");

for (const [key] of marks) {
    console.log(`Subject: ${key}`);
};

// Sirf marks chahiye — total nikalna

console.log("===Marks===");
let total = 0;
let count = 0;

for (const [,value] of marks) {
    console.log(`Marks: ${value}`);
    total += value
    count++
};

console.log("============");
console.log(`Total Marks: ${total}`);
console.log(`Total Average: ${total / count} %`);


//? Real Life Example 2 — Cart System

const cart = new Map([
    ["laptop", 120000],
    ["iphone", 200000],
    ["macBook", 400000],
    ["bmw", 30000000]
]);

// sirf cart ke item ka name print karna 

console.log("======Cart Items=======");

for (const [key] of cart) {
    console.log(`Name of Item: ${key}`);
};

// sirf price print karna total ke lia 

console.log("=====Item Price======");

let totalCart = 0;

for (const [,value] of cart) {
    console.log(`Item Price: ${value}`);
    totalCart += value
};

console.log("===============");
console.log(`Total Price: ${totalCart}`);


// puri receipt

console.log("=====Receipt======");

for (const [item, price] of cart)  {
    console.log(`Name: ${item} RS: ${price}`);
}

console.log("========================");
console.log(`Total Price: ${totalCart}`);

//! Task

const shop = new Map([
    ["laptop",  120000],
    ["mobile",  80000],
    ["monitor", 45000],
    ["keyboard", 5000],
    ["mouse",    3000]
]);

// srif keys print karna 

console.log(shop.keys()); // sirf keys print ho ge 

//loop se keys print karna 

for (const key of shop.keys()){
    console.log(`Keys => ${key}`);
};


// sirf values print karna 

console.log(shop.values()); // sirf values print ho  gi
let totalItemPrice = 0; 

for (const value of shop.values()) {
    console.log(`Values => ${value}`);
    totalItemPrice += value
};

// total print karna 

console.log(`Total is ${totalItemPrice}`);

// .entries se item or price dono print karna 

console.log(shop.entries()); 

// loop ka use kar ke print karna 

for (const [key, value] of shop.entries()) {
    console.log(`${key} => ${value}`);
};

// keys ko array main convert karna 

const keyAr = Array.from(shop.keys());

console.log(keyAr[0]);
console.log(keyAr[2]);

// 50000 se ziada wale item print karna 

for (const [key, value] of shop.entries()) {
    if (value >= 50000) {
        console.log(`Item => ${key} Price ${value}`)
    };
}; 