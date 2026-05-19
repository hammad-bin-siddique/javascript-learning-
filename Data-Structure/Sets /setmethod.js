// !📦 Topic 3: Set Methods

//? Method 1 — .add()

// .add() kya karta hai ek line mein:

// Set mein nayi unique value daalta hai — agar value pehle se hai toh ignore kar deta hai.

//? 📌 Basic use

const mySet = new Set();

mySet.add("Ali");
mySet.add("Hamza");
mySet.add("Hammad");

console.log(mySet);

//? 📌 Duplicate add karne ki koshish

// duplicate values ignore ho jai ge

mySet.add("Ali"); // ignore ho ga repeated value ha
mySet.add("Faizan"); // add ho ga duplicate nahi ha
mySet.add("Hamza"); // ignore ho ga

console.log(mySet.size); // ab 4 ho ga keuke 2 value repeated add ki wo ignore ho gi
console.log(mySet);

// ?📌 Chaining — ek saath multiple add
// .add() ek khaas kaam karta hai — yeh Set ko wapas return karta hai. Isliye hum chain kar sakte hain:

const chainingSet = new Set();

chainingSet.add(1).add(1).add(3).add(4); // up to so on mean ke ham bina set name likhe .add  se value add kar sakte hain

console.log(chainingSet);

//? ⚠️ Important — Objects ke saath .add() ka behavior

let objectSet = new Set();
objectSet.add({ name: "Hammad" });
objectSet.add({ name: "Hammad" }); // value beshak same ho but yaha set in ko 2 se mane ga
console.log(objectSet);

// Kyun? Kyunki objects reference se compare hote hain — yeh dono alag objects hain memory mein, isliye Set ne dono rakh liye!
// Yeh bahut important concept hai — primitives (number, string, boolean) value se compare hote hain, objects reference se.

//! Task 1:

const fruits = new Set();
fruits.add("Mango");
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Mango");

console.log(fruits); // 3 values add ho gi keuke Mango duplicate ha
console.log(fruits.size);

//! Task 2: add values using chaining Method

const nums = new Set();
nums.add(10).add(20).add(30).add(40).add(10).add(20);

console.log(nums); // 10 or repeat hain ye ignore ho jai ge

//? 📦 Method 2 — .has()

// .has() ek Set method hai jo check karta hai ke koi specific value Set mein exist karti hai ya nahi — aur result true ya false return karta hai.

//? 📌 Basic use

let setHas = new Set(["Hammad", "Umer", "Imran"]);

console.log(setHas.has("Imran")); // true ai ga keuke ye ha
console.log(setHas.has("Hammad")); // true ai ga
console.log(setHas.has("Faizan")); // false ai ga keuke ye exist he nahi karta

//? 📌 Numbers ke saath

// number ka set uper bana hua ha us ki values he check karte hain

console.log("===============Nums Check================");
console.log(nums.has(10)); //
console.log(nums.has(50)); // false ai ga
console.log(nums.has("10")); // false ai ga keuke nums main jo 10 ha wo number ha naw ke string ye type bhi check karta ha
// Set ko exact match chahiye — type bhi same honi chahiye! ✅

//! ⚠️ Important — Object ke saath .has()

let objSet = new Set();

let obj = { name: "Hammad" };

objSet.add(obj);

console.log("========Object Set=========");
console.log(objSet.has(obj)); // true ai ga
console.log(objSet.has({ name: "Hammad" })); // false ai ga keuke ye 1 alag object ha

// Kyun? Kyunki obj wahi same object hai jo humne add kiya tha. Lekin {name: "Ali"} ek naya object hai — alag reference — isliye false aaya!

//? 📌 .has() if condition mein use karna

const loggedInUsers = new Set(["Hammad", "Ali", "Fahad"]);

const currentUser = "Hammad";

console.log("=========Condition Main Use Karna==========");

if (loggedInUsers.has(currentUser)) {
  console.log(`Welcome ${currentUser}!`);
} else {
  console.log("Access Denied");
}

//? 📌 .has() ka return value store karna

const valueStoreSet = new Set([1, 2, 3]);

let result = valueStoreSet.has(3);
console.log("=======Value Store=======");
console.log(result); // true ai ga keuke 3 exist karta ha
console.log(typeof result); // boolean ai ga

//? .has() hamesha boolean return karta hai — true ya false ✅

console.log("======Has Tasks=======");

//! Task One

let languages = new Set(["Python", "Javascript", "C++", "Java"]);

console.log("======Task One=======");
console.log(languages.has("Javascript")); // true ai ga
console.log(languages.has("PHP")); // false ai ga keuke wo exist he nahi karti

//! Task Two

const setNums = new Set([100, 200, 300, 400]);

console.log("======Task Two=======");

if (setNums.has(200)) {
  console.log("Number Found!");
} else {
  console.log("Number Not Found");
} // Number fount ai ga keuke number exist karta ha

//! Task 3

const Num = new Set(["1", "2", "3"]);
console.log("======Task Three=======");
console.log(Num.has(1)); // false ai ga keuke is ka type number ha or set main string ha
console.log(Num.has("1")); // ab true ai ga keuke value or type dono same ha

//! 📦 Method 3 — .delete()

//📌 Definition

// .delete() ek Set method hai jo Set mein se koi specific value permanently hata deta hai — aur true return karta hai agar value mili aur hatayi gayi, false agar value thi hi nahi.

//? 📌 Basic use

const deleteSet = new Set(["Hammad", "Sara", "Micheal", "Schofield"]);
console.log("======Set Delete Method=======");
console.log(deleteSet); // delete se pehle

console.log(deleteSet.size); // yaha size bhi 4 ho ga

deleteSet.delete("Sara");
console.log(deleteSet); // ab sara nahi ho keuke wo delete ho gai ha

//? 📌 Return value check karna

let result1 = deleteSet.delete("Hammad"); // true ai ga keuke hammad exist karta ha or delete ho gia
let result2 = deleteSet.delete("Sara"); // false ai ga keuke uper us ko pehle he dlt kar dia ab wo exist he nahi karti

console.log(result1, result2); // true pehle dosra false

//? 📌 Delete ke baad size change hota hai

console.log(deleteSet.size); // yaha abhi size 4 ke bajai 2 ha keuke 2 entries delete ho gai ha

//? 📌 if condition ke saath delete

console.log("======Delete Condition ke Sath======");
if (deleteSet.delete("Hammad")) {
  console.log("Hammad Remove Ho Gia");
} else {
  console.log("Hammad ki Entry Mile he nahi");
} // yaha second wali condition chale gi keuke Hammad Uper Pehle se delete ho gia

//? ⚠️ Important — Object delete karna

const myNewSet = new Set();
const obj1 = { name: "Ali" };
myNewSet.add(obj1);

myNewSet.delete({ name: "Ali" }); // delete nahi ho ga keuke referance alag ha
console.log("======Object Delete Karna=======");
console.log(myNewSet.size); // size 1 show kare ga
myNewSet.delete(obj1); // ab delete ho ga keuke ab referance same ha

console.log(myNewSet.size); // 0 ai ga

//! Set Delete Task

console.log("=====Delete Tasks=====");
//? Task 1

const subject = new Set(["Maths", "Science", "English", "Urdu"]);

console.log("====Task 1====");
console.log(subject);

subject.delete("Science"); // science delete ho gia ha
console.log(subject); // ab science nahi ai ga

//? Task 2

const numDelete = new Set([100, 200, 300, 400, 500]);

let result3 = numDelete.delete(300);
let result4 = numDelete.delete(600);

console.log("=====Task 2======");
console.log(result3); // true ai ga keuke 300 delete ho gia ha
console.log(result4); // false ai ga kueke 600 exist he nahi karta tha

console.log(`Size: ${numDelete.size}`); // 4 ai ga keuke 300 delete ho gia ha

//? Task 3

const numberDel = new Set([1, 2, 3, 4, 5]);

console.log("====Task 3====");
console.log(numberDel.size); // 5 ai ga

numberDel.delete(3); // delete ho jai ga
numberDel.delete(10); // nahi ho ga keuke 10 exist he nahi karta

console.log(numberDel.size); // 4 ai ga keyke 10 delete nahi hua wo exist he nahi karta tha



//! 📦 Method 4 — .clear()

// ?📌 Definition

// .clear() ek Set method hai jo Set ki saari values ek saath hata deta hai — Set bilkul khali ho jaata hai aur undefined return karta hai.


// ?📌 Basic use

const setClear = new Set(["Ali", true, false, 1, 3, "Hammad", "Fahad"]);

console.log("====Method 4 Clear====");
console.log(setClear.size, setClear); // size abhi 7 batai ga 

setClear.clear();

console.log(setClear.size); // 0 ai ga
console.log(setClear);

//? 📌 Return value

const setReturn = new Set([1, 3, 5, 33, 4]);

let result5 = setReturn.clear();

console.log(result5); // undefined ai ga 

//? ⚠️ Important — .clear() aur .delete() ka farq

// delete sirf 1 value hatata ha or retrun karta ha true ya false 
// jab ke clear pura set khali karta ha or return main undefined deta ha 

//? 📌 Real world use

const loggedUsers = new Set(["Ali", "Umair", "Fahad"]);

console.log(`Logged In Users: ${loggedUsers.size}`);

loggedUsers.clear();
console.log(`Logged In Users: ${loggedUsers.size}`);

//! Clear Tasks


//? Task 1


const cities = new Set(["Peshawar", "Karachi", "Islamabad", "Lahore"]);

console.log("====Task One====");

console.log(cities.size); // 4 ai ga

cities.clear();

console.log(cities.size); // 0 ai ga sab clear ho gay 

//? Task Two

const clearTaskTwo = new Set([1, 2, 3, 4, 5]);

let result6 = clearTaskTwo.clear();

console.log("====Task Two====");
console.log(result6); // undefined ai ga keuke clear return main undefined deta ha 

//? Task Three

const clearTaskThree = new Set([10,20,30]);
console.log("====Task Three====");
clearTaskThree.delete(10); // sirf 10 delete hua 
console.log(clearTaskThree.size); // abhi 2 ai ga 
clearTaskThree.clear(); // all clear hua 
console.log(clearTaskThree.size); // 0 keuke clear se sab entries remove ho gai


//! 📦 Method 5 — .size

//? 📌 Definition

// .size ek Set property hai jo Set mein mojood unique values ki total count return karti hai.

//? ⚠️ Important — Method nahi, Property hai!

// ✅ Sahi — property hai, brackets nahi lagte
// console.log(mySet.size);

// ❌ Galat — yeh method nahi hai
// console.log(mySet.size()); // TypeError aayega!


const sizeSet = new Set([1, 3, 4, 2, 5, 6]); 
console.log("====Size Method=====");

console.log(sizeSet.size);

//? 📌 Duplicates ke saath size

sizeSet.add(4, 6, 5); // ye teeno pehle se mojood hain is lia ye count nahi ho or size six he rahe ga 

console.log(sizeSet.size);

//? 📌 Khali Set ki size

let emptySet = new Set();
console.log(emptySet.size); // 0 

//? 📌 Size dynamically change hoti hai

const dynamicSize = new Set([1, 2, 3]);
console.log(dynamicSize.size); // 3 ai ga 

dynamicSize.add(4); // ab size 4 ho ga
console.log(dynamicSize.size); // 4 ai ga

dynamicSize.delete(4); // ab size 3 ho gia 1 value delete ho gai 
console.log(dynamicSize.size); // 3

dynamicSize.clear(); // ab size 0 ho gia all value remove ho gai hain 
console.log(dynamicSize.size);  // 0 

// up to so on jitne add ho ge utna size increase ho ga but duplicate ignore ho ga


//? ⚠️ Important — Array length vs Set size

let sizeArr = [1, 3, 4, 2, 3, 2]; // size six ho ga duplicate bhi count hote hain arrays main 
console.log(sizeArr.length); // 6

const mySizeSet = new Set([1, 3, 2, 2, 3]); // size 3 ho ga duplicates count nahi ho ge 
console.log(mySizeSet.size); // 3 output ho ga

//? 📌 Real world use

const onlineUser = new Set(["Ali", "Hammad", "Fahad"]);
console.log(onlineUser.size); // size will be 3

onlineUser.add("Hamza"); // size 4 ho gia 
console.log(onlineUser.size); // 4

onlineUser.delete("Hammad"); // size wapis 3 ho gia 
console.log(onlineUser.size);


//!  Tasks

console.log("=====SIze Tasks======");

const favLanguage = new Set(["HTML", "CSS", "JavaScript", "HTML", "CSS"]);
console.log("===Task 1====");
console.log(favLanguage.size);  // 3 ho ga duplicate ignore ho ge 

favLanguage.add("Python"); 
console.log(favLanguage.size); // ab 4 ho ga 

const sizeTaskTwo = new Set([1,2,3,4,5]);
console.log("====Size Task Two====");
sizeTaskTwo.add(6); // 5 se size 6 hua 
console.log(sizeTaskTwo.size); // 6 output ho ga
sizeTaskTwo.add(6); // 6 he raha keuke duplicate add nahi hota 

sizeTaskTwo.delete(1); // wapis size 5 re gia 
console.log(sizeTaskTwo.size); // output will be 5





