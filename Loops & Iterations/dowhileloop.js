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