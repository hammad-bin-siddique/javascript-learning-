//! Loop Fundamentals

const { RuleTester } = require("eslint");

// Loop kya hai, aur iteration ka matlab
// Bina loop ke repeat code ka masla
// Loop ke 3 hisse: start, condition, update
// Infinite loop kya hota hai aur kaise bachte hain
// Off-by-one error (< aur <= ka farq)

//? Step 1: Loop kya hai, aur Iteration ka matlab


//! Definition

//? Loop code ka ek block hai jo ek condition true rehne tak baar baar chalta hai.

//? Iteration loop ke block ka ek chakkar hai. Agar block 5 baar chala, to 5 iterations hui.


// Cheez	            Matlab	                              Attendance mein

// Loop 	            Poora repeat karne ka system	      Poori attendance process

// Iteration	        Us system ka ek chakkar	              Ek student ka naam parhna


//? Code Example 
console.log("===Loop & Iteration===");
let count = 1; 

while(count <= 5){
    console.log("Iteration", count); 
    count++; // ya while loop ka use kia ha ke jab tak count 5 naw ho jai tab kat iterate karo 
}; 

// condition har iteration se pehle check hoti hai. Jis moment wo false hui, loop ruk gaya aur 6th iteration nahi hui. Loop ke baad wali pehli line se code aage chalta hai.


let n = 30;

while (n < 33) {
  console.log("Shuru mein n:", n);
  n = n + 1;
  console.log("Update ke baad n:", n);
}

console.log("Loop ke baad n:", n);

// Condition hamesha n ki mojooda value par check hoti hai, update se pehle.
// Update n ko boundary tak pohancha sakta hai. Phir agla check fail hota hai aur loop ruk jata hai.


// Loop poora repeat karne ka system hai, iteration us ka ek chakkar hai.
// Sirf wo chakkar iteration kehlate hain jahan condition true thi. False wala aakhri check iteration nahi hota.
// Condition update se pehle, n ki mojooda value par check hoti hai.
// Loop ke baad variable apni aakhri update shuda value rakhta hai. < wale simple loop mein wo boundary ke barabar hoti hai.

//? Step 2: Bina loop ke repeat code ka masla

console.log("===Repeat Code Problem Without Using Loop===");

// Tareeqa 1: 100 lines haath se ek ek kar ke likhe.
// Tareeqa 2: Ek rule yaad rakhe: “Jab tak 100 na ho jayein, yeh line likhta jao.”


//? Bina loop ka code

// Maan lo 5 doston ko salam print karna hai:
console.log("Salam, Bilal!");
console.log("Salam, Bilal!");
console.log("Salam, Bilal!");
console.log("Salam, Bilal!");
console.log("Salam, Bilal!");


// Yeh chal jata hai, lekin 4 masle chhupe hain.

//? Masla 1: Code lamba ho jata hai

// 5 baar ke liye 5 lines hain. 1000 baar ke liye 1000 lines likhni paregi.

//? Masla 2: Change karna mushkil hai

// Agar message "Salam, Bilal!" se "Assalam o Alaikum, Bilal!" karna ho, to har line alag se edit karni paregi. 1000 lines hon to 1000 jagah change.

//? Masla 3: Ghalti ka chance barh jata hai

// 1000 lines mein se ek line mein bhi "Slam, Bilal!" ka typo reh jaye to poore output mein ek ghalat line aa jayegi, aur dhoondna mushkil hoga.

//? Masla 4: Kitni baar chalana hai, agar pehle se pata hi na ho?

// Maan lo user batata hai ke kitni baar print karna hai (10, 50, ya 3). Bina loop ke tum kitni lines likhoge? Is soorat mein code likha hi nahi ja sakta, kyunke count run time par pata chalta hai.


//? With While Loop 

let counting = 1; 
while(counting <= 5) {
    console.log("Salam, Bilal!");
    counting++;
}; 

// Bina loop ke repeat code lamba, edit karne mein mushkil, aur ghalti ke chance wala hota hai.
// Agar count run time par pata chale to bina loop ke code likha hi nahi ja sakta.
// Loop mein repeat hone wala kaam ek jagah hota hai, aur kitni baar chalega yeh ek number ya condition se control hota hai.



//? Step 3: Parts of Loop (Start, Condition, Update)

console.log("===Parts of Loops==="); 

//! Formal definition

// Har loop ke 3 hisse hote hain:

// Start: loop ka counter variable kis value se shuru hoga.
// Condition: har iteration se pehle check hoti hai. True ho to body chalti hai, false ho to loop ruk jata hai.
// Update: har iteration ke end par counter ki value badalti hai, taake wo aage barhe aur ek din condition false ho jaye.


//? Code Example 

let counter = 1; // Starting Point 

while(counter <= 10) { // Condition 
    console.log("Hello My Name Is Patrick Jane"); // body (jo repeat ho ga)
    counter++; // Update 
};

let page = 1; 

while (page <= 4) {
    console.log("Page:", page); 
    page = page + 2;
}


// Start loop se pehle, 1 baar chalta hai.
// Condition har iteration se pehle check hoti hai.
// Update har iteration ke end par chalta hai, aur + 1 ke ilawa + 2 ya - 1 bhi ho sakta hai.
// Start aur Update badalne se iterations ki ginti badal jati hai, lekin loop ka dhancha wahi rehta hai.

//? Step 4: Infinite Loop aur us se kaise bachte hain

console.log("===Infinite Loop==="); 

//! Definition

// Infinite loop wo loop hai jis ki condition kabhi false nahi hoti, is liye wo kabhi ruk’ta nahi.

// Programming mein yeh bohot nuksan karta hai:

// Node.js terminal: program chalta rehta hai aur terminal par output ka dher laga deta hai.
// Browser (aage DOM mein): poora tab freeze ho jata hai, aur user ko page band karna parta hai.


//! Infinite loop ki 3 aam wajahein
//? Wajah 1: Update likhna bhool gaye

// let count1 = 1;

// while (count1 <= 3) {
//   console.log("Salam!");
// count1 = count1 + 1;  <- bhool gaye
// }

// count hamesha 1 rehta hai, to 1 <= 3 hamesha true hai.

//? Wajah 2: Update ulti taraf ja raha hai

// let count2 = 1;

// while (count2 <= 3) {
//   console.log("Salam!");
//   count2 = count2 - 1;   barhna tha, ghat raha hai
// }


// count 1, 0, -1, -2... hota jata hai. Yeh kabhi 3 se bara nahi hoga, to condition hamesha true rehti hai.


//? Wajah 3: Condition boundary ko “skip” kar deti hai


// let n1 = 10;

// while (n1 !== 3) {
//     console.log("Hello")
//   n1 = n1 - 2;
// }


//? Infinite loop se bachne ka checklist

// Loop likhne ke baad yeh 3 sawal khud se poochho:

// Update likha hai? (counter badal raha hai?)
// Update sahi taraf ja raha hai? (barh raha hai to </<= wali condition, ghat raha hai to >/>= wali)
// Counter boundary tak pohanch sakta hai? (condition kabhi false ho sakti hai?)

// Agar in teeno ka jawab “haan” hai, to loop ruk jayega.


//? Agar terminal mein infinite loop chal jaye to

// Node.js mein chalte hue program ko rokne ke liye:

// Ctrl + C dabao.

//! Comprehension Check

// A
// let i = 1;
// while (i <= 3) {
//   console.log(i);
// } 
//? Ye infinite loop bane ga keuke ya update nahi kia ha or counter badal nahi raha ha 

// B
// let i = 5;
// while (i > 0) {
//   console.log(i);
//   i = i - 1;
// }

//? Ye Infinite nahi ha ha keuke yaha update kia ha counter or bounce bhi nahi ho raha mean ke skip nahi ho raha ha or condition bhi true ho rahi ha loop ki or sahi taraf ja rahi ha 

// C
// let i = 1;
// while (i <= 3) {
//   console.log(i);
//   i = i - 1;
// }

//? Ye infinite loop ha yaha update to hua ha but ulti taraf ho raha wo 3 tak ponch he nahi raha ha balke wo -1 -2 and so on ja raha ha is lia infinite loop ha 

// D
// let i = 10;
// while (i !== 3) {
//   i = i - 2;
// }

//? Ye bhi infinite loop ha keuke yaha condition boundry ko skip kar deti ha mean ke 10 se 8 1 iteration per phir 6 phir 4 phir 2 beach main se 3 skip ho jai ga is lia ye infinite ban jai ga 


//! Safe Demo 

let count3 = 1; 
let safety = 0; 

while(count3 <= 3 && safety < 10) {
    console.log("Hello! Count:", count3);
    safety++; 
}

console.log("After the Loop: count =", count3, "safety =", safety);

// Infinite loop wo hai jis ki condition kabhi false nahi hoti.
// Teen aam wajahein: update bhool jana, update ulti taraf jana, aur !== ke saath boundary skip ho jana.
// Checklist: update hai? Sahi taraf ja raha hai? Counter boundary tak pohanch sakta hai?
// Ctrl + C terminal mein loop rokta hai.
// Ghatne wale loop mein > ya >=, aur barhne wale mein < ya <= istemal hota hai. Exact match (!==) se bachna behtar hai, range check (<, >) zyada safe hai.


//? Step 5: Off-by-one error (< aur <= ka farq)
console.log("===Off By One Error==="); 
//! Definition

// Off-by-one error wo ghalti hai jis mein loop 1 iteration zyada ya 1 iteration kam chalta hai, kyunke:

// < ki jagah <= likh diya (ya ulta), ya
// Start 0 ki jagah 1 rakha (ya ulta).

// < aur <= ka asal farq 

// Operator	            Matlab	                         Boundary khud loop mein chalti hai?

// i < 5	            i 5 se chhota ho	             Nahi. 5 < 5 false hai

// i <= 5	            i 5 se chhota ya barabar ho	     Haan. 5 <= 5 true hai

//? Dono loops ko trace karo
// Loop 1: i < 5

let a = 1; 

while(a < 5) {
    console.log("a:", a); 
    a = a + 1; 
} // loop one total 4 bar iterate hota ha keuke 5 se jab tak i chota ho tab tak 5 < 5 false he keuke wo chota nahi ha brabar ha 
console.log("a last value:", a); // 5
// Loop 2: i <= 5

let b = 1; 

while(b <= 5) {
    console.log("b:", b); 
    b = b + 1; 
}
console.log("b last value:", b); // 6
// or loop b 5 bar iterate hota ha keuke yaha condition ye ha ke ya to 5 se chota ho ya 5 ke barabar ho to 5 < 5 true ha keuke wo 5 se chota nahi but barabar ha is lia 1 or bar iteration hoti ha or total 5 bar iterate hota ha c

// Dono mein boundary 5 hi hai, lekin < ne 5 ko bahar rakha aur <= ne andar.


//! Comprehension Check
console.log("===Comprehension Check==="); 

// Q1
let i = 1;
while (i < 4) {
  console.log(i);
  i = i + 1;
} // is main 3 iteration ho gi 1 2 3 print ho ga or loop ke bad i ke value 4 ho gi 
console.log("i last value", i); // 4

// Q2
let j = 1;
while (j <= 4) {
  console.log(j);
  j = j + 1;
}
// is main total 4 iteration ho gi 1 2 3 4 print ho ga or loop ke bad j ke value 5 ho gi 
console.log("j last value", j); // 5

// Q3
let k = 0;
while (k <= 4) {
  console.log(k);
  k = k + 1;
}
// is main total 5 iteration ho gi 0 1 2 3 4 print ho ga or loop ke bad k ke value 5 ho gi 
console.log("k last value", k);

//Q4 

let n1 = 10; 

while(n1 <= 20) {
    console.log(n1); 
    n1 = n1 + 1; 
} // total 11 bar iterate ho 10 or 20 dono shamil ho ge or loop ke bad n1 ke last value 21 ho gi 
console.log("n1 last value", n1); // 21

//Q5

let rollNum = 0; 

while(rollNum < 5) {
    console.log(rollNum); 
    rollNum = rollNum + 1;
}

// loop main 5 iteration ho gi or values 0 1 2 3 4 ho gi or last value 5 ho gi keuke 0 se start hua ha or 5 iteration karni thi is lia rollNum < 5 kia ha agar <= use karta to iteration 6 ho jati 

console.log("roll num last value", rollNum); // 5

// Off-by-one error wo hai jis mein loop 1 iteration zyada ya kam chalta hai, < / <= ya start 0 / 1 ki ghalti se.
// < boundary ko bahar rakhta hai, <= andar.
// Iterations ka formula: < ke liye b - s, <= ke liye b - s + 1. Shak ho to trace table banao.
// 0 se shuru karne par aksar < istemal hota hai (Arrays mein yehi hoga).