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

