//- Ek variable banao → isRaining = true
//- Ek variable banao → hasUmbrella = false
//- Dono print karo
//- Dono ka typeof print karo

let isRaining = true;
let hasUmbrella = false;
console.log(typeof isRaining, isRaining);
console.log(typeof hasUmbrella, hasUmbrella);

//- Apni umar rakho
//- Check karo:
// → 18 se bada hai?
//→ 30 se chota hai?
// → 23 ke barabar hai?
//- Teeno ka result print karo

let myAge = 20;
console.log(`Meri Age 18 se ziada ha ${myAge > 18}`); //true keuke 19 ha
console.log(`Meri age 30 se kam ha ${myAge < 30}`); // true keuke 30 se kam ha
console.log(`Meri age 23 ke brabar ha ${myAge == 23}`); // false keuke 23 ke brabar nahi ha


/*- Yeh values ka Boolean() nikalo
  → 0
  → "hello"
  → ""
  → 100
  → undefined
- Pehle KHUD SOCHO kya aayega — phir run karo!*/

console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));  // false
console.log(Boolean(100)); // true
console.log(Boolean(undefined)); // false

/* - username = "Hammad"
- balance = 0
- isLoggedIn = true
- Teen cheezein check karo:
  → username hai? (Boolean use karo)
  → balance available hai? (Boolean use karo)
  → user logged in hai?
- Template literal mein print karo*/

let userName = "Hammad Siddique"
let balance = 0;
let isLoggedIn = true;
console.log(Boolean(userName));
console.log(Boolean(balance));
console.log(Boolean(isLoggedIn));
console.log(`Username ${userName} ha balance ${balance} ha or user logged in ${isLoggedIn} ha`);