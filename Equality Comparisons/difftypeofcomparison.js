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

//? Step 4: Array vs string / number
console.log("===Array Vs String / Number===");
// Array bhi ek object hai. To Step 3 ke rules hi lagte hain. Bas fark yeh hai ke array ka toString() special hai: yeh elements ko comma se jodta hai (join(",")).

// [].toString()        // ""
// [1].toString()       // "1"
// [1, 2].toString()    // "1,2"
// [null].toString()    // ""   (null aur undefined khali string ban jate hain)

// Array ka valueOf() bhi array khud hi wapas karta hai, to hamesha toString() tak baat pahunchti hai.

//? Flow
// [1] == 1
// Step 1: array vs number, to array ko primitive banao
// Step 2: valueOf() -> array khud, nakaam
// Step 3: toString() -> "1"
// Step 4: "1" == 1 -> string ko number: 1 == 1 -> true

console.log([1] == 1); // true

// [] == 0
// [] -> "" (toString)
// "" == 0 -> Number("") = 0 -> 0 == 0 -> true

console.log([] == 0); // true


//? Sabse mashhoor example: [] == ![]

// [] == ![]
// Pehle ![] nikalo: array truthy hota hai, to ![] = false
// Ab [] == false
// false -> number: 0
// ab [] == 0
// [] -> "" -> 0
// 0 == 0 -> true

console.log([] == ![]); // true

// Yaani "array khali" hona aur "array ka ulta" dono == mein barabar nikle. Yeh JavaScript ka mashhoor ajeeb result hai, aur dikhata hai ke == ko object/array ke saath kyun nahi use karte.

//? === ke saath

// console.log([] === "")      // false, type alag (object vs string)
console.log([] == [])     // false, do alag address (Rule A)

//? Comprehension check
console.log("===Comprehension Check===");


console.log([] == "");         // true [] == ""
// [] -> toString() -> ""
// "" == "" -> dono string, type same, seedha text compare -> true
console.log([5] == 5);         // [5] string main convert hoga "5" phir "5" number main convert hoga 5 == 5 true ai ga
console.log([1, 2] == "1,2");
// true
// Step 1: array vs string, type alag hai, to array ko primitive banao
// Step 2: valueOf() -> array khud wapas (primitive nahi), nakaam
// Step 3: toString() -> [1, 2].toString() = "1,2"
// Step 4: "1,2" == "1,2" -> dono string, type same, seedha text compare -> true
// Note: yahan number conversion hua hi nahi, kyunke dono taraf string ban gayi

console.log([1, 2] == 1);
// false
// Step 1: array vs number, to array ko primitive banao
// Step 2: valueOf() -> array khud wapas, nakaam
// Step 3: toString() -> "1,2"
// Step 4: ab "1,2" == 1 -> string vs number, to string ko number banao
// Step 5: Number("1,2") = NaN (comma wali string poora number nahi)
// Step 6: NaN == 1 -> false (NaN kisi ke barabar nahi)
console.log([0] == false);     // true [] bana "0" or convert hokar 0 or dosri side wala bhi false se 0 bana 0 == 0 true 
console.log([] == []);         // false reference not same 
// console.log([] === "");        // false type not same 
console.log([null] == "");     // [null] == "" true
// Step 1: array vs string, to array ko primitive banao
// Step 2: valueOf() -> array khud, nakaam
// Step 3: toString() -> [null].toString() = ""   (null khali string ban jata hai)
// Step 4: "" == "" -> true


//? Step 5: All In One

// Kya type alag hai?
// ├── Nahi -> sab ek jaise (=== aur == ka result same), Object.is sirf NaN aur -0 mein farq
// └── Haan
//     ├── === / Object.is -> seedha false
//     └── ==
//         ├── null/undefined -> sirf aapas mein true, baaki sab false
//         ├── boolean -> pehle number (true=1, false=0)
//         ├── object/array -> valueOf, phir toString, phir aage ke rules
//         └── string vs number -> string ko number banao


/*
=====================================================================
 ! COMPARISON OF DIFFERENT TYPES: Combined Table
=====================================================================

 Expression                  ==      ===     Object.is   Wajah (== ki)
 -------------------------------------------------------------------
 "5"  , 5                    true    false   false       string -> number
 ""   , 0                    true    false   false       Number("") = 0
 false, 0                    true    false   false       boolean -> number
 true , "true"               false   false   false       1 vs NaN
 null , undefined            true    false   false       khaas rule
 null , 0                    false   false   false       null sirf undefined ke barabar
 NaN  , NaN                  false   false   true        IEEE 754 rule
 0    , -0                   true    true    false       sirf Object.is sign dekhta hai
 []   , ""                   true    false   false       [] -> ""
 [5]  , 5                    true    false   false       [5] -> "5" -> 5
 [1,2], 1                    false   false   false       "1,2" -> NaN
 []   , []                   false   false   false       do alag address
 {}   , "[object Object]"    true    false   false       {}.toString()

=====================================================================
 FAISLA KAISE KAREIN (FLOW)
=====================================================================

 Kya type alag hai?
 |-- Nahi -> == aur === ka result same, Object.is sirf NaN aur -0 mein farq
 |-- Haan
     |-- === / Object.is -> seedha false
     |-- ==
         |-- null/undefined -> sirf aapas mein true, baaki sab false
         |-- boolean        -> pehle number (true = 1, false = 0)
         |-- object/array   -> valueOf(), phir toString(), phir aage ke rules
         |-- string vs number -> string ko number banao

=====================================================================
 Number(string) KA RULE
=====================================================================

 ""  ya sirf spaces   -> 0
 Poora number text    -> wahi number ("5", " 12 ", "3.5")
 Baaki sab            -> NaN ("abc", "true", "12px", "1,2")

=====================================================================
 USAGE KE USOOL
=====================================================================

 1. Default === rakho. == sirf tab jab jaan boojh kar conversion chaho.
 2. Form input: trim() -> Number() -> Number.isNaN() check -> compare.
 3. NaN check: x === NaN kaam nahi karta. Number.isNaN(x) ya Object.is(x, NaN) use karo.
 4. Object/array ko == se primitive ke saath compare mat karo.
*/



//! Practice Tasks 

//? Task 1: Predict 
console.log("===Task One===");

console.log("0" == false); // true 0 string se number main convert ho ga or 0 bane ga or false bhi convert hoga or 0 ban jai ga 0 == 0 true
console.log([] == false); // true array convert ho kar string bane ga "" or phir string se 0 number main convert ho kar or false bhi 0 main cnvert ho ga 0 == 0 true
console.log([1] == "1"); // true array "1" main convert ho ga or "1" == "1" true ai ga
console.log(null == false); // false null undefined or khudke ilawa sab ke sath false return karta ha 
console.log(Object.is([], [])); // false reference same nahi ha 

//? Task 2

console.log("===Task Two==="); 

console.log([undefined] == "");  // true keuke undefined array main or string main convert ho ga "" ban jai ga or ""== "" true return kare ga 
console.log([null] == null);  // false keuke array main jo null ha wo string main convert ho ga "" or "" == null is false 


//? Task Three 
console.log("===Task Three==="); 

function smartEqual(a, b) {
    if(a === b) return "strict"; 
    if(a == b) return "loose"; 
    return "different";
}

console.log(smartEqual(7, "7")); // loose 
console.log(smartEqual([], "")); // loose 
console.log(smartEqual(null, undefined)); // loose 
console.log(smartEqual(NaN, NaN)); // different  keuke === bhi is ko false return karta ha 
console.log(smartEqual([1, 2], 1)); // different 