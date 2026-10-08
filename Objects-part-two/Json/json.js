/*JSON (JavaScript Object Notation) ek lightweight data format hai jो data ko text/string ki form mein represent karta hai — taake alag alag systems, languages aur applications aapas mein data share kar sakein.*/ 


//! JSON Ka Format Kaisa Hota Hai?
// JSON bilkul JS object jaisa dikhta hai — bas 2 farq hain:


//! Normal JS Object

// let student = {
//     name: "Hammad",
//     age: 23,
//     city: "Abbottabad"
// };


//! JSON (String format)

// '{"name":"Hammad","age":23,"city":"Abbottabad"}'

//! Farq:

// JSON mein keys pe double quotes "" lagte hain
// Poora JSON ek string hoti hai — isliye bahar single quote '' hai

//! Method 1 — JSON.stringify() — Object → String

let person = {
    name: "Hammad",
    age: 23,
    class: "BS Islamic Studies",
    rollNumber: "ISL 22:02",
    city: "Abbottabad"
};

console.log(typeof person);// is ka typeof object he ai ga 
console.log(person); // ye normal object print hua ha 

let jsonPerson = JSON.stringify(person);// Normal Object ko JSON string main convert kia 

console.log(typeof jsonPerson); // is ka typeof string ho ga ham ne JSON ke madad se data ko string main convert kar dia ha 

console.log(jsonPerson);// yaha keys bhi double quotes main ho gi keuke string ban gia ha 

//! Real Life Example — Game Score Save Karna:

let gameData = {
    game: "PUBG",
    player: "Hammad",
    playerId: 59582038,
    level: 72
};

console.log(typeof gameData, gameData);
let saved = JSON.stringify(gameData);
console.log(typeof saved, saved);

//! Method 2 — JSON.parse() — String → Object
// String ko wapas object mein badlo — taake use kar sako JS mein.

let jsonString = '{"name":"Hammad","class":16,"city":"Abbottabad"}';
console.log(typeof jsonString, jsonString); // ye ab json is lia string format main ho ga ab ise wapis object main convert karte hain 

let obj = JSON.parse(jsonString); // ab ise string se Object main convert kar dia ha
console.log(typeof obj, obj); // ab ye convert ho kar wapis object ban gia ha 

//! 1 Complete Object ko string main convert karna with nested objects and arrays

let bankSystem = {
    accountName: "Muhammad Hammad",
    accountHolder: "Muhammad Hammad Siddique",
    accountNumber: 5849398459384,
    balance: 14000,
    transactions: [1000,2000,5000,5999],
    branch: {
        location: "Abbottab, Supply",
        name: "HBL",
        code: 3840
    },
    isActive: true,
    accountType: "Current"
};

console.log(typeof bankSystem, bankSystem); // abhi object he ho ga 

// ! lets convert all the data into JSON String
let bankDetails = JSON.stringify(bankSystem,null,2);
console.log(typeof bankDetails, bankDetails); 

//! lets this string into object with JSON parse

let detailsParse = JSON.parse(bankDetails); // string se wapis object main convert kia 

console.log(typeof detailsParse, detailsParse);

console.log(`Balance is: ${detailsParse.balance} Branch Name is: ${detailsParse.branch.name}`); // ab balance or branch name print kia 