//! Array Methods: Transforming (Higher-Order Functions).

//? Part D Topic 1: map() — Deep Dive


//! Map kia karta ha 

// Ek naya array return karta hai
// Original array ko chhupata (mutate) nahi karta
// Har element pe ek function chalata hai, aur uska return value naye array mein daal deta hai

//! Syntax:
//? With Simple Function 

// const newArray = oldArray.map(function(element, index, array) {
//     return kuch_naya_value;
// });

//? With Arrow Function 

// const newArray = oldArray.map((element) => {
//     return kuch_naya_value;
// });

//? Real Example:
console.log("===Array Method Map()===");
const prices = [500, 345, 234, 645, 294, 909, 234];

const priceWithTax = prices.map(function (price) {
    return price + (price * 0.1);
});

//With arrow function 

const priceWithTaxArrow = prices.map((price) => {
    return price + price * 0.1;
});

console.log("Price With Tax", priceWithTax);
console.log("Original Price", prices);
console.log("Price With Tax Using Arrow Function", priceWithTaxArrow);

// now we give a 10 percent discount on tax menu 

const discountPrice = priceWithTax.map((discount) => {
    return Math.round(discount * 0.9);
});

console.log("Discounted Price:", discountPrice);

//! Important Points

// map() hamesha naya array return karta hai — chahe tum kuch bhi karo andar, length hamesha original array ke barabar hogi. Agar 4 elements andar gaye, 4 hi bahar aayenge.

// Agar tum return nahi likhoge function ke andar, to har element undefined ban jayega naye array mein. Ye ek bohat common mistake hai.

//? let's double the price  without using return 

const doublePrice = discountPrice.map((num) => {
    // yaha ham return nahi likhte hain jis se undefined ai ga 
    num * 2;
});

console.log("Return Keyword Missing in Map()", doublePrice);

//? now fix it 

const doublePriceFix = discountPrice.map((num) => {
    return Math.round(num * 2);
});

console.log("Double The discounted Price:", doublePriceFix);


//! Practice Tasks

//? Task One  
console.log("===Task One===");
let names = ["ali", "bilal", "hammad"]; 

const capName = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1); // abhi is main ham ne first letter ko capital kar dia ha or phir us ke name ke copy mila di ha slice se 1 index se keuke 0 index per capital latter ha is lia wo skip kia
});
console.log(names); 
console.log(capName); 


//? Task 2:
console.log("===Task Two===");

const ages = [15, 22, 7, 34, 54]; 

const agesWithString = ages.map((age) => {
    return "Age:" + age;
});

console.log(ages);  // khali age print ho gi number
console.log(agesWithString); // age with string dono print ho gi 

//? Task 3
console.log("===Task Three===");

const students = [
    { name: "Ahmed", marks: 80 },
    { name: "Bilal", marks: 45 },
    { name: "Sana", marks: 90 }
];

const studentName = students.map((student) => {
    return student.name;
});

console.log(studentName); // only names print ho ge 


//? Part D Topic 2 filter() 

//! Filter kia karta ha 

// Ek naya array return karta hai
// Har element ek condition (true/false) se guzarta hai
// Agar condition true return kare, element naye array mein jata hai
// Agar condition false return kare, element (skip ho jata hai)


//? Syntax:

// const newArray = oldArray.filter((element) => {
//     return condition; // true ya false
// });

//? Real Example

const people = [18, 17, 25, 16, 46, 26, 63, 12, 15, 13, 14, 22, 21, 33];

// ab ham filter method se is main se adults nikale ge new array main 
console.log("===Array Method filter()===");


const adult = people.filter( (age) => {
    return  age >= 18;
}); 

console.table([adult]);

// now filter the minors from the array 

const minor = people.filter( (age) => {
    return age < 18;
});

console.table([minor]);



//! Tasks 

//? Task 1: 

console.log("===Task One===");

const students1 = [
    { name: "Ahmed", marks: 80 },
    { name: "Bilal", marks: 45 },
    { name: "Sana", marks: 90 }
];

const filteredStudents = students1.filter( (student) => {
    return student.marks >= 60; 
})

console.log(filteredStudents);


//? Task 2: 

console.log("===Task Two===");

let prices1 = [223, 423, 123, 45, 44, 122, 345, 564]; 

const priceAbove3Hun = prices1.filter((price) => {
    return price >= 300;
}); 

console.log(priceAbove3Hun);

//? Task Three 
console.log("===Task Three===");

const words = ["cat", "elephant", "dog", "hippopotamus", "ant"]; 

const filterdWord = words.filter( (word) => {
    return word.length >= 4;
}); 

console.log(filterdWord);