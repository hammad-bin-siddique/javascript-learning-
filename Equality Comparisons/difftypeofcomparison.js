//! Sub-topic 5: Comparison of Different Types

// Is topic ka plan 5 steps ka hai.

// Type alag ho to teeno (===, Object.is, ==) kya karte hain ← abhi yahan se shuru
// == ke conversion rules (number, string, boolean, null/undefined)
// Object vs number, aur object vs string (ToPrimitive)
// Array vs string, array vs number ([] == "", [1] == 1, [] == ![])
// Combined mix table, practice tasks, mini project, notes


//? Step 1: Type alag ho to kya hota hai?

// Comparator	            Type alag ho to
// ===	                    Seedha false. Value kabhi check nahi hoti.
// Object.is(a, b)	        Seedha false. Value kabhi check nahi hoti.
// ==	                    Pehle type conversion (coercion), phir compare.


//! === aur Object.is conversion nahi karte. Sirf == karta hai.

//? Code example

// === : type alag, to seedha false
console.log(5 === "5");          // false  (number vs string)
console.log(true === 1);         // false  (boolean vs number)
console.log(null === undefined); // false  (null vs undefined)

// Object.is : yeh bhi type alag hone par seedha false
console.log(Object.is(5, "5"));  // false

// == : conversion karta hai
console.log(5 == "5");           // true   ("5" ko number 5 bana liya)
console.log(true == 1);          // true   (true ko 1 bana liya)
console.log(null == undefined);  // true   (khaas rule, isko step 2 mein detail se dekhenge)


//? Comprehension check (predict-before-run)
console.log("===Comprehension check===");
console.log(10 === "10");          // false keuke type same nahi ha or === type check karta ha agar wo match naw kare to direct false wo value dekhta he nahi or === type conversion bhi nahi karta ha 
console.log(10 == "10");           // true keuke == pehle conversion karta ha "10" ko number main convert karta ha phir compare karta ha or yaha per true ai ga keuke convert hone ke bad dono number same ha is lia true ai ga 
console.log(Object.is(10, "10"));  // false ye bhi === ke tara type check karta ha or type match naw hone per direct false return karta ha 
console.log(true === 1);           // false type same nahi ha is lia direct false
console.log(true == 1);            // true keuke == type conversion karta ha compare se pehle or true ko 1 banata ha phir compare karta ha 
console.log(null == undefined);    // special case ha is lia true ai ga is ke ilawa undefined == null ke sath or khud ke sath ye dono true ate hain baki ke sath bhi true nahi ata ha 
console.log(Object.is(NaN, "NaN"));// false keuke type he alag ha 1 NaN ha or dosra string ha or object.is type conversion nahi karta ha seedha type check karta ha agar type same ho to phir value check karta ha or agar match kare to tab true return karta ha 

//? Task 1:
console.log("===Task One===");

console.log("Bilal" === "bilal"); // false value same nahi ha case sensitive ha 
console.log(0 === -0); // true === signs ko ignore karta ha 
console.log(Object.is(0, -0)); // false Object.is sign bhi check karta ha is lia false or is case main different ha or NaN wale === is se Object.is
console.log(NaN == NaN); // false 
console.log(NaN === NaN); // false return karta ha keuke NaN kuch bhi ho sakta for example abc12 or 23dw dono alada ha but dono ka NaN ai ga is lia ye false return karta ha === main 


//? Task 2: Comparator function

console.log("===Task Two==="); 

function compareTeeno(a, b) {
    return {loose: a == b, strict: a === b, objectIs: Object.is(a, b)};
}; 

console.table([compareTeeno(7, "7")]);  // true, false false
console.table([compareTeeno(0, false)]); // true, false false , 
console.table([compareTeeno(NaN, NaN)]); // false false, true
console.table([compareTeeno(null, undefined)]); // true, false, false, 
console.table([compareTeeno("", 0)]); // true, false, false


//? Task 3:
console.log("===Task Three===");
let faizanAge = "18"; 


if(faizanAge === 18) {
    console.log("Faizan Is Adult");
}
else {
    console.log("Faizan Is Minor");
}
// yaha faizan is minor ai ga keuke input age string main ha or yaha ham ne 18 dia ha is lia false ai ga keuke === type check karta ha agar sahi naw ho to false return karta ha is lia second condtion chale gi 


//? Fix karna is ko 


if(Number(faizanAge) === 18) {
    console.log("Faizan is Adult"); 
}
else {
    console.log("Faizan is Minor");
}; // ab yaha per ham ne is problem ko fix kia ha or age ko pehle khud number main convert kia ha or phir is ko compare kia ha is lia yaha per ab first condtion chale gi

