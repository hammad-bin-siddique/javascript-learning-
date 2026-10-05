//! Reference vs Value Comparison

//? Primitive = Rs. 500 ka note.
// Tumhare paas Rs. 500 ka note hai, Bilal ke paas bhi Rs. 500 ka note hai. Dono notes ki value same hai, is liye hum kehte hain "dono barabar hain". Koi note ka serial number nahi dekhta.

//? Object = Abbottabad mein ghar.
// Faizan aur Umar ne ek jaisa naqsha bana kar do ghar banwaye: 3 bedroom, 1 kitchen, same rang. Kya yeh ek hi ghar hai? Nahi. Dono ke plot number alag hain. Naqsha same hai, lekin ghar alag


//? Memory mein actually kya hota hai

// Type	             Variable ke andar kya hota hai
// Primitive (string, number, boolean, null, undefined, symbol, bigint)	                                     Asal value khud
// Object (object, array, function, Map, Set, Date...)	        Reference (address ka pata), asal object alag jagah (heap) par hota hai

console.log("===Reference vs Value===");
let a = 10; // a variable ke andar seedha 10 (value) add hui ha 
let p = {name: "Hammad"}; // p ke andar object nahi balke us object ka address store hua ha 


//? Primitives value se compare hote hain

// === primitives ke liye sirf yeh dekhta hai: kya dono ki value (aur type) same hai?

let x = 5; 
let y = 5;
console.log(x === y); // true

let s1 = "Abbottabad"; 
let s2 = "Abbottabad"; 
console.log(s1 === s2);

let t = true; 
let f = false; 
console.log(t === f); // false 


//? Objects/Arrays reference se compare hote hain

const home1 = {bedrooms: 3}; 
const home2 = {bedrooms: 3};

console.log(home1 === home2); // false keuke arrays or object main values se comparison nahi hota ha balke reference se hota ha or yaha in objects  ke andar values beshak same ho but in ka address change ha mean ke reference alag ha;


// console.log({} === {}); // false
// console.log([] === []);  // false
// console.log([1, 2] === [1, 2]); // false

// Har baar jab tum {} ya [] likhte ho, JavaScript ek bilkul naya object banata hai naya address de kar. Isi liye har {} literal dosre {} se alag hai.

//? Same reference wale objects ka comparison

const original = {name: "Hammad", age: 20}; 
const alias = original; 
console.log(original === alias); // true keuke in ka reference same ha ham ne just orignal jis ne 1 object ka refrence store kia hua tha whi address ham ne alias ko de dia ha is lia 2no same ha or true ata ha 

alias.age = 25; 
console.log(original.age); // ab yaha 20 ke bajai 25 ai gi age keuke dono variable 1 he object ko point out kar rahe hain hain 


//? Copy karne se bhi naya address ban jata hai

const o1 = {name: "Bilal"}; 

const o2 = {...o1}; // spread new object ya array banata ha or with same value but different address

console.log(o1 === o2); // false 
console.log(o1.name === o2.name); // true keuke Bilal === Bilal same 

// object khud compare kiya to false, lekin uske andar ki primitive properties compare kien to true. Yeh farq bohat important hai.

//? Let change the name of o2 and than compare 

o2.name = "Fahad"; 
console.log(o1.name === o2.name); // false  kuek Bilal === Fahad are not same

//? Baqi equality tools ka kya?

const o3 = {}; 
const o4 = {}; 
console.log(o3 == o4); // false == ye bhi reference compare karta ha 
console.log(Object.is(o3, o4)); // false 
console.log(o3 === o3); // true

// Teeno (==, ===, Object.is) objects ke case mein address hi compare karte hain. Pichle sub-topic mein Object.is ke React wale use-case mein bhi yehi wajah thi: naya object = naya reference = "change detect ho gaya".


//! Important Points 

// Primitive → value compare hoti hai
// Object/Array → reference (address) compare hota hai
// {} === {} false, kyunke har literal naya address banata hai
// b = a se object copy nahi hota, sirf address copy hota hai, is liye a === b true


//? Comprehension Check:
console.log("===Comprehesnsion Check===");

// Q1
console.log("Bilal" === "Bilal");  // ture premitive main value check hoti ha or ye same ha is lia true

// Q2
// console.log([10, 20] === [10, 20]); // false cuz non premitive main reference compare hota ha ye in main values same ha but in array ka address change ha 

// Q3
const p1 = { city: "Abbottabad" };
const p2 = p1;
console.log(p1 === p2); // true keuke yaha new object nahi bana balke p2 main p1 ka address store hua ha is lia ye true ai ga 

// Q4
const p3 = { city: "Abbottabad" };
console.log(p1 === p3); // false keuke value same ha but reference change ha p3 alada object ha or p1 alada 

// Q5
const marks = [50, 60];
const marksCopy = marks; // marks ke andar jo array ka address tha, wohi address marksCopy mein copy hua.
marksCopy.push(70); // phir push kia 70
console.log(marks.length); // 3 keuke object 1 he ha 
console.log(marks === marksCopy); // true keuke array ka reference same ha 

// Q6
const u1 = { naam: "Umar" };
const u2 = { naam: "Umar" };
console.log(u1.naam === u2.naam); // true keuke valeus to same ha andar or abhi andar  object ke values check ki ha 
console.log(u1 === u2); // false keuke reference change ha 


// Q7: Function ke andar object mutate karna
function birthday(person) {
  person.age++;
}
const hammad = { age: 20 };
birthday(hammad);
console.log(hammad.age); // 21 is lia ke yaha koi variable reassign nahi kia ha just ham ne simple function banaya ha ke wo kisi bhi object ke andar object main age key per plus one ka increament kare ga 

// Q8: Function ke andar variable reassign karna
function reset(person) {
  person = { age: 0 };

}
const umair = { age: 20 };
reset(umair);
console.log(umair.age); // 20 the reason in my point of view ke yaha per variable shadow hui ha or function wale ko overwrite kar dia ha block se bahir wale variable ne is lia 0 ke jaga 20 ho ga 

// Q9: const aur array
const scores = [1, 2];
scores.push(3); // push isliye chal gaya ke const sirf address badalne se rokta hai, array ke andar ka maal badalne se nahi.
console.log(scores);

// Ab yeh line chalaao to kya hoga? (error aayega ya chalega, aur kyun?)
// scores = [9, 9]; // ye line nahi chale gi keuke const ke value ko reassign or declare nahi kar sakte 

// Q10: includes() aur objects
const bilal = { id: 1 };
const list = [bilal];
console.log(list.includes(bilal)); // true keuke bilal ha list main 
console.log(list.includes({ id: 1 })); //false includes() andar se har element ko search value se compare karta hai (strict-equality jaisa, === ki tarah reference dekh kar). { id: 1 } likhte hi naya object, naya address ban gaya, aur list mein sirf bilal ka purana address hai. Content same hone se fark nahi parta. Yehi masla indexOf, find(x => x === obj) aur Set.has() mein bhi aata hai.


// Q11: Primitive copy vs object copy
let s3 = "hi";
let s4 = s3;
s4 += "!";
console.log(s3); // hi keuke ye Primitive ko assign karte waqt asal value ki copy banti hai, is liye s4 badalne se s3 par asar nahi parta. Object mein sirf address copy hota hai, isi liye asar parta hai.
console.log(s4); // hi!


const o5 = { v: 1 };
const o6 = o5;
o6.v = 99;
console.log(o5.v); // 99 keuke reference same ha object ka chai o6 main change karo ya phir o5 main dono main changes ho gi 


// Q12: Content compare karne ka ek tareeqa
const x1 = { a: 1, b: 2 };
const y1 = { a: 1, b: 2 };
console.log(x1 === y1); // false keuke refrence alag ha values beshak same ho 
console.log(JSON.stringify(x1) === JSON.stringify(y1)); // true keuke ab ye object ke bajai string main convert ho gay hain or waha per values ko compare kia jata ha is lia true ai ga 

// Q13
function change(person) {
  person.age = 50;
  person = { age: 0 };
  person.age = 100;
}
const u = { age: 20 };
change(u);
console.log(u.age); // yaha 50 ai ga keuke pehle u bana variable age 20 phir ham ne function ke andar address per kar age ko badla ha is lia yaha per 50 ai ga output or jo neache person = {age 0} or person.age = 100 wala  ha wo local varibale ko new address per laga dia ha bahir wale per koi asar nahi parhe ga 

// Q14: Isko apne alfaaz mein explain karo (2-3 lines):
// "Function ko object pass karne par kya pass hota hai, aur
//  person.age = 5 aur person = {...} mein asal farq kya hai?"

// function ko object pass karne per address ki copy pas hoti ha object ki 
// or person.age address per ja kar andar se value change karta ha or bahir bhi show karwata ha or person ={...} local variable ko new address per lagi dia is se bahir wale per koi asar nahi hota ha 

//! Practice Tasks 


//? Task One Reference Detective
console.log("===Task One===");

function isObject(x) {
  if(typeof x === "object" && x !== null) {
    return true;
  }
  else {
    return false;
  }

  //? or short way 
  // return typeof x === "object" && x !== null;
};

function compareKaro(a, b) {
  // Step 1: agar a aur b brabar hi nahi, to alag 

  if(!Object.is(a, b)) {
    return "alag";
  }

  if(isObject(a)) {
    return "same reference";
  }

  return "same value";
}  


const fahad = { naam: "Fahad" };

console.log(compareKaro(5, 5));             // same value
console.log(compareKaro("Bilal", "Bilal")); // same value
console.log(compareKaro([1, 2], [1, 2]));   // alag
console.log(compareKaro(fahad, fahad));     // same reference
console.log(compareKaro({}, {}));           // alag
console.log(compareKaro(null, null));       // same value
console.log(compareKaro(5, "5"));           // alag
console.log(compareKaro(NaN, NaN));         // same value


//? Task 2: Mutate vs Naya Object

console.log("===Task Two==="); 

function marksIncrease(student) {
  student.marks  += 10;
}; 




function marksIncreaseSafe(student) {
  return {...student, marks: student.marks + 10};
}; 


// A) mutation wala: marksIncrease
const bilalStudent = { name: "Bilal", marks: 60 };
const beforeBilal = bilalStudent;
marksIncrease(bilalStudent);
console.log(beforeBilal === bilalStudent); // true keuke reference same ha is lia dono main change ho gi 
console.log(bilalStudent.marks);           // 70

// B) safe wala: marksIncreaseSafe
const umar = { name: "Umar", marks: 60 };
const result = marksIncreaseSafe(umar);
console.log(result === umar);   // false function ne naya object banaya, jis ka address alag hai, aur umar ka address kabhi chhua hi nahi gaya Reference "change" nahi hua, naya object bana hai. 
console.log(umar.marks);        // 60
console.log(result.marks);      // 70
console.log(result.name);       // umar 

// C) hard-code pakadne wala test
const ali = { name: "Ali", marks: 85 };
console.log(marksIncreaseSafe(ali).marks); // 95