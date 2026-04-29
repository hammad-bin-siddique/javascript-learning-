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

//! 7️⃣ includes() — Exist Karta Hai?
console.log(fruits.includes("Mango")); // jo ho ga true batai ga 
console.log(fruits.includes("Grapes")); // jo nahi ho ga false batai ga 

// indexOf()  → position batata hai (number return)
// includes() → sirf haan/naa batata hai (boolean return)

//! 8️⃣ splice() — Beech Mein Add/Remove Karo
// Yeh thoda powerful method hai — 3 kaam karta hai:

// array.splice(startIndex, deleteCount, ...itemsToAdd)

// Sirf Remove Karo:

let vegetables = ["Cucumbar", "Onion", "Coliflower", "Ginger"];
vegetables.splice(2,2);

/* ab yaha first number index ko denote karta ha wo 2 ha mean ke onion se or agla number remove 
jitna karna ha us ko denote karta ha mean ke ab onion ke bad se remove ho ge */

console.log(vegetables);

//! Sirf Add Karo:

let playerNames = ["Babar Azam", "Fakhar Zaman"];
playerNames.splice(2,0,"Faheem", "Amir"); 
/* ab yaha par main ne 2 ke bad 2 name add kia mean ke ab total 4 show ho ge faheem or amir fakhar zaman ke bad ho ge */
console.log(playerNames);

//! Remove Bhi, Add Bhi:

let actors = ["Micheal Scofield", "Jack Reacher", "John Snow", "Arsin Lupin"];
actors.splice(3,1,"Murphy"); 

/* acha abhi main ne index 3 se start kia mean ke john snow ke bad or 1 remove kia to lupin remove ho 3 ke bad wo ha or us ke jaga new ai ga murphy meanke 3 kam 1 sath ho gay hain */

console.log(actors);

//! 9️⃣ slice() — Copy Nikalo

// array.slice(startIndex, endIndex)
// endIndex include nahi hota!

let webSeries = ["Prison Break", "Game of Thrones","The Vikings", "Breaking Bad"];
console.log(webSeries.slice(0,3)); // prison break se viking tak copy nikale ga
console.log(webSeries.slice(2)); // got ke age se end tak 
console.log(webSeries.slice(-1)); // last wali ki copy nikale ga BB
console.log(webSeries); // apni orignal halat per wapis ai ga

//! Original array change nahi hota — sirf copy milti hai!
//? splice() → original array change karta hai
//? slice()  → original array same rehta hai, copy deta hai

// 🔟 reverse() — Ulta Karo
let num = [1,2,3,4,5,6];
num.reverse();
console.log(num); // ab ye 6 se count ho ge 
//! ⚠️ Yeh original array change kar deta hai!


//! 1️⃣1️⃣ join() — Array Ko String Banao

let words = ["My", "Name", "is", "Hammad"];

console.log(words.join(" ")); // Join with Space
console.log(words.join("-")); // join with hyphens
console.log(words.join("")); // join without any space or thing

//! 1️⃣2️⃣ concat() — Dono Arrays Jodo

let fruitAndVegetable = fruits.concat(vegetables); 
/*yaha main ne fruit or vegetable ko join kia jo ke main ne uper un 2 variables ke array banai hue hain  */

console.log(fruitAndVegetable); // ab yaha per fruits or vegetable dono combine ho gay hain

//! Original arrays change nahi hoti!


 // ADD karna
// arr.push("x")      // end mein
// arr.unshift("x")   // start mein

 // REMOVE karna
// arr.pop()          // end se
// arr.shift()        // start se

 // DHUNDHNA
// arr.indexOf("x")   // position (ya -1)
// arr.includes("x")  // true/false

 // KAAT-CHHAANT
// arr.splice(1,2)    // original change hota hai
// arr.slice(1,3)     // copy milti hai, original same

// arr.reverse()      // ulta karo
// arr.join("-")      // string banao
// arr.concat(arr2)   // jodo
// arr.flat()         // nested seedha karo
// arr.fill(0)        // fill karo
// Array.isArray(arr) // check karo