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

const jsonNestedObject = JSON.stringify(bankAccount, null, 2);

console.log("===Nested Object Converted into JSON===");
console.log(jsonNestedObject); 
console.log(typeof jsonNestedObject); // string
console.log(jsonNestedObject.accountHolder); // undefined keuke ab ye string ha naw ke object

//? Task Array in object 

const objArr = {
    name: "Hammad",
    city: "Abbottabad",
    hobbies: ["Chess", "Coding", "Programming", "Blogging"]
};

console.log("===Object With Nested Array===");
console.log(objArr);
console.log(typeof objArr); // Object

console.log("===Convert Object With Nested Array===");
const arrJson = JSON.stringify(objArr);
console.log(arrJson); 
console.log(typeof arrJson); // String



//! 📍 Topic 3: JSON.stringify() Advanced — Spacing Parameter + Replacer Function

// is topic main ham json string ko better way main read and change kar sakte hain with the help of spacing and replacer parameter 

//? Part 1 Spacing Pretty pring

// Syntax
// JSON.stringify(value, replacer, space);


// spaceValue do tarah ki ho sakti hai:

// Number (jaise 2 ya 4) → kitne spaces ka indentation chahiye
// String (jaise "\t") → koi custom string jo indentation ke liye use ho

//?  Example 1 — Number Spacing

const teacher = {
    name: "Fahad",
    age: 25,
    isTeacher: true
};

console.log(JSON.stringify(teacher, null, 2)); 
// is main ham ne replace ka use nahi kia just spacing ka kia jo ke ab 1 clean format main ha jis tara JSON hota ha us tara ho gia jo ke readable ha 


console.log(JSON.stringify(student, null, 4)); // 4-space indent
console.log(JSON.stringify(student, null, "---")); // custom string indent

console.log("===Spacing of Nested Object===");

console.log(JSON.stringify(bankAccount, null, 2)); // Nested Object bhi proper format main ho jate hain 

//! 🎯 Part B: replacer Parameter — Filtering & Modifying Data


//? replacer do tarike se use ho sakta hai:

//? 1️⃣ Array of Keys (Simple Filter)


const bank = {
    name: "Hammad",
    accountType: "Current",
    email: "hammad@gmail.com",
    id: 1248293,
    number: 294940284939
};

// ab yaha ham simple wo keys ham add kar de ga jo essential ha or jo secret hain un ko skip kar de ge 

console.log(JSON.stringify(bank, ["name","accountType","email"], 2)); // ab yaha sirf name email or account type ka Json bane ga or secret keys nahi 


//? 2️⃣ Function (Advanced Control)

const user = {
    name: "Hammad Siddique",
    email: "hammad@gmail.com",
    password: "secret!@#123",
    age: 23,
    balance: 500
};

const filtered = JSON.stringify(user, function(key, value) {
    if(key === "password" ){
        return undefined; // password excluded
    }
    else if(key === "balance") {
        return value * 2; // ab yaha balance main 1000 ho ga mean ke double ho ga but asli object main data same he rahe ga khali json main change ho ga 
    }
    return value; // agar in dono se koi nahi ha to phir value return kar do 
},2 ); // yaha last main space parameter add kar dia ha 

console.log(filtered);



//! Topic Three Tasks 

//? Task One

const product = {
    name: "Iphone",
    price: 150000,
    stock: 50,
    secretCode: 38593
};

console.log("===Task One===");
console.log(JSON.stringify(product, null, 4));


//? Task 2

console.log("===Task Two===");
console.log(JSON.stringify(product, ["name", "price"],2));


//? Task 3
console.log("===Task Three===");

const replacer = JSON.stringify(product, function(key, value) {
    if(key === "secretCode") {
        return undefined;
    };
    if(key === "price") {
        return value * 0.9;
    };
    return value
},2);

console.log(replacer);
