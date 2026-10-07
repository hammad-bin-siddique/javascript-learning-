//! Sub-topic 5: Comparison of Different Types

// Is topic ka plan 5 steps ka hai.

// Type alag ho to teeno (===, Object.is, ==) kya karte hain ← abhi yahan se shuru
// == ke conversion rules (number, string, boolean, null/undefined)
// Object vs number, aur object vs string (ToPrimitive)
// Array vs string, array vs number ([] == "", [1] == 1, [] == ![])
// Combined mix table, practice tasks, mini project, notes


//? Step 1: Type alag ho to kya hota hai?
console.log("=== What Happens When The Type is Different===");
// Comparator	            Type alag ho to
// ===	                    Seedha false. Value kabhi check nahi hoti.
// Object.is(a, b)	        Seedha false. Value kabhi check nahi hoti.
// ==	                    Pehle type conversion (coercion), phir compare.


//! === aur Object.is conversion nahi karte. Sirf == karta hai.

//? Code example

// === : type alag, to seedha false
console.log(5 === "5");          // false  (number vs string)
console.log(true === 1);         // false  (boolean vs number)
console.log(null === undefined); // false  (null vs undefined)

// Object.is : yeh bhi type alag hone par seedha false
console.log(Object.is(5, "5"));  // false

// == : conversion karta hai
console.log(5 == "5");           // true   ("5" ko number 5 bana liya)
console.log(true == 1);          // true   (true ko 1 bana liya)
console.log(null == undefined);  // true   (khaas rule, isko step 2 mein detail se dekhenge)


//? Comprehension check (predict-before-run)
console.log("===Comprehension check===");
console.log(10 === "10");          // false keuke type same nahi ha or === type check karta ha agar wo match naw kare to direct false wo value dekhta he nahi or === type conversion bhi nahi karta ha 
console.log(10 == "10");           // true keuke == pehle conversion karta ha "10" ko number main convert karta ha phir compare karta ha or yaha per true ai ga keuke convert hone ke bad dono number same ha is lia true ai ga 
console.log(Object.is(10, "10"));  // false ye bhi === ke tara type check karta ha or type match naw hone per direct false return karta ha 
console.log(true === 1);           // false type same nahi ha is lia direct false
console.log(true == 1);            // true keuke == type conversion karta ha compare se pehle or true ko 1 banata ha phir compare karta ha 
console.log(null == undefined);    // special case ha is lia true ai ga is ke ilawa undefined == null ke sath or khud ke sath ye dono true ate hain baki ke sath bhi true nahi ata ha 
console.log(Object.is(NaN, "NaN"));// false keuke type he alag ha 1 NaN ha or dosra string ha or object.is type conversion nahi karta ha seedha type check karta ha agar type same ho to phir value check karta ha or agar match kare to tab true return karta ha 

//? Task 1:
console.log("===Task One===");

console.log("Bilal" === "bilal"); // false value same nahi ha case sensitive ha 
console.log(0 === -0); // true === signs ko ignore karta ha 
console.log(Object.is(0, -0)); // false Object.is sign bhi check karta ha is lia false or is case main different ha or NaN wale === is se Object.is
console.log(NaN == NaN); // false 
console.log(NaN === NaN); // false return karta ha keuke NaN kuch bhi ho sakta for example abc12 or 23dw dono alada ha but dono ka NaN ai ga is lia ye false return karta ha === main 


//? Task 2: Comparator function

console.log("===Task Two==="); 

function compareTeeno(a, b) {
    return {loose: a == b, strict: a === b, objectIs: Object.is(a, b)};
}; 

console.table([compareTeeno(7, "7")]);  // true, false false
console.table([compareTeeno(0, false)]); // true, false false , 
console.table([compareTeeno(NaN, NaN)]); // false false, true
console.table([compareTeeno(null, undefined)]); // true, false, false, 
console.table([compareTeeno("", 0)]); // true, false, false


//? Task 3:
console.log("===Task Three===");
let faizanAge = "18"; 


if(faizanAge === 18) {
    console.log("Faizan Is Adult");
}
else {
    console.log("Faizan Is Minor");
}
// yaha faizan is minor ai ga keuke input age string main ha or yaha ham ne 18 dia ha is lia false ai ga keuke === type check karta ha agar sahi naw ho to false return karta ha is lia second condtion chale gi 


//? Fix karna is ko 


if(Number(faizanAge) === 18) {
    console.log("Faizan is Adult"); 
}
else {
    console.log("Faizan is Minor");
}; // ab yaha per ham ne is problem ko fix kia ha or age ko pehle khud number main convert kia ha or phir is ko compare kia ha is lia yaha per ab first condtion chale gi



//? Step 2: == ke conversion rules
console.log("Conversion Rules of ==");

//! Rules (type alag ho to)

// Yeh tarteeb se yaad rakho. == mein hamesha number ki taraf conversion hota hai:

 
// Case	                         Kya hota hai	                               Example	                       Result

// string vs number	             string → number	                           "5" == 5 → 5 == 5	           true

// boolean vs kuch bhi	         boolean → number pehle (true→1, false→0)	    true == 1 → 1 == 1	           true

// null vs undefined	         sirf aapas mein true, koi conversion nahi	    null == undefined	           true

// null/undefined vs baaki	     seedha false	                                null == 0	                   false


//? Code (predict-before-run)


console.log("5" == 5); // type conversion hui string 5 number main convert hua phir value compare hui 5 == 5 true ai ga 
console.log("" == 0); // pehle string ko number main convert kia == ne 0 bana or phir 0 == 0 true
console.log("abc" == NaN); // "abc" ko is ne number main convert karne ke koshish ki to NaN mil Nan == Nan false nan apne sath bhi false return karta ha is lia false
console.log(false == 0); // boolean ko convert kia number to false 0 bana or phir compare hua to result true
console.log(false == ""); //   false or "" dono convert hue number main to 0 == 0 true aya is lia true 
console.log(true == "1"); // true convert hua number main 1 or "1" convert hua number main 1 1 == 1 true 
console.log(true == "true"); // false true convert ho kar number bana to 1 or phir "true" convert kar ke number banane ke koshish ki NaN mila is lia false ai ga 
console.log(null == 0); // koi conversion nahi hua seedha false null sirf undefined or apne sath true ata ha 
console.log(undefined == false); // false same case like null


//? Step 3: Object vs number / string
console.log("===Object vs Number / String===");

// Rules

//? Rule A: object vs object
// Koi conversion nahi. Sirf address compare hota hai 

// {} == {}    // false (do alag address)

//? Rule B: object vs primitive (== mein)
// Object ko primitive mein badla jata hai, is tarteeb se:

// Pehle object ka valueOf() call hota hai. Agar primitive mila, to wahi use hota hai.
// Agar valueOf() ne primitive nahi diya (balki object hi wapas kiya), to toString() call hota hai.
// Phir jo primitive mila, uske baad Step 2 wale rules lagte hain.

// Normal plain object {} ka valueOf() khud object hi wapas karta hai, isliye nakaam, aur toString() chalta hai jo "[object Object]" deta hai.

//? Rule C: === aur Object.is ke saath
// Object vs primitive, type alag, to seedha false. Koi valueOf/toString call nahi hota.

//? Trace

const obj = {}; 
console.log(obj == "[object Object]"); // true;
// Step 1: object vs string, to object ko primitive banao
// Step 2: valueOf() -> obj khud wapas (primitive nahi), nakaam
// Step 3: toString() -> "[object Object]"
// Step 4: ab "[object Object]" == "[object Object]" -> true

console.log(obj == 5)
// Step 1-3: obj -> "[object Object]"
// Step 4: string vs number, to string -> number: Number("[object Object]") = NaN
// Step 5: NaN == 5 -> false

//? Custom valueOf

const marks = {
    valueOf() {return 42;}
}; 

console.log(marks == 42);  // true (valueOf ne 42 diya)
console.log(marks === 42); // false (type alag, valueOf call hi nahi hua)


//? Comprehension check

console.log("===Comprehension Check==="); 

const a = {}; 
const b = {}; 
const c = { valueOf(){return 10;}}; 
const d = {toString() {return "7"}};


console.log(a == b);                    // false reference check 
console.log(a == "[object Object]");    // true // valueOf() -> a khud wapas (primitive nahi), nakaam
// toString() -> "[object Object]"
// "[object Object]" == "[object Object]" -> true
console.log(a == 5);                    // false 
console.log(c == 10);                   // true
console.log(c === 10);                  // false type alag
console.log(d == 7);                    //  valueOf() -> d khud wapas, nakaam
// toString() -> "7"
// "7" == 7 -> string ko number: 7 == 7 -> true