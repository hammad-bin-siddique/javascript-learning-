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

//? Part C: Method 3: flat()

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

