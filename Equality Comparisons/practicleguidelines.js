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
    return {ok: false, message: "Age Must Be a Number"};
  }

  if(Number.isFinite(ageNumber)) {
    return {ok: false, message: "Please Add Valid Age"};
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

console.log(isAdult2("18"));    // true Adult 
console.log(isAdult2(18));      // true adult
console.log(isAdult2("abc"));   // false age must be a number
console.log(isAdult2(""));      // false age must be filled
console.log(isAdult2("  "));    // false age must be filled
console.log(isAdult2(null));    // false age must be filled
console.log(isAdult2(0));       // true minor
console.log(isAdult2("Infinity")); //  or infinity ka infinty he ata ha or is ka mean ha boht bara number jo 18 se to bara he ha is lia output ai ga adult
console.log(isAdult2("0x12")); // adult
console.log(isAdult2("1e3")); // adult
console.log(isAdult2()); // age must be filled

console.log("===New Checks In Age:==="); 
console.log(isAdult2(18.5)); // Please Don't Use Decimal Numbers 
console.log(isAdult2(Infinity)); 
console.log(isAdult2(123)); // Please Select Age from 0 to 120

console.log(Number("0x12")); // uper is ka adult a raha tha to main ne check kia to neache is ka output 18 a raha ha is lia adult sahi ha 
console.log(Number("1e3")); // is string ko agar number main convert kare to 1000 ata ha is lia yaha per adult ai ga uper 