// 📌 Map ki Definition

// Map ek aisa data structure hai jo key-value pairs store karta hai — bilkul Object ki tarah — lekin zyada powerful aur flexible hai.
// Map ek data structure hai jisme hum key-value pairs store karte hain — jahan key KUCH BHI ho sakti hai, insertion order maintain hota hai, aur data manage karne ke liye built-in methods milte hain.

//? 🔍 Object vs Map — 4 Bara Farq


//! Farq #1 — Key ki type

// object main key sirf string ya symbol ho sakti ha 
const obj = {}

obj[1] = 1; // yaha 1 string ban jai gi 
obj[true] = "yes" // yaha bolean bhi string bane gi "true" { '1': 1, true: 'yes' } string


console.log(obj);
console.log(typeof Object.keys(obj)[1]); // is ka typeof string ai ga but true ke uper quotes nahi ai ge 

// is ke baraks map main key koi bhi ho sakti ha 

const myMap = new Map();
myMap.set(1, "one");  // ye number rahe ge key
myMap.set(true, "Yes"); // ye boolean rahe gi key
myMap.set({a: 1}, "Object"); // ye object rahe gi 
console.log(myMap);

//? Object keys hamesha string banti hain. Map mein key apni original type rehti hai.


//! Farq #2 — Size

const obj2 = {
    name: "Hammad",
    age: 23
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
    3: "Hello"
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
console.log(map4.size);  // size zero ho ga 0



//! Prefilled Map — Seedha Data Dalna
// Haan bilkul! Map banate waqt seedha data de sakte ho!
// Syntax hai — array of arrays:

// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
//   [key3, value3]
// ])


const map5 = new Map(
    [
        //string
        ["Name", "Hammad"],
        // number
        [5, "ye key number ha"],
        // boolean
        [true, "ha ye boolean ha"],
        // object
        [{object: "object key"}, "Ye object ha"],
        //array
        [[1,4,"hello"], "Ha ye array ha"]

    ]
);

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

const key = {name: "Hammad siddique"};
maap.set(key, "Object ko key banaya");

const arr = [1,4, "Hello"];
maap.set(arr, "Array ko key banaya");

console.log(maap);
