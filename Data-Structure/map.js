// 📌 Map ki Definition

// Map ek aisa data structure hai jo key-value pairs store karta hai — bilkul Object ki tarah — lekin zyada powerful aur flexible hai.
// Map ek data structure hai jisme hum key-value pairs store karte hain — jahan key KUCH BHI ho sakti hai, insertion order maintain hota hai, aur data manage karne ke liye built-in methods milte hain.

//? 🔍 Object vs Map — 4 Bara Farq

//! Farq #1 — Key ki type

// object main key sirf string ya symbol ho sakti ha
const obj = {};

obj[1] = 1; // yaha 1 string ban jai gi
obj[true] = "yes"; // yaha bolean bhi string bane gi "true" { '1': 1, true: 'yes' } string

console.log(obj);
console.log(typeof Object.keys(obj)[1]); // is ka typeof string ai ga but true ke uper quotes nahi ai ge

// is ke baraks map main key koi bhi ho sakti ha

const myMap = new Map();
myMap.set(1, "one"); // ye number rahe ge key
myMap.set(true, "Yes"); // ye boolean rahe gi key
myMap.set({ a: 1 }, "Object"); // ye object rahe gi
console.log(myMap);

//? Object keys hamesha string banti hain. Map mein key apni original type rehti hai.

//! Farq #2 — Size

const obj2 = {
  name: "Hammad",
  age: 23,
};

console.log(obj2.length); // undefined seedha nahi milta

const map2 = new Map();
map2.set("name", "Hammad");
map2.set("age", 23);
console.log(map2.size); // yaha undefined nahi ai ga balke size ai ga ke kitni entries hain or yaha 2 hain

//! Farq #3 — Order
// object main orderd guranteed nahi especially in numbers
const obj3 = {
  a: 1,
  b: 5,
  3: "Hello",
};
console.log(Object.keys(obj3)); // [ '3', 'a', 'b' ] ab yaha per 3 pehle le ai but ha wo last main
console.log(obj3); // { '3': 'Hello', a: 1, b: 5 }

// Map mein insertion order hamesha preserve hoti hai
const map3 = new Map();
map3.set("b", 2);
map3.set("a", 90);
map3.set(3, "hello");
console.log(map3);

//! Farq #4 — Performance
// Jab bohot zyada data baar baar add/remove karna ho — Map Object se faster hai. (Yeh advanced topic hai, abhi sirf yaad rakho)

//? 🗺️ Map — Topic 2: Map kaise banate hain?

//syntax
const map4 = new Map();

// new kyun lagaya?
// Yaad karo — Map ek built-in class hai JavaScript ki.
// Class se cheez banane ke liye new lagate hain
// Bina new ke likho toh error aayega:

console.log(map4); // empty map ban gia  Map(0) {}
console.log(map4.size); // size zero ho ga 0

//! Prefilled Map — Seedha Data Dalna
// Haan bilkul! Map banate waqt seedha data de sakte ho!
// Syntax hai — array of arrays:

// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
//   [key3, value3]
// ])

const map5 = new Map([
  //string
  ["Name", "Hammad"],
  // number
  [5, "ye key number ha"],
  // boolean
  [true, "ha ye boolean ha"],
  // object
  [{ object: "object key" }, "Ye object ha"],
  //array
  [[1, 4, "hello"], "Ha ye array ha"],
]);

console.log(map5);

//! .set() Se Bhi Yahi Types

const maap = new Map();

// string
maap.set("name", "Hammad");

//number
maap.set(2, "Ye Number key ha");

// boolean

maap.set(true, "Ye boolean key ha");

// object as a key

// object/array key save karni ho toh variable mein rakho:
// Kyun? Kyunki JavaScript mein do alag objects kabhi equal nahi hote — chahe andar same data ho!

const key = { name: "Hammad siddique" };
maap.set(key, "Object ko key banaya");

const arr = [1, 4, "Hello"];
maap.set(arr, "Array ko key banaya");

console.log(maap);

// Ab Karo Yeh Task
// Ek prefilled Map banao jisme ho:

// String key: "country" → "Pakistan"
// Number key: 1 → "ek"
// Boolean key: false → "jhoot"
// Object key: pehle variable mein rakho const user = { name: "Ali" } phir key banao

const user = { name: "Ali" };

const map6 = new Map([
  ["country", "Pakistan"],
  [1, "ek"],
  [false, "jhoot"],
  [user, "object"],
]);

console.log(map6);

//! 🗺️ Topic 3 — .set()

//? Syntax
// myMap.set(key, value)

//? #1 — Naya Data Daalna

const myMap1 = new Map();
myMap1.set("name", "Danial");
myMap1.set("city", "Chakwal");
myMap1.set("age", 23);

console.log(myMap1);

//?  #2 — Purana Data Update Karna

myMap1.set("name", "Hammad"); // ab name main hammad ho ga

console.log(myMap1); // ab danial ke jaga hammad ho ga

// Yaad rakho — same key dobara doge toh nai entry nahi banegi — sirf value update hogi!

//? #3 — Chaining

const myMap2 = new Map();

// alag alag line main

myMap2.set("name", "Umer");
myMap2.set("city", "Abbottabad");
myMap2.set("age", 23);

// Ya ek saath chain mein — dono same kaam karte hain!

myMap2.set("name", "Umer")
.set("city", "Abbottabad")
.set("age", 23);

// Kyun chain hota hai? Kyunki .set() kaam karne ke baad Map ko wapas return karta hai — isliye us pe dobara .set() laga sakte hain!


console.log(myMap2);
console.log(myMap2.size);


// task

const myMap3 = new Map();
myMap3.set("username", "hammad123")
.set("score", 100)
.set("active", true)
.set("username", "ali456"); // username hammad se change ho jai ga keuke same key name ha or pehle wale ko overwrite kar de ga 
console.log(myMap3);
console.log(myMap3.size);


//! 🗺️ Topic 4 — .get()

//? 1️⃣ Basic — Value Nikalna  


const myMap4 = new Map();

myMap4.set("accountNumber", 3848120848);
myMap4.set("accountName", "Muhammad Hammad Siddique");
myMap4.set("isActive", true);
myMap4.set("accountBalance", 23488);

console.log(myMap4.get("accountNumber")); // ye map main keys ke values nikalne ke lia use hota ha 

//? 2️⃣ Object Key Se Value Nikalna

myMap4.set({"b": 394}, "Kpk");
console.log(myMap4.get({"b": 394})); // undefined ai ga 
// Kyun? Kyunki yeh NAYA object hai — alag hai memory mein!

// ✅ Variable mein rakho sahi way ha 

const branch = {"branch": "name"}; // variable banaya us ke andar object ko rakha
myMap4.set(branch, "Bank Al Habib");
console.log(myMap4.get(branch)); // ab yaha per branch name ai ga keuke ab ye alada object nahi ha 

//? 3️⃣ Key Na Mile Toh — undefined

console.log(myMap4.get("transactions")); // undefined ai ga keuke ye key exist he nahi  karti 






