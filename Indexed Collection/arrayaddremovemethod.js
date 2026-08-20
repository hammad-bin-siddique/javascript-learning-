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


//? Real-World Example — Priority Queue (Emergency Case)


let patientQueue = ["Bilal", "Hamza", "Umair"];

// ab emergency patient ha us ko sab se ziada priority mile ge 

patientQueue.unshift("Emergency: Faizan"); // ab ye faizan first number mean ke 0 index per ho ga 

console.log(patientQueue); 


//? Part B — Topic 5: splice()

console.log("===Topic 5 Splice()===");

//splice sab se powerful method ha array main ye kis bhi index se delete replace kar sakta ha ye flexible ha 

//? Syntax

//! array.splice(startIndex, deleteCount, item1, item2);

// is main 3 parameters hain
//? Start Index: Ke mean ke kaha se start karna ha mean ke kn se index main change ya delete karna ha 

//? Delete Count: Mean ke us specific index se kitne elements delete karne hain 0 bhi ho sakta ha 

//? addition: mean ke new element add kar sakte hain ye optional ha 



//? Use Case 1 Sirf Delete Karna 

let deleteArr = [1, 2, 4, 3, 4, 5];  // ab yaha 4 ke position sahi nahi ha is lia us ko delete kare ge splice method se 
console.log(deleteArr);

deleteArr.splice(2, 1);
console.log(deleteArr); // ab yaha beach main 2 index se 4 remove ho gia ha 


//? Use Case 2: Sirf Insert Karna (deleteCount = 0)

let insertArr = [1, 2, 3, 6, 7, 8]; // ab is array main 3 ke bad direct 6 ha beach main ham abhi 4 or 5 add kare ge splice se 
console.log(insertArr);

insertArr.splice(3, 0, 4, 5); // ab 4 or 5 add kia ha or 3 index se start lia ha 

console.log(insertArr); // ab 3 ke bad 4 or 5 bhi ho ge


//? Use Case 3: Remove + Replace Ek Saath

let removeReplaceArr = [1, 2, 3, 4, 9, 8, 9, 8, 9, 10]; // ab is array main 4 ke bad 9 8 9 sahi nahi lag rahe hain ham une hata kar 5 6 7 add kare ge 

console.log(removeReplaceArr); 

removeReplaceArr.splice(4, 3, 5, 6, 7); // abhi ham  ne 4 index se start kia or 3 element ko remove kia ha or 5 6 7 ko un ke jaga replace kia ha 
console.log(removeReplaceArr); 


//! Important Points
//  - splice() original array main direct change karta ha 
//  - return value main 1 new array return karta ha jis main removed item hote hain 
// - negetaive index bhi use kar sakte hian end se count karne ke lia 



//? Return value

let returnArr = [1, 2, 4, 3]; 

let removed = returnArr.splice(2, 2); 
console.log(returnArr); // 1 2
console.log(removed); // 4 3

//? Negative index

let negArr = [1, 2, 3, 4, 6]; 
let indexArr = negArr.splice(-1, 1); // last wala 6 delete ho jai ga 
console.log(indexArr); 
console.log(negArr);

//? Real-World Example — Playlist Editor

let playlist = ["Ride It", "Pal Pal", "Faded", "Love Me Like You Do"]; 

// user ko hindi song pasand nahi ha is lie wo pal pal ko replace kare ga english sone ke sath 

playlist.splice(1, 1, "Ignite"); // Pal pal song ko Ignite song se badal dia ha 

console.log(playlist); 


//? Part B — Topic 6: slice()


// slice() array ka ek portion (copy) nikalta hai — bina original array ko chuye (mutate kiye).

//? Syntax

// array.slice(startIndex, endIndex)

// startIndex → kahan se copy start karni hai (included)
// endIndex → kahan tak copy karni hai (excluded  yani ye wala index shamil nahi hota)

//? Basic Example: 
console.log("===Topic 6 Slice() Method===");

let sliceArr = ["Faizan", "Bilal", "Umair", "Farhan", "Hammad"];

let sliced = sliceArr.slice(1, 3); // yaha bilal or umair ke copy nikle ge bilal index 1 per ha wo included ho ga or farhan index 3 per ha wo included nahi ho ga
console.log("Basic Example:", sliced);


//! Special Cases

//? Agar end index naw to start index se le kar end tak copy nikalta ha 

let sliced2 = sliceArr.slice(2); // Umair se end tak copy kare ge 

console.log("Start Index To The End:", sliced2);


//? Negative index bhi working ha end se count karna 

let sliced3 = sliceArr.slice(-3); // ye end se last three element ke copy nikale ge 
console.table(["Copy From Negetive Index:", sliced3]); // Umair Farhan Hammad


//? Agar just slice likho or koi value naw do to pure array ke copy nikal deta ha 

let copySlice = sliceArr.slice(); // koi value bhi nahi di 

console.log("Full Array Copy:", copySlice); 
console.table([copySlice]);


//? Real-World Example  position holder student nikalna or failed student nikalna 


let allStudents = ["Ali", "Sara", "Hammad", "Bilal", "Imran", "Faizan", "Fani", "Daniyal", "Waleed"]; 

let top3 = allStudents.slice(0, 3); // Ali Sara Hammad
let last3 = allStudents.slice(-3); // Fani Daniyal Waleed
let averageStudents  = allStudents.slice(3, 6); // 6 fani excluded ha or bilal se le kar faizan tak average students hain 

console.table([top3]);
console.table([last3]); 
console.table([averageStudents]);


//! Combined Practice Tasks

//? Task 1 — Playlist Manager:
console.log("===Task One===");

let taskPlaylist = ["Ride it", "Faded", "Without Me", "Lonely"];

taskPlaylist.push("Love Me Like You Do");
taskPlaylist.unshift("Song Intro:");
let removedSong = taskPlaylist.pop(); // Love Me like you Do nikal gia 
taskPlaylist.splice(2, 0, "Burn"); // ab ye ride it ke bad song add ho gia ha 

console.log("Playlist:", taskPlaylist); // song intro ride it faded burn without me lonely 


//? Task 2 — Guest List Cleanup:

console.log("===Task Two Guest List Cleaner===");

let guests = ["Ahmed", "Zara", "Uninvited1", "Uninvited2", "Bilal", "Sara"];


guests.splice(2, 2);
let vipGuests = guests.slice(0, 2); // pehle do vip guests ko alade kar dia ha 

console.log("Original Guests:", guests); // is main uninvited  1 2 nahi ho ge wo nikal dia ha baki sab ho ge 

console.log("Vip Guests:", vipGuests); // Ahmed Zara 


//? Task 3 — Undo Feature
console.log("===Task Three Undo System===");

let actions = ["Open File", "Edit Text", "Save File"];
console.log("Actions At Start:", actions);

actions.push("Print File", "Close File"); // 2 action or kia user ne 
console.log("After Two Push:", actions)



let undoneAction = actions.pop(); // Close File nikal gia 
console.log("After Undo the Action:", actions); // Close file nahi ho ga 
console.log("Undo:", undoneAction); // Close File


//! Mini Project — "Class Attendance & Roll Call System"

console.log("===Mini Project===");

let studentInClass = ["Hammad", "Ali", "Subhan", "Wasib", "Azan", "Bilal"];

let newStudent = studentInClass.push("Faizan"); // New Student End main add ho gia ha 

console.log(newStudent); // 7 ye new length return karta ha 

let transferStudent = studentInClass.unshift("Madhi"); // Madhi migration kar ke aya ha first main add kia ha 

let dropoutStudent = studentInClass.splice(3,1); // Subhan ko dropout kar dia ha 
let firstRowStudent = studentInClass.slice(0,3); // start index include hota ha or last index nahi so 0 1 1 2 2 3 

console.log("Dropout Student:", dropoutStudent); // Subhan
console.log("Total Students:", studentInClass.length); // 7 Subhan Nikal gia ha 

console.log("First Row Student:", firstRowStudent); // Madhi Hammad Ali
console.table([studentInClass]); 