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

console.log(grid)
