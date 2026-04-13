/* Formula:
 Math.floor(Math.random() * MAX) + MIN 
Pehle Samjho — Yeh Kya Karta Hai?
javascriptconsole.log(Math.random());
Yeh har baar ek alag number deta hai — 0 se 1 ke beech:
0.7382...
0.1234...
0.9876...
0.0012...
2 Important Baatein:
1. Hamesha 0 se 1 ke beech aata hai
2. 0 aa sakta hai — lekin 1 kabhi nahi aata*/


// ! Dice Using this Math Object


let dice = Math.floor(Math.random() * 6) + 1;
console.log(`Dice Number is ${dice}`);

//! real life use case otp

let otp = Math.floor(Math.random() * 900000) + 100000;
console.log(`Your OTP: ${otp}`);

//! Luck Draw 
let luckyDraw = Math.floor(Math.random() * 90) + 1;
console.log(`The Luck Number is:${luckyDraw}`);
