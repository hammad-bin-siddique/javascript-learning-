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