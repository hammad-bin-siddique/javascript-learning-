//! Practice Tasks 

//?  Practice Task 1

console.log("===Task One==="); 

let a = 1; 

while(a <= 10) {
    console.log(a); 
    a++;
} 
// total 10 iteration ho gi 1 se start ho gi 10 tak or loop ke bad last value 11 ho gi 

console.log("a after the loop", a); // 11 


let b = 10; 

while(b >= 1) {
    console.log(b); 
    b--; 
}
// total 10 iteration ho gi 10 se loop start ho ga or 1 tak jai ga or last value loop ke bad 0 ho gi 
console.log("b after the loop", b); // 0


//? Paractice Task 2

console.log("===Task Two==="); 

let c = 2; 

while(c <= 20) {
    console.log(c); 
    c = c + 2; 
}
// total 10 bar iteration ho gi 2 or 20 shamil ho ga or loop ke bad last value c ke 22 ho gi 
console.log("c after the loop", c); // 22


//? Practice Task 3 

console.log("===Task Three==="); 

let num = 7; 
let multiplier = 1; 

while(multiplier <= 10) {
    console.log(num, "x", multiplier, "=", num * multiplier); 
    multiplier++; 
}

// total 10 bar iteration ho gi or last value multiplier ke 11 ho gi loop ke bad 


//! Mini Project Saving Tracker 

console.log("===Mini Project==="); 


let monthlySaving = 500; 
let target = 5000; 
let total = 0; 
let month = 0; 

while(total < target) {
    month++
    console.log("Month", month, ":"); 
    total = total + monthlySaving; 
    console.log("Total", total);    
}

console.log(`Target: ${target} ${month} month main poora hua`);

let x = 5;
console.log(x++);   // 5
console.log(x);     // 6

let y = 5;
console.log(++y);   // 6
console.log(y);     // 6

