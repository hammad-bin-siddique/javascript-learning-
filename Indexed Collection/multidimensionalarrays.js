//! Part G — Sub-topic 1: 2D Arrays / Nested Arrays (Concept)

// 2D Array (ya Nested Array) ek aisa array hota hai jiska har element khud ek array hota hai.

const college = [
  ["Hammad", "Ali", "Bilal"],
  ["Fahad", "Umair", "Faizan", "Uzair"],
  ["Imran", "Farhan", "Hamza"]
];

console.log(college[2][3]); // undefined keuke row 2 main 3 column ha he nahi

console.log(college[1][2]); // Faizan

// Isko hum matrix bhi kehte hain — rows aur columns ki tarah socho, jaise Excel sheet ya seat plan.


let matrix = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 0]
]; 

console.log(matrix[2][1]); // 8
console.log(matrix[1]); // second row 4, 5, 6

//! First Index Row Select Karta ha or Second Column

//? Nested array banana — different ways


//! Simple Way 

let seats = [
    ["A1", "A2", "A3"], 
    ["B1", "B2", "B3"]
];

//! Method 2: Array.from se dynamically banana

let grid = Array.from({length: 3}, () => Array.from({length: 5}, () => (0)));

console.log(grid);



console.log("===Tasks==="); 

//? Task One

const classAttendance = [
    ["Bilal", "Faizan", "Umair", "Faiz"], 
    ["Fazi", "Farhan", "Umar", "Uzair"], 
    ["Arham", "Usman", "Subhan", "Furqan"]
]; 

console.log("===Task One==="); 
console.log(classAttendance[1][2]); // Umar
console.log(classAttendance[1][0]); // Fazi

console.log(classAttendance[0]); // first row

//? Task Two
console.log("===Task Two===");

let seatPlan = Array.from({length: 3}, () => new Array(3).fill(0));

seatPlan[0][0] = "Hammad"; 

console.log(seatPlan); 


//? Task Three
console.log("===Task Three===");

const taskMatrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]; 

console.log(taskMatrix[1][1]); // 5 in the middle
console.log(taskMatrix[2][2]); // 9 the last element