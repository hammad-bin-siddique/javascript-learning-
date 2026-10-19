//! while Loop

// Syntax aur flow (condition pehle check hoti hai)
// Counter ka update, aur bhoolne par infinite loop
// Kab use karein (jab pata na ho kitni dafa chalega)
// while (true) aur break ka pattern
// Array ko traverse karna
// Real examples: sum, factorial, number reverse, digit count
// Nested while
// Common Mistakes



//! while Loop, Point 1: Syntax aur Flow

//? Formal Definition

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


//! while Loop,  Counter Update aur Infinite Loop



//? Kyun while mein zyada hota hai?

// Point 1 mein dekha tha ke while mein teen hisse alag alag jagah hote hain:

// let i = 1;              // START   (bahar)
// while (i <= 3) {        // CONDITION (bracket mein)
//   console.log(i);
//   i++;                  // UPDATE  (body ke andar, khud likhna hai)
// }

// for mein update bracket ke andar hi likhna parta hai, to bhoolna mushkil hai. while mein update body ke andar hota hai, isliye bhool jana bohat aasan hai.

//! Formal Definition
// Agar loop ki condition kabhi false na ho, to wo infinite loop hai. while mein ye teen wajahon se hota hai:

//? 1: Update bhool gaye

// let i = 1;
// while (i <= 3) {
//   console.log("i =", i);
// i++ bhool gaye!
// }

// i hamesha 1 rehta hai, 1 <= 3 hamesha true, loop kabhi nahi rukta.


//? 2: Update ulti taraf hai

// let i = 1;
// while (i <= 3) {
//   console.log("i =", i);
//   i--;      // 1, 0, -1, -2... ye 3 se door jaa raha hai
// }

// i ghat raha hai aur condition kehti hai “3 se chhota ya barabar ho to chalo”. i 3 se kabhi bara nahi hoga, to condition hamesha true.

//? 3: Condition wala variable alag, update wala alag

// let i = 1;
// let j = 1;
// while (i <= 3) {
//   console.log("i =", i);
//   j++;      // j badh raha hai, lekin condition i dekh rahi hai
// }


// Update chal raha hai, lekin galat variable ka. Condition i ko dekh rahi hai jo kabhi nahi badalta. Typo (count vs count3) se bhi ye ho jata hai, jaisa tumhare saath pehle hua tha.


console.log("===Infinite Loop===");
//? Safe Demo

let i1 = 1; 
let guard = 0; 

while(i <= 3 && guard < 5) {
    console.log("i =", i1); 
    guard++; 
    //  i1++ ye likhna bhool gay 
}

// i har baar 1 hi rehta hai. Sirf guard ki wajah se 5 baar ke baad ruka. guard hata do to ye hamesha chalta rahega.


//! Comprehension Check

//? Q1

let x = 10 ; 
while(x > 4) {
    console.log(x);
    x -= 2;
}

// finite ha yaha per last value loop ke bad 4 ho gi finite is lia ha ke update bhi sahi ho raha direction bhi sahi ha 
console.log("After Loop x value:", x); // 


//? Q2

// let y = 1; 
// while(y <= 5) {
//     console.log(y); 
//     y--;
// }

// infinite ha keuke update ulti tara ho raha ha 

//? Q3

let w = 1; 
let z = 10; 

while(w < z) {
    console.log(w); 
    z--;
}

// yaha per z-- ulta ha or w update nahi ho raha but 1 per a kar z w ke barabar ho jata ha is lia finite ha or ruk jata ha 

//? Q4

let e = 3;
while (e <= 3) {
  console.log("Faizan");
  e++;
}

// yaha per sirf 1 bar iterate ho ga < agar ye laga de to <= ki jaga to first iteration per he condition false ho jai gi or loop ruk jai ga sirf 1 bar faizain print ho ga 

console.log("e after loop", e);  // 4


//! Practice Tasks 


//? Task One 

console.log("===Task One===");


// A
// let n1 = 5;
// while (n1 > 0) {
//   console.log(n);
// }
//? ye infinite loop ha keuke n1 0 se hamasha bara he rahe ga or condition kabhi false nahi ho gi is lia infinite ha 
// B
// let count = 1;
// let total = 0;
// while (count <= 5) {
//   total += count;
//   total++;
// }

//? ye bhi infinite loop ha keuke yaha ham count ko update kar he nahi ha is lia ye bhi infinite loop bane ga 

// C
// let k = 10;
// while (k >= 0) {
//   console.log(k);
//   k++;
// } 

// ye bhi infinite loop ha keuke k 0 ke barabar ya chota ho nahi sakta k start se he 0 se bara ha 

//? Task 2: Countdown

console.log("===Task Two==="); 

let countNum = 10; 
while(countNum >= 1) {
    console.log(countNum); 
    countNum--;
}
console.log("Liftoff!");

// countdown main 11 bar condition chali or 10 bar print kia total 
console.log("countNum after loop:", countNum); // 0

//? Task Three 

console.log("===Task Three==="); 

let left = 1; 
let right = 10; 

while(left < right) {
    console.log(right); 
    console.log(left); 
    right--; 
    left++;
}

// Task 3 trace: left = 1, right = 10, condition left < right
// Har iteration mein pehle right print hota hai, phir left,
// uske baad right-- aur left++ dono chalte hain.
//
// Check # | left | right | left < right | Print        | Update ke baad
// --------|------|-------|--------------|--------------|----------------------
//   1     |  1   |  10   | true         | 10, 1        | right = 9, left = 2
//   2     |  2   |   9   | true         |  9, 2        | right = 8, left = 3
//   3     |  3   |   8   | true         |  8, 3        | right = 7, left = 4
//   4     |  4   |   7   | true         |  7, 4        | right = 6, left = 5
//   5     |  5   |   6   | true         |  6, 5        | right = 5, left = 6
//   6     |  6   |   5   | false        | -            | loop khatam
//
// Body 5 baar, condition 6 baar.
// Final values: left = 6, right = 5
// Dono milte nahi, ek doosre se guzar jate hain (cross). Isliye condition
// left < right hai, left != right nahi, warna 6 != 5 true rehta aur loop
// kabhi na rukta.