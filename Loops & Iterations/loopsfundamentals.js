//! Loop Fundamentals

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