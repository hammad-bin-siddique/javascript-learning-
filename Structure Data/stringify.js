//! 📍 Topic 2: JSON.stringify()


// stringify it converts js objects and arrays into JSON without doing it manually 

//? 🔧 Basic Syntax

// JSON.stringify(value);


//? Example One Simple Object 

const student = {
    name: "Hammad",
    age: 23,
    isStudent: true,
    subject: "Computer Science"
};


const jsonString = JSON.stringify(student);

console.log("===Simple Object===");
console.log(student); // object ha abhi JSON nahi 
console.log(typeof student); // object

console.log("===Conveted into JSON===");
console.log(jsonString); // JSON String mean ke ab ye object JSON string main convert ho gia ha 
console.log(typeof jsonString); // string



//? Example 2 Array 

const fruits = ["Banana", "Apple", "Pineapple", "Orange", "Mango"];

console.log("===Simple Array===");
console.log(fruits); 

console.log(typeof fruits); // object

const jsonArr = JSON.stringify(fruits); 


console.log("===Array Converted into JSON==="); 
console.log(jsonArr); 
console.log(typeof jsonArr); // string


//? Example 3 Nested Object

const bankAccount = {
    accountHolder: "Hammad",
    balance: 0.0005,
    accountType: "Current",
    address: {
        city: "Abbottabad",
        country: "Pakistan",
        province: "KPK"
    }
};

console.log("===Simple Nested Object===");
console.log(bankAccount);
console.log(typeof bankAccount); // object
console.log(bankAccount.address); 

const jsonNestedObject = JSON.stringify(bankAccount);

console.log("===Nested Object Converted into JSON===");
console.log(jsonNestedObject); 
console.log(typeof jsonNestedObject); // string
console.log(jsonNestedObject.accountHolder); // undefined keuke ab ye string ha naw ke object

