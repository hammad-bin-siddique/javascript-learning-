// ! 1️⃣ indexOf() Find The First Index

// indexOf() array ko start se ent tak check karta ha jaise he value match ho jai us value ka index return karta ha or 

//? Syntax

//! array.indexOf(searchValue, fromIndex)
// search value dalna mean ke jis element ka index find karna ha wo dalna or ye strict ha is lia "2" 2 same nahi hain 
// fromIndex Mean ke kaha se search start karni ha optional hota ha or default 0 hota ha 



//! Example

let houseNum = ["xyz24", "house 5 xyz", "ltd-05", "539s.gor"];
console.log("====IndeOf Method===")
console.log(houseNum.indexOf("house 5 xyz")); // 1 ai ga keuke ye exist karta ha or 1 index per ha 
console.log(houseNum.indexOf("xyz24", 2)); // -1 ai ga keuke ye exist to karta ha but 0 index per ha or ham ne searching 2 index se start ki ha 

console.log(houseNum.indexOf("539s.gor", 3)); // 3 ai ga ham ne index 3 se start kia or index three per he ha ye 

//? indexOf() strict equality (===) use karta hai comparison ke liye. Iska matlab:


let nums = [1, 2, 3]; 

console.log(nums.indexOf("2")); // -1 keuke ye string ha or array main wo number ha 


//? Aur objects ke saath ye reference check karta hai, value check nahi:


const obj1 = {name: "Ali"}; 
const arr = [obj1, {name: "Ali"}];

console.log(arr.indexOf(obj1)); // 0
console.log(arr.indexOf({name: "Ali"})); // -1 value beshak same ha but ye new object treat karta ha index of ye nahi dekhta ke andar kia likha hua ha wo dekhta ha ke referense same ha ya nahi 


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

console.log(arr2.indexOf(x));                        //  0 
console.log(arr2.indexOf(y));                         // 1
console.log(arr2.indexOf({ city: "Abbottabad" }));     // -1 value beshak same ha but reference alg ha is lia -1 ai ga 
console.log(x === y);                                  // false ai ga keuke reference ko dekha jaga ha values ko nahi 

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