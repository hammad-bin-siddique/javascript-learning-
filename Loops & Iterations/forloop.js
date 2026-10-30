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

