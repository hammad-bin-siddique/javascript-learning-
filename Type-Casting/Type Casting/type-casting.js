//! Type Casting kya hoti hai JavaScript mein?
// Isko simply samjho:

// JavaScript mein har value ka ek type hota hai — jaise "25" ek String hai, 25 ek Number hai.
// Jab hum ek type ki value ko doosre type mein badaltay hain — toh iss process ko kehte hain Type Casting.

// example:

let age = "25"; // ab ye string ha 
console.log(typeof age, age);
let convertedAge = Number(age); // abhi is ko type casting ke zaria number main convert kar dia ha 
console.log(typeof convertedAge, convertedAge);

let name = "Fahad"; // ye string ha 
console.log(typeof name, name); // yaha ye string he ho ga type of or value Fahad 
let nameNumber = Number(name); // yaha ham ne ise number main convert kar dia ha 
console.log(typeof nameNumber, nameNumber); // ab yaha type of number ho ga but value Nan ho gi