/* Undefined Kya Hota Hai?
Real life analogy:
Socho tumne ek khali dabbi bana li — dabbi exist karti hai, lekin usme kuch rakha hi nahi! */


//! Case 1 — Variable Declare Karo, Value Mat Do:
let name;
let age;
let city;
console.table([name,age,city]);

//! Case 2 — Function Kuch Return Na Kare:

function hello(){

}
let results = hello();
console.log(typeof results, results);
//! Case 3 — Object Ki Property Jo Exist Na Kare:

let user = {name: "Hammad", age: 23, city: "Abbottabad"};
console.log(user.password);
console.log(user.name);
console.log(user.age);
console.log(user.city);


//! Undefined and null
// Undefined jis main value de he nahi 
// null jis main value jan bhooj kar naw do 

let x;
console.log(x); // ! ye Undefined ha 


let y = null;
console.log(typeof y, y); //! ye null ha 


//! real life useCase

let location;
console.log(Boolean(location)); // False ai ga keuke location de he nahi 

location = "Pakistan";
console.log(location); // ab location ai ge
console.log(Boolean(location)); // true ai ga location exist karti ha 



// ! 1 jaga null or undefined

let famousCity;
let cart = null;

//! Simple Print
console.log(famousCity); // undefined ai ga
console.log(cart); // null ai ga 

//! print with boolean
console.log(Boolean(famousCity)); // false ai ga
console.log(Boolean(cart)); // false ai ga

//! print with Typeof

console.log(typeof famousCity);
console.log(typeof cart);



