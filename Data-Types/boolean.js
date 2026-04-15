/*
Real life analogy:
Socho ghar ka light switch — bas 2 positions hain:
Light switch        → on ya off
Door                → open ya closed
User logged in      → haan ya nahi
Internet connected  → haan ya nahi
Password correct    → haan ya nahi
Game over           → haan ya nahi */


// ! Password Condition
let password = "395rr9j";
if (password.length  <= 8){
console.log(`This Password is too short the password length is ${password.length} the password must be 8 characters`);
}
else{
    console.log(`Password is perfect`)
}
 

let age = 23;
if (age >= 18){
    console.log(`You are and adult`);
}
else{
    console.log(`You are a minor`);
}

let adultAge = 18;
console.log(adultAge >= 18); // True ha keuke ye 18 ke brabar ha 
console.log(adultAge >= 20); // False Kueke age 25 se kam ha 

let isUserLogedIn = false;
console.log(`User Loged in nahi ha is lia  ${isUserLogedIn} aya ha`);

//! JavaScript mein kuch values automatically false ki tarah behave karti hain:



console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean("Hammad"));   // true
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false


//! Real Life Example

let fullName = "Hammad";
let userPassword = "49595gj94g"
let userAge = 19;
console.log(`Fullname is: ${Boolean(fullName)}`);
console.log(`Password is short ${userPassword.length >= 12}`);
console.log(`User Age: ${userAge >=18}`);

