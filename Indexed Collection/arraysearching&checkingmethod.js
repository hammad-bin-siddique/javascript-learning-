// ! 1️⃣ indexOf() Find The First Index

// indexOf() array ko start se ent tak check karta ha jaise he value match ho jai us value ka index return karta ha or

//? Syntax

//! array.indexOf(searchValue, fromIndex)
// search value dalna mean ke jis element ka index find karna ha wo dalna or ye strict ha is lia "2" 2 same nahi hain
// fromIndex Mean ke kaha se search start karni ha optional hota ha or default 0 hota ha

//! Example

let houseNum = ["xyz24", "house 5 xyz", "ltd-05", "539s.gor"];
console.log("====IndeOf Method===");
console.log(houseNum.indexOf("house 5 xyz")); // 1 ai ga keuke ye exist karta ha or 1 index per ha
console.log(houseNum.indexOf("xyz24", 2)); // -1 ai ga keuke ye exist to karta ha but 0 index per ha or ham ne searching 2 index se start ki ha

console.log(houseNum.indexOf("539s.gor", 3)); // 3 ai ga ham ne index 3 se start kia or index three per he ha ye

//? indexOf() strict equality (===) use karta hai comparison ke liye. Iska matlab:

let nums = [1, 2, 3];

console.log(nums.indexOf("2")); // -1 keuke ye string ha or array main wo number ha

//? Aur objects ke saath ye reference check karta hai, value check nahi:

const obj1 = { name: "Ali" };
const arr = [obj1, { name: "Ali" }];

console.log(arr.indexOf(obj1)); // 0
console.log(arr.indexOf({ name: "Ali" })); // -1 value beshak same ha but ye new object treat karta ha index of ye nahi dekhta ke andar kia likha hua ha wo dekhta ha ke referense same ha ya nahi

//! Golden Rule

// Primitives (numbers, strings, booleans) compare hoti hain value se.
// Objects (aur arrays) compare hoti hain reference se, value se nahi.

console.log(5 === 5); // true value same ha
console.log("ali" === "ali"); // ye bhi true ha value same ha

console.log({} === {}); // ye false ai ga keuke yaha value ko nahi reference ko dekha jata ha is or dono ka reference alag ha
console.log([] === []); // false same reason

const same = {};

console.log(same === same); // ye ture ai ga keuke reference same ha

const x = { city: "Abbottabad" };
const y = { city: "Abbottabad" };
const arr2 = [x, y];

console.log(arr2.indexOf(x)); //  0
console.log(arr2.indexOf(y)); // 1
console.log(arr2.indexOf({ city: "Abbottabad" })); // -1 value beshak same ha but reference alg ha is lia -1 ai ga
console.log(x === y); // false ai ga keuke reference ko dekha jaga ha values ko nahi

//? 2️⃣ lastIndexOf() Find the Last index

// ye array ke last se search karna start karta ha or reverse direction main like 1,2, 3, 1 ab ye last se start kare ga ab 1 0 per ha or dosra 3 per to ye 3 wale ka index return kare ga

//? Syntax
//! array.lastIndexOf(searchValue, fromIndex)
console.log("===Array Last indexOf===");
const marks = [45, 67, 89, 67, 100];

console.log(marks.lastIndexOf(67)); // 3 keuke ye last se search karna start karta ha
console.log(marks.indexOf(67)); // 1 keuke ye start se search karta ha

//! fromIndex ka tricky part

console.log(marks.lastIndexOf(67, 2)); // 1
// index numbering hamesha normal hoti ha (0,1,2,3,4), reverse sirf checking order hoti ha
// fromIndex 2 ka matlab index 2 se peeche (0 ki taraf) check karna: index 2 (89) -> index 1 (67) match mil gaya
// isliye answer 1 aye ga, index 3 wala 67 check hi nahi hua kyun ke wo aage tha

//? 3️⃣ includes() — Sirf true/false check karna

// includes() pura array check karta ha or agar us main given value ho to true return karta ha warna false return karta ha

//? Syntax

//! array.includes(searchValue, fromIndex)
console.log("===Array Method include()===");

const names = ["Ali", "Hammad", "Bilal", "Imran", "Usman"];

console.log(names.includes("Ali")); // true
console.log(names.includes("hammad")); // false case sensitive

console.log(names.includes("Hammad", 2)); // false Hammad to ha but index 2 se start kia searching karna or hammad index 1 per ha

//? NaN ke sath kaam karta hai!

let number = [1, 2, 3, NaN, 4];

console.log(number.indexOf(NaN)); // -1 index of fail ho jata ha
console.log(number.includes(NaN)); // true return kare ga

//! Combined Task

const stock = [50, 0, 120, 0, 75, NaN];

// Ye 4 lines predict karo:
console.log(stock.indexOf(0)); // 1 index of start se searching karta ha
console.log(stock.lastIndexOf(0)); // 3  last se searching karta ha
console.log(stock.includes(0)); // true
console.log(stock.includes(NaN)); // ture

//? 4️⃣ find() — Condition ke basis pe pehla matching element

// find() condition ke basis per pehla matching element find karta ha mean ke ye her element per 1 function test karta ha jaise he first condition ture hoti ha wo element return kar deta ha or ruk jata ha or agar naw mile end tak to undefined return kar deta ha

//? Syntax

// array.find(function(element, index, array) {
//   return condition; // true ya false
// })

//? Example

console.log("====Array Method find()===");

const studentMarks = [45, 59, 89, 38, 84, 69];

const firstPassing = studentMarks.find(function (mark) {
  return mark >= 60; // abhi main ne condition di ha ke agar 60 ya 60 se uper ka koi element mile to wo return kar do first ab ye 89 return kare ga keuke wo first true condition wala element ha
});

console.log(firstPassing); // 89 return kare ga

//? With Arrow Function

const arrowFisrtPassing = studentMarks.find((mark) => mark >= 60);
console.log(arrowFisrtPassing);

//? Agar koi match naw kare to undefined return karta ha

const notFound = studentMarks.find(function (mark) {
  return mark >= 100; // ab 100 nahi ha to undefined return kare ga
});

console.log(notFound);

//? Find ke use object ke arrays main

const theStudents = [
  { name: "Ali", marks: 34 },
  { name: "Hammad", marks: 89 },
  { name: "Faizan", marks: 98 },
];
const passedStudent = theStudents.find(function (student) {
  return student.marks >= 50;
});

console.log(passedStudent); // Hammad ai ga

const failedStudent = theStudents.find((student) => student.marks <= 50);
console.log(failedStudent); // failsed Student = ali

const products = [
  { name: "Pen", price: 20 },
  { name: "Notebook", price: 150 },
  { name: "Bag", price: 800 },
  { name: "Pencil", price: 10 },
  { name: "Bottle", price: 300 },
];

const expensiveItem = products.find((product) => product.price > 150);
console.log(expensiveItem); // is ka answer ai ga 800 keuke 150 se price ziada wala item dhondna ha >= ye nahi tha sirf > ye tha

//? 5️⃣ findIndex() — Condition ke basis pe index nikalna
console.log("===Array findIndex() Method===");

// find() → konsa element hai jo condition pass karta hai? (element return)
// findIndex() → kahan (kis position) pe hai wo element? (index return)

//? Example
const findMarks = [46, 74, 75, 73, 23, 76, 56, 34];
console.log(findMarks.find((mark) => mark > 50)); // ye wo element return karta ha jis per condtion true ho   ye 74 return kare ga
console.log(findMarks.findIndex((mark) => mark > 50)); // or find index jab condition true ho to index return karta ha answer is 1 keuke 74 per condition match ho rahi ha or wo 1 index per ha

// Agar koi match na kare, findIndex() -1 return karta hai (undefined nahi — dhyan rakhna, ye find() se alag hai).

console.log(findMarks.findIndex((mark) => mark > 100)); // ye abhi condtion true nahi hui is lia ye find ke tara undefined return nahi kare ga balke ye -1 return kare ga agar condition match naw ho to

//? 6️⃣ findLast() — Condition ke basis pe aakhri matching element

// find() → start se search, pehla match
// findLast() → end se search, pehla match (jo asal mein array ka last matching element hota hai)

//? Example
console.log("===Array Method findLast()===");
const guessNum = [40, 35, 64, 63, 23, 34, 30, 89, 49, 50, 59, 32, 44, 45];

console.log(guessNum.find((guess) => guess > 50)); // ye start se condition match kar ke element return karta ha tois ka answer ai ga 64 keuke wo he first element ha jis per condition true ho rahi ha
console.log(guessNum.findLast((guess) => guess > 50)); // ab ye last se elements ko check karta ha or condition true hone per last se element ko return karta ha to is ka answer ai ga 59 keuke wo he last main first element ha jis per condition ture ho rahi ha

//? findLast() bhi undefined return karta ha jese find condition match naw hone per return karta ha

//? 7️⃣ findLastIndex() Condition ke basis pe aakhri matching element ka index

// findLast() → element return karta hai
// findLastIndex() → index return karta hai

// Aur agar match na kare → -1 return karta hai (jaise findIndex(), undefined nahi).

//? Example
console.log("===Array Method findLastIndex===");

const newNums = [50, 80, 59, 70, 99, 40, 58, 20, 98, 89, 32];

console.log(newNums.findLastIndex((num) => num > 90)); // acha abhi ye last se check karta ha or last main 98 jo wo match kar raha ha or us ka index ha 8 or ab ye 8 return kare ga
console.log(newNums.findIndex((num) => num > 90)); // or ye wala start se check karta ha condition to yaha ai ga 99 jis ka index ha 4 or ye 4 return kare ga

//! Part C - Array Searching & Checking Methods - Summary

// 1. indexOf(value) → value ka pehla index dhundta hai START se, exact match (strict equality), nahi mile to -1

// 2. lastIndexOf(value) → value ka pehla index dhundta hai END se (backward), yani asal mein LAST occurrence ka index, nahi mile to -1

// 3. includes(value) → sirf true/false batata hai ke value array mein hai ya nahi, NaN ko bhi sahi detect kar leta hai

// 4. find(condition) → condition ke basis pe array ko START se check karta hai, jo pehla ELEMENT (poora value/object) condition true kare wahi return karta hai, nahi mila to undefined

// 5. findIndex(condition) → find() jaisa hi hai lekin element ki jagah uska INDEX return karta hai, nahi mila to -1

// 6. findLast(condition) → find() jaisa hi hai lekin array ko END se check karta hai, yani condition match karne wala LAST element return karta hai, nahi mila to undefined

// 7. findLastIndex(condition) → findLast() jaisa hi hai lekin element ki jagah uska INDEX return karta hai, nahi mila to -1
