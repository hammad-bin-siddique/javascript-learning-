// do...while loop

// Syntax aur flow (kam az kam ek dafa chalta hai)
// while se asli farq
// Semicolon ka masla
// Real examples: menu, input validation, “dobara try karo”
// Kab while behtar hai aur kab do...while


//! do...while loop: Point 1 (Syntax aur Flow)


//? Formal Defination 

// do...while ek exit-controlled loop hai. Is mein body pehle chalti hai aur condition baad mein check hoti hai. Condition true ho to body dobara chalti hai, false ho to loop khatam. Is liye body ka kam az kam ek dafa chalna guaranteed hai

//? Syntax
// do {
// body: yeh pehle chalti hai, bina kuch check kiye
// } while (condition);   // condition baad mein check hoti hai


//? Flow 
// Body chalti hai, condition dekhe baghair.
// Condition check hoti hai.
// Condition true ho to step 1 par wapas. false ho to loop khatam.

// Is wajah se body kam az kam 1 dafa chalti hai, chahe condition shuru se hi false ho.

// (while (...) ke baad wala ; zaroori hai. Iska masla alag point mein detail se karenge.)


//? Example 

let a = 5; 
do {
    console.log("a =", a);
    a++;
} while(a < 5);

console.log("Final Value of a:", a); // 6 keuke do while main loop 1 bar lazmi chalta ha phir tab condition check hoti ha 


//? Q1

let b = 5; 

while(b < 5) {
    console.log("b =", b); 
    b++;
}

console.log("B Final Value:", b); // 5 he ho ge keuke body 1 bar bhi nahi chali ha yaha condition pehle se he checked ha 

let n = 0;
do {
  console.log(n);
  n += 2;
} while (n < 5);

// output will be 0 2 4
console.log("N Final Value:", n); // 6

//! Point 2: while aur do...while main difference

//? Real-world example

// while = Airport ka gate: guard pehle boarding pass check karta hai, pass sahi ho tabhi andar jaane deta hai. Pass galat ho to aap ek qadam bhi andar nahi rakh sakte (body 0 dafa).

// do...while = Online form: form pehle screen par aa jata hai (aap ne kam az kam ek dafa bharna hi hai), phir submit ke baad check hota hai ke theek hai ya dobara bharo.


//? Example Same Condition Different Results

let x = 10; 
while(x < 5) {
    console.log("While:", x); 
    x++;
}
console.log("X Final Value:", x);

let y = 10; 
do {
    console.log("do-while:", y); 
    y++;
} while (y < 5);
console.log("Y Final Value:", y);

// while wala (x = 10):
// Check | x  | x < 5 ?        | Body chali?
// ------|----|----------------|------------
//   1   | 10 | false → STOP   | Nahi (0 dafa)
// Output: kuch nahi | Final x = 10

// do...while wala (y = 10):
// Round | y (start) | print            | y (y++ ke baad) | y < 5 ?
// ------|-----------|------------------|-----------------|---------------
//   1   |    10     | do-while: 10     |       11        | false → STOP
// Output: do-while: 10 | Final y = 11


//? Q1

let p = 3; 
while(p < 3) {
    p++;
}
console.log("Final P value:", p); // 3 he ho gi keuke condition first time he false ho gai ha is lia 3 he rahe ga 

let q = 3; 
do {
    q++
} while (q < 3); 

console.log("Final q value", q); // yaha q ke final value 4 ho gi keuke do while main pehle body chalti ha or bad main condition check hoti ha 

//? Q2

let m = 1;
while (m < 4) {
  console.log(m);
  m++;
}

let k = 1;
do {
  console.log(k);
  k++;
} while (k < 4);

// in dono ka output same ho keuke first iteration per dono ke condition false nahi ho rahi the chai body pehle chalti ya phir condition pehle check hoti 


//! Point 3: Semicolon ka Problem

// do...while ke baad ; “zaroori” hai. Zyada sahi yeh hai ke JavaScript kuch jagah khud ; laga deta hai (ASI, Automatic Semicolon Insertion), to bina ; ke bhi chal sakta hai. Lekin aadat yahi rakho ke hamesha likho, kyunke yeh is statement ka hissa hai.

//? Do alag cheezein, jin mein confusion hota hai

// 1. do...while mein ; sahi aur zaroori jagah par hai

// do {
// body
// } while (condition);   // ← yeh ; is statement ka hissa hai

// 2. Normal while mein ; lagana bug hai (asli masla):

// let i = 0;
// while (i < 3);      // ← yeh ; ek KHALI body ban gayi
// {
//   console.log(i);
//   i++;
// }

// JavaScript isay aise padhta hai: while (i < 3) ki body khali statement ; hai. Neeche wala { ... } loop ki body nahi, ek alag block hai jahan tak program kabhi pahunchta hi nahi.

// Check | i | i < 3 ? | Body        | i badla?
// ------|---|---------|-------------|---------
//   1   | 0 | true    | khali (;)   | Nahi
//   2   | 0 | true    | khali (;)   | Nahi
//   3   | 0 | true    | khali (;)   | Nahi   ... hamesha ke liye
// → INFINITE LOOP. Console par kuch print nahi hoga, program atak jayega.
// Rokne ke liye: Ctrl + C

// A
do {
  console.log("hi");
} while (false);

// ye sirf 1 time body chale gi 

// B
// let c = 0;
// while (c < 2);
// {
//   c++;
// } 
// yaha per program hang ho jai ga keuke yaha semicolon ha or javascript neache wale block ko alag treat kar raha ha is lia ye infinite loop rahe ga fix (c < 2) ke bad semicolon nahi lagani ha take neache wala block while ke sath he treat ho 

// C
let d = 0;
do {
  d++;
} while (d < 2);
console.log(d); // 2 final value 