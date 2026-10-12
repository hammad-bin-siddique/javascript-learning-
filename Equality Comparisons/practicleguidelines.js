//! Sub-topic 6: Practical Guidelines

//? Industry rule

// Default: hamesha === aur !==.

// Wajah: == ke coercion rules yaad rakhna mushkil hai, aur bugs chhup jate hain.

0 == false      // true
"" == false     // true
"0" == false    // true
"" == 0         // true
"0" == ""       // false  ← yeh dekho, transitivity bhi toot gayi!

//? Haan, sirf ek jagah jahan bohot se experienced developers isay accept karte hain:
console.log("===Practicle Guidelines===");

// if (value == null) {
// value ya to null hai YA undefined
// }

// Yeh in dono ka short form hai:

// if (value === null || value === undefined) {
// same kaam
// }


//? Example

function greet(name) {
    if(name == null) {
        return "Name Isn't Provide";
    }
    return "Salam" + name;
}

console.log(greet());          // undefined Name isn't Provide
console.log(greet(null));      // null  Name Isn't Provide
console.log(greet(""));        // "" didn't catch "Salam "
console.log(greet(0));         // 0 didn't catch "Salam 0"

//? Comprehension Check

const a = null;
const b = undefined;
const c = 0;
const d = "";

console.log(a == null);     // true null null ke brabar hota ha 
console.log(b == null);     // true null or undefined true hote hain == main 
console.log(c == null);     // false null apne or undefined ke ilawa sab ke sath false return karta ha 
console.log(d == null);     // false 
console.log(a === undefined);  // false strict equality pehle type check karti ha or ye same nahi ha is lia false 
console.log(a == b);        // true 


function showAge(age) {
  if (age == null) {
    return "Age nahi di gayi";
  }
  return "Age: " + age;
}

console.log(showAge(0));      // Age: 0
console.log(showAge(undefined)); // Age nahi de gay
console.log(showAge(""));     // Age:

function showAge2(age) {
  if (!age) {
    return "Age nahi di gayi";
  }
  return "Age: " + age;
}

console.log(showAge2(0));          // Age nahi de gayi
console.log(showAge2(undefined));  // Age nahi de gayi
console.log(showAge2(""));         // Age nahi de gayi

// Is step ka khulasa
// Default rule: === / !==.
// == null ek jaiz exception hai, kyunke yeh sirf null aur undefined pakadta hai.
// !value falsy-check hai (0, "", false, NaN bhi pakadta hai), null/undefined ka checker nahi.
// Jab 0 ya "" valid values hon, to !value mat use karo.

//! Step 2: Industry Standard, hamesha ===


//? Formal rule

// Har comparison mein === aur !== use karo. == / != sirf us ka case mein (== null) jahan team allow kare.

// === kyun industry standard hai? (4 wajahein)
//? 1. Predictable behaviour (koi hidden conversion nahi)

// === kabhi type nahi badalta. Types alag hon to seedha false.

5 === "5"       // false, hamesha


//? 2. Bugs chhup jate hain;

// Real form-validation bug:

const quantity = "0";            // input se string aati hai

if (quantity == 0) {             // true, galti se pass
  console.log("Cart khali hai");
}

if (quantity === 0) {            // false, bug fauran nazar aata hai
  console.log("Cart khali hai");
}


// == ne string ko chupke se number bana diya. === ne bataya ke “data ka type hi galat hai”, jo asal masla tha, aur tum ne woh waqt par theek kar liya.

//? 3. Code padhne wale ko soch nahi karni parti

// Jab koi a === b dekhta hai to usay pata hai: value bhi same aur type bhi same. a == b dekh kar reviewer ko sochna parta hai ke “yahan coercion intentional tha ya ghalti?”

// Team mein ek rule ho (hamesha ===) to code review mein yeh sawal hi khatam.

//? 4. Tools aur frameworks isi ko expect karte hain

// ESLint, TypeScript, aur bade style guides isi ko default samajhte hain. Is ka detail Step 3 mein aayega.

//? Comprehension Check

console.log("===Coprehension Check==="); 

console.log(1 === 1);          // true type and value are same 
console.log(1 === "1");        // false type isn't same 
console.log(1 == "1");         // true loose equality coercion hoti ha 
console.log(0 === false);      // false type isn't matched
console.log(0 == false);       // true coercion ho kar false bhi 0 ban jata ha 
console.log("5" !== 5);        // true "5" 5 ke equal nahi ha keuke 1 string ha or dosra number
console.log("5" != 5);         // false == main "5" 5 same he ha keuke coercion hoti ha 

function isAdult(age) {
  if (age == 18) {
    return "Bilkul 18 saal";
  }
  return "Kuch aur";
}

const inputFromForm = "18";
console.log(isAdult(inputFromForm));   //  yaha return ho ga Bilkul 18 saal halake input string ha or yaha ham number se match karwa rahe hain phir bhi return bilkul 18 year aya 


function isAdult2(input) {

  if(input === null || input === undefined) {
    return {ok: false, message: "Age Must be filled"};
  }

  const text = String(input).trim(); // ab number ho ya string trim work kare ga 
  if(text === "") {
    return {ok: false, message: "Age Must Be filled"}; 
  }

  const ageNumber = Number(text); 

  if(Number.isNaN(ageNumber)) {
    return {ok: false, message: "Age Must be a Number"};
  }

  if(!Number.isFinite(ageNumber)) {
    return {ok: false, message: "Please Add Valid Age"};
  }

   if(String(ageNumber) !== text) {
    return {ok: false, message: "Age Must be a real Number"};
  }

  if(ageNumber < 0 || ageNumber > 120) {
    return {ok: false, message: "Please Select Age from 0 to 120"};
  } 


  if(!Number.isInteger(ageNumber)) {
    return {ok: false, message: "Please Don't Use Decimals Numbers"};
  }

 

  if(ageNumber >= 18) {
    return {ok: true, message: "Adult"};
  }

  return {ok: true, message: "Minor"};
};

console.log("===isAdult2 Full Test===");

console.log(isAdult2("18"));        // Adult
console.log(isAdult2(18));          // Adult
console.log(isAdult2("17"));        // Minor
console.log(isAdult2(0));           // Minor
console.log(isAdult2("Infinity"));  // Please Add Valid Age
console.log(isAdult2("0x12"));      // Age Must be a real Number
console.log(isAdult2("1e3"));       // Age Must be a real Number
console.log(isAdult2(18.5));        // Please Don't Use Decimal Numbers
console.log(isAdult2("-5"));        // Please Select Age from 0 to 120
console.log(isAdult2("121"));       // Please Select Age from 0 to 120
console.log(isAdult2("abc"));       // Age Must be a Number
console.log(isAdult2(""));          // Age Must Be filled
console.log(isAdult2(null));        // Age Must be filled
console.log(isAdult2());            // Age Must be filled
console.log(isAdult2("18.0")); // Age Must be a real Number

console.log(isFinite("18"));            // true 
console.log(Number.isFinite("18"));     // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isInteger(18.5));    // false


//! Step 3: ESLint, jo == ko pakadta hai

//! Step 3: ESLint, jo == ko pakadta hai

//? Formal Definition

// ESLint ek open-source static analysis tool (linter) hai JavaScript ke liye.
// Yeh tumhara code chalaye baghair padhta hai, usay ek tree structure (AST) mein
// tor kar dekhta hai, aur pehle se set kiye hue rules se match karta hai.
// Jahan rule toota, wahan error ya warning deta hai.

// Short mein: ESLint code ka "munshi" hai. Woh ghalti dikhata hai, khud kuch badalta nahi
// (jab tak --fix na chalaya jaye).

//? Rule kya hota hai?

// Rule ek hukam hota hai jo ESLint ko batata hai ke kaun si cheez dhoondni hai.
// Har rule ki 3 severity ho sakti hain:
//   "off"   -> rule band
//   "warn"  -> warning dikhao, par program na roko
//   "error" -> error dikhao (exit code non-zero, CI fail ho sakti hai)

//? eqeqeq Rule

// Naam: eq + eq + eq = teen barabar (===)
// Kaam: == aur != ko dhoondna aur error dena, taake hamesha === aur !== use ho.
// Note: eqeqeq ESLint ki js.configs.recommended list mein shamil NAHI hai.
// Isay config mein khud likhna parta hai.

//? eqeqeq ke modes

// 1. ["error", "always"]
//    == aur != kahin bhi allowed nahi, == null bhi nahi.
//
// 2. ["error", "always", { null: "ignore" }]
//    Sirf == null aur != null allowed hain. Baaki sab == / != error.
//
// 3. ["error", "smart"]
//    Kuch special cases allowed (jaise typeof comparison aur null ke saath comparison).

//? no-eq-null Rule

// Yeh rule sirf == null aur != null ko flag karta hai.
// Agar team ko woh jaiz case bhi nahi chahiye, to eqeqeq ke saath yeh rule laga ke
// x === null || x === undefined likhwaya jata hai.

//? Setup (jo maine kiya)

// 1. Root folder mein: npm init -y
// 2. npm install --save-dev eslint
// 3. Root mein eslint.config.mjs banayi
// 4. .gitignore mein node_modules/ add kiya
// 5. Chalaya: npx eslint "Equality Comparisons/practicleguidelines.js"
// Windows par npm.ps1 ka error aya to Set-ExecutionPolicy -Scope CurrentUser RemoteSigned chalaya.

//? Config

// export default [
//   {
//     rules: {
//       eqeqeq: ["error", "always", { null: "ignore" }],
//     },
//   },
// ];

//? Meri file par results

// Mode { null: "ignore" } -> 11 errors
// Mode "always"           -> 17 errors
// Farq 6 ka tha. Yeh woh 6 lines thin jahan == null likha tha
// (lines 32, 50, 51, 52, 53, 59).

//? Seekhi hui baatein

// 1. ESLint code ka text dekhta hai, values nahi.
//    a == b flag hua, halanke a null aur b undefined tha,
//    kyunke null: "ignore" tabhi lagta hai jab ek taraf literally null likha ho.
// 2. --fix tabhi khud theek karta hai jab behaviour nahi badalta
//    (jaise "0" == "" jahan dono strings hon). Jahan types alag hon wahan khud soch kar theek karo.
// 3. Parsing error ka matlab hai syntax toota hua hai, ESLint ne file padhna hi nahi shuru kiya.
// 4. Rule ka naam, severity, aur mode teeno alag cheezein hain.

console.log(NaN === NaN);              // false === main Nan Nan ke barabar bhi nahi ha 
console.log(Object.is(NaN, NaN));      // true Ojbect is Nan or Nan ko true return karta ha or ye main case ha jis se object is === se different ha 
console.log(0 === -0);                 //  true === signs ko ignore karta ha 
console.log(Object.is(0, -0));         //  false ye sign ko bhi compare karta ha or ye dosra case ha jis main object is === se different ha 
console.log("" == 0);                  //  true "" convert ho kar number banta ha 0 phir 0 == 0 true return karta ha
console.log(null == undefined);        // true special case ha null or undefined apas main true return karta ha == main 
console.log([1] == [1]);               //  false refrence compare hota ha naw ke value 