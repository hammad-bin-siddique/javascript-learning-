
//! Task 1 — Student Object Banao aur Stringify Karo

// Ek student object banao jisme yeh ho:

// name, age, city
// subjects array (3 subjects)
// grades nested object (har subject ka grade)
// isPass boolean

// Phir stringify karo null, 2 ke saath aur print karo.

const student = {
    name: "Ali",
    age: 20,
    city: "Multan",
    subjects: ["Math", "Physics", "Computer Science"],
    grades: {
        math: 99,
        physics: 49,
        computerScience: 98
    },
    isPass: true
};
console.log(typeof student, student);// yaha object he ho ga or typeof bhi object ho ga
let stringStudent = JSON.stringify(student,null,2); // yaha object se is ko string main convert kia 
console.log(typeof stringStudent, stringStudent);


//! Task 2 — String Ko Parse Karo

// Yeh string di hui hai — ise parse karo aur:

// productName print karo
// price print karo
// inStock print karo

let productData = '{"productName":"iPhone 15","price":350000,"inStock":true,"colors":["Black","White","Blue"]}';

console.log(typeof productData, productData); // abhi ye string ha is ko object main convert karna ha 

let parseData = JSON.parse(productData); // yaha abhi main ne is ko string se wapis object main convert kia ha 
console.log(typeof parseData, parseData);

//! Task 3 — Stringify + Parse Dono

// Apna ek personal profile object banao:

// name, age, city
// hobbies array
// education nested object (degree, university, year)

// Pehle stringify karo — typeof check karo.
// Phir parse karo — typeof check karo.
// Phir apni university aur degree print karo.

let profile = {
    name: "Hammad Siddique",
    age: 23,
    city: "Abbottabad",
    hobbies: ["Codding", "Chess", "Learning Programing"],
    education:{
        degree: "Islamic Studies",
        university: "GPGC NO 1 Abbottabad"
    }
};

console.log(typeof profile, profile); // abhi ye noraml object ha 

let stringProfile = JSON.stringify(profile,null,2); // Abhi is ko object se string main convert kia ha 
console.log(typeof stringProfile, stringProfile); // yaha ab ye object se string ho gia ha 

// ab ise string se object main convert karte hain 

let parseProfile = JSON.parse(stringProfile); // abhi is ko string se object main convert kar dia ha 
console.log(typeof parseProfile, parseProfile);

console.table([parseProfile.education.university, parseProfile.education.degree]);


//! Task 4 — Function aur Undefined Ka Kya Hota Hai
// Yeh object banao:

let testObj = {
    name: "Hammad",
    age: 23,
    greet: function() { console.log("Hello!") },
    nickname: undefined,
    score: NaN
};

let stringTestObj = JSON.stringify(testObj,null,2);
console.log(stringTestObj); 
/* yaha per function is lia nahi a raha ke wo 1 behavior ha or ye normal object ko string main convert karta ha or undefined ko bhi ye add nahi karta or Nan ko null main print karta ha  */
