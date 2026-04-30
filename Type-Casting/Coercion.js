// Coercion = JavaScript khud — bina tumhare kaha — type convert kar leta hai.
// Tum kuch nahi karte — woh chupchaap karta hai parde ke peeche.

//! Coercion Hoti Kahan Hai?
// Coercion mainly 2 jagah hoti hai:
// 1. Operators ke saath  → +, -, *, /, ==
// 2. Conditions mein     → if(), while(), !

//! 🔵 PART 1 — Operators ke saath Coercion

//! ➕ + Operator — Sabse Confusing!
// + operator do kaam karta hai:

// Numbers jodna → 3 + 2 = 5
// Strings milana → "Ali" + "Ahmed" = "AliAhmed"

// Jab dono saath aayein — string jeet jaati hai!

console.log("5" + 3); // 53 ai ga keuke yaha string beat kare ge 
console.log("19" + true); // 19true ai ga string ban jai ga
console.log("5" + null); // 5null answer ai ga
console.log("5" + undefined);
console.log(1 + 5 + "3"); 
/* left to right chalta ha 1  or 5 plus ho ge number hain is lia 6 ho jai ga phir 6 number ha or 3 string ha to string win kar jai ga is lia 6 ke sath 3 mil kar 63 ho jai ga */
console.log("9" + 1 + 2); // left se right chalta ha or first per string ha to is lia number bhi string ban jai ga or answer ai ga 912

//! ➖ - Operator — Number Jeet-ta Hai
// - sirf numbers ke saath kaam karta hai — strings ka koi kaam nahi yahan.

console.log("10" - 5); // 5 ai ga string number ban jai ga
console.log("10" - "5"); // still 5 ai ga dono string number ban jai ge
console.log("10" - true); // 9 ai ga true 1 ke brabar hota ha 
console.log("20" - false); // 20 he rahe ga keuke false ke value 0 hoti ha 
console.log("5" - null); // null bhi 0 he mana jata ha so the answer is still 5 
console.log("19" - undefined); // yaha Nan ai ga undefined not a number 
console.log("abc" - 4); // still the answer is Nan 

// - ek aisa dukaan hai jahan sirf number ki currency chalti hai.
// Agar string lekar aao — dukandaar pehle exchange karta hai number mein — phir kaam karta hai.
// Agar exchange na ho sake — NaN milta hai — "yaar yeh toh kaam hi nahi aaya"

//! ✖️ * aur ➗ / — Same Rule as -

console.log("10" * 10); // multiply kare ga 100 answer ai ga
console.log("20" / 4); // divide ho ga 5 answer ai ga
console.log(true * "10"); // 5 ai ga
console.log ("10" / false); //  infinity ai ga 10 divide by zero infinity 
console.log("10" * null); // 10 / 0 = zero so answer is 0 
console.log("39" * undefined); // Nan answer ai ga