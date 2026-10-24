//! While Loop Combined Tasks & Mini Project

//? Task One
console.log("===Task One===");

//Sum of Even Number From 1 to 50

let sum = 0;
let i = 0;
let count = 0;

while (i <= 50) {
  sum += i; // sum of even number
  count++; // total number of even
  i = i + 2;
} 

console.log("Sum:", sum); // 650
console.log("Last Value of I", i); // 52
console.log(count); // 26 wese total 25 hain ye abhi last value count ki 26 keuke <= use kia ha 


//? Task Two 
console.log("===Task Two==="); 

// find the first in the array which is greater than 80 

let marks = [45, 78, 32, 90, 60, 90, 70];
let i1 = 0; 
let foundIndex = -1; 
 
while(true) {
    if(i1 >= marks.length) {
        break; 
    }

    if(marks[i1] > 80) {
        foundIndex = i1;
        break; 
    }
    i1++;
}

if(foundIndex === -1) {
    console.log("Nahi Mila");
}
else{
    console.log(foundIndex);  // 3 
    console.log(marks[foundIndex]); // 90
} 


//? Task Three 

console.log("===Task Three==="); 

let nums = 90417; 
let temp = nums; 
let sum1 = 0; 
// let n = 12321; 
let n = 1234;
let temp1 = n;


while(temp > 0) {
    let digit = temp % 10; 
    sum1 = sum1 + digit; 
    temp = Math.floor(temp / 10);
}

console.log("Sum:", sum1); // 21
console.log(temp); // 0


// Now make the reverse to check palindrome 

let reverse = 0; 

while(temp1 > 0) {
    let digit = temp1 % 10; 
    reverse = reverse * 10 +  digit; 
    temp1 = Math.floor(temp1 / 10);

   
}
 if(n === reverse) {
        console.log("Palindrome Ha"); 
    }
    else {
        console.log("Palindrome Nahi ha");
    }

//? Task Four 
console.log("===Task Four==="); 

let row = 1; 

while(row <= 4) {
    let col = 1; 
    let line = "";
    while(col <= row) {
        line = line + "*";
        col++;
    }
    console.log(line);
    row++;
}
