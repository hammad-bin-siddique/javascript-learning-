//! 📌 Set ki definition

// Set ek aisi collection hai jisme har value UNIQUE hoti hai — duplicates allowed nahi hain.

//? Array mein same value baar baar ho sakti hai:

let arr = [1,3,4,3,2,2,1,21,2,1,3,3];
console.log(arr); // yaha ye sab print ho ge chaia values same same he keun naw ho 

//? Set mein nahi hogi:

let mySet = new Set([1,2,1,3,2,3,2,4,5,3,6,7,5,4]); // yaha dublicate values ignore hoti ha i mean ke double value use nahi hoti chaia jitni he keun naw repeat nahi ho gi 

console.log(mySet);

// ⚠️ Ek important baat
// Set mein tum index se value access nahi kar sakte:

console.log(mySet[0]); // undefined ai ga 
// Array ki tarah mySet[0] nahi hota. Set sirf loop ya methods se use hota hai.


//! 💡 Set kab use karna chahiye?
// Jab tumhare paas ek list ho aur tum chahte ho ke koi value repeat na ho.
// Real-life examples:

// Online exam mein roll numbers — ek hi student do baar register na kare
// Visited pages browser history mein — same URL baar baar na aaye
// Tags kisi post pe — same tag do baar na lage

//! 📦 Topic 2: Set Banana — new Set()

//? 📌 Tarika 1 — Khali Set banana


let myNewSet = new Set();
console.log(myNewSet);

//? 📌 Tarika 2 — Values ke saath Set banana

const fruit = new Set(["Apple", "apple", "banana","peach", "lemon"]);
console.log(fruit); // yaha apple 2 bar ha lekin phir bhi 2 bar print ho ga keuke case sensitive ha 1 main A capital or 1 main a small is lia ye unique mane ja rahe hain 

//? 📌 Tarika 3 — Numbers ka Set

let nums = new Set([1,2,3,4,3,2,4,2,5,6,7,4,6,5,7,8,8,9,7,9]); 
console.log(nums); // repeated value ignore ho jai ge 

//? 📌 Tarika 3 — Numbers ka Set

let names = new Set(["Hammad", "Ali", "Hammad", "Fahad", "Umer"]);
console.log(names);

//? 📌 Tarika 5 — Array se Set banana
// Yeh bahut common pattern hai real projects mein:

let newArr = [1,2,1,2,3,2,3,4,10,30,10,20,20,];

let arrToSet = new Set(newArr);
console.log(arrToSet);

// ⚠️ Important — Set new keyword se banta hai
// new keyword zaroori hai — warna JavaScript error dega.

//? ⚠️ Important — Set mein mixed values bhi ho sakti hain

let mixedSet = new Set([1, "hello", true, "1", "Pakistan", "Umair", 1, 30]);
console.log(mixedSet); // yaha dono 1 print ho ge keuke 1 number ha or dosra string ha unique ha is lia 

//? ⚠️ Important — size property
// Array mein hum length use karte hain — Set mein size use hota hai:

console.log(`Mixed Set Size ${mixedSet.size}`); // 7 ai ga

//! Task One 

let cities = new Set(["Karachi", "Lahore", "Islamabad", "Karachi", "Lahore"]);
console.log(cities);
console.log(cities.size); // 3 ai ga keuke 2 value same he hain set main sirf unique value print hoti hain

//! Task Two

const arrTwo = [5,5,10,10,15,15,20];
// ab is array ko set mian convert kare ge 
console.log(arrTwo); // ye array ha yaha repeated value bhi print ho gi 
const  arrSet = new Set(arrTwo);
console.log(arrSet);  // is ko set main convert kia ab repeated values print nahi ho gi

//! Task Three

const newSet = new Set([true, false, true, true, false]);
console.log(newSet.size);