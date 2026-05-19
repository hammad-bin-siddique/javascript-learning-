// Analogy: Socho tumhare phone mein ek calendar + clock built-in hai. Tum uss se pooch sakte ho — "aaj kaunsa din hai?", "abhi kya time hai?", "kitne din baad Eid hai?"
// JavaScript ka Date object bilkul aisa hi hai — ek built-in calendar + clock.


let today = new Date();
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getDay() + 1);
console.log(today.getTime());
console.log(today.getMonth() + 1);
console.log(today.getMinutes());
console.log(today.getHours());


// ⭐ Real Life Examples

//! Example 1 — Aaj ki date print karo properly:

let thisDay = new Date();
let day = thisDay.getDate();
let month = thisDay.getMonth() + 1;
let year = thisDay.getFullYear();
console.log(`${day} / ${month} / ${year}`);


// Example 2 — Konsa weekday hai aaj?

let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Today is: ${days[now.getDay()]}`);


// ! Example 3 — Apni age calculate karo:

let birthYear = 2003;
let thisDaay = new Date();
let age = thisDaay.getFullYear() - birthYear;
console.log(`My Age is ${age}`);