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
  }
}

// outer loop 1 dafa aghe bahrta ha phir jab inner loop complete jo jai mean ke column 0 se so on phir tab outer loop chal kar 1 per ata ha

//! Practice Tasks — Nested Loop Traversal

//? Task 1: Sum of Matrix

console.log("===Task One===");

const matrix2 = [
  [11, 23, 58],
  [55, 32, 52],
  [23, 90, 93],
];

let total = 0;

for (let i = 0; i < matrix2.length; i++) {
  for (let c = 0; c < matrix2[i].length; c++) {
    let current = matrix2[i][c];
    total = total + current;
  }
}

console.log(total);

//? Task 2: Print as Grid (formatted)
console.log("===Task Two===");

const attendance = [
  ["Bilal", "Hammad", "Faizan"],
  ["Ali", "Wasib", "Imran"],
  ["Huzaifa", "Kamran", "Umar"],
];

for (let i = 0; i < attendance.length; i++) {
  let rowString = `ClassRoom ${i + 1}:`;

  for (let c = 0; c < attendance[i].length; c++) {
    rowString = rowString + attendance[i][c];
    if (c < attendance[i].length - 1) {
      rowString = rowString + ", ";
    }
  }

  console.log(rowString);
}

//? Task 3: Jagged Array Sum

console.log("===Task 3===");

let jagged = [[5, 10], [1, 2, 3, 4], [100]];

let jaggedTotal = 0;

for (let i = 0; i < jagged.length; i++) {
  for (let c = 0; c < jagged[i].length; c++) {
    let current = jagged[i][c];
    jaggedTotal = jaggedTotal + current;
  }
}

console.log("Jagged Total:", jaggedTotal);

//! Part G — Sub-topic 3: Basic Matrix Operations

//?  Operation 1: Row-wise Sum

// Har row ka apna total nikalna.
console.log("===Basic Matrix Operations===");

let matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix3.length; i++) {
  let rowSum = 0;
  for (let c = 0; c < matrix3[i].length; c++) {
    let current = matrix3[i][c];
    rowSum = rowSum + current;
  }
  console.log(`Row: ${i} sum: ${rowSum}`);
}

//?  Operation 2: Column-wise Sum

// Uper matrix 3 ko he use karte hain

// is main ham loop ka order reverse kar de ga pehle row outer loop per traverse hoti thi ab outer loop per column ko traverse kare ga

for (let col = 0; col < matrix3[0].length; col++) {
  let colSum = 0; // start main col sum 0 ho ga

  for (let row = 0; row < matrix3.length; row++) {
    let current = matrix3[row][col];
    colSum = colSum + current;
  }

  console.log(`Column: ${col} sum: ${colSum}`);
}

//! Operation 3: Transpose (Rows ↔ Columns swap)

// Transpose matlab: matrix ko is tarah ghumana ke rows, columns ban jayein aur columns, rows.

// new empty matrix array banaya same size ka

let transposed = Array.from({ length: 3 }, () => new Array(3).fill(0));

for (let i = 0; i < matrix3.length; i++) {
  for (let c = 0; c < matrix3.length; c++) {
    transposed[c][i] = matrix3[i][c]; // yaha per trasposed ke row ko colum se badal dia or column ko row se
  }
}

console.log(transposed);

// ! Practice Tasks — Matrix Operations

//? Task 1: Row Sums Array

console.log("===Task One===");

let matrix4 = [
  [23, 42, 59],
  [45, 65, 70],
  [98, 95, 46],
];

let rowSums = [];

for (let i = 0; i < matrix4.length; i++) {
  let total = 0;
  for (let c = 0; c < matrix4[i].length; c++) {
    let current = matrix4[i][c];
    total = total + current;
  }

  rowSums.push(total);
}

console.log(rowSums);

// Task 2: Column Sums Array

console.log("===Task Two===");

let colSums = [];

for (let col = 0; col < matrix4[0].length; col++) {
  // is main outer array main columns ko itreate kia ha

  let total = 0;
  for (let row = 0; row < matrix4.length; row++) {
    let current = matrix4[row][col];
    total = total + current;
  }
  colSums.push(total);
}

console.log(colSums);

//? Task 3: Transpose Function

console.log("===Task Three===");

function trasposeMatrix(matrix) {
  let size = matrix.length;
  let transposed = Array.from({ length: size }, () => new Array(size));

  //? Nested Loop

  for (let i = 0; i < size; i++) {
    for (let c = 0; c < size; c++) {
      transposed[c][i] = matrix[i][c];
    }
  }
  return transposed;
}

console.log(trasposeMatrix(matrix4));

//! Combined Practice Tasks Part G

//? Task 1: Diagonal Sum

console.log("===Task One===");

const diagonalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("===Task One===");

let diagonalSum = 0;

for (let i = 0; i < diagonalMatrix.length; i++) {
  let current = diagonalMatrix[i][i];
  diagonalSum = diagonalSum + current;
}

console.log(diagonalSum);

//? Task 2: Find Max in Matrix

console.log("===Task Two===");

const maxMatrix = [
  [93, 59, 30],
  [90, 40, 20],
  [98, 99, 10],
];

let maxSoFor = maxMatrix[0][0]; // start with the first element

for (let row = 0; row < maxMatrix.length; row++) {
  for (let col = 0; col < maxMatrix[row].length; col++) {
    let current = maxMatrix[row][col];
    if (current > maxSoFor) {
      maxSoFor = current;
    }
  }
}

console.log(maxSoFor);

//? Task 3: Matrix Equality Check

console.log("===Task Three====");

function areMatrixEqual(a, b) {
  let isEqual = true;

  for (let i = 0; i < a.length; i++) {
    for (let c = 0; c < a[i].length; c++) {
      if (a[i][c] !== b[i][c]) {
        isEqual = false; // Mean ke agar 1 bhi mismatch mila to false return kar do
      }
    }
  }
  return isEqual;
}

console.log(areMatrixEqual(matrix1, matrix2)); // false cuz both are not same

let mat1 = [
  [1, 2],
  [3, 4],
];

let mat2 = [
  [1, 2],
  [3, 4],
];

console.log(areMatrixEqual(mat1, mat2)); // true cuz the both are same

//! Mini Project

let marks = [
  [85, 90, 78, 92], // Student 0
  [70, 65, 80, 75], // Student 1
  [95, 88, 91, 89], // Student 2
];

console.log("===Mini Project===");

let studentTotal = [];

for (let i = 0; i < marks.length; i++) {
  let total = 0;
  for (let c = 0; c < marks[i].length; c++) {
    // step one abhi ham yaha her row main her student ke marks ko total kar ke student total array main push kare ge

    let current = marks[i][c];
    total = total + current;
  }
  studentTotal.push(total); // first step done

}


//? Step Two Avarage of each student
let studentPercentage = [];

for (let i = 0; i < studentTotal.length; i++) {
  let percentage = (studentTotal[i] / 400) * 100;
  studentPercentage.push(percentage); // step two complete
}

console.log("===Student Total Step One===");
console.log(studentTotal);

console.log("===Step Two Percentage of Each Student===");
console.log(studentPercentage);
