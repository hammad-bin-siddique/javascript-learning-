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

//! ⚠️ JavaScript left se right chalta hai — sequence bahut important hai!
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


//! PART 2 — Comparison mein Coercion

// == — Loose Equality (Coercion hoti hai) mean ke itna strict nahi hota

console.log("5" == 5); // true ai ga keuke dono num same or == ye itna strict nahi ha 
console.log("0" == false); // true ai ga
console.log("" == false); // same 
console.log(0 == "") // same true
console.log(null == undefined); // ye bhi true ai ga js special rule ha 
console.log(1 == true); // true he ai ga 

// === — Strict Equality (Koi Coercion nahi) mean ke is main value bhi same honi chaia or type bhi 

console.log("5" === 5); // yaha false ai ga strict check ho ga
console.log(0 === false); // same false ai ga keuke type alag ha 
console.log("" === false); // false ai ga
console.log(null === undefined); // false ai ga 2no alag types hain 


//! ⚠️ == ke Kuch Ajeeb Cases

console.log(null  == 0); // false null sirf undefined ke sath equal ha 
console.log(null == false); // same 
console.log(undefined == 0); // false
console.log(undefined == ""); // false

// ? == is ki jaga === is ka use karna better ha 

//! 🟢 PART 3 — Conditions mein Coercion

// Jab bhi if() mein koi value daalo — JavaScript us value ko automatically Boolean mein convert karta hai.

if (1){
    console.log("True ha"); // true ha likha print ho ga keuke 1 true ha 
}

if ("") {
    console.log("Nahi chale ga"); // cuz empty string false mane jate hain 
}
 
if ("Ali") {
    console.log("Chale ga Empty string nahi ha"); // chale ga
}

if (0) {
    console.log("Nahi chale ga 0 false mana jata ha"); // nahi chale ga 
}

// if() ek security guard hai.
// Har value ko gate pe rokta hai — aur poochta hai "truthy hai ya falsy?"
// Truthy → andar jaao ✅
// Falsy → bahar raho ❌

// ? ! Operator — Ulta kar deta hai

console.log(!true); // false kar dia 
console.log(!null); // true ai ga 
console.log(!0); // true ai ga
console.log(!""); // true ai ga
console.log(!"Hello"); // false ai ga 
console.log(!1); // false ho jai ga true se


//? !! — Double NOT — Kisi bhi value ko Boolean banana

console.log(!!0); // false 
console.log(!!"Hello"); // true
console.log(!!null); //false
console.log(!!undefined); // false
console.log(!!1); // true
