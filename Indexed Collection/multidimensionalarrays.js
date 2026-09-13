//! Part G — Sub-topic 1: 2D Arrays / Nested Arrays (Concept)

// 2D Array (ya Nested Array) ek aisa array hota hai jiska har element khud ek array hota hai.

const college = [
  ["Hammad", "Ali", "Bilal"],
  ["Fahad", "Umair", "Faizan", "Uzair"],
  ["Imran", "Farhan", "Hamza"],
];

console.log(college[2][3]); // undefined keuke row 2 main 3 column ha he nahi

console.log(college[1][2]); // Faizan

// Isko hum matrix bhi kehte hain — rows aur columns ki tarah socho, jaise Excel sheet ya seat plan.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];

console.log(matrix[2][1]); // 8
console.log(matrix[1]); // second row 4, 5, 6

//! First Index Row Select Karta ha or Second Column

//? Nested array banana — different ways

//! Simple Way

let seats = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
];

//! Method 2: Array.from se dynamically banana

let grid = Array.from({ length: 3 }, () => Array.from({ length: 5 }, () => 0));

console.log(grid);

console.log("===Tasks===");

//? Task One

const classAttendance = [
  ["Bilal", "Faizan", "Umair", "Faiz"],
  ["Fazi", "Farhan", "Umar", "Uzair"],
  ["Arham", "Usman", "Subhan", "Furqan"],
];

console.log("===Task One===");
console.log(classAttendance[1][2]); // Umar
console.log(classAttendance[1][0]); // Fazi

console.log(classAttendance[0]); // first row

//? Task Two
console.log("===Task Two===");

let seatPlan = Array.from({ length: 3 }, () => new Array(3).fill(0));

seatPlan[0][0] = "Hammad";

console.log(seatPlan);

//? Task Three
console.log("===Task Three===");

const taskMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(taskMatrix[1][1]); // 5 in the middle
console.log(taskMatrix[2][2]); // 9 the last element

//! Part G — Sub-topic 2: 2D Array Traversal (Nested Loops)

//? Formal Concept

// Nested loop ka matlab: ek loop ke body ke andar dusra loop likhna.

// for (let i = 0; i < outerArray.length; i++) {
// Outer loop - row select karta hai
//   for (let j = 0; j < outerArray[i].length; j++) {
// Inner loop - us row ke andar column (element) select karta hai
//     console.log(outerArray[i][j]);
//   }
// }

console.log("====Nested Loops===");

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

for (let i = 0; i < matrix1.length; i++) {
  // ye outer loop ha row ko select karta ha Mean ke jitne row ho gi un ko select kare ga jab tak i matrix ke length tak naw ponch jai

  for (let j = 0; j < matrix1[i].length; j++) {
    console.log(matrix1[i][j]);
  }
}

//!  Real Example

const names = [
  ["Umar", "Bilal", "Usman"],
  ["Shami", "Imran", "Mudaser"],
  ["Hammad", "Fahad", "Hamza"],
];

for (let i = 0; i < names.length; i++) {
  // for outer loop it select the row and traverse them

  for (let c = 0; c < names[i].length; c++) {
    console.log(`Names: [${i}][${c}] = ${names[i][c]}`);
  };
}; 

// outer loop 1 dafa aghe bahrta ha phir jab inner loop complete jo jai mean ke column 0 se so on phir tab outer loop chal kar 1 per ata ha 



