// ! Task 1 — Undefined Basics:
/*- 3 variables declare karo (name, age, city)
- Kisi ko value mat do
- Teeno print karo
- Teeno ka typeof print karo*/

let name;
let age;
let city;
console.table([name,age,city]);
console.table([typeof name,typeof age, typeof city]);

//! Task 2 — Variable Update:


/*- let cart; → khali rakho
- Print karo → kya aaya?
- Boolean(cart) print karo
- Ab cart = "Nike Shoes" do
- Dobara print karo → kya aaya?
- Dobara Boolean(cart) print karo
- Comment mein likho → farq kya tha?*/

let cart; // variable without value
console.log(cart); // undefined
console.log(Boolean(cart)); // false ai ga keuke value ha he nahi 
cart = "Nike Shoes";// value add kar di 
console.log(cart); // value ai gi nike shoes
console.log(Boolean(cart)); // true value mojood ha 

//! Task 3

/*- let selectedColor = null; → jaanboojh kar khali
- Print karo
- typeof print karo
- Boolean print karo
- Ab selectedColor = "Red" do
- Dobara teeno print karo
- Farq dekho! */

let selectedColor = null;
console.log(typeof selectedColor,selectedColor);// with typeoff object ai ga or output null
console.log(Boolean(selectedColor)); // Boolean False ai ga 
selectedColor = "Red";
console.log(selectedColor);// red ai ga
console.log(typeof selectedColor); // string ai ga  
console.log(Boolean(selectedColor)); // true ai ga

//! Task 4

/*- Ek variable → undefined
- Ek variable → null
- Dono ki values print karo
- Dono ka typeof print karo
- Dono ka Boolean print karo
- Comment mein likho → dono mein kya farq hai? */

let y;
let x = null;
console.table([y,x]);// undefined or null output ai ge 
console.log(typeof y,y);// undefined ai ga output or typeof dono 
console.log(typeof x, x);// object typeof ai ga or output null ai ga 
console.table([Boolean(y),Boolean(x)]);// Boolean dono ka false ai ga 1 main 
// value he nahi ha or dosre ko jan bhoj kar de he nahi 


