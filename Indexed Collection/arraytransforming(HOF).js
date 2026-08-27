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

//? Part D Topic 4 forEach()

// forEach() hai: har element pe kaam karna, bina kuch return kiye.

//? Syntax — Normal Function ke sath:

// array.forEach(function (element, index, array) {
// yahan kuch bhi karo is element ke sath
// });


// Example: 

const fruits = ["Apple", "Banana", "Mango", "Orange"]; 

//? With Simple Function 
console.log("===Array Method forEach()===");
fruits.forEach( function (fruit, index, array) {
    console.log("Index:", index, "| Fruit:", fruit, "| Whole Array", array);
});


//? With Arrow Function 

fruits.forEach((fruit, index, array) => {
    console.log("Fruit:", fruit, "Index:", index, "Whole Array:", array);
}); 

// simple fruit khali nikalna 

fruits.forEach((fruit) => {
    console.log("Fruit:", fruit);
});

//! forEach function chalta har element per return kuch nahi karta ha 

//? Example 

const number2 = [4, 8, 12, 16, 20]; 

const doubleMap = number2.map((num) => {
    return num * 2;
}); 

console.log(doubleMap); // ye ab 8 16 24 and so on result de ga keuke map return karta ha 1 new array 

const doubleForEach = number2.forEach((num) => {
    console.log(num * 2);
}); 

console.log(doubleForEach); // undefined keuke foreach kuch return nahi karta 

number2.forEach((num) => {
    console.log("Triple:", num * 3);
});  // 12 24 and so on

//? Real-world examples jaha forEach() use hota hai:

// Console mein print karna 

const student3 = ["Hammad", "Bilal", "Umar", "Fahad"]; 

student3.forEach((student) => {
    if(student === "Hammad") {
        console.log(student, "Is Absent");
    }
    else {
        console.log(student, "Is Present");
    };
});

// Kisi external variable ko update karna (jaise total jama karna — waise reduce() zyada behtar hai iske liye, lekin forEach() se bhi ho sakta hai):

let total1 = 0; 
let price2 = [100, 500, 339, 293, 494, 594];

price2.forEach((price) => {
    total1 = total1 + price;
}); 

console.log("Total Price:", total1);



//? Pard D Topic 5 sort()

// sort() method array ke andar order karta ha mean ke us array ko elements ko sort karta ha or ye usi original array main karta ha mean is se original array mutate hota ha 


//? Alphabad main to sorting default way main ho jati ha but agar ham ne numbers ko sort karna ha to us ke lia hame sort ke sath comparator function ka use karna parta ha 

//! Example With Alphabet
console.log("===Array Method sort()===");

const alphabet = ["Hammad", "Ali", "Faizan", "Danial", "Imran", "Mudasir"];

alphabet.sort(); // ye ab alphabetically sab ko sort out kar de ga or ha ye new array nahi balke usi origniall array main change kare ga 


console.log(alphabet);

//? Lekin numbers main ye bina comparator method ke numbers ko bhi string he treat karta ha or ye numbers main sahi nahi karta agar comparator function use naw karo to 


const sortNumber = [2, 3, 43, 29, 23, 14, 59, 95, 20, 38, 92]; 


sortNumber.sort();
console.log(sortNumber) // 14 2 20, 23, 29 so on is tara kare ga 

// Custom Comparator Function 


sortNumber.sort((a , b) => {
    return a - b; // agar ap ko small se big chaia ascending order 
}); 

console.log("Ascending Order:", sortNumber); 

sortNumber.sort((a, b) => {
    return b - a; // Desending Order agar ap ko bare se chota chaia ho to 
}); 

console.log("===Desending Order:", sortNumber);


// Comparator Kaise Kaam Karta Hai :

// sort() internally do elements ko baar baar compare karta hai (a aur b), aur teen scenarios ho sakte hain:

// Agar a - b negative number de (matlab a < b) → a pehle aayega
// Agar a - b positive number de (matlab a > b) → b pehle aayega
// Agar a - b zero de (matlab a === b) → dono ka order same rahega (koi change nahi)

//! Sort Original array main mutation karta ha new array return nahi karta ha agar ap ko safely kam karna ho to pehle original array ke copy bana kar copy per sort kare 


const original = [3, 4, 5, 2, 1]; 

const copy = [...original]; // spread operator se orignal ke copy banai 

copy.sort((a, b) => {
    return a - b;
}); 

console.log(original); // original will remain same 
console.log(copy); // copy will change 


//! Tasks 


//? Task One 

console.log("===Task One==="); 


let price3 = [33, 235, 565, 990, 400, 293, 443];

// sort the price into ascending order from small to big 


price3.sort((a, b) => {
    return a - b;
}); 

console.log("Ascending Order Price:", price3); 

// sort the price into decendign order from big to small 

console.log("===Task Two===");
price3.sort((a, b) => {
    return b - a;
}); 

console.log("Descending Order Price:", price3);


//? Task Three 

console.log("===Task Three==="); 

let names1 = ["Zara", "ali", "Bilal", "hamza"]; 

names1.sort(); // yaha per result ho ga Bilal, Zara, ali Hamza keuke sort pehle capital ko solve kare ga phir lowercase ko 
console.log(names1);

// some method to do sort perfectly first make all the element lowercase using map 


const lowerCa = names1.map((name) => {
    return name.toLowerCase();
}); 

console.log(lowerCa); 

// now sort this 

lowerCa.sort(); // now it will be sort perfectly 
console.log(lowerCa);


// or make the lowercase to upper case using map 

const upperCa = names1.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
}); 

console.log(upperCa); // now the first alphabat of the element is capital 

// now sort it 

upperCa.sort(); 
console.log(upperCa); 

// or use .localCompare 

names1.sort((a, b) => {
   return a.toLowerCase().localeCompare(b.toLowerCase());

}); 

console.log(names1);