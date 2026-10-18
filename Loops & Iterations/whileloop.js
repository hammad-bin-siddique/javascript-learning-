//! while Loop

// Syntax aur flow (condition pehle check hoti hai)
// Counter ka update, aur bhoolne par infinite loop
// Kab use karein (jab pata na ho kitni dafa chalega)
// while (true) aur break ka pattern
// Array ko traverse karna
// Real examples: sum, factorial, number reverse, digit count
// Nested while
// Common Mistakes



//? while Loop, Point 1: Syntax aur Flow

//! Formal Definition

// while loop ek code block ko baar baar chalata hai, jab tak condition true rehti hai. Jis lamhe condition false hoti hai, loop ruk jata hai.


//? Syntax Breakdown

// while (condition) {
// body: jo kaam baar baar karna hai
// }

// for loop mein start, condition aur update teeno ek line mein hote hain. while mein ye teeno alag alag jagah hote hain:

// let i = 1;              // 1. START: loop se pehle, bahar
// while (i <= 3) {        // 2. CONDITION: bracket ke andar
//   console.log(i);
//   i++;                  // 3. UPDATE: body ke andar, khud likhna hai
// }

//? Flow (Step by Step)

//         ┌─────────────────────┐
//    ┌───►│  condition check    │
//    │    └──────────┬──────────┘
//    │         true  │      false
//    │               ▼         │
//    │      ┌──────────────┐   │
//    │      │  body chalao │   │
//    │      └──────┬───────┘   ▼
//    └─────────────┘      loop khatam,
//                         aage ka code

// Condition check hoti hai
// true ho to body ek baar chalti hai
// Body khatam hote hi wapas step 1 par jao
// false ho to loop se bahar, aage ka code chalta hai


//? Code Example
console.log("===Loop Syntax and flow===");

let i = 1; 
 
while(i <= 3) {
    console.log("Hammad ne coding ki, number", i); 
    i++; 
}

console.log("Loop End, i =", i); // i ke last value ab 4 ho gi 

// Body 3 baar chali, lekin condition 4 baar check hui. Aakhri check false wala tha.
// Loop ke baad i ki value 4 hai, 3 nahi. Ye wahi slip hai jo tumse pehle hui thi (value check ke waqt vs update ke baad).

//? Condition Pehle Check hoti ha body bad main 

// ager condition start se he false hui to loop chale ga he nahi 


let n = 10; 

while(n < 5)  {
    console.log("Ye Kabhi Print nahi ho ga"); 
    n++; 
}

console.log("n =", n);

// n < 5 yani 10 < 5 → false

//! Comprehension Check

//? Q1

let a = 5; 

while(a < 8) {
    console.log(a);
    a++;
}

//5 6 7 ho ga or loop ke bad a ke value 8 ho gi 

//? Q2

let b = 20;

while(b < 10) {
    console.log("Hello"); 
    b++;
}

// Hello kabhi print nahi hoga, kyunke 20 < 10 false hai.
// Body 0 baar chali, condition sirf 1 baar check hui (wo bhi false).
//? Q3 

let c = 2; 
while(c <= 10) {
    console.log(c); 
    c += 3;
}

// Output: 2 5 8
// Body 3 baar chali, condition 4 baar check hui
//
// Trace:
// Check 1: c = 2  → 2 <= 10 true  → print 2, c = 5
// Check 2: c = 5  → 5 <= 10 true  → print 5, c = 8
// Check 3: c = 8  → 8 <= 10 true  → print 8, c = 11
// Check 4: c = 11 → 11 <= 10 false → body skip, loop khatam
//
// Body 4th baar isliye nahi chali ke 8 wali iteration ke baad c = 11 ho gaya,
// loop wapas condition par gaya, 11 <= 10 false nikla,
// aur condition body se PEHLE check hoti hai, to body mein ghusa hi nahi.
// Rule: body n baar chale to condition n + 1 baar check hoti hai.

console.log("After Loop:", c); // 11

//! Practice Tasks

//? Task 1: 1 se 10 tak
console.log("===Task One===");
let task1 = 1; 
while(task1 <= 10) {
    console.log(task1); 
    task1++;
}

// condition 11 time check ho gi or body 10 time chale ge or loop ke bad task1 ke value 11 ho gi 
console.log("After Loop:", task1); // 11

//? Task 2 Even Numbers 
console.log("===Task Two==="); 
let task2 = 2; 

while(task2 <= 20) {
    console.log(task2); 
    task2 += 2;
}

// yaha bhi condition 11 time check ho or body 10 time chale ge or last value loop ke bad 22 ho gi 
console.log("After Loop:", task2); // 22

//? Task Three Seven Table

let num = 7; 
let multiplier = 1; 

while(multiplier <= 10) {
    console.log(num, "x", multiplier, "=", num * multiplier);
    multiplier++;
}

//yaha body 10 time chale ge or condition 11 time check ho gi or loop ke bad multiplier ke last value 11 ho gi 

console.log("After Loop:", multiplier); // 11

//? Second Method of the seven table 

let num2 = 7; 

while(num2 <= 70) {
    console.log(num2); 
    num2 += 7;
}

///yaha body 10 time chale ge or condition 11 time check ho gi or loop ke bad num2 ke last value 77 ho gi 
console.log("After Loop:", num2); 

// Trace: num2 = 7, condition num2 <= 70, update num2 += 7
//
// Check # | num2 | num2 <= 70 | Action
// --------|------|------------|-------------------
//   1     |  7   | true       | print 7,  num2 = 14
//   2     | 14   | true       | print 14, num2 = 21
//   3     | 21   | true       | print 21, num2 = 28
//   4     | 28   | true       | print 28, num2 = 35
//   5     | 35   | true       | print 35, num2 = 42
//   6     | 42   | true       | print 42, num2 = 49
//   7     | 49   | true       | print 49, num2 = 56
//   8     | 56   | true       | print 56, num2 = 63
//   9     | 63   | true       | print 63, num2 = 70
//  10     | 70   | true       | print 70, num2 = 77
//  11     | 77   | false      | body skip, loop khatam
//
// Body 10 baar, condition 11 baar, final num2 = 77