//! 🔍 Destructuring — Deep Dive

const studentData = {
    name: "Hammad Siddique",
    fatherName: "Muhammad Siddique Zaman",
    age: 23,
    address: {
        country: "Pakistan",
        province: "KPK",
        city: "Abbottabad",
        street: "Saba Colony"
    },
    isMarried: false,
    isStudent: true,
    hobbies: ["Chess", "Programing", "Coding", "Cricket"],
    studentClass: "BS Islamic Studies",
    isEmployed: false
};


// Ab tumhe in values ko alag alag variables mein chahiye. Purana tarika:
// 5 properties ke liye 5 lines! 😩
// Agar 20 properties hoon? 20 lines likhoge?
// const naam   = student.naam;
// const age    = student.age;
// const city   = student.city;
// const course = student.course;
// const batch  = student.batch;
// Destructuring ne yeh problem solve ki — ek hi line mein sab nikaalo! ✅


const {name,fatherName,hobbies,address:{city,street}, isMarried, studentClass} = studentData;

//? yaha main ne is object ko destructure kar lia ha 

console.log(name,city,isMarried);

// ⚠️ Important Rule:
//! Variable ka naam bilkul wahi hona chahiye jo object ki key hai.

//! ✏️ Rename Karna (Aliasing)
// Kabhi kabhi tumhe variable ka naam alag rakhna hota hai. Jaise object mein key naam hai lekin tum chahte ho variable studentName ho:

const {name: studentName, age: studentAge} = studentData; // ab yaha main ne key ka name change kar dia ha 

console.log(name); // ye is name se bhi print ho ga keuke phele uper is key ko destructure kia ha 
console.log(studentName); // or is name se bhi value same ha sirf key name badla ha 
console.log(studentAge); //abhi ham ne is ka key name change kar dia ha or ab ye is name se he print ho ga age se kare ge to referance error ai ga


// ? syntax 
// { originalKey: newVariableName }

//! Default values

// mean ke jab object main koi aisi key destructure kar do jo exist he na kare to kia ho ga 
// const {rollNumber} = studentData;
// console.log(rollNumber); // undeined ai ga 

//? comment is lia kia code keuke neache bhi rollnumber ha or phir is se error ai ga 

// abhi is ko default value de kar dekhte hain 
const {rollNumber = "ISL 22:02"} = studentData;
console.log(rollNumber);

//? Agar property exist karti hai toh default ignore hoga:

const {isEmployed = true} = studentData;
console.log(isEmployed); // yaha false he ai ga keuke uper pehle he is key value set ha 


//! 🔗 Rename + Default — Dono Saath!

const product = {
    name: "Laptop",
    ram: "12 GB",
    rom: "512 GB",
};

const {name: productName, ram: productRam, rom: productRom, discount: sale = 0} = product;
// yaha pehle 3 keys ka name change kia or akhir main 1 default key add ki phir us ko rename bhi kia or value bhi di use 

console.table({productName, productRam, productRom, sale});   // yaha ab sab print ho ge

//! 🪆 Nested Object Destructuring
// Object ke andar object ho toh kaise nikalein?

const item = {
    itemName: "Iphone",
    price: 399999,
    specifications: {
        ram: "8 GB",
        rom: "256 GB",
        camera: "48 Mega Pixle"
    }
};

const {itemName, price, specifications: {ram,rom,camera} } = item;

// console.log(specifications); // ye error de ga cuz ham ne nested object ke keys destructured ki ha naw ke nested object
console.table({itemName,price,ram,rom,camera}); // ab  ye sab print kare ga


//agar nested object pura chaia to phir use bhi destructurize karna ho ga 

const {specifications}  = item

console.log(specifications); // ab ye proper chale ga or output de ga 


//! 🔁 Destructuring in Loops — Asli Power!
// Yahan destructuring ka sabse zyada use hota hai real world mein:

const vichle = [
    {vichleName: "Honda", price: 2500000, model: 2025},
    {vichleName: "Civic", price: 3959303, model: 2023},
    {vichleName: "Audi", price: 3949493, model: 2026},
    {vichleName: "BMW", price: 100000090, model: "MG5"}
];

// Bina destructuring

for (let car of vichle) {
    console.log(`is vichle ka name${car.vichleName} ha or is ke price ${car.price} ha or is ka model ${car.model} ha`)
};

//With Destructuring

for (let {vichleName, price, model} of vichle) {
    console.log(`Vechil Name: ${vichleName} | Price: ${price} | Model: ${model}`);
};

// ✅ RULE 1: Array ka naam aur loop item ka naam KABHI same mat rakho!
// const vichle = [...] → array ka naam "vichle" hai
// for (let gaari of vichle) → item ka naam "gaari" rakha — ALAG!

// ✅ RULE 2: "of" ke baad jo hai → woh POORA array hai
// "of" ke pehle jo hai → woh ek AKELA item hai (ek baar mein)

// ✅ RULE 3: Item ka naam tum khud dete ho — koi majboori nahi
// for (let gaari of vichle)   ✅
// for (let car of vichle)     ✅
// for (let x of vichle)       ✅
// Sab chalenge — naam sirf tumhari marzi ka hai

// ✅ RULE 4: Jo naam "for" mein diya — wohi andar use karna hoga
// for (let gaari of vichle) { console.log(gaari.vichleName) } ✅
// for (let gaari of vichle) { console.log(vichle.vichleName) } ❌ ERROR!

// ✅ RULE 5: Convention — readable naam rakho
// for (let xyz of vichle) → kaam karta hai lekin confusing 😕
// for (let gaari of vichle) → clean aur samajh mein aata hai 😊

// ─────────────────────────────────────────
// Bina Destructuring
// ─────────────────────────────────────────

// ✅ RULE 6: Bina destructuring → dot notation se access karo
// gaari.vichleName, gaari.price, gaari.model
// Kaam karta hai lekin baar baar "gaari." likhna padta hai

// ─────────────────────────────────────────
// Destructuring ke saath
// ─────────────────────────────────────────

// ✅ RULE 7: Destructuring → "for" mein hi object se values nikaalo
// { vichleName, price, model } → seedha variables ban gaye
// Ab andar dot notation ki zaroorat nahi!

// ✅ RULE 8: Destructuring mein sirf woh keys likho jo chahiye
// Agar sirf naam chahiye → { vichleName } — baaki ignore!
// Agar sab chahiye → { vichleName, price, model }

//! 🧩 Function Parameters Mein Destructuring
// Yeh real world mein SABSE ZYADA use hota hai!
// Problem — bina destructuring:

function printPeople (people) {
    console.log(people.peopleName);
    console.log(people.peopleAge);
    console.log(people.isMarried);
}

printPeople({peopleName: "Hammad", peopleAge: 23, isMarried: false});
// ye function without destructuring ha ab is lia hame sath main dot bhi lagana parh raha ha 

//? With Destructuring 

function printPeople2 ({people2Name, people2Age, isAlive}) {
    console.log(people2Name);
    console.log(people2Age);
    console.log(isAlive);
}

printPeople2({people2Name: "Fahad", people2Age: 25, isAlive: true});



// loop or function ka use kar ke with destructruing student ka data nikalna 

const collegeStudent = [
    {nameOfStudent: "Fahad", rollNumOfStudent: "ISL 22: 01", subjectOfStudent: "Islamic Studies"},
    {nameOfStudent: "Usama", rollNumOfStudent: "ISL 22: 02", subjectOfStudent: "Islamic Studies"},
    {nameOfStudent: "Daniyla", rollNumOfStudent: "ISL 22: 03", subjectOfStudent: "Islamic Studies"},
    {nameOfStudent: "Waleed", rollNumOfStudent: "ISL 22: 04", subjectOfStudent: "Islamic Studies"},
    {nameOfStudent: "Usman", rollNumOfStudent: "ISL 22: 05", subjectOfStudent: "Islamic Studies"},
    {nameOfStudent: "Nafay", rollNumOfStudent: "ISL 22: 06", subjectOfStudent: "Islamic Studies"}
]; 

// student ka data array ke andar object main store kia 

function printCollegeStudent ({nameOfStudent, rollNumOfStudent, subjectOfStudent}) {
    console.log(`My Name is ${nameOfStudent} And My Roll Number is ${rollNumOfStudent} And My Subject is ${subjectOfStudent}`);
}; 

// funciton bana kar student ka data print kia


for (let student of collegeStudent) {
    printCollegeStudent(student);
};

//! Default values bhi function parameter mein:

function createStudent ({name, age, city, role = "Student", isFree = false}) {
    console.log(`Name ${name} | Age  ${age} | City ${city} | Role ${role} Is Free ? ${isFree}`);
};

createStudent({name: "Hammad", age: 23, city: "Abbottabad"});
createStudent({name: "Ali", age: 33, city: "Malakand", role: "Employed", isFree: true});

// Function banate waqt  →  = "default"    (sirf ek baar)
// Object likhte waqt    →  : "value"      (hamesha)

