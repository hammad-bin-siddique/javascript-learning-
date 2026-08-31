//! Part E. Array Methods — Combining / Checking

//? Part E Topic 1 concat() Method

// concat() ek array method hai jo do ya zyada arrays (ya values) ko join kar ke ek naya array return karta hai. Ye original arrays ko mutate nahi karta  bilkul immutable operation hai.

//? Syntax

// let newArray = array1.concat(array2);
// let newArray2 = array1.concat(array2, array3, array4); // multiple arrays
// let newArray3 = array1.concat(5, 6, 7); // values bhi de sakte ho

//? agar hum ise kisi apne function ke andar arrow fn se wrap karein to:

//! const combineArrays = (arr1, arr2) => arr1.concat(arr2);

//? Real Example

const kipsStudents = ["Faizan", "Hammad", "Umair", "Bilal", "Ali"];
const gpgcStudents = ["Hamza", "Umair", "Fani", "Wasib", "Umar"];

const combinedStudents = kipsStudents.concat(gpgcStudents);

console.log("Part E: Array concat() Method");
console.log("Combined Students:", combinedStudents); // 2 arrays 1 jaga connect ho gay hain

console.log("Kips Students:", kipsStudents); // Kips originall safe
console.log("Gpgc Students:", gpgcStudents); // Gpgc Orginal Safe

//! Important Points

// concat() shallow copy karta hai — agar array ke andar objects hain, to unke references copy hote hain, actual objects nahi (deep copy nahi hoti).

const arrayWithObject = ["Hammad", { name: "Fahad", age: 30 }, "Farhan"];

const joinObjectArray = kipsStudents.concat(arrayWithObject);
console.log(joinObjectArray);

// Ye originals ko modify nahi karta — hamesha naya array return karta hai. Isliye result ko variable mein store karna zaroori hai, warna value "lost" ho jayegi.

//? Sirf arrays hi nahi, aap direct values bhi concat kar sakte ho: arr.concat(1, 2, 3).

const arrayValue = kipsStudents.concat("Subhan", "Usama", "Daniyal");
console.log(arrayValue);

//? Modern alternative: Spread operator [...arr1, ...arr2] bhi same kaam karta hai — dono common hain in production code.

const combinedStudentsWithSpread = [...kipsStudents, ...gpgcStudents];

console.log(
  "Combined Arrays With Spread Operator:",
  combinedStudentsWithSpread,
);

//! Practice Tasks:
//? Task One

console.log("===Task One===");

const fruits = ["Banana", "Orange", "Grapes"];
const vegetables = ["Onion", "Potato", "Turnip"];
const dairy = ["Milk", "Butter", "Cheez"];

const groceryList = fruits.concat(vegetables, dairy);

console.log(fruits); // remain the same
console.log(vegetables); // same like fruits no changes
console.log(dairy); // same like fruits and veg
console.log(groceryList); // all in one

//? Task Two

console.log("===Task Two===");

const numbers = [10, 20, 30];
const updatedNumbers = numbers.concat(40, 50);

console.log(updatedNumbers);

//? Task Three

console.log("===Task Three===");

const nums = [1, 2, 3];
const nestedNums = [4, [5, 6]];

const combinedNums = nums.concat(nestedNums);

console.log(combinedNums); // nested array flat nahi ho ga mean ke output will be 1,2,3,4,[5,6] ho ga

//? Part E Array Mehod join()

// join() ek array method hai jo array ke saare elements ko ek string mein convert kar deta hai, jahan har element ke beech aap custom separator define kar sakte ho (default separator comma , hota hai).

//? Syntax

// let str = array.join();          // default separator: comma
// let str2 = array.join(", ");     // custom separator
// let str3 = array.join(" - ");    // koi bhi symbol/string
// let str4 = array.join("");       // empty separator - elements seedhe chipak jayenge

//? Real Example

console.log("===Array Method join()===");

const cnicParts = ["Hammad", "Siddique", "13944-2934949-1"];

const nadraFormat = cnicParts.join(" - ");

console.log("Normal Format", cnicParts); // same join original array ko mutate nahi karta ha
console.log("Nadra Format Using join() Method:", nadraFormat);

//! Important Points

// join() original array ko change nahi karta — immutable operation hai, naya result (string) return karta hai.

// Return value hamesha ek string hoti hai, chahe original array numbers ki ho.

const marks = [90, 89, 94, 90, 49, null, undefined]; // join method main null or undefined ko ye empty string treat karta ha is lia ye skip ho jate hain or error nahi dete hain
console.log(typeof marks, marks); // type of will be object
console.log(typeof marks.join(" | "), marks.join(" | ")); // string

// Agar array mein null ya undefined ho, to join() unhe empty string treat karta hai (skip ho jaate hain, error nahi aata).

// join() ka ulta kaam split() karta hai (string ko array mein todta hai) — dono aksar sath use hote hain

const name = "Hammad";
const splitName = name.split("");

console.log(splitName[0]);

// Agar array ke andar object ho, to join() uska toString() version use karta hai, jo aksar [object Object] jaisi ajeeb string de sakta hai.

const company = ["Expand More", { zip: 29304, city: "Abbottabad" }, "Pakistan"];

console.log(company.join(" "));

//! Practice Tasks

//? Task One

console.log("===Task One===");

const city = ["Abbottabad", "Mansehra", "Haripur"];
console.log(city.join(" => "));

//? Task Two
console.log("===Task Two===");
const words = ["Pakistan", "Zindabad"];
console.log(words.join(" "));
console.log(words.join(""));

//? Task Three

console.log("===Task Three===");

const mix = [1, 2, { name: "Ali" }, 3];

console.log(mix.join(", ")); // output will be 1, 2, [object Object], 3

//? Part E: Method 3: flat()

// flat() ek array method hai jo nested (multi-level) arrays ko ek nayi flat (single-level) array mein convert kar deta hai. Aap ye specify kar sakte ho ke kitni depth (level) tak flatten karna hai.

//? Syntax

// let newArr = array.flat();        // default: sirf 1 level flatten
// let newArr2 = array.flat(2);      // 2 levels tak flatten
// let newArr3 = array.flat(Infinity); // jitni bhi depth ho, sab flatten

//? Example
console.log("===Array Method flat()===");

//? One Level Nesting;

const oneLevel = [1, 2, [3, 4]];
console.log(oneLevel); // [1, 2, [3, 4]];
console.log(oneLevel.flat()); // 1, 2, 3, 4

//? Two Level Nesting:

const twoLevel = [1, [2, [3, 4]], 5];
console.log("No Flat:", twoLevel); // [1, [2, [3, 4]], 5];
console.log("One Level Flat:", twoLevel.flat()); // [1, 2, [3, 4], 5];
console.log("Two Level Flat:", twoLevel.flat(2)); // [1, 2, 3, 4, 5]

//? Deep Or infinite Nesting:

let deepNested = [1, [2, [3, [4]]], 5];

console.log("Two Level:", deepNested.flat(2)); // [1, 2, 3, [4], 5];
console.log("Infinite or Deep Nested:", deepNested.flat(Infinity));

//! Important Points

// Default depth 1 hota hai — matlab agar aap sirf .flat() likho (bina argument ke), sirf ek level flatten hoga, gehri nesting reh jayegi.

// flat() bhi immutable hai — original array ko change nahi karta, naya array return karta hai.

// Agar aapko pata nahi kitni depth hai (unknown/dynamic nesting), to flat(Infinity) use karna best practice hai.

// flat() array ke andar ke empty slots (holes) ko bhi remove kar deta hai — jaise [1, , 3].flat() → [1, 3].

//! Practice Tasks Flat

//? Task One

console.log("===Task One===");

classRooms = [["Ali", "Sara"], ["Bilal"], ["Hina", "Usman", "Farhan"]];

console.log(classRooms.flat());

//? Task Two

console.log("===Task Two===");

let mixedData = [1, [2, [3, [4, [5]]]]];
console.log(mixedData.flat(Infinity));

//? Task Three
console.log("===Task Three===");
let withHoles = [1, 2, , 4, [5, , 6]];
console.log("With Holes:", withHoles);
console.log("Without Holes:", withHoles.flat()); // flat empty holes ko bhi remove kar deta ha

//? Part E: Method 4: flatMap()

// flatMap() ek array method hai jo har element pe ek callback function chalata hai (jaise map()), aur phir result ko automatically 1 level tak flatten kar deta hai. Ye array.map(fn).flat() likhne jaisa hai, lekin zyada efficient (kyunke array sirf ek hi baar traverse hota hai, do baar nahi).

//? Syntax

//! Regular function:

// let result = array.flatMap(function(element) {
//   return [element, element * 2];
// });

//! Arrow function:

// let result = array.flatMap((element) => [element, element * 2]);

//? Example
console.log("===Array Method flatMap()===");
let orders = [1, 2, 3, 4, 5, 6];

// Normal map function se nested array bane ga flate nahi ho ga

const mapped = orders.map((qty) => {
  return [qty, qty * 5];
});

console.log("Normal Map:", mapped); // [[1, 5], [2, 10], [3, 15], [4, 20], [5, 25], [6, 30]];

// flatMap se nested array of flat dono ho jai ga

const flatMapped = orders.flatMap((qty) => {
  return [qty, qty * 10];
});

console.log("Flat Map:", flatMapped); // [1, 10, 2, 20] and so on

//? Common Use Case Senctences ko word main karna

const sentences = ["Hammad Love Javascipt & Python", "Ali Love English"];

const intoWord = sentences.flatMap((sentence) => sentence.split(" "));
console.log(intoWord);

//! Important Points

// flatMap() sirf 1 level flatten karta hai — agar callback se double-nested array return ho, wo poora flatten nahi hoga (agar zyada depth chahiye to .map().flat(n) alag se use karna padega).

// flatMap() bhi naya array return karta hai — original array untouched rehta hai.

// Agar callback simple value return kare (array nahi), to flatMap() bilkul map() jaisa hi behave karega (kuch flatten karne ko hoga hi nahi).

const simpleNum = [1, 2, 3];

const flatSimpleNum = simpleNum.flatMap((num) => num * 2);
console.log("Simple:", simpleNum);
console.log("Flat Simple:", flatSimpleNum); // same but value double ho gi nested nahi ha to kuch flat nahi kare ga

// Bahut helpful hota hai jab aapko filter + map dono ka combo chahiye ho — jaise kisi condition pe element skip karna ho, to empty array [] return kar do us case mein (wo element gayab ho jayega result se).

const oddEven = [1, 2, 3, 4, 5, 6, 7, 8];

//? flatmap ke help se ham filter bhi kar sakte hain  neache dia hue code main ham  sirf odd number print kare ge or even numbers ko skip kare ge empty array return kar ke

const onlyOdd = oddEven.flatMap((num) => {
  if (num % 2 === 0) {
    return [];
  }
  return [num, num * num];
});

console.log("Only Odd Number:", onlyOdd); // 1, 1, 3, 9, 5, 25, 7, 49

//? Now get only even number

const onlyEven = oddEven.flatMap((num) => {
  if (num % 2 === 0) {
    return [num, num * 5];
  }
  return [];
});

console.log("Only Even Number", onlyEven); // [2, 10, 4, 20] and so on

//! Practice Tasks

//? Task One

console.log("===Task One===");

const taskSentences = ["I'm Learning Js", "And This is my favorite Subject"];

const taskWords = taskSentences.flatMap((sentence) => {
  return sentence.split(" ");
});

console.log(taskWords);

//? Task Two

const taskPrices = [100, 200, 500, 92, 490, 589, 209, 394, 293, 124];

const filterdPrice = taskPrices.flatMap((price) => {
  if (price >= 200) {
    return [price];
  }
  return [];
});
console.log("===Task Two===");
console.log("All Prices:", taskPrices);
console.log("Filterd Prices:", filterdPrice);

//? Task Three

console.log("===Task Three===");

const taskStudents = ["Ali", "Leo", "Ria", "Bilal", "Uzair", "Amir"];

const doubledStudent = taskStudents.flatMap((student) => {
  if (student.length <= 3) {
    return [student];
  }
  return [student, student];
});

console.log("Single Students:", taskStudents);
console.log("Doubled Students:", doubledStudent);

//? Part E Method 5: every()

// every() ek array method hai jo har element pe ek callback function (condition) chalata hai, aur check karta hai ke saare elements us condition ko true return karte hain ya nahi. Ye true ya false (boolean) return karta hai — poori array ka ek hi verdict.

//? Syntax

// let result = array.every(function(element) {
//   return element > 10;
// });

//? Example
console.log("===Array Method every()===");
let ages = [23, 24, 23, 19, 20, 49];

let adults = ages.every((age) => age >= 18);
console.log(adults); // true ai ga sab 18 + hain
console.log(ages.every((age) => age >= 20)); // false ai ga keuke 19 or 18 20 se kam hain islia

//! Important Points

// every() short-circuit karta hai — jaise hi pehla false milta hai, wo turant ruk jata hai aur baaki elements ko check hi nahi karta (performance ke lihaz se efficient).

// Agar array empty ho ([]), to every() hamesha true return karta hai — chahe condition kuch bhi ho. (Ye ek common "gotcha" hai — isko vacuous truth kehte hain: "jab check karne ko kuch hai hi nahi, to sab kuch 'true' maan liya jata hai".)

// every() original array ko change nahi karta, aur boolean (true/false) return karta hai — array nahi.

// Callback ke andar hamesha condition return karni hoti hai (jaise age >= 18) — agar kuch aur return karo (jaise sirf age), to JavaScript use truthy/falsy ki tarah treat karega, jo galat results de sakta hai.

//! Practice Tasks — every()

//? Task One

console.log("===Task One===");

const tempratures = [30, 26, 35, 29, 38];

console.log(
  "Today Temprature:",
  tempratures.every((temp) => temp >= 25),
); // true cuz 25 se above tha

//? Task Two

console.log("===Task Two===");

const usernames = ["ali-123", "sara-90", "bilal-dev", "hm"];
console.log(usernames.every((user) => user.length > 3)); // false keuke beache main 1 ke lenght 3 se kam ha

//? Task Three

console.log("===Task Three===");

const emptyArr = [];
const result1 = emptyArr.every((n) => n < 0); // ture check karne ko kuch tha he nahi ab chai condition koi bhi ho empty array ko every hamasha ture treat karta ha

const filledArr = [5, 10, 15];
const result2 = filledArr.every((n) => n > 0); // ture cuz ke sab 0 se uper ha

console.log(result1);
console.log(result2);

//? Part E: Method 6: some()

// some() ek array method hai jo har element pe ek callback function (condition) chalata hai, aur check karta hai ke kam se kam ek element us condition ko true return karta hai ya nahi. Ye true ya false (boolean) return karta hai.

//? Syntax

// let result = array.some(function(element) {
//   return element > 10;
// });

//? Example
console.log("===Array Mehod: some()===");

const studentMarks = [34, 39, 93, 49, 85, 49, 34];

const anyPassedPaper = studentMarks.some((num) => num >= 60);
console.log(anyPassedPaper); // true keuke 93 or 85 do hain

const ages1 = [10, 12, 15];

const anyAdult = ages1.some((age) => age >= 18);
console.log(anyAdult); // false keuke koi bhi 18 ka nahi ha

//! Important Points

// some() bhi short-circuit karta hai — jaise hi pehla true milta hai, turant ruk jata hai, baaki elements check nahi hote.

// Agar array empty ho ([]), to some() hamesha false return karta hai — bilkul every() ke opposite (ye bhi ek "gotcha" hai, isko yaad rakhna: empty array mein "kam se kam ek" milna hi nahi sakta, isliye false logical hai).

// some() original array change nahi karta, aur boolean return karta hai.

// some() aur every() ek doosre ke logical opposite hain kai jagah — jaise agar arr.every(x => x > 5) false hai, iska matlab zaroori nahi ke arr.some(x => x <= 5) true ho... actually is case mein hoga bhi, lekin conditions hamesha directly invert nahi hoti, dhyan se sochna hota hai.

// some() ka common real-world use: "does at least one match exist?" — jaise search results, availability check, etc.


//! Practice Tasks some();

//? Task One

console.log("===Task One===");

const products = [
  { name: "Iphone", stock: 0 },
  { name: "Shoes", stock: 51 },
  { name: "Piano", stock: 0 },
];


const productStockCheck = products.some((product) => product.stock > 1);

console.log(productStockCheck); // true kueke 1 product ha jis ka stock 1 se ziada ha


//? Task Two 

console.log("===Task Two==="); 

const passwords = ["abc123", "pass", "admin!@#123", "12"]; 

const passwordLengthCheck = passwords.some((pass) => pass.length >= 10);

console.log(passwordLengthCheck); // ture keuke 1 password ke lenght 10 se ziada ha 

//?Task Three 


console.log("===Task Three==="); 

let students1 = [
  { name: "Ali", marks: 45 },
  { name: "Sara", marks: 90 },
  { name: "Bilal", marks: 30 }
];


const passStudent = students1.every((student) => student.marks >= 50); 

console.log(passStudent); // false ai ga keuke 45 1 student fail ha 


const andPassStudent = students1.some((student) => student.marks >= 50); 

console.log(andPassStudent); // true ai ga keuke 1 student pass hain 