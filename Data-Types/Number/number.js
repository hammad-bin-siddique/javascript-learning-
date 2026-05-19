/* Number = Koi bhi numeric value — positive, negative, decimal sab ek hi number type mein aate hain JavaScript mein.*/


let age = 23; //! Integer Values
let price = 99.99; //! Decimal Values
let temprature = -50; // ! Negative Values
let score = 0; //! Zero

console.table([age,price,temprature,score]);

// Number With Basic Maths 

let x = 40;
let y = 30;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // division
console.log(x % y); // reminder

// Reminder rael life use

let apple = 5;
let people = 3;
console.log(apple % people);

//  or for find odd or even number  agar zero aya to odd or agar 1 aya to odd

let number = 593823;
console.log(number % 2); // odd ha 
//   Jab tum koi aisa kaam karo jo mathematically possible hi nahi — toh JavaScript kehta hai "NaN" yani "yaar yeh number nahi hai"

let b = "hammad" * 5;
console.log(b); // ! NaN ye output ai ga Not A Number


// + ka double kaam
console.log("7" + 2);   // 72  → joining (string thi)
console.log(7 + 2);     // 9   → addition (dono number)

// - * / hamesha convert karte hain
console.log("7" - 2);   // 5   → convert → maths
console.log("7" * 2);   // 14  → convert → maths
console.log("7" / 2);   // 3.5 → convert → maths

// ! Infinity in Javascript
// Mathematically yeh impossible hai — kisi ko bhi nahi de sakte! JavaScript kehta hai → Infinity

console.log(5 / 0);   //  Infinity  
console.log(-5 / 0);  // -Infinity 


// ! Numbers to string in javascript

let applePrice = 899;
let appleTextPrice = applePrice.toString();
console.log(typeof applePrice,applePrice);
console.log(typeof appleTextPrice,appleTextPrice);

// Decimal Price fixed karna 

let mangoPrice = 134.33414;
console.log(mangoPrice.toFixed(2));

// ! Math Object in javascript
/*floor  → hamesha neeche  ⬇️
ceil   → hamesha upar    ⬆️
round  → .5 se kam = neeche / .5 ya zyada = upar
max    → sab se bada pick karo
min    → sab se chota pick karo
abs    → minus hatao, sirf value lo*/

// ! Real life use of Floor

let money = 1000;
let itemPrice = 230;
let canBuy = Math.floor(money / itemPrice);
console.log(`You can buy ${canBuy} things`);

// ! Real life Use of Round

let rating = 4.6;
console.log(`Rating: ${Math.round(rating)} Stars`);

// ! Real life use of ceil

let friends = 11;
let slicePerPizza = 3;
let pizzaNeeded = Math.ceil(friends / slicePerPizza);
console.log(`${pizzaNeeded} Pizza Order karo`);

//  ! Real life use of max and min

let ali = 39;
let fahad = 42;
let faizan = 95;
console.log(`sab se ziada marks: ${Math.max(ali,fahad,faizan)}`);// ! isi tara min bhi ha mean ke wo sab se kam value select kare ga 

// ! Abs real life example

let thing1 = 90;
let thing2 = 39;
let difference = Math.abs(thing1 - thing2);
console.log(`in dono ke keemat main ${difference} ka differnce ha`);