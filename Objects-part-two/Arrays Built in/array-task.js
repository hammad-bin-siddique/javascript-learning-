//! Task 1 — Shopping Cart
// Ek empty cart banao. Phir:

// push se 3 items add karo
// unshift se ek VIP item start mein daalo
// pop se last item hatao aur print karo ki kya hata
// Final cart print karo

const cart = []; // empty cart ha pehle
cart.push("Bag","Iphone","Laptop"); // is main 3 item push kia
cart.unshift("VIP Gaming PC"); // ab main ne 1 vip thing add ki cart main 
const remove = cart.pop(); // ab main ne end se laptop remove kar dia 
console.log(cart); // final ka output print kar dia 

//! Task 2 — Student List
// indexOf se "Sara" ki position nikalo
// includes se check karo "Hamza" hai ya nahi
// slice se sirf beech ke 3 students nikalo (index 1 se 3 tak)
// splice se "Ahmed" ki jagah "Bilal" rakho

let students = ["Ali", "Ahmed", "Sara", "Hina", "Usman", "Zara"];
console.log(students.indexOf("Sara")); // yaha sara ka index batai ga jo ke 2 ha 
console.log(students.includes("Hamza")); // yaha check kia ke hamza ha ke nahi false ai ga nahi ha 
console.log(students.slice(1,3)); // yaha slice kia 1 se 3 tak ki copy ki
console.log(students.splice(1,1,"Bilal")); // yaha ahmed ke jaga bilal ko add kia 
console.log(students); // or yaha final output ko print kia 

//! Task 3 — Numbers Game
// reverse karo
// join se " | " separator ke saath string banao
// Pehle aur baad ka typeof check karo

let nums = [5, 3, 8, 1, 9, 2, 7];
nums.reverse(); // yaha reverse kia
console.log(typeof nums, nums); // yaha typeof check kia 
console.log(typeof nums.join(" | "), nums.join(" | ")); // yaha per typeof bhi kia or join bhi or ye array ab string ban gia ha 

//! Task 4 — Nested Array
// flat() se sab students ek array mein nikalo
// Total students count karo (length)
// includes se check karo "Hina" exist karti hai ya nahi

let classes = [
    ["Ali", "Ahmed", "Bilal"],
    ["Sara", "Hina", "Zara"],
    ["Usman", "Hamza", "Kashif"]
];

console.log(classes.flat(Infinity)); // yaha per sab nested arrays ko set kia
console.log(classes.length); // yaha length ka pata kia ke kitni ha 3 ai gi keuke 3 nested arrays hain
console.log(classes.includes("Hina")); // yaha hina ko  check kia ke wo exit karti ha ke nahi false  ai ga keuke hina andar chup gai ha top level per nahi ha 
let allStudent = classes.flat();
console.log(allStudent.includes("Hina")); // ab true ai ga keuke ab top level cover nahi ho ga blke pura array ho ga
console.log(allStudent.length); // yaha per 9 ai gi ab length all level per dhonde gi mean ke inner ko bhi count kare ga
//! Task 5 — Mix Sab Kuch
// Array.isArray se check karo yeh array hai ya nahi
// flat(Infinity) se poora seedha karo
// fill(0, 0, 3) se pehle 3 slots zero karo

let data = [1, [2, 3], [4, [5, 6]], 7];
console.log(Array.isArray(data)); // yaha check kia k array ha ya nahi true ai ga
console.log(data.flat(Infinity)); // yaha flat kar ke sab ko sahi kia
console.log(data.fill(0,0,3)); // yaha first main value 0 di or phir 0 se index start kia or phir 3 tak 0 v
