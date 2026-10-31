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