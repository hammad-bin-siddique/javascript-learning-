// ! this Keyword Object Apni Values Khud Use Kare

let person = {
    name: "Faizan Sleem",
    country: "Pakistan",
    age: 23,

    introduction: function() {
        // this keyword use kare ge bina object ka name lia 
        console.log(`Mera Name ${this.name} ha`);
        console.log(`Main ${this.country} main rehta ho`);
        console.log(`Or meri Age ${this.age} saal ha`);
        
    }
}
person.introduction();

// ! Bracket Notation — Kab Use Karein?

// 3 Specific Conditions Hain:

// ! Condition 1 — Jab Key Mein Space Ho

let intro = {
    "full name": "Hammad Siddique",
    "home city": "Abbottabad",
}
// console.log(intro.full name);     /*ye yaha aise likhna bhi nahi hota or error bhi a raha ha space ke waja se is lia yaha bracket notation use kia jai ga */

console.log(intro["full name"]);
console.log(intro["home city"]);

//!  Condition 2 — Jab Key Number Se Shuru Ho

let price = {
    "1stRank": "Hammad",
    "2ndRank": "Ali",
    "3rdRank": "Hamzaaa",
}

// console.log(price.1stRank); //! ye erorr ai ga is lia yaha bracket notaion use ho ga 
console.log(price["1stRank"]);
console.log(price["2ndRank"]);
console.log(price["3rdRank"]);


// ! Condition 3 — Jab Key Dynamic Ho (Variable Mein Ho)

const student = {
    name: "Jhon Doe",
    city: "Abbottabad",
    age: 23,
}

let mainCity = "city";
let realName = "name";
let adultAge = "age";

console.log(student[mainCity]);
console.log(student[realName]);
console.log(student[adultAge]);


//! Object Freeze 
let newStudent = {
    name: "Waleed",
    age: 23,
    rollNumber: 39492,
}
Object.freeze(newStudent);

// Object freeze kar do!

newStudent.name = "Hammad";
newStudent.age = 33;

console.log(newStudent);