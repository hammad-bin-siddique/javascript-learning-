//! for Loop: Practice Tasks & Mini Project

//? Task 0 - Q1: max of negatives

console.log("===Task 0===");
let temps = [-8, -3, -15];
let max = temps[0];

for (let i = 0; i < temps.length; i++) {
  if (temps[i] > max) {
    max = temps[i];
  }
}

console.log("Max Number:", max); // -3

// (c) max = 0 se kya masla hota to wo max sahi nahi nikalte keuke yaha negative number hain

//? Task 0 - Q3: passed array
console.log("===Task 0 Passed Array===");
let scores = [40, 75, 90, 55];
let passed = [];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 60) {
    passed.push(scores[i]);
  }
}

console.log("Passing Subjed:", passed);
//  75, 90
// (c) const passed = [] mein push is lia chalta ha keun ke ham array ke value change kar rahe naw ke array ko or const text main direct text ko change kar raha hain or const main value change nahi kar sakte hain

//? Task 1 - FizzBuzz (1 se 15, result array)
console.log("Task One Fizz Buzz===");
const result = [];

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result.push("FizzBuzz");
  } else if (i % 3 === 0) {
    result.push("Fizz");
  } else if (i % 5 === 0) {
    result.push("Buzz");
  } else {
    result.push(i);
  }
}
console.table([result]);

//? Task 2 - Number Triangle
console.log("===Task Two Number Triangle===");

let counter = 1;
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += counter;
    if (col < row) {
      line += " ";
    }

    counter++;
  }
  console.log(line);
}

//? Task 3 - Vowel Counter + Reverse String
console.log("Task Three Vowel Counter + Reverse String===");
let sentence = "javascript is fun";

const vowels = {}; 

for(let i = 0; i < sentence.length; i++) {
    let ch = sentence[i]; 
    if("aeiou".includes(ch)) {
        if(vowels[ch] === undefined) {
            vowels[ch] = 1; 
        }
        else {
            vowels[ch]++;
        }
    }
}
console.log(vowels); 

let reversed = ""; 

for(let i = sentence.length - 1; i >= 0; i--) {
    reversed += sentence[i];
}
console.log(reversed);