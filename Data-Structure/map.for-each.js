//! 🗺️ Topic 12 — forEach() — Poori Depth

// forEach ek method hai jo:

// Kisi list ki har cheez pe
// Ek function chalata hai
// Ek ek karke — automatically!

// List = [iPhone, Laptop, Monitor]

// forEach chala:
//   iPhone pe function chala
//   Laptop pe function chala
//   Monitor pe function chala
//   Khatam!

//? Kahan Kahan Hota Hai?

// Arrays pe
// [10, 20, 30].forEach(...)

// Map pe
// myMap.forEach(...)

// Set pe (baad mein seekhein ge)
// mySet.forEach(...)
// Har jagah kaam same hai — list ki har cheez pe function chalao!

//! Map Mein forEach Ka Syntax
//? myMap.forEach(function(value, key) {
//? har entry pe yeh kaam karo
// })
//? Ya arrow function se:
// myMap.forEach((value, key) => {
// har entry pe yeh kaam karo
// })

//! ⚠️ Sabse Important — Order Ulta Hai!

// for...of mein — KEY pehle
// for (const [key, value] of myMap) { }

// forEach mein — VALUE pehle!
// myMap.forEach((value, key) => { })
//             ^^^^^  ^^^
//             VALUE  KEY — ulta hai!

// Kyun ulta hai? — JavaScript ne Array ka forEach pehle banaya — wahan sirf value hoti thi — Map mein baad mein key add ki — isliye value pehle rahi!

//? Basic Example

const student = new Map([
  ["name", "Hammad"],
  ["age", 23],
  ["city", "Abbottabad"],
  ["isPassed", true],
  ["rollNbr", "ISL 22:02"],
]);

// for of method

for (const [key, value] of student) {
  console.log(`${key} => ${value}`);
} // key pehle or value bad main

// forEach same output but method is differnt or yaha function chalta ha for of main khlai loop chalta ha

student.forEach((value, key) => {
  console.log(`${key} => ${value}`);
}); // ye arrow function ka use kar ke print kia ha

// normal function ke sath for each main print karna

student.forEach(function (value, key) {
  console.log(`Keys => ${key}`);
  console.log(`Values => ${value}`);
});

//? Teen Parameters — forEach Mein

// myMap.forEach(function(value, key, map) {
//                     ^^^^^  ^^^  ^^^
//                       1     2    3
// })

// 1 — value  → entry ki value
// 2 — key    → entry ki key
// 3 — map    → poori Map khud

student.forEach(function (value, key, map) {
  console.log(`Key => ${key}`);
  console.log(`Value => ${value}`);
  console.log(`MapSize ${map.size}`);
});

//? Array vs Map forEach — Farq

// array 1 perameter sirf 1 value he hoti ha

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (value) {
  console.log(`Array value => ${value}`);
});

// Map — do parameters — value, key

const myMap2 = new Map([
  ["a", 1],
  ["b", 2],
]);

myMap2.forEach((value, key) => {
  console.log(`${key} => ${value}`);
}); // is main key or value dono hote hain

//? conditoin ke sath

const marksMap = new Map([
  ["english", 90],
  ["math", 45],
  ["physics", 89],
  ["chemistry", 32],
  ["biology", 51],
]);

marksMap.forEach((mark, subject) => {
  if (mark <= 50) {
    console.log(`${subject}  Marks ${mark} Fail`);
  } else if (mark >= 50) {
    console.log(`${subject} Marks ${mark} Passed`);
  }
});

// ab total number or average nikalna for each se

let totalMarks = 0;
let count = 0;

marksMap.forEach(function (mark) {
  totalMarks += mark;
  count++;
});

console.log("==============");
console.log(`Total Marks: ${totalMarks}`);
console.log("=============");
console.log(`Average is: ${totalMarks / count}`);

//? Cart System

const cart = new Map([
  ["mobile", 50000],
  ["washingMachine", 40000],
  ["lethearShoes", 5000],
  ["laptop", 70000],
  ["charger", 1000],
]);

let total = 0;

cart.forEach((price, item) => {
  console.log(`${item} Rs: ${price}`);
  total += price;
});

console.log("==================");
console.log(`Total Price ${total}`);

//? Nested Map Mein forEach

// sab se pehle nested marks map

const student1Marks = new Map([
  ["math", 50],
  ["physics", 90],
  ["chemistry", 79],
  ["biology", 45],
]);

const student2Marks = new Map([
  ["math", 60],
  ["physics", 30],
  ["chemistry", 99],
  ["biology", 95],
]);

const student3Marks = new Map([
  ["math", 20],
  ["physics", 90],
  ["chemistry", 89],
  ["biology", 65],
]);

const student4Marks = new Map([
  ["math", 80],
  ["physics", 98],
  ["chemistry", 89],
  ["biology", 35],
]);

// ab her student ke lia nested map

const student1 = new Map([
  ["name", "Hammad Siddique"],
  ["rollNbr", "ISL 22:02"],
  ["department", "Islamic Studies"],
  ["marks", student1Marks],
]);

const student2 = new Map([
  ["name", "Zakariyya Hashmi"],
  ["rollNbr", "ISL 22:36"],
  ["department", "Islamic Studies"],
  ["marks", student2Marks],
]);

const student3 = new Map([
  ["name", "Danial Ahmad"],
  ["rollNbr", "ISL 22:20"],
  ["department", "Islamic Studies"],
  ["marks", student3Marks],
]);

const student4 = new Map([
  ["name", "Usman Rehman"],
  ["rollNbr", "ISL 22:32"],
  ["department", "Islamic Studies"],
  ["marks", student4Marks],
]);

// ab in student ko 1 parent map main wrap karo ga

const classMap = new Map([
  ["student1", student1],
  ["student2", student2],
  ["student3", student3],
  ["student4", student4],
]);

// ab for each se parent map ko loop karo ga

classMap.forEach((studentValue, studentKey) => {
  console.log(studentValue.get("name"));
  console.log(studentValue.get("rollNbr"));

  // ab yaha student ke marks value ko 1 variable main wrap kare ge

  const marksMap = studentValue.get("marks");

  let totalStudentMarks = 0;
  let studentCount = 0;

  marksMap.forEach((mark, subject) => {
    totalStudentMarks += mark;
    studentCount++;

    if (mark >= 90) {
      console.log(`${subject} => ${mark} Grade A+`);
    } else if (mark >= 80) {
      console.log(`${subject} => ${mark} Grade A`);
    } else if (mark >= 70) {
      console.log(`${subject} => ${mark} Grade B`);
    } else if (mark >= 60) {
      console.log(`${subject} => ${mark} Grade Fail Try Again kiddo`);
    }
  });

  // yaha total mark average or overall average kitni ha wo nikale ge

  const average = totalStudentMarks / studentCount;

  console.log("====================");
  console.log(`Total Marks: ${totalStudentMarks}`); // yaha total student marks count ho ge

  console.log("================");
  console.log(`Total Average ${average}`); // yaha per average print ho gi

  // ab yaha average base per OverAll grade define ho ga with condition

  if (average >= 90) {
    console.log("Overall Grade: A+");
  } else if (average >= 80) {
    console.log("Overall Grade: A");
  } else if (average >= 70) {
    console.log("Overall Grade: B");
  } else if (average >= 60) {
    console.log("Overall Grade Fail Next Time Kiddo");
  }
});
