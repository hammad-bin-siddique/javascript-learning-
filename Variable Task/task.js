// ! Hospital Managment Task

// Global Variables with Const

const nameHospital = "Jinnah Hospital";
const totalWards = 5;
const emergencyNumber = 1122;

console.table([nameHospital, totalWards, emergencyNumber]);

// Global Variables Using let

let patientCount = 50;
let hospitalOpen = true;

console.table([patientCount, hospitalOpen]);

// Doctor Info

function doctorInfo() {
  let doctorName = "Doctor Hammad";
  let doctorSpecialty = "Skin Specialist";

  console.log(doctorName);
  console.log(doctorSpecialty);
}

doctorInfo();

// console.table([doctorName,doctorSpecialty]); // ! ReferenceError: doctorName is not defined ye error a raha ha is lia ke function ke bahir nahi ho sakta ye function scope ha is lia global scope nahi

//  Patient Block

{
  let patientName = "Faizan";
  let patientAge = 25;
  const roomNumber = 4;
  console.table([patientName, patientAge, roomNumber]);
}

// console.table([patientName,patientAge,roomNumber]); // ! ReferenceError: patientName is not defined ye same function wala issue ha mean ke ye block scope ha or block scope brackets ke bahir print nahi hota

//  Shadowing in Variables mean ke 1 variables ka dosre ko chupa dena but main variable ka same rehna khali override karna

let medicine = "Panadol";
console.log(medicine);

// abhi new function main medicine change ho gi or wo global medicing ko override kare ge

function emergencyMedicine() {
  let medicine = "Morphine";
  console.log("emergencyMedicine:  " + medicine); // !  yaha is ne global medicine ko temperory hide kar dia ha or emergency medicine ko le aya
}
emergencyMedicine();

console.log(medicine); // ! Yaha phir se global medicine a gai keuke function khatam shoadow bhi khatam

// Scope Chain

let hospitalFloor = "Third Floor"; // Global

function ward() {
  let wardName = "Cardiology"; //in function
  {
    let bedNumber = "Bed No 5"; // in function block
    console.table([hospitalFloor, wardName, bedNumber]); // yaha 3no show ho ge cuz ke ye bahir acess kar sakta ha yehe scope chain ha
  }

  console.table([
    hospitalFloor,
    wardName,
    bedNumber,
  ]); /*Yaha per sirf global wala function wala print ho ga block scope wala nahi keuke wo bahir to acess kar sakta ha lekin bahir wala andar acess nahi kar sakta  or yaha se age code chale ga bhi nahi keuke error a jai ga */
  // !ReferenceError: bedNumber is not defined ye wala error ai ga
}

ward();

console.table([
  hospitalFloor,
  wardName,
  bedNumber,
]); /* yaha sirf global wala show ho ga sirf ye andar acess nahi kar sakta is lia */
