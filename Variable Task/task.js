/*1. Global Variables (const):
   - Hospital ka naam
   - Total wards (5 rakho)
   - Emergency number ("1122")

2. Global Variables (let):
   - Current patients count (50 rakho)
   - Is hospital open? (true rakho)

3. Doctor ka function banao "doctorInfo":
   - Andar let se doctor ka naam
   - Andar let se doctor ki specialty
   - Dono print karo console.log se
   - Bahar print karne ki koshish karo
     (comment mein likho kyun error aayega)

4. Ek block { } banao:
   - let se patient ka naam
   - let se patient ki age
   - const se room number
   - console.table se print karo andar se
   - Bahar print karne ki koshish karo
     (comment mein likho kyun error aayega)

5. Shadowing banao:
   - Global mein medicine = "Panadol"
   - Ek function "emergencyMedicine" mein
     same naam se medicine = "Morphine"
   - Andar print karo
   - Bahar print karo
   - Comment mein likho kya hua

6. Scope Chain test karo:
   - Ek function "ward" banao
   - Us function ke andar ek block banao
   - Block ke andar global, function,
     aur block variable teeno print karo
   - Comment mein likho kyun teeno chale*/

// ! Hospital Managment Task

// Global Variables with Const

const nameHospital = "Jinnah Hospital";
const totalWards = 5;
const emergencyNumber = 1122;

console.table([nameHospital,totalWards,emergencyNumber]);


// Global Variables Using let

let patientCount = 50;
let hospitalOpen = true;

console.table([patientCount,hospitalOpen]);

// Doctor Info

function doctorInfo(){
    let doctorName = "Doctor Hammad";
    let doctorSpecialty = "Skin Specialist"

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
console.table([patientName,patientAge,roomNumber]);

}

// console.table([patientName,patientAge,roomNumber]); // ! ReferenceError: patientName is not defined ye same function wala issue ha mean ke ye block scope ha or block scope brackets ke bahir print nahi hota 

//  Shadowing in Variables mean ke 1 variables ka dosre ko chupa dena but main variable ka same rehna khali override karna 

let medicine = "Panadol";
console.log(medicine);

// abhi new function main medicine change ho gi or wo global medicing ko override kare ge 

function emergencyMedicine(){

    let medicine = "Morphine"
    console.log("emergencyMedicine:  " + medicine); // !  yaha is ne global medicine ko temperory hide kar dia ha or emergency medicine ko le aya 
}
emergencyMedicine();


console.log(medicine); // ! Yaha phir se global medicine a gai keuke function khatam shoadow bhi khatam 
