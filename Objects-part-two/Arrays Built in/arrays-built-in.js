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

//! 🔟 reverse() — Ulta Karo
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


//! 13. forEach()

// Socho tumhare paas 5 students ki list hai — aur tumhe har ek ka naam board pe likhna hai.
// Tum ek ek karke uthoge — likhoge — agla uthoge.
// Yahi forEach karta hai — array ke har element pe ek ek karke kaam karta hai.

let myFamily = ["Fahad", "Sara", "Friha", "Faizan"];

myFamily.forEach(function(myFamily) {
    console.log(myFamily);
});

//? Doosra Example — Index Ke Saath

myFamily.forEach(function(myFamily, index) {
    console.log(`${index + 1}: ${myFamily}`);
});

//? Teesra Example — Objects Array Pe

const mainProduct = [
    {name: "Shirt", price: 233.33},
    {name: "Pant", price: 500.99},
    {name: "Jeans", price: 900.99}
];

mainProduct.forEach(function(mainProduct, index) {
    console.log(`${index + 1}: Product Name: ${mainProduct.name} Price: ${mainProduct.price}`);
});


//? Sabse Zaroori Baat — forEach Return Nahi Karta!

let nums = [1,2,3];
let results = nums.forEach(function(n) {
    return n * 3;
});
console.log(results); // undefined!


// forEach sirf kaam karta hai — kuch deta nahi wapas
// Jaise tumne board pe likha — board ne tumhe kuch nahi diya wapas!

//!  14 map() — Transform Karo, Naya Array Lo

// Socho tumhare paas kachcha aam ka dabba hai — tum har aam ko pakka karte ho aur naye dabbe mein rakhte ho.
// Purana dabba same rehta hai — naya dabba milta hai!

// forEach se Farq — Yeh Samjho!
// forEach  →  kaam karta hai, kuch return nahi karta
// map      →  kaam karta hai + NAYA ARRAY return karta hai

let mark = [90, 70, 80, 68,95];

let newMarks = mark.map(function(mark, index) {
    console.log(`${index + 1} : ${mark + 5}`);
    return mark + 5;
    
});
console.log(mark);
console.log(newMarks);

//? Doosra Example — String Transform

let friends = ["Ali", "Haris", "Sara"];
let upperFriends = friends.map(function(x){

    return x.toUpperCase();
});
console.log(friends);
console.log(upperFriends);

//? Teesra Example — Objects Se Sirf Naam Nikalo

let names = mainProduct.map(function(name) {
    return name.name;
});
console.log(names); // ye main ne main product uper se uthaya ha for each wali example se 

//? Chautha Example — Object Transform
 
let favFruits = [
    {name: "Mango", price: 500},
    {name: "Banana", price: 499},
    {name: "Peach", price: 999}
];

// 10 percent Discount 

let discountPrice = favFruits.map(function(fruits) {
    return {
        name: fruits.name,
        price: fruits.price * 0.9
    };
});
console.log(favFruits); // Original Price 
console.log(discountPrice); // Discounted Price


//! 15. filter() — Chhanno!

// Kya Hota Hai?
// Socho chawal chhan rahe ho — kankad alag, chawal alag.
// filter() wahi chalni hai — jo condition pass kare woh rakho, baaki phenko.


//? Pehla Example — Numbers Filter

let ages = [12,18,20,39,25,21,15,16,34];

let adults = ages.filter(function(age) {
    return age >= 18;
});
console.log(adults); // 18 se uper wale add ho ge 
console.log(ages); // yaha sab print ho ge 

//? Doosra Example — String Filter


let favNames = ["Ali", "Ahad", "Fahad", "Fizza", "Ahsan", "Faizan"];
 // sirf f name se start hone wale selct karo 
 let fNames = favNames.filter(function(name) {
    return name.startsWith("F");
 });
 console.log(fNames);
 // sirf A se start hone wale name select karo 

 let aNames = favNames.filter(function(name) {
    return name.startsWith("A");
 });
 console.log(aNames);

 console.log(favNames);

//?  Teesra Example — Objects Filter

let topStudents = [
    {name: "Fahad", marks: 80, city: "Abbottabad"},
    {name: "Ali", marks: 70, city: "Lahore"},
    {name: "Momina", marks: 50, city: "Peshawer"},
    {name: "Farhan", marks: 40, city: "Manshera"}
];

let passedStudent = topStudents.filter(function(pass) {
    return pass.marks >= 60;
});
console.log(passedStudent);

//? map + filter Saath

let bestStudent = [
    {name: "Fahad", marks: 79},
    {name: "Umair", marks: 90},
    {name: "Maqsood", marks: 80},
    {name: "Farhan", marks: 60}
];
let topNames = bestStudent.filter(function(s){
    return s.marks >= 80; // 80 or 90 ai ge
})
.map(function(s) {
    return `${s.name}: ${s.marks}`; // maqsood or umair ai ge with number 
});
console.log(topNames);


//! 16. sort() — Terteeb Lagao

// Kya Hota Hai?
// Socho tumhari almari mein kapray ulte seedhe pade hain — tum unhe size ke hisaab se lagaate ho.
// sort() wahi kaam karta hai — array ko order mein lagata hai.

//? Strings Sort — Simple

let bestFriends = ["ALi", "Hassan", "Usama", "Ahmad", "Fahad", "Hamza"];
bestFriends.sort(); // ye alphabatically sort ho jate hain simply
console.log(bestFriends);


//? Numbers Sort — TRAP! ⚠️

let studentNums = [10, 100, 20, 22, 30, 59, 49, 39, 50];
studentNums.sort();
console.log(studentNums); // wrong ai ga wo 1 se start kare ga to 10 100 phir so on jo ke sahi nahi ha

// sort() default mein sab kuch string samajhta hai!
// "10" aur "2" string mein compare karo — "1" comes before "2" — toh 10 pehle!

// Numbers Sort — Sahi Tarika

// Acending chote se bare ke taraf
studentNums.sort(function(x, y){
    return x - y;
});
console.log(studentNums); //10 20 22 30 39 49 50 59 100

// Decending bare se chota 
studentNums.sort(function(x, y) {
    return y - x;
});
console.log(studentNums); // 100 59 50 49 39 30 22 20 10

// a - b  →  Ascending  (chota pehle)
// b - a  →  Descending (bara pehle)

// Bas yeh 2 cheezein yaad rakho!
// Naam kuch bhi do — logic same rehta hai!


//? Objects Sort — Marks Ke Hisaab Se

const studentData = [
    {name: "Fiza", marks: 90},
    {name: "Laiba", marks: 50},
    {name: "Hammad", marks: 97},
    {name: "Maryam", marks: 60},
    {name: "Maria", marks: 80}
];

// chote se bare ke taraf

studentData.sort(function(x, y) {
    return x.marks - y.marks;
});
console.log(studentData);

// bare se chote ke taraf 

studentData.sort(function(x, y) {
    return y.marks - x.marks;
});
console.log(studentData);

//? Sort Original Array Badal Deta Hai — Yaad Rakho!

let original = [1,4,6,9,3];
// let sorted =  original.sort(function(x,y){
//     return x - y;
//  });   //? ye dono ab same he ho jai ge ham ne referance nahi lia balke direct orignal ko copy kia sai way neache likhta ho 
// console.log(original);  
// console.log(sorted); 

let sortedd = [...original].sort(function(x, y) {
    return x - y;
});
console.log(original); // ab orignal same rahe ga 
console.log(sortedd); // or ye change ho ga

//! 17. reduce() — Sab Milao, Ek Value Lo

// Kya Hota Hai?
// Socho tumhare paas 5 dost hain — har dost ke paas kuch rupay hain. Tum sabke rupay ek jaga jamaa karte ho — aakhir mein total milta hai.
// reduce() wahi kaam karta hai — array ke saare elements ko milata hai aur ek value deta hai.


// Syntax Samjho

//? array.reduce(function(accumulator, currentValue) {
//?     return accumulator + currentValue;
//? }, startingValue);

// accumulator  →  running total (jama hua amount)
// currentValue →  abhi wala element
// startingValue → shuru mein accumulator ki value


let examMarks = [50, 100, 500, 300, 85, 90,94];

let totalMarks = examMarks.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(totalMarks);


//? Doosra Example — Shopping Cart Total

let cart = [
    {item: "Shirt", price: 1200},
    {item: "Jeans", price: 2500},
    {item: "Laptop", price: 50000},
    {item: "Iphone", price: 140000}
];

let cartTotal = cart.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.price;
}, 0);
console.log(`Total RS: ${cartTotal}`);


//? Teesra Example — Maximum Value Dhundho

let numberss = [23, 595, 25, 569, 91, 9639, 95, 6];
let maxNum = numberss.reduce(function(accumulator, currentValue){
    return currentValue > accumulator ? currentValue : accumulator;
}, 0);

console.log(`Max Num is ${maxNum}`);



// forEach  →  Har element pe kaam karo
//              Return nahi karta
//              Use: print, display, side effects

// map      →  Har element transform karo
//              NAYA array return karta hai
//              Use: data badalna, nikalna

// filter   →  Condition se chhanno
//              NAYA array return karta hai (sirf matching)
//              Use: specific data nikalna

// sort     →  Terteeb lagao
//              ORIGINAL array badalta hai
//              Strings: seedha, Numbers: (a,b) => a-b

// reduce   →  Sab milao ek value mein
//              Single value return karta hai
//              Use: total, max, min, count

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