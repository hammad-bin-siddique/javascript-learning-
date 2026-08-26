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


//? Pard D Topic 3 reduce()

// reduce() ek array ke saare elements ko ek ek karke process karta hai, aur unko combine karke ek single final value bana deta hai — jaise sum, product, average, ya koi bhi combined result.


//? Syntax

// const result = array.reduce((accumulator, currentElement) => {
//     return updatedAccumulator;
// }, initialValue);

// accumulator — ye wo "chalta hua total" hai jo har step pe update hota rehta hai (jaise dukaandar ka calculator jisme total build ho raha hai)
// initialValue — ye wo starting point hai jaha se accumulator shuru hota hai (calculator ko 0 pe set karna, shuru mein)


//? Real Example — Sum nikalna:

// Mean ke pure array ya kisi bhi chez ka total sum nikalna 

console.log("===Array Method reduce()===");

const bill = [334, 5555, 693, 494, 293, 2934, 4959]; 

const total = bill.reduce((acc, crr) => {
    console.log("Accumulator:", acc, "| CurrentPrice:", crr); 
    return acc + crr;
},0); 

console.log(total); 


//! Important Points:
// initialValue zaroori hai dena (0, ya jo bhi tumhara starting point ho) — warna JavaScript pehla element khud utha kar accumulator bana deta hai, jo confusion create kar sakta hai (abhi ke liye hamesha initialValue do).
// reduce() ka use sirf sum ke liye nahi hota — average, maximum value, counting, ya poori array ko object mein convert karna, sab kuch reduce se ho sakta hai.
// Return hamesha accumulator ka naya version hona chahiye — warna next step pe accumulator undefined ho jayega.


//! Tasks 

//? Task One 

console.log("===Task One===");

let table = [3, 5, 7]; 

const product = table.reduce( (acc, num) => {
    return acc * num; 
}, 1); 

console.log(product);  // 105 yaha ham ne initial value 1 di ha 0 nahi keuke agar 0 dain to phir 0 * 3 = 0 phir chai tum jitne bare num se multiply karo answer 0 he ai ga is lia product karte waqt initial value 1 rakho cuz 1 safe ha 3 * 1 = 3 to koi changes nahi ho gi or product bhi sahi ho ga 



//? Task Two 

console.log("===Task Two==="); 

// find the max number in an array 

const randomNum = [2, 55, 33, 666, 4994, 3494, 2234, 554, 665, 4445];

const maxNum = randomNum.reduce((acc, crr) => {
    if(crr > acc) {
        return crr; // mean ke agar current number bara ha acc se to ye return karo 
    }
    else {
        return acc; // warna purana accumulator he return karo 
    }; 
}, randomNum[0]); // yaha ham ne initial value 0 ke bajai array ka first element rakh dia ha keuke 0 rakhne se yaha to chal jai ga but in case agar sab element negative ho to phir sahi nahi ha 

console.log(maxNum);


//now let's find the minimum number in it 

const minNum = randomNum.reduce( (acc, crr) => {
    if(crr < acc)  {
        return crr; // mean ke agar current number chota ha accumulator se to wo return karo 
    }
    else {
        return acc; // warna purana accumulator return karo 
    };
}, randomNum[0]);

console.log(minNum);

//! reduceRight()

// reduce right bhi reduce ke tara ha but ye right to left work karta ha is ka addition multiplication main farq nahi ata ha khlai strings main ata ha 


//? Example 
console.log("===Array Method Reduce Right===");

const letters = ["h", "a", "m", "m", "a", "d"]; 

const normalReduce = letters.reduce( (acc, letter) => {
    console.log("Added:", acc, "| Current Letter:", letter);
    return acc + letter;
}, ""); 

console.log(normalReduce); // ye same add kare ga left to right seedha 


// ab reduce right karna 

const rightReduce = letters.reduceRight( (acc, letter) =>  {
    console.log("Added:", acc, "| Current Letter:", letter);
    return acc + letter;
}, ""); //

console.log(rightReduce); // ye ab right se add kare ga 