//! Topic 2: Strict Equality (===)

//? 2. Formal Definition

// Strict Equality (===) do values ko compare karta hai bina type conversion (coercion) kiye. Result true tabhi aata hai jab type bhi same ho aur value bhi same ho. Warna false.

// Iska opposite !== (strict inequality) hai. Wo true deta hai jab === ka result false ho.

//? 3. Syntax Breakdown

// a === b     // true agar type same AUR value same
// a !== b     // true agar type alag YA value alag

//? 4. JavaScript andar se kaise decide karta hai? (Algorithm)

// Jab tum a === b likhte ho, JS yeh steps follow karta hai:

// Type alag hai? To false. Yahin khatam.
// Dono undefined hain? true.
// Dono null hain? true.
// Dono numbers hain?
// Koi bhi NaN hai to false.
// Warna value barabar hai to true. Yahan +0 === -0 bhi true hai.
// Dono strings hain? Har character same order mein same ho to true.
// Dono booleans hain? Dono true ya dono false to true.
// Dono objects/arrays/functions hain? Sirf tab true jab dono ek hi reference (memory ka ek hi address) ko point karein.

//? 5. Code Examples
console.log("===Strict Equality===");

console.log(5 === 5); // true  (number both value same as well)
console.log("Hammad" === "Hammad"); // true (String Both Chsracters Same)
console.log(true === true); // true

//? B Same value, alag type:

console.log(5 === "5"); // false (number vs string type isn't same)
console.log(0 === false); // false (number vs boolean type mismatched)
console.log("" === false); // false string vs boolean
console.log(1 === true); // false number vs boolean

//? C null aur undefined

console.log(null === undefined); // false type isn't same
console.log(undefined === undefined); // true same type
console.log(null === null); // true type same

//? D Special cases

console.log(NaN === NaN); // false  (NaN khud apne barabar bhi nahi!)
console.log(+0 === -0); // true
console.log(1 === 1n); // false  (number vs BigInt, type alag)

//? E Objects aur arrays

// console.log([] === []);     // false  (do alag arrays = do alag memory addresses)
// console.log({} === {});     // false

let a = [1, 2];
let b = a; // b ko wahi reference mila
console.log(a === b); // true   (dono ek hi array ko point kar rahe hain)

//? F !== ka use

console.log(5 !== "5"); // true keuke type dono ke alag ha or ye same nahi ha
console.log(5 !== 5); // false keuke type or value dono same ha or yaha ! experession ka mean ye ho gia ha ke 5 5 ke barabar nahi ha halake wo ha is lia false aya or uper wale main 5 5 ke brabar nahi tha

//? 7. Real-World Examples
// Example 1: Form input hamesha string hoti hai

let userAge = "18"; // input.value hamesha string hoti ha

if (userAge === 18) {
  console.log("Access Approved");
} else {
  console.log("Access Denied");
} // yaha per second condition chale keuke input string ha or ham ne 18 number se compare kia halake user ne 18 likha ha phir bhi access denied mile ga or ye bug ha

//! Solve this bug

if (Number(userAge) === 18) {
  console.log("Access Approved");
} else {
  console.log("Access Denied");
} // yaha per ham ne pehle khud string ko number main convert kia or phir strict compare kia

// Example 2: Login role check

let role = "admin";

if (role === "admin") {
  console.log("Open The Dashboard");
}

//? Comprehension Check (Predict-Before-Run)
console.log("===Predic Before Run===");

console.log(10 === 10); // true both type and value is same
console.log(10 === "10"); // false type mismatched
console.log("hello" === "Hello"); // false value not same case sensitive
console.log(true === 1); // false type's arn't same
console.log(null === undefined); // false type not same
console.log(null === null); // true type and value same
console.log(NaN === NaN); // false Nan hamesha false he ata ha chai Nan ke sath he compare karo
// console.log([1] === [1]);          //  false reference alag ha value beshak same ho
console.log("" === 0); //  false type isn't same
console.log(5 !== "5"); //  true cuz dono same nahi ha

let age = 25;
let age2 = "25";
console.log(age2 === age); // false cuz type is not same

console.log(Number(age2) === age); // true

//! Practice Tasks

//? Task 1: Predict
console.log("===Task One===");

//? Check with Loose Equality

console.log("0" == 0); // true coercion ho kar number bane ga or phir value match ho gi is lia true ai ga

console.log("" == 0); // again true
console.log(" " == 0); // true white space convert ho kar number 0 ban jai ga or true ho jai ga compare ho kar

console.log(null == 0); // false null sirf undefined ke sath true ata ha baki sab ke sath false he ata

console.log(false == "false"); // false ai ga keuke string number main convert nahi ho satka Nan bane ga is lia false

console.log("10" == "10.0"); // false yaha coercion nahi ho ga type same ha but dno ke character different ha is lia false ai ga

//? Check With Strict Equality
console.log("===Check With Strict Equality===");
console.log("0" === 0); // false type same nahi ha
console.log("" === 0); // false type isn't same
console.log(" " === 0); // false type isn't same
console.log(null === 0); // false type isn't same
console.log(false === "false"); // false type isn't same
console.log("10" === "10.0"); // false type same value didn't matched

//? Task Two  Bug dhoondo

console.log("===Task Two===");

// Yeh code chalata hai, lekin kabhi bhi "Welcome, admin" print nahi karta. Wajah dhoondo aur do alag tareeqon se theek karo.

let t2_roleFromForm = "1"; // dropdown ki value hamesha string hoti hai

switch (t2_roleFromForm) {
  case 1:
    console.log("Welcome, admin");
    break;
  case 2:
    console.log("Welcome, editor");
    break;
  default:
    console.log("Access denied");
}

// The real bug Welcome is lia print nahi hota ha keuke "1" string ha or case 1 number dia ha is lia wo match he nahi hota ha switch bhi strict hota ha === ke tara is lia welcome admin print nahi hota

//? Fix Way One

// case 1 ko bhi "1" kar do

switch (t2_roleFromForm) {
  case "1":
    console.log("Welcome, admin");
    break;
  case "2":
    console.log("Welcome, editor");
    break;
  default:
    console.log("Access denied");
}

//? Fix Way Two

// dropdown input ko Number main convert kar ke compare karo

switch (Number(t2_roleFromForm)) {
  case 1:
    console.log("Welcome, admin");
    break;
  case 2:
    console.log("Welcome, editor");
    break;
  default:
    console.log("Access denied");
}
