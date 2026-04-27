//! Arrays Built-in Object Ke Tor Pe:
// Jab hum kehte hain Array as Built-in Object — iska matlab hai:

// JavaScript ne kuch ready-made methods diye hain jo har array pe automatically available hote hain — tumhein khud banana nahi padte.

//! Array Built-in Methods

//! 1️⃣ push() — End Mein Add Karo

let cities = ["Karachi", "Lahore", "Peshawar",];
cities.push("Abbottabad"); // abhi main ne add kia abbottabad end main 
console.log(cities); // ab yaha end main abbottabad bhi ho ga 

// Ek important baat — push() ek value return karta hai — naya length!

let totalLength = cities.push("Malakand");
console.log(typeof totalLength, totalLength); // return karta hai → naya LENGTH 
console.log(cities);

//! 2️⃣ pop() — End Se Hatao

let remove = cities.pop();
console.log(remove); // ab sirf yaha whi ai ga jo last se hata ha 
console.log(cities); // yaha ab 4 he show ho ge malakan hat gia 

//! 3️⃣ unshift() — Start Mein Add Karo
cities.unshift("Ziarat"); // unshift array ke start main add karta ha 
console.log(cities);  // ziarat start main show ho ga 

// push()    → end mein daalo
// unshift() → start mein daalo

//! 4️⃣ shift() — Start Se Hatao

let removed = cities.shift();
console.log(removed); // ab start se ziarat remove ho gia wo show ho ga 
console.log(cities); // yaha abhi ziarat show nahi ho ga wo remove ho gia ha 

//! 5️⃣ length — Kitne Elements Hain

console.log(cities.length); // ye batai ga ke array main kitni values hain 

//? Yeh method nahi, property hai — isliye () nahi lagti!  

//! 6️⃣ indexOf() — Kahan Hai Element

let fruits = ["Apple", "Mango", "Banana", "Melon", "Pineapple"];

console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Pineapple"));
console.log(fruits.indexOf("Grapes"));  //?-1 matlab — element exist nahi karta!

//1 7️⃣ includes() — Exist Karta Hai?
console.log(fruits.includes("Mango")); // jo ho ga true batai ga 
console.log(fruits.includes("Grapes")); // jo nahi ho ga false batai ga 

// indexOf()  → position batata hai (number return)
// includes() → sirf haan/naa batata hai (boolean return)