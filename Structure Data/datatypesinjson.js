//! Topic 6: JSON Supported vs Unsupported Data Types

// is topic main cover kare ge ke json kn kn se data types accept karta ha

//? JSON Sirf In 6 Types Ko Support Karta Hai:
// String — "Hammad"
// Number — 23, 9.5
// Boolean — true, false
// null
// Object — { }
// Array — [ ]

//! Kn kn se cases ko Json accept nahi karta ha

//? Case 1 Undefined

const typeUndefined = { name: "Hammad", age: undefined };
console.log("===Case 1 undefiend in Object===");
console.log(JSON.stringify(typeUndefined)); // yaha age key  puri tara gaib ho gai hain json ne age key ko hide kar dia ha

//? lekin agar array ke andar undefined ho ga to wo null se change ho jai ga keuke array main index based hota ha or beach main se nikal nahi sakte hain is lia undefined ko null se change kar de ge

const arr = ["Hammad", undefined, "Bilal"];

console.log("===Case 1 undefined in Arrays===");
console.log(JSON.stringify(arr)); // Hammad null Bilal

//? Case 2 Functions

const objFun = {
  name: "Hammad Siddqiue",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
objFun.greet();

console.log("===Case 2 Fucntion===");
console.log(JSON.stringify(objFun)); // Function bhi Json main convert karte waqt puri tara gaib ho jai ga

//? Case 3 Symbol

const objSym = { name: "Muhammad Hammad", id: Symbol("Hello") };

console.log(objSym);
console.log("===Case 3 Symbol===");
console.log(JSON.stringify(objSym)); // symbol bhi hide kar de ga json cuz symbol js ka apna unique identifier ha

//? Case 4 Data

const objDate = { name: "Fahad", joined: new Date() };

console.log(objDate);

console.log("===Case 4 Date===");

console.log(JSON.stringify(objDate)); // Date hide to nahi hoti but ye string main convert ho jati ha

//? Task

const data = {
  name: "Hammad",
  score: NaN,
  city: undefined,
  sayHi: function () {
    console.log(`Hi ${this.name}`);
  },
  createdAt: new Date("2023-02-03"),
  tags: ["js", undefined, "learner"],
};

console.log(JSON.stringify(data)); // Name Hammad , socre nan ke bajai null ho jai ga city bhi hide ho ga function bhi hide ho ga created at main new date string main convert ho jai ge or tags main undefined null mian convert ho jai ga

//! ## JSON Stringify — Data Types Summary

// | Data Type      | Object ke andar              | Array ke andar        |
// |-----------------|-------------------------------|-------------------------|
// | undefined        | Key hi gayab ho jati hai      | null ban jata hai       |
// | Function          | Key hi gayab ho jati hai      | null ban jata hai       |
// | Symbol             | Key hi gayab ho jati hai      | null ban jata hai       |
// | Date                | ISO String ban jata hai        | ISO String ban jata hai |
// | NaN / Infinity  | null ban jata hai               | null ban jata hai       |
