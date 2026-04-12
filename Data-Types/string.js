// Data Type matlab: Computer ko batana ke is variable mein kis qisam ka data store ho raha hai.

// there are two types of data types 

/*DATA TYPES
│
├── Primitive (7)
│     ├── String
│     ├── Number
│     ├── Boolean
│     ├── Undefined
│     ├── Null
│     ├── BigInt
│     └── Symbol
│
└── Non-Primitive (3)
      ├── Object
      ├── Array
      └── Function*/

//! Premitive Data Types

// Strings
// three ways to write strings

let name = "Hammad"; //with double qoutes
let city = 'Abbottabd'; // with single quotes
let age = 23  
console.log(name);
// to uppercase
console.log(name.toUpperCase());// upper case kar dia sab letters
console.log(name[3]); // ! String ka har letter ek index number pe hota hai — aur counting 0 se shuru hoti hai:
console.log(city);
console.log(age);


// Template literal — clean aur easy
let intro = `mera name ${name} ha main ${city} se ho or meri ${age} ha`;

console.log(intro);

//String Ki Important Properties

// ! real use case password character count

let password = "12459dhgwo";
console.table([password,password.length]);

// Real use case of lower case property 

let email = "HAMMAD@GMAIL.COM"
let cleanEmail = email.toLowerCase();
console.log(cleanEmail);

// ! Trim 

let lastName = "    Hammad    ";
console.log(lastName); // with space print ho ga 
console.log(lastName.trim());//without space print ho ga 

// ! slice() — String Ka Hissa Nikalo

let blogTitle = "Why JavaScript is Essential in Web Development";
let shortBlogTitle = blogTitle.slice(0,15);
console.log(shortBlogTitle + "....");


// real use case of length

let rawPassword = "abc3t";
if (rawPassword.length < 8){
    console.log(`This Password is too short, your password has only ${rawPassword.length}  characters please use atleast 8 character`);
}
else{
    console.log("Password is perfect");
}