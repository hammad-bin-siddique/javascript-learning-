//! 1 — Student Card
/*Apna ek student card banao variables se:
- name (tumhara naam)
- age (tumhari age)
- city (tumhara sheher)
- isStudent (boolean)
- marks (number with decimal) */

const studentName = "Hammad Siddique";
const age = 23;
const city = "Abbottabad";
const isStudent = true;
let marks = 550.9034;
console.table([studentName,age,city,isStudent,marks .toFixed(2)]);


//! 2 — Scope Test
/*Ek function banao jiske andar ek variable ho
Bahar se us variable ko access karne ki 
koshish karo — error comment mein likho */


function myVar(){
    let myName = "Hammad";
    console.log(myName);
}
myVar();

// console.log(myName); /*! ReferenceError: myName is not defined keuke variable function ke andar store hua ha bahir us ko acess nahi */

//! 3 — String Operations
/*Ek string banao:
"  javascript is awesome  "
- Trim karo
- Uppercase karo
- Template literal se print karo:
  "My language: JAVASCRIPT IS AWESOME" */

  let myLanguage = "    Javascript is awesome   "
  console.log(`My Language: ${myLanguage .trim().toUpperCase()}`);


// ! 4 Boolean Check

// Apni age se yeh check karo:
// - Kya tum 18 se bade ho? (true/false)
// - Kya tumhari age === "20" hai? (strict check)
// - Dono results print karo with explanation

let myAge = 23;
console.log(myAge > 18); // true ai ga 18 se bara ho
console.log(myAge === 20); // false ai ga 20 nahi ha 23 ha 
