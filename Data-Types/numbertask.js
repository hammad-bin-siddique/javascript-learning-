// ! TASK One
// - Apni umar aur apne ghar ke total members
//   dono variables mein rakho
// - Sum, difference, multiply, divide print karo
// - Remainder (%) bhi print karo

let age = 23;
let familyMember = 8;
let difference = Math.abs(age - familyMember);
console.log(`Addition is: ${age + familyMember}`); // addition
console.log(`Subtraction is: ${age - familyMember}`); // Subtraction
console.log(`Multiply is: ${age * familyMember}`); // mulitply
console.log(`Divide is: ${(age / familyMember).toFixed(2)}`); // divide
console.log(`Reminder is: ${age % familyMember}`); // reminder
console.log(`in main ${difference} ka difference ha`); // Difference through abs

// ! TASK Two

//- 3 items ki price rakho (decimal mein)
//- Total price nikalo
//- toFixed(2) se print karo
//- Sab se mahenga aur sab se sasta bhi print karo

let item1 = 459.48593;
let item2 = 589.24902;
let item3 = 294.3945;
let totalPrice = item1 + item2 + item3;
console.log(`sab se mehnga ${Math.max(item1, item2, item3).toFixed(2)} ha`); // Max Price
console.log(`sab se sasta ${Math.min(item1, item2, item3).toFixed(2)} ha`); // min Price
console.log(`Total Price: ${totalPrice.toFixed(2)} Ha`); // Total Price

//! TASK 3

//- 6 digit OTP generate karo
//- 1 se 50 ke beech lucky number nikalo
//- Dono template literal mein print karo

let otp = Math.floor(Math.random() * 900000) + 100000;
let luckyDraw = Math.floor(Math.random() * 50) + 1;
console.log(`OTP is: ${otp}`);
console.log(`Lucky Draw Number: ${luckyDraw}`);

// ! TASK 4

//- 2 players → Hammad aur Ali
//- Dono ke liye random dice roll karo
//- Sab se zyada wala print karo

let hammadDice = Math.floor(Math.random() * 6) + 1;
let aliDice = Math.floor(Math.random() * 6) + 1;

console.log(`Hammad Dice: ${hammadDice}`);
console.log(`Ali Dice: ${aliDice}`);
console.log(`The Winner is ${Math.max(hammadDice, aliDice)}`);
