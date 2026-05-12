//? 🗺️ Topic 10 — Map Ko Loop Karna — for...of


// Pehle Samjho — Loop Kyun Chahiye?
// Abhi tak hum ek ek entry manually nikal rahe the:

// console.log(myMap.get("name"))
// console.log(myMap.get("city"))
// console.log(myMap.get("age"))
 // Yeh boring hai — 100 entries hों tو 100 baar likhna padega!

// Loop se — ek baar likho — sab entries khud nikal aayengi!
// for (const entry of myMap) {
//     console.log(entry)  // sab entries khud aayengi!
// }

//! for...of Ka Syntax
// for (const entry of myMap) {
//     console.log(entry)
// }
// Yeh kya karta hai:

// myMap ki har entry pe jaata hai — ek ek karke
// Har entry [key, value] ka chhota array hoti hai
// entry mein woh chhota array aata hai


//? Basic Example


const myMap = new Map([
    ["name", "Hammad Siddique"],
    ["fatherName", "Muhammad Siddique Zaman"],
    ["isStudent", true],
    ["isMarried", false],
    ["rollNbr", "ISL 22: 02"]
]);

// ab is pure map ko loop main chalai ge 

for (const entry  of myMap) {
    console.log(entry);
};

//? Key Aur Value Alag Alag Nikalna — Destructuring
// Upar wale mein pura array aa raha tha — key aur value alag alag chahiye?

for (const [key, value] of myMap) {
    console.log(key,value);
};

//? Sirf Key Chahiye

for (const [key] of myMap) {
    console.log(key);
}; // sirf key print ho ge naw ke values


//? Sirf Value Chahiye

for (const [,value] of myMap) {
    console.log(value);
};
// yaha sirf value print hui ha agar console main value ke sath comma lagai ge to i empty item or age value ai gi 

//? Template Literal Ke Saath

for (const [key, value] of myMap) {
    console.log(`${key} => ${value}`);
};

//? ⚠️ Order Preserve Hoti Hai

// Object mein order guarantee nahi thi — Map mein hamesha same order!
// Mean jo first per ho gi key wo print bhi pehle ho gi 

const myMap2 = new Map([
    ["c", 23],
    ["b", 49],
    ["a", 99]
]);

for (const [key, value] of myMap2) {
    console.log(`${key} => ${value}`);
}; // yaha per ye nahi ke pehle a ai or akhir main c yaha jo first pe key ho ge whi pehle print ho gi 

//? Nested Map Loop — Step By Step

// nested map 1
const studentMap1 = new Map([
    ["name", "Hammad"],
    ["city", "Abbottabad"],
    ["rollNbr", "IsL 22: 02"]
]);
// nested map 2
const studentMap2 = new Map([
    ["name", "Ali"],
    ["city", "Islamabad"],
    ["rollNbr", "ENG 21:07"]
]);

// parent map 
const classMap = new Map([
    ["student1", studentMap1],
    ["student2", studentMap2]
]);


// Bahir wala loop ki hame sirf key chaia yani class map ke sirf student 1 or 2 wali key chaia 

for (const [key, value] of classMap) {
    console.log(key) // keuke value pura map ha nested in keys ka 

    // ab inner nested map per loop lage ga 

    for (const [innerKey, innerValue] of value) {
        console.log(`${innerKey} => ${innerValue}`); 
    };
};


//? Condition Ke Saath Loop

const marks = new Map([
    ["math", 49],
    ["english", 30],
    ["physics", 89],
    ["biology", 59],
    ["chemistry", 90],
    ["pakStudies", 78],
    ["urdu", 40]
]);


// fail subject alada karo or pass subject alada 

for (const [subject, mark] of marks){
    if (mark < 50) {

        console.log(`${subject} : Main fail ha Marks ${mark} hain`);

    }
    else{
        console.log(`${subject} : Main pass ha Marks ${mark} hain`);
    };
};

//? Real Life Example — Shopping Cart

let total = 0

const cart = new Map([
    ["iphone", 250000],
    ["laptop", 120000],
    ["monitor", 300000]
]);

for (const [item, price] of cart) {
    console.log(`${item} => ${price}`);
    total += price;
};
console.log(`-------------`);
console.log(`Total RS: ${total}`);

//? Real Life Example 2 — Student Result

let totalMarks = 0; // start main total 0 
let count = 0; // start main subject counter bhi zero 

// marks ko map main add kia 

const result = new Map([
    ["math", 88],
    ["physics", 90],
    ["chemistry", 67],
    ["english", 65],
    ["biology", 55],
    ["urdu", 59]
]);

for (const [subject, mark] of result) {
    totalMarks += mark
    count++
    if (mark >= 80) {
        console.log(`${subject}: ${mark} Grade is A`);
    }
    else if(mark >= 60) {
        console.log(`${subject}: ${mark} Grade is B`);
    }
    else if(mark >= 50) {
        console.log(`${subject}: ${mark} Grade is C`);
    }
};

const average = totalMarks / count;
console.log(`Average: ${average}`);


//? Loop Methods — 4 Tariqe
// map ko loop main print karne ke tareeqe

//? Tarika 1 — entry as array

for (const entry of myMap ) {
    console.log(entry);
};

//? Tarika 2 — destructuring

for (const [key, value] of myMap) {
    console.log(`${key} => ${value}`);
};

//? Sirf keys print karna 

for (const [key] of myMap) {
    console.log(key);
};

//? Sirf Values 

for (const [, value] of myMap) {
    console.log(value);
};