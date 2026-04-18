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
console.log(user1.address.province); // object ke nested object ke key ka access 


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

let person = {
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