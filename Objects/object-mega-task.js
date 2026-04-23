//! Task 1 — 🏥 Hospital Management

// Doctor ka Constructor banao jisme ho:
// - name
// - specialization (e.g. "Cardiologist")
// - experience (years mein)
// - isAvailable (true/false)
// - patients array (3 patient names)
// - clinic (nested object) jisme ho:
//     - clinicName
//     - city
//     - timing (e.g. "9AM - 5PM")

// Method: describe() jo print kare:
// "Dr. ___ ek ___ hain, ___ saal ka experience hai, 
// ___ clinic mein ___ ko available hain"

// Phir 2 doctors banao
// Phir console.table se print karo
// Phir for...in se Doctor 1 ki saari keys print karo


function Doctor(name, specialization, experience, isAvailable, patients, clinic){
    this.name = name;
    this.specialization =  specialization;
    this.experience = experience;
    this.isAvailable = isAvailable;
    this.patients = patients;
    this.clinic = clinic;

    this.describe = function(){
        console.log(`Doctor ${this.name} ak ${this.specialization} hain ${this.experience} saal ka experience ha or ${this.clinic.clinicName} clinic main ${this.clinic.timing} ko available ho ge`);
    }

} 
//! Doctor 1 ka data add kia ha 
let doctor1 = new Doctor(
    "Faizan",
    "Cardiologist",
    3,
    true,
    ["Ali","Bilal","Hamza"],
    {
        clinicName: "Hassan Medicoze",
        city: "Abbottabad",
        timing: "9AM - 5PM"
    }
);
//! Doctor 2 ka data dala ha yaha per 
let doctor2 = new Doctor(
    "Farhan",
    "Neurologist",
    9,
    false,
    ["Fiza","Fahad","Hammad"],
    {
        clinicName: "Bilal Medicoze",
        city: "Abbottabad",
        timing: "11AM - 8PM"
    }
);
console.log(doctor1,doctor2);  // simple print kia
console.table([doctor1,doctor2]); // table mian print kia 
console.log("Doctor 1 Clinic Details", doctor1.clinic,
    "Doctor 2 Clinic Details", doctor2.clinic,); // yaha clinic Details ko print kia ha 
doctor1.describe();
doctor2.describe(); //! yaha dono function call kia

for (let key in doctor1) {
  console.log(`${key} : ${doctor1[key]}`); //! yaha doctor 1 ke keys khali print ki
}


//! Task 2

// Product ka Object Literal banao jisme ho:
// - name, category, price, quantity, isExpired
// - expiryDate (nested object): day, month, year
// - tags array: ["fresh", "organic", "local"]

// Phir:
// 1. Price update karo
// 2. "discount" property add karo
// 3. isExpired delete karo
// 4. Object.keys() print karo
// 5. Object.values() print karo
// 6. for...in se print karo

const product = {
    name: "Apple",
    category: "Fruit",
    price: 300,
    quantity: 2900,
    isExpired: false,
    expiryDate: {
        day: 30,
        month: 12,
        year: 2029
    },
    tags: ["fresh","organic","local"],
}
product.price = 400;
product.discount = "10 Percent";
delete product.isExpired;

console.log(Object.keys(product)); // product object ke keys print ki 
console.log(Object.values(product)); // product object ke values print ki 
for (let key in product) {
    console.log(`loop ka use kar ke product print karna ${key} : ${product[key]}`);
} // for in se print kia product object ko 

console.log(product.expiryDate); /* yaha nested object ko print kia ha filhal arzi tor per keuke template litaral main print naho hota*/

//! Task 3 Game Characters

// Character ka Constructor banao jisme ho:
// - name
// - level
// - health
// - weapons array (3 weapons)
// - stats (nested object):
//     - attack
//     - defense
//     - speed
// - isAlive (true/false)

// Method: status() jo print kare:
// "___ | Level: ___ | Health: ___ | Alive: ___"

// 3 characters banao apni marzi se
// Har character ka status() call karo
// console.table se print karo
// Object.freeze() karo Character 1 ko
// Phir change karne ki koshish karo — verify karo ke nahi badla

function Character(name,level,health,weapons,stats,isAlive){
    this.name = name;
    this.level = level;
    this.health = health;
    this.weapons = weapons;
    this.stats = stats;
    this.isAlive = isAlive;

    this.status = function(){
        console.log(`hello i'm ${this.name} and my level is ${this.level} and my health is ${this.health} and i'm alive ${this.isAlive}`);
    }
}
//  Character 1
let character1 = new Character(
    "Luks",
    5,
    70,
    ["AKM", "M416","AWM"],
    {
        attack: 40,
        defence: 80,
        speed: 59
    },
    true
    
);
// character 2
let character2 = new Character(
    "Luna",
    50,
    30,
    ["AKM", "M416","scarl"],
    {
        attack: 70,
        defence: 70,
        speed: 50
    },
    false
    
);
// character 3
let character3 = new Character(
    "Sid",
    59,
    79,
    ["AKM", "UZI","AWM"],
    {
        attack: 80,
        defence: 90,
        speed: 50
    },
    true
    
);

character1.status();
character2.status();
character3.status();

//! Yaha 3no ke status print kar dia hain 

console.table([character1,character2,character3]);
// yaha nested object print nahi ho ga is lia use neache alada print karta ho 

console.log("Character 1 ke stats", character1.stats,"Character 2 ke stats", character2.stats,"Character 3 ke stats", character3.stats); // yaha nested object ko phir se print kar dia ha 

Object.freeze(character1); // yaha per ye freeze kia character one

character1.name = "Hind"; // value change ki 
character1.isAlive = false; // yaha bhi 
console.log(character1); // print kia result same aya keuke object freeze kia hua tha 

// ! Task 4 School System

// Object Literal banao school ka jisme ho:
// - schoolName
// - city
// - established (year)
// - isPrivate (true/false)
// - classes array: ["9th", "10th", "11th", "12th"]
// - principal (nested object):
//     - name
//     - experience
//     - qualification
// - topStudents (nested array):
//     ["Hammad", "Ali", "Ahmed"]

// Phir:
// 1. Dot notation se schoolName print karo
// 2. Bracket notation se city print karo
// 3. Dynamic notation se — variable mein 
//    "principal" store karo — phir name access karo
// 4. classes array ka 3rd element print karo
// 5. topStudents ka 1st student print karo
// 6. for...in loop se poora school object print karo

const SchoolSystem = {
    schoolName: "KIPS PKK",
    city: "Abbottabad",
    established: 2000,
    isPrivate: true,
    classes: ["9th", "10th", "11th", "12th"],
    principal: {
        name: "Rasheed",
        experience: 8,
        qualification: "Master in English",
        topStudent: ["Hammad", "Ali", "Ahmed"],
    },
};
console.log(SchoolSystem.schoolName); // Dot Notation se School Name print kia 
console.log(SchoolSystem["city"]); // Bracket Notation se City Print kia

let x = "principal";
console.log(SchoolSystem[x]); // Principle ko dynamic Variable main dal ke print kia 
console.log(SchoolSystem.classes[2]); // Classes ke array ka 3 element print kia 
console.log(SchoolSystem["principal"]["topStudent"][0]);
for (let key in SchoolSystem) {
    console.log(`loop ka use kar ke School System  print karna ${key} : ${SchoolSystem[key]}`);    
};
// yaha nested object print nahi ho ga is lia use alada print karo ga 
console.log(SchoolSystem.principal);

// !Task 5 — 🍕 Restaurant Menu

// MenuItem ka Constructor banao jisme ho:
// - itemName
// - category ("Fast Food" / "Desi" / "Drink")
// - price
// - isAvailable (true/false)
// - ingredients array (4 ingredients)
// - nutrition (nested object):
//     - calories
//     - protein
//     - carbs

// Method: order() jo print kare:
// "___ order ho gaya! Price: ___ | Calories: ___"

// 4 menu items banao
// Har item ka order() call karo
// console.table se print karo
// Object.values() se pehle item ki values print karo

function MenuItem(itemMenu,category,price,isAvailable,ingredients,nutrition,){
    this.itemMenu = itemMenu;
    this.category = category;
    this.price = price;
    this.isAvailable = isAvailable;
    this.ingredients = ingredients;
    this.nutrition = nutrition;
    this.order = function(){
        console.log(`${this.itemMenu} order ho giya! Price: ${this.price} or Calories: ${this.nutrition.calories} hain`);
    }
}

let item1 = new MenuItem(
    "Turnip",
    "Vegetable",
    500,
    true,
    ["Protine","Fiber","Calcium","Sugar"], // yara ye main ne arzi tor per dale hain 
    {
        calories: 39,
        protien: 90,
        carbs: 49,
    },
);
// Item 2
let item2 = new MenuItem(
    "Apple",
    "Fruit",
    300,
    true,
    ["Protine","Fiber","Calcium","Sugar"], // yara ye main ne arzi tor per dale hain 
    {
        calories: 59,
        protien: 90,
        carbs: 99,
    },
);

// Item 3
let item3 = new MenuItem(
    "Banana",
    "Fruit",
    1000,
    true,
    ["Protine","Fiber","Calcium","Sugar"], // yara ye main ne arzi tor per dale hain 
    {
        calories: 89,
        protien: 93,
        carbs: 59,
    },
);

// Item 4
let item4 = new MenuItem(
    "Potato",
    "Vegetable",
    100,
    true,
    ["Protine","Fiber","Calcium","Sugar"], // yara ye main ne arzi tor per dale hain 
    {
        calories: 100,
        protien: 93,
        carbs: 99,
    },
);

item1.order();
item2.order();
item3.order();
item4.order();

console.table([item1,item2,item3,item4]);
console.log(Object.values(item1));