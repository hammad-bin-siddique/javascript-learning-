// for Loop

// Teeno parts (init, condition, update) aur chalne ki tarteeb
// Ginti upar aur neeche (i++, i--, i += 2)
// Optional parts (for(;;)) aur ek se zyada variables
// Array par for (traverse, search, sum, max/min)
// Nested for: tables aur patterns
// let vs var loop mein (aur setTimeout wala mashhoor jaal)
// Loop ke andar array/string/object banana
// Length ko cache karna (performance)


//! for Loop: Point 1 (init, condition, update)
console.log("===For Loop Point One (init, condition, update===")
//? Syntax

// for (init; condition; update) {
  // body
// }

// Part     	 Kaam	                         Kitni dafa chalta hai
// init	         counter ki shuruaati value	     sirf ek dafa, loop shuru hone se pehle
// condition	 chalna hai ya nahi	             har chakkar se pehle
// update	     counter badalna	             har body ke baad

// Teeno parts ke darmiyan semicolon ; aata hai, comma nahi.


//? Example 


for (let i = 1; i <= 3; i++) {
    console.log("Copy Number:", i)
}

// init: i = 1 (sirf ek dafa)
// check 1: 1 <= 3 true  → body: "Copy number 1" → update: i = 2
// check 2: 2 <= 3 true  → body: "Copy number 2" → update: i = 3
// check 3: 3 <= 3 true  → body: "Copy number 3" → update: i = 4
// check 4: 4 <= 3 false → loop khatam

//? Comparison with while

// for version
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// bilkul wahi while version
let j = 1;
while (j <= 3) {
  console.log(j);
  j++;
}

// Dono ka kaam same hai. for mein teeno cheezein ek jagah hone se update likhna bhoolne ka khatra kam hota hai, jo while mein infinite loop ki sabse badi wajah thi.


//? Important Rules

// for (...); mein semicolon lagane se body khali ho jati hai. for (let i = 1; i <= 3; i++); ke baad wala { } loop ki body nahi rehta, sirf ek alag block ban jata hai. Ye while (...); wali ghalti jaisi hi hai.
// let i sirf loop ke andar zinda hai. Loop ke baad console.log(i) karo to ReferenceError aayega. while mein counter bahar declare hota tha aur apni aakhri value rakhta tha, yahan aisa nahi hota. (let vs var ka asal maamla point 6 mein aayega.)

for (let k = 5; k < 8; k++) {
    console.log(k);
}

// init: k = 5
// check 1: 5 < 8 true  → body: print 5 → update: k = 6
// check 2: 6 < 8 true  → body: print 6 → update: k = 7
// check 3: 7 < 8 true  → body: print 7 → update: k = 8
// check 4: 8 < 8 false → khatam
// Output: 5, 6, 7
// Body 3 dafa, condition 4 dafa, update 3 dafa

//? Point 2: Counting Increament & Decrement
console.log("===Increament & Decrement===");

// Update ka kaam sirf ye hai ke counter ko agle chakkar ke liye tayyar karna. Ye ++ hi hona zaroori nahi, koi bhi badlaav ho sakta hai.

// Update	        Matlab	         Counter ka silsila (1 se shuru)
// i++	            1 barhao	     1, 2, 3, 4...
// i--	            1 ghatao	     5, 4, 3, 2...
// i += 2	        2 barhao	     1, 3, 5, 7...
// i -= 3	        3 ghatao	     10, 7, 4, 1...
// i *= 2	        double karo	     1, 2, 4, 8...

//? Real-world examples
// Counting upar: class ke roll numbers 1 se 30 tak (i++).
// Counting neeche: rocket countdown 10 se 1 tak (i--), ya lift se basement tak jana.
// Step 2: gali mein sirf taaq (odd) number ke ghar dekhne hain: 1, 3, 5, 7 (i += 2).

//? Increament 

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

//1 , 3, 5, 7, 9


//? Decrement 

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

for (let i = 10; i >= 4; i -= 3) {
  console.log(i);
}

// init: i = 10
// check 1: 10 >= 4 true  → body: print 10 → update: i = 7
// check 2: 7  >= 4 true  → body: print 7  → update: i = 4
// check 3: 4  >= 4 true  → body: print 4  → update: i = 1
// check 4: 1  >= 4 false → khatam
// Output: 10, 7, 4
// Body 3, condition 4, update 3

//! Common Mistakes


//? 1. Ulta update (infinite loop):
// for (let i = 0; i < 10; i--) { }
// i 0, -1, -2, -3... jata hai, aur ye hamesha < 10 rehta hai, to condition kabhi false nahi hoti. Update condition ko false ki taraf le jana chahiye.

//? 2. !== se boundary skip:
// for (let i = 10; i !== 3; i -= 2) { }

// 10, 8, 6, 4, 2, 0... 3 kabhi aata hi nahi, to loop kabhi nahi rukta. Isi liye !== ki jagah > ya >= use karo.

//? 3. Neeche jane wale loop mein < likh dena:

// for (let i = 5; i < 1; i--) { }

// 5 < 1 pehle hi false hai, to body 0 dafa chalegi.



//! Point 3: Optional Parts (for(;;))

// Rule teeno parts optional hain, lekin dono ; zaroori hain

// for (;;) { }      // sahi (teeno khali)
// for (;) { }       // SyntaxError (ek semicolon kam)


//! Jo part khali ho, uska kaam aap ko khud karna hota hai.

//? 1. Init khali: counter pehle se bahar bana hua
let i = 1;
for (; i <= 3; i++) {
  console.log(i);
}
console.log(i);   // 4

// Pichle point mein bataya tha ke for (let i...) ka i loop ke bahar nahi milta. Agar aap ko loop ke baad bhi counter chahiye, to usay bahar declare karo aur init khali chhoro.

// Real-world: list mein pehla ghalat entry dhoondna hai. Loop jahan ruke wahan ka number (position) baad mein bhi chahiye.


//? 2. Update khali: update body ke andar

for (let i = 1; i <= 10; ) {
  console.log(i);
  i += 3;
}
Output: 1, 4, 7, 10

// Ye tab kaam aata hai jab update kisi shart par depend kare. Lekin yaad rakho: update bhoole to infinite loop.

//? 3. Condition khali: matlab hamesha true

let attempts = 0;
for (;;) {
  attempts++;
  console.log("Try", attempts);
  if (attempts === 3) break;
}

// for (;;) bilkul while (true) ke barabar hai. Ise break se rokna zaroori hai, warna Ctrl+C. Real-world: menu ya game jo “exit” dabane tak chalta rahe.


//? 4. Ek se zyada variables (comma)

for (let i = 1, j = 10; i < j; i++, j--) {
  console.log(i, j);
}

// init: i = 1, j = 10
// check 1: 1 < 10 true  → print "1 10" → update: i = 2, j = 9
// check 2: 2 < 9  true  → print "2 9"  → update: i = 3, j = 8
// check 3: 3 < 8  true  → print "3 8"  → update: i = 4, j = 7
// check 4: 4 < 7  true  → print "4 7"  → update: i = 5, j = 6
// check 5: 5 < 6  true  → print "5 6"  → update: i = 6, j = 5
// check 6: 6 < 5  false → khatam
// Body 5, condition 6, update 5

//! Rules:

// init mein let ek hi dafa likho, aur variables comma se alag karo: let i = 1, j = 10. (Pehle let n = 5, fact = 1 mein comma sahi tha, yahan bhi wahi baat hai.)
// update mein bhi comma: i++, j--.
// condition mein ek hi expression hota hai. Do shartein chahiye to && ya || use karo.
// Parts ke darmiyan ;, variables ke darmiyan ,. Ye mat milana.

//! Comprehension Check: Optional Parts and Multiple Variables

//? Q1
console.log("===Q1===");

for (let a = 1, b = 8; a < b; a += 2, b--) {
  console.log(a, b);
}
// init:    a = 1, b = 8
// check 1: 1 < 8 true  → print "1 8" → update: a = 3, b = 7
// check 2: 3 < 7 true  → print "3 7" → update: a = 5, b = 6
// check 3: 5 < 6 true  → print "5 6" → update: a = 7, b = 5
// check 4: 7 < 5 false → loop ends
// Output: 1 8 / 3 7 / 5 6
// Body 3, condition 4, update 3


//? Q2
console.log("===Q2===");

let n = 1;
for (; n < 20; ) {
  n *= 3;
}
console.log(n);
// init:    empty (n = 1 was declared outside)
// check 1: 1 < 20 true  → body: n = 3
// check 2: 3 < 20 true  → body: n = 9
// check 3: 9 < 20 true  → body: n = 27
// check 4: 27 < 20 false → loop ends
// update part empty, so nothing runs after the body
// Only the last console.log prints → Output: 27
// Body 3, condition 4


//? Q3
console.log("===Q3===");

let total = 0;
let num = 5;
for (;;) {
  total += num;
  if (total > 12) break;
  num--;
}
console.log(total, num);
// condition part empty → never checked, treated as true
// Round 1: total = 0 + 5 = 5   → 5 > 12 no  → num-- → num = 4
// Round 2: total = 5 + 4 = 9   → 9 > 12 no  → num-- → num = 3
// Round 3: total = 9 + 3 = 12  → 12 > 12 no → num-- → num = 2
// Round 4: total = 12 + 2 = 14 → 14 > 12 yes → break
//          num-- is SKIPPED, so num stays 2
// Output: 14 2
// Body 4, num-- ran 3 times, condition checks: 0


//? Q4 (model answer)
console.log("===Q4===");

let word = "level";
let isPalindrome = true;
for (let i = 0, j = word.length - 1; i < j; i++, j--) {
  if (word[i] !== word[j]) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
// init:    i = 0, j = 4
// check 1: 0 < 4 true  → word[0] "l" vs word[4] "l" equal → update: i = 1, j = 3
// check 2: 1 < 3 true  → word[1] "e" vs word[3] "e" equal → update: i = 2, j = 2
// check 3: 2 < 2 false → loop ends (middle letter needs no check)
// isPalindrome is still true → Output: palindrome
// Body 2, condition 3, update 2

//! Point 4: for Loop with Arrays (Traversal, Searching, Sum, Max/Min)

// Array par for loop ka sabse zyada istemal hota hai. Chaar patterns hain, aur har pattern ka structure yaad rakho.

//? Real-world example


// Traversal: har item ko ek ek karke dekhna.
// Sum: bill ka total.
// Max/Min: sabse mehnga ya sasta item.
// Searching: koi khaas price list mein hai ya nahi, aur kis position par.


//? Pattern 1: Traversal
console.log("===For Loop Traversal==="); 

let prices = [450, 123, 840, 283, 898]; 
for (let i = 0; i < prices.length; i++) {
  console.log(i, prices[i]);
}


//? Pattern 2: Sum (Accumulator Pattern)

let totall = 0; 
for (let i = 0; i < prices.length; i++) {
  totall += prices[i];
}

console.log("Total:",totall);


//? Pattern 3: Max / Min (Comparison Pattern)

let max = prices[0]; 
for (let i = 1; i < prices.length; i++) {
  if(prices[i] > max) {
    max = prices[i];
  }
}

console.log("Max Item Price:", max); // 898

//? Min Now 

let min = prices[0]; 
for (let i = 1; i < prices.length; i++) {
  if(prices[i] < min) {
    min = prices[i]
  }
}

console.log("Min Item Price:", min); // 123


//? Pattern 4: Searching (Linear Search)


let target = 840; 
let foundIndex = -1; 

for(let i = 0; i < prices.length; i++) {
  if(prices[i] === target) {
    foundIndex = i;
    break;
  }
}

console.log("Found Index:", foundIndex); // 2

//! Point 5: Nested for Loops (Tables and Patterns)

console.log("===Nested For Loops===");

//? Concept: loop ke andar loop

// Real-world: cinema ke seats. Row 1 mein seat 1, 2, 3, 4. Phir Row 2 mein seat 1, 2, 3, 4. Row (bahar wala loop) ek dafa badalti hai, aur seat (andar wala loop) har row ke liye shuru se aakhir tak chalta hai.

// Terms:

// Outer loop: bahar wala (row)
// Inner loop: andar wala (column / seat)

// Sab se zaroori usool: outer loop ke har ek iteration mein inner loop poora chalta hai.

//? Example 1: Multiplication Table

for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col ++) {
    console.log(row,"x", col, "=",  row * col);
  }
}

// outer init: row = 1
//   inner init: col = 1
//   col = 1: print "1 x 1 = 1"
//   col = 2: print "1 x 2 = 2"
//   col = 3: print "1 x 3 = 3"
//   col = 4: 4 <= 3 false → inner ends
// outer update: row = 2
//   inner init AGAIN: col = 1   ← har dafa naya
//   "2 x 1 = 2", "2 x 2 = 4", "2 x 3 = 6" → inner ends
// outer update: row = 3
//   "3 x 1 = 3", "3 x 2 = 6", "3 x 3 = 9" → inner ends
// outer update: row = 4 → 4 <= 3 false → khatam
// Inner body total = 3 x 3 = 9

//? while se farq

// while mein inner counter ko outer loop ke andar khud reset karna parta tha (let col = 1 andar likhna). for (let col = 1; ...) mein init har outer round mein khud dobara chalta hai, to reset ka masla nahi rehta.

//? Example 2: Triangle Pattern (inner outer par depend karta hai)

for(let row = 1; row <= 5; row++) {
  let line = ""; 
  for(let col = 1; col <= row; col++) {
    line += "*";
  }
  console.log(line);
}

//! Important Rules: 

// line ko outer loop ke andar reset karo (let line = "" inner loop se pehle). Bahar likha to har row pichli row ke stars ke saath jud jayegi.
// console.log(line) inner loop ke BAAD, outer loop ke andar. Inner ke andar likha to har ek star alag line par aayega.
// Do alag naam use karo (row/col). Dono mein i mat rakho, kyunke ye confusing hai aur var ke saath infinite loop bana sakta hai.

//? break nested loop mein

// break sirf usi loop ko rokta hai jis ke andar ho. Inner mein break likha to sirf inner ruke ga, outer chalta rahega.


//! Comprehension Check: Nested for Loops

//? Q1
console.log("===Q1===");

for (let r = 1; r <= 3; r++) {
  for (let c = 1; c <= 4; c++) {
    console.log(r, c);
  }
}
// r = 1: c = 1,2,3,4 → "1 1", "1 2", "1 3", "1 4" → c = 5: 5 <= 4 false → inner ends
// r = 2: c = 1,2,3,4 → "2 1", "2 2", "2 3", "2 4" → c = 5 false → inner ends
// r = 3: c = 1,2,3,4 → "3 1", "3 2", "3 3", "3 4" → c = 5 false → inner ends
// r = 4: 4 <= 3 false → outer ends
// Inner body:      3 x 4 = 12
// Inner condition: per outer round 4 true + 1 false = 5 → 3 x 5 = 15
// Outer body 3, outer condition 4


//? Q2
console.log("===Q2===");

for (let r = 1; r <= 3; r++) {
  let line = "";
  for (let c = r; c <= 3; c++) {
    line += c;
  }
  console.log(line);
}
// r = 1: line = "" → c = 1: "1" → c = 2: "12" → c = 3: "123" → c = 4 false → print "123"
// r = 2: line = "" → c = 2: "2" → c = 3: "23"            → c = 4 false → print "23"
// r = 3: line = "" → c = 3: "3"                          → c = 4 false → print "3"
// r = 4: 4 <= 3 false → outer ends
// Output: 123 / 23 / 3
// Inner body:      3 + 2 + 1 = 6
// Inner condition: 4 + 3 + 2 = 9 (each round = body count + 1)
// Outer body 3, outer condition 4


//? Q3
console.log("===Q3===");

for (let r = 1; r <= 3; r++) {
  for (let c = 1; c <= 3; c++) {
    if (c === 2) break;
    console.log(r, c);
  }
}
// r = 1: c = 1: 1 === 2 no → print "1 1" → update c = 2
//        c = 2: 2 === 2 yes → break (inner ends, console.log skipped)
// r = 2: c = 1 → print "2 1" → c = 2 → break
// r = 3: c = 1 → print "3 1" → c = 2 → break
// r = 4: 4 <= 3 false → outer ends
// Output: 1 1 / 2 1 / 3 1
// break only stops the INNER loop; outer loop runs all 3 rounds
// Inner body entered 2 times per round = 6 (but printed only 3 times)
// Outer body 3, outer condition 4


//? Q4 
console.log("===Q4===");
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 4; col >= row; col--) {
    line += "*";
  }
  console.log(line);
}


// row = 1: line = "" → col = 4,3,2,1 (col >= 1) → 4 stars → col = 0: 0 >= 1 false → print "****"
// row = 2: line = "" → col = 4,3,2   (col >= 2) → 3 stars → col = 1: 1 >= 2 false → print "***"
// row = 3: line = "" → col = 4,3     (col >= 3) → 2 stars → col = 2: 2 >= 3 false → print "**"
// row = 4: line = "" → col = 4       (col >= 4) → 1 star  → col = 3: 3 >= 4 false → print "*"
// row = 5: 5 <= 4 false → outer ends
// Inner body:      4 + 3 + 2 + 1 = 10
// Inner condition: 5 + 4 + 3 + 2 = 14 (each round = body count + 1)
// Outer body 4, outer condition 5

//! Point 6: let vs var in Loops (and the setTimeout Trap)

// setTimeout(function, ms) ka matlab hai: “ye function abhi nahi, baad mein chalao.” Pehle JavaScript ka baaqi saara code poora chalta hai, phir ye function chalta hai. 0 milliseconds likho tab bhi wo ruk kar baari ka intezar karta hai. (Iska poora andar ka nizam Async topic mein aayega, abhi sirf ye rule kaafi hai.)

console.log("===Let vs Var in Loops and setTimeout trap===");

// setTimeout(function () { console.log("baad mein"); }, 0);
console.log("pehle");
// Output: pehle, baad mein


// var vs let: scope ka farq
//                           var	                                      let
// Scope	                   Function scope (block { } ko nahi maanta)	Block scope ({ } ke andar hi zinda)
// Loop mein	               Ek hi variable poore loop ke liye	        Har iteration ka apna alag copy
// Loop ke baad              Bahar bhi milta hai	                      ReferenceError

// for (var i = 0; i < 3; i++) { }
// console.log(i);   // 3  (var bahar leak ho gaya)


//! Famous Trap
console.log("===Famous Trap===");

// for (var k = 0; k < 3; k++) {
//   setTimeout(function () {
//     console.log(k);
//   }, 0);
// }
// Output: 3, 3, 3   (0, 1, 2 nahi!)

// Loop chalta hai (setTimeout sirf function ko "baad ke liye" rakhta hai):
// i = 0 → function #1 rakha gaya
// i = 1 → function #2 rakha gaya
// i = 2 → function #3 rakha gaya
// i = 3 → 3 < 3 false → loop khatam
// Ab baari aayi. var ki wajah se SIRF EK hi i hai, aur wo ab 3 hai
// function #1 → i padhta hai → 3
// function #2 → i padhta hai → 3
// function #3 → i padhta hai → 3


//! setTimout With Let
console.log("===setTimout with let===");

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
// Output: 0, 1, 2

// let har iteration ke liye NAYA alag i banata hai:
// iteration 1 ka i = 0 → function #1 isi 0 ko yaad rakhta hai
// iteration 2 ka i = 1 → function #2 isi 1 ko yaad rakhta hai
// iteration 3 ka i = 2 → function #3 isi 2 ko yaad rakhta hai
// Baad mein sab apni apni copy padhte hain → 0, 1, 2


//? Rule

// Loops mein hamesha let use karo, var nahi. const bhi nahi chalta for (const i = 0; ...; i++) mein, kyunke i++ se value badalni hai, to TypeError aata hai. (for...of mein const theek hai, wo aage aayega.)


//? Point 5 se link: var ke saath nested loops mein dono ke liye same naam ho to ek hi variable donon loops bandhta hai, aur loop kabhi nahi rukta:

// for (var r = 0; r < 5; r++) {
//   for (var r = 0; r < 2; r++) {   // wahi r dobara
//     console.log("hi");
//   }
// }

//! Comprehension Check: let vs var in Loops

//? Q1
console.log("===Q1===");

for (var a = 0; a < 3; a++) { }
console.log(a);
// a = 0: 0 < 3 true → empty body → a = 1
// a = 1: 1 < 3 true → empty body → a = 2
// a = 2: 2 < 3 true → empty body → a = 3
// a = 3: 3 < 3 false → loop ends
// var is function scoped, so `a` lives on after the loop → prints 3
// With let: `a` exists only inside the for block
//           → console.log(a) throws ReferenceError: a is not defined


//? Q2
console.log("===Q2===");

// for (let k = 0; k < 3; k++) {
//   setTimeout(function () { console.log(k); }, 0);
// }
// console.log("done");
// k = 0 → function #1 queued (keeps its own k = 0)
// k = 1 → function #2 queued (keeps its own k = 1)
// k = 2 → function #3 queued (keeps its own k = 2)
// k = 3 → 3 < 3 false → loop ends
// console.log("done") runs right away → "done"
// Queue runs only after ALL normal code of the file is finished
// Queue output (later): 0, 1, 2


//? Q3
console.log("===Q3===");

// for (var x = 1; x <= 3; x++) {
//   setTimeout(function () { console.log(x * 10); }, 0);
// }
// x = 1 → function #1 queued
// x = 2 → function #2 queued
// x = 3 → function #3 queued
// x = 4 → 4 <= 3 false → loop ends (x stays 4)
// var → only ONE shared x, now 4
// Queue: #1 → 4 * 10 = 40, #2 → 40, #3 → 40
// Fix: use let (each iteration gets its own x: 10, 20, 30)


//* Final order in the terminal (normal code first, then the queue):
// ===Q1=== / 3 / ===Q2=== / done / ===Q3===
// then the queue in the order it was filled: 0 / 1 / 2 / 40 / 40 / 40



//!  Point 7: Building Arrays, Strings and Objects Inside Loops
console.log("===Building Arrays, String, Object Inside Loops===");

// Rule 1: Container loop se BAHAR banao
// Cheez	                                              Kahan banani hai
// Final result ka container (array / string / object)	Loop se pehle
// Har row ka alag temporary (jaise line)             	Outer loop ke andar

//? Agar final container loop ke andar banaya, to har round par naya khali ho jata hai aur pichla sab ghayab.


//? 1. Building an Array (push)


let nums = [1, 2, 3, 4, 5]; 
const evenSquares = []; 

for(let i = 0; i < nums.length; i++) {
  if(nums[i] % 2 === 0) {
    evenSquares.push(nums[i] * nums[i]);
  }
}

console.log(evenSquares);

// i = 0: 1 % 2 === 0? no  → skip
// i = 1: 2 % 2 === 0? yes → push 4  → [4]
// i = 2: 3 → skip
// i = 3: 4 → push 16 → [4, 16]
// i = 4: 5 → skip
// Body 5 dafa, push 2 dafa


//? 2. Building a String (+= aur comma wala masla)

const fruits = ["Apple", "Mango", "Kiwi"]; 
let text = ""; 

for(let i = 0; i < fruits.length; i++) {
  text += fruits[i];
  if(i < fruits.length - 1) {
    text += ", ";
  }
}

console.log(text);

// i = 0: text = "apple"        → 0 < 2 yes → text = "apple, "
// i = 1: text = "apple, mango" → 1 < 2 yes → text = "apple, mango, "
// i = 2: text = "apple, mango, kiwi" → 2 < 2 no → comma nahi

//! Rule

// element hamesha add hota hai, comma shart se. Agar if poore element ko ghere mein le le to elements hi ghayab ho jayenge. Bina shart ke text += fruits[i] + ", " likha to aakhir mein extra ", " reh jata hai.

// const text = "" mein += error deta hai (TypeError), kyunke string ko dobara assign karna parta hai. Strings ke liye let.


//? 3. Building an Object (Frequency Counter)

let word1 = "pakpatanshareef"; 

const count = {}; 

for(let i = 0; i < word1.length; i++) {
  let ch = word1[i]; 
  if(count[ch] === undefined) {
    count[ch] = 1; 
  } else {
    count[ch]++;
  }
}

console.log(count);

//? 4. Array of Objects (reference ka trap)

let names = ["Ali", "Sara"]; 
const users = []; 
for(let i = 0; i < names.length; i++) {
  users.push({id: i + 1, name: names[i]});  // har round NAYA object
}
console.log(users)
// [{ id: 1, name: "Ali" }, { id: 2, name: "Sara" }]

// Galat tareeqa: object loop se bahar bana kar usi ko badalte jao aur push karte jao:

const user = {}; 
for(let i = 0; i < names.length; i++) {
  user.name = names[i];
  users.push(user);
}

console.log(user);

// [{ name: "Sara" }, { name: "Sara" }]  → dono ek hi address, jo aakhir mein "Sara" ban gaya


//! Comprehension Check: Building Arrays, Strings and Objects

//? Q1
console.log("===Q1===");

let nums1 = [3, 8, 5, 10];
const doubled = [];
for (let i = 0; i < nums1.length; i++) {
  if (nums1[i] > 4) {
    doubled.push(nums1[i] * 2);
  }
}
console.log(doubled);
// i = 0: 3 > 4? no  → skip
// i = 1: 8 > 4? yes → push 16 → [16]
// i = 2: 5 > 4? yes → push 10 → [16, 10]
// i = 3: 10 > 4? yes → push 20 → [16, 10, 20]
// i = 4: 4 < 4 false → loop ends
// Output: [ 16, 10, 20 ]
// Body 4, push 3, condition 5, update 4


//? Q2
console.log("===Q2===");

let tags = ["js", "css", "html"];
let text1 = "";
for (let i = 0; i < tags.length; i++) {
  text1 += tags[i] + ", ";
}
console.log(text1);
// i = 0: text1 = "js, "
// i = 1: text1 = "js, css, "
// i = 2: text1 = "js, css, html, "
// Output: "js, css, html, "  ← aakhir mein extra ", "
// Bug: comma har element ke saath bina shart ke add ho raha hai


//? Fix (naya variable, kyunke text1 pehle se bhara hua hai)
let text2 = "";
for (let i = 0; i < tags.length; i++) {
  text2 += tags[i];
  if (i < tags.length - 1) {
    text2 += ", ";
  }
}
console.log(text2);
// i = 0: text2 = "js"            → 0 < 2 yes → "js, "
// i = 1: text2 = "js, css"       → 1 < 2 yes → "js, css, "
// i = 2: text2 = "js, css, html" → 2 < 2 no → comma nahi
// Output: "js, css, html"
// Old mistake: reusing text1 would give "js, css, html, js, css, html"


//? Q3
console.log("===Q3===");

let letters = "abca";
const count1 = {};
for (let i = 0; i < letters.length; i++) {
  let ch = letters[i];
  if (count1[ch] === undefined) {
    count1[ch] = 1;
  } else {
    count1[ch]++;
  }
}
console.log(count1);
// i = 0: ch = "a" → undefined → count1 = { a: 1 }
// i = 1: ch = "b" → undefined → { a: 1, b: 1 }
// i = 2: ch = "c" → undefined → { a: 1, b: 1, c: 1 }
// i = 3: ch = "a" → already 1, not undefined → else → count1.a++ → { a: 2, b: 1, c: 1 }
// (a) Output: { a: 2, b: 1, c: 1 }
// (b) i = 3: "a" pehle se mojood tha, to else chala aur 1 se 2 hua
// (c) count1.ch likhte to key hamesha literal "ch" hoti:
//     i = 0: undefined → ch = 1, i = 1: ch = 2, i = 2: ch = 3, i = 3: ch = 4
//     Output: { ch: 4 }  (letters ki ginti nahi, sirf "ch" naam ki ek key)