// ! Javascript Object

/*"JavaScript mein Object ek non-primitive data type hai. Yeh ek container ki tarah hota hai jisme hum multiple values ko named keys ke saath store karte hain. In values mein strings, numbers, booleans, arrays, doosre objects, aur functions bhi ho sakte hain. Jab object ke andar function hota hai toh use method kehte hain. Objects reference type hote hain — matlab copy karne pe naya object nahi banta, dono ek hi memory location ko point karte hain."*/

// ! Object Banane Ka Tareeqa


// yaha object bhi banaya ha or nested object bhi banaya ha or phir us ko print kia ha 

const user1 = {
  name: "ALi Abdullah",
  age: 20,
  isStudent: true,
  hobbies: ["Coding","Book Reading", "Gaming", "Programming"],
  //  ! Nested Object
  address: {
    country: "Pakistan",
    city: "Karachi",
    street: "Faqeer Colony",
    province: "Sindh",
  }
};
console.log(user1); // Pure Object ka access
console.log(user1.address.province); // object ke nested object ka access 


// ! Array Value object ke andar 

const car = {
    name: "BMW",
    type: "Racing Car",
    color: ["red","green","yellow", "pink", "blue"], // yaha is object main ham ne car ke colors ko array main dala ha
    modal: [16,17,19,18,14], // yaha car ke modals ko array main dala ha 
}

console.log(car); // Complete Car object ka acess
console.log(car.color); // yaha complete array ka access lia
console.log(car.color[2]); // yaha ham ne marzi ke color ka access lia yani sirf 2 wala print ho ga yani yellow 


// ! Function Value — (Method)

const person = {
    name: "Hammad Siddique",
    age: 23,
    city: "Pehsawer",
    sayHello: function(){
        console.log("Hi whatsapp guy's");
    },
}
person.sayHello();
console.log(`my name is ${person.name} i'm ${person.age} year old and i live in ${person.city}`);


// ! Sab Ek Saath — Complete Object

const student = {
  // string
  name: "Hammad Siddique",
  "fatherName":   "Siddique Zaman",
  // number
  age: 23,
  rollNumber: 2202,
  // boolean
  isStudent: true,
  isMarried: false,
  // Arrays
  hobbies: ["Coding", "Chess", "Gaming", "Reading"],
  // Nested Object
  subjectsMarks: {
    math: 88,
    english: 95,
    physics: 39,
    chemistry: 90,
    computerScience: 94,
  },
  // Function
  introduce: function() {
    console.log("My Name is Hammad Siddique");
    
  }
}

// Object ka dynamic Variable Banana
let x = "isStudent";

//! Object Se Data Nikalna (Access) With Dot Notation

console.table([student]); // ! whole data of object with table 
console.log(student); //! whole data of object 
console.log(student.name,student.fatherName); //! object se specific data ka access karna 
console.log(`Array ka Data: ${student.hobbies}`); // ! Arrays ka data access karna 
console.log(`Specific Array ka Data: ${student.hobbies[0]}`); //! Specific Array ka data 
console.log("Nested Object ka Data:", student.subjectsMarks); //! Nested object ka data nikalna 

/*Kyun? Template literal mein poora object daalo — JS use string banana chahta hai — toh likh deta hai [object Object] — actual data nahi dikhata! is lia nested main template literal ka use nahi kia*/

console.log(`Specific Nested Object ka Data: ${student.subjectsMarks.computerScience}`);//! Specific Nested Object ka Data Nikalna
student.introduce(); //! Funciton ka data Nikalna


// ! Object se data nikalna with Bracket Notation

// bracket notation
console.log(student["fatherName"]);
console.log(student["isMarried"]);

// Array print kia seedha bracket mein
console.log(student["hobbies"][2]);
console.log(student["hobbies"][1]);

// Dynamic — variable mein key
console.log(`Student ke isStudent ko Dynamic way main nikalna: ${student[x]}`);


 