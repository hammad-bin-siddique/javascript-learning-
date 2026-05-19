//! Task 1 — Aaj Ki Poori Date Print Karo

let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

console.log(`Today is: ${day}/${month}/${year}`);


//! Task 2 — Konsa Weekday Hai Aaj
let aaj = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Today is ${days[aaj.getDay()]}`);

//! Task 3 — Apni Age Nikalo

let birthYear = 2003;
let thisDay = new Date();
let age = thisDay.getFullYear() - birthYear;
console.log(`My Age is: ${age}`);

//! Task 4 — Good Morning / Good Afternoon / Good Night


let hour = new Date().getHours();

if (hour < 12){
    console.log("Good Morning!");
}
else if (hour < 17) {
    console.log("Good Afternoon!");
}
else if (hour < 21) {
    console.log("Good Evening!");
}
else {
    console.log("Good Night!");
    
}