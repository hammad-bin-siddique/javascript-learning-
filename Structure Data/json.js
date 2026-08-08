//! JSON — Topic 1:


// JSON (JavaScript Object Notation) is a lightweight, text-based data format used to store and exchange data between different systems, regardless of the programming language they use.

// It looks similar to a JavaScript object, but it is actually just a string — not a live, usable object in memory.

// Key rules of JSON syntax:

// All keys must be wrapped in double quotes ("key"), never single quotes or no quotes.
// Values can be strings, numbers, booleans, arrays, objects, or null — but not functions, undefined, or Symbol.
// No comments are allowed inside JSON.
// No trailing commas are allowed after the last property.
// JSON itself is just a string of text — to use it as data in JavaScript, it must be converted into a real object first.

// Why it exists: Since every programming language has its own internal object structure (JS objects, Python dictionaries, Java objects, etc.), there needed to be one universal, language-independent format that any system could read and write. That's JSON — it acts as a common bridge for transferring data between servers, APIs, files, and applications written in different languages.



//! Examples 

//? JS object Example 
 
// ye 1 javascript obejct ha memory main live object
const student = {
    name: "Hammad",
    age: 23,
    isStudent: true
};

// is main keys ko bina quotes ke bhi likh sakte hain is ke ilawa is main single quotes bhi allowed hain or is ka typeof object ha 

console.log(typeof student); // object


//? JSON

// ye json ha is main agar ham js file main likhe ge to outer quotes ke andar wrap kare ge or is main keys per double quotes hote hain single not allowed or is ke ilawa is ka typeof string ho ga object nahi 

const studentJson = '{"name": "Hammad", "age": 22, "isStudent": true}';

console.log(typeof studentJson); // string


// ===========================================
// JSON vs JAVASCRIPT OBJECT — SYNTAX DIFFERENCES
// ===========================================

// 1. KEYS
// --------
// JS Object : keys without quotes allowed      -> { name: "Bilal" }
// JSON      : keys must have double quotes     -> { "name": "Bilal" }


// 2. QUOTES
// --------
// JS Object : single OR double quotes allowed  -> { name: 'Bilal' } or { name: "Bilal" }
// JSON      : only double quotes allowed       -> { "name": "Bilal" }   (single quotes = INVALID)


// 3. DATA TYPE
// --------
// JS Object : live object, stored in memory, directly usable
// JSON      : just a STRING (text), not directly usable until parsed


// 4. FUNCTIONS
// --------
// JS Object : can contain functions/methods
//             example: { greet: function() { return "hi"; } }
// JSON      : functions NOT allowed at all


// 5. COMMENTS
// --------
// JS Object : comments allowed        -> // this is fine
// JSON      : comments NOT allowed


// 6. TRAILING COMMA
// --------
// JS Object : trailing comma is okay  -> { name: "Bilal", age: 20, }
// JSON      : trailing comma causes ERROR -> { "name": "Bilal", "age": 20, }  // INVALID


// ===========================================
// EXAMPLES
// ===========================================

// JavaScript Object (live object in memory)
// const student = {
//   name: "Fahad",
//   age: 22,
//   isPassed: true,
// };

// JSON (just a string of text)
// const studentJSON = '{"name": "Fahad", "age": 22, "isPassed": true}';

// ===========================================
// JSON vs JAVASCRIPT OBJECT — SYNTAX DIFFERENCES
// ===========================================

// 1. KEYS
// --------
// JS Object : keys without quotes allowed      -> { name: "Bilal" }
// JSON      : keys must have double quotes     -> { "name": "Bilal" }


// 2. QUOTES
// --------
// JS Object : single OR double quotes allowed  -> { name: 'Bilal' } or { name: "Bilal" }
// JSON      : only double quotes allowed       -> { "name": "Bilal" }   (single quotes = INVALID)


// 3. DATA TYPE
// --------
// JS Object : live object, stored in memory, directly usable
// JSON      : just a STRING (text), not directly usable until parsed


// 4. FUNCTIONS
// --------
// JS Object : can contain functions/methods
//             example: { greet: function() { return "hi"; } }
// JSON      : functions NOT allowed at all


// 5. COMMENTS
// --------
// JS Object : comments allowed        -> // this is fine
// JSON      : comments NOT allowed


// 6. TRAILING COMMA
// --------
// JS Object : trailing comma is okay  -> { name: "Bilal", age: 20, }
// JSON      : trailing comma causes ERROR -> { "name": "Bilal", "age": 20, }  // INVALID


// ===========================================
// EXAMPLES
// ===========================================

// JavaScript Object (live object in memory)
// const student = {
//   name: "Fahad",
//   age: 22,
//   isPassed: true,
// };

// JSON (just a string of text)
// const studentJSON = '{"name": "Fahad", "age": 22, "isPassed": true}';