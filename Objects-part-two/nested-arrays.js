//! 1️⃣ flat() — Nested Array

// Pehle Samjho — Nested Array Kya Hoti Hai?
// Analogy: Socho ek dabba hai — us dabba ke andar chhote dabbe hain — aur un chhote dabbon ke andar aur chhote dabbe hain!

let school = [
    ["Hammad", "Ali", "Wasib"], //class 9th suppose
    ["Fahad", ["Asad", "Alina"],
     "Umer"], // class 10th
    ["Usama", "Sajid", "Umair"] // class 11th
];

console.log(school); // Without flat messy 
console.log(school.flat(1)); // sirf level one he sahi ho ga
console.log(school.flat(2)); // level two tak sahi ho ge
console.log(school.flat(Infinity));  // sab level sahi ho ge

//! 2️⃣ fill() — Value Se Fill Karo

let a = [1,2,3,4,5];
a.fill(5); // is ne array ko sirf 5 number se fill kar dia ha 
console.log(a);
// arr.fill(9, 2, 4);
//        ↑  ↑  ↑
//     value start end(exclude)

a.fill(54,0);
console.log(a);

//! 3️⃣ Array.isArray() — Kyun Zaroori Hai?

/*wese array ka typeof nikalo to object ata ha jo ke confusing ha but is se ham ye pata kar sakte hain ke ye array ha ya nahi  */

let arr = [1,2,3];
let obj = {name: "Hammad"};
let str = "hello";

console.log(Array.isArray(arr)); // true batai ga keuke ye array he ha
console.log(Array.isArray(obj));
console.log(Array.isArray(str)); // dono false batai ga keuke array nahi ha 1 object ha or 1 string
