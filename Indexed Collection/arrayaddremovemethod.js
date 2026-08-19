//! Arrays Part B Add & Removing Methods 

//? Part B — Topic 1: push()

console.log("===Topic One Push()===");

//  Push() Array ke end main 1 ya 1 se ziada elements add karta ha 

let vichele = ["Honda", "Civic", "Tesla"];

vichele.push("Alto"); // ab alto Add ho gia array main last per 

console.log(vichele); 
console.log(vichele[vichele.length - 1]); // Alto jo push se add kia tha end main add ho gia ha 

//! Important Points


// push directly main array main changes karta ha mean ke ye new array return nahi karta ha  

//? For example 

let newVichele = vichele.push("Parado"); 

console.log(vichele); // ab yaha is vichle main bhi parado add ho gia ha 
console.log(newVichele); // ye new length return karta ha ab total 5 cars hain 

//? Real Life Example 

let cart = ["Book", "Pen", "Marker"];

cart.push("Geomatry Box"); 

console.log(cart); // 4 items ho ge 
console.log(cart.length); // 4


//? Part B — Topic 2: pop()

console.log("===Topic Two Push===");


//  pop array ke last element ko remove karta ha or us ko return karta ha 

let students = ["Hammad", "Bilal", "Faizan", "Imran"];
console.log(students.length); // 4

let removedStudent = students.pop(); // Imran ko remove kar dia ha or pop removed element ko return karta ha 
console.log(`After Pop Length: ${students.length}`); // 3


//! Important Points

// 1  pop bhi orignal array main work karta ha yani orignal array se remove elemnent ko return karta ha 



// 2 or agar array khali ho to pop undefined return karta ha error nahi deta ha 


let empty = []; 

let result = empty.pop(); 
console.log(result); // undefiend 
console.log(empty); // no error khali array brackets 



// 3 ye sirf last se call hone per sirf 1 element remove kar sakta ha push ke tara nahi ke multiple item add karta ha ye sirf 1 item remove karta ha 


//? Real World Use Case Broser History (Back Button)

let qanadeel = ["home", "about", "courses", "contact"]; // acha abhi ham is webiste ke pages khol rahe hain 

// user ne back button dabaya 

let lastPage = qanadeel.pop(); // contact 

console.log(`Last Page Was: ${lastPage}`); // contact 

console.log(qanadeel); // home about courses ab contact nahi ho ga end main 


//? Part B — Topic 3: shift()


console.log("===Topic Three Shift==="); 

// ye method start se element ko removed karta ha or us ke value return karta ha pop ke tara lekin ye is ke sath sath baki elements ke index per bhi asar karta ha jis se pure array ya stack ke andar ke elements apni jaga se shift hote hain 

let line = ["ali", "bilal", "imran"]; 
console.log(line.length); 3
let removedPerson = line.shift(); 
console.log(removedPerson); // ali start se nikal gia 
console.log(line.length); // 2

//! Important Points

//  shift() orignal array main change karta ha pop ke jese but start se or baki elements bhi re index hote hian 


let shiftArr = [1, 2, 3, 4]; 

// 1= index 0 2 index 1 3 index 2 4 index 3
console.table(shiftArr);
shiftArr.shift(); // 1 nikla 

// now 2 index 0 3index 1 or 4 index 2 
console.table(shiftArr); 

// Empty array per shift bhi undefined return karta ha jese pop karta tha 

let shiftEmpty = [];

console.log(shiftEmpty.shift()); // undefined 


//? Real-World Example — Queue System (Token Counter)


let tokenSystem = ["Token#1", "Token#2", "Token#3"]; 

let ServingCustomore = tokenSystem.shift(); // Token#1

console.log(`Now Serving: ${ServingCustomore}`); // Token#1
console.log("Remaining Customers:",  tokenSystem); // token 2 and token 3 


//? Part B — Topic 4: unshift()

console.log("===Topic 4 Unshift()==="); 

// unshift method push ke tara ha but ye last ke bajai start main element ko add karta ha or bake element reindex hote hain 

let bankLine = ["Ali", "Bilal", "imran"]; 
console.table(bankLine); 

bankLine.unshift("Hammad"); // Hammad ab start main add ho gia ha or hammad ali ke bajai ab hammad ka index 0 ha or ali 1 index per shift ho gia ha 
console.table(bankLine); 


//! Important Points

// unshift() bhi orignal array ko change karta ha push ke tara new lenght return karta ha or multiple items bhi add kar sakte ho unshift se or sab elements reindex hote hain 


let unshiftArr = [3, 4, 5, 6]; 
console.log(unshiftArr.length); // 4
console.table(unshiftArr); // 3 0 per 4 1 per and so on 
unshiftArr.unshift(1, 2); // start main 2 element add hue 

console.table(unshiftArr); // abhi 0 pe 1 or 1 per 2 and so on 
console.log(unshiftArr.length); // 6