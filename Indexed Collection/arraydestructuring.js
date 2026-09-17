//! Part H: Array Destructuring


// Basic destructuring
// Default values, skipping elements
// Swapping variables using destructuring



//! Part H: Topic One Basic Destructuring

// Array destructuring ek syntax hai jo array ke elements ko unki position (index) ke hisaab se seedha variables mein assign karta hai, square brackets [] use karke left side pe.

//? Syntax Breakdown

// let [a, b, c] = [10, 20, 30];

// Left side: [a, b, c] — ye batata hai kitne variables banane hain aur kis order mein
// Right side: [10, 20, 30] — ye actual array hai
// Matching position se hoti hai, naam se nahi:
// a = index 0 = 10
// b = index 1 = 20
// c = index 2 = 30


//! Real Code Example
console.log("===Array Basic Destructuring===");

let tokens = [101, 102, 103]; 

let [hammadToken, waleedToken, hamzaToken] = tokens;

console.log(waleedToken); // 102
console.log(hammadToken); // 101
console.log(hamzaToken); // 103

//? Another Example Function se return hone wale array ko desturcture karna 


function getCoordinates(){

    return [33.3, 87.2];
}; 

let [latitude, longitude] = getCoordinates(); 

console.log(longitude); // 87.2
console.log(latitude); // 33.3


//! Practice Tasks — Basic Destructuring

//? Task One

console.log("===Task One==="); 

let friends = ["Hammad", "Fani", "Umair"]; 


let [bestFriend, justFriend, classFriend] = friends; 

console.log(bestFriend); // Hammad 
console.log(classFriend); // Umair 
console.log(justFriend); // Fani 

//? Task Two 

console.log("===Task Two===")


function getResult() {
    return ["Hammad", 530, true];
}; 

let [name, marks, isPassed] = getResult(); 

console.log(name); // Hammad
console.log(marks);  // 530
console.log(isPassed); // true
console.log(`The Student ${name} Got ${marks} Marks & is Passed? ${isPassed}`);


//! Part H, Sub-topic 2: Default Values in Destructuring

//? Syntax Breakdown
// let [roti, salan, drink = "paani"] = ["naan", "chicken karahi"];



//? Real Code Example
console.log("===Default Values In Destructuring===");

let order1 = ["naan", "qeema"]; 
let [roti1, salan1, drink1 = "Water"] = order1; // acha yaha uper order 1 main drink koi bhi mention nahi the to ham ne default use kia pani ko drink ke tor per take undefinef naw ai 


console.log(drink1); // Water
console.log(roti1); // naan 
console.log(salan1); //  qeema 

let order2 = ["Rogni Naan", "Nihari", "Pepsi" ]; 

let [roti2, salan2, drink2 = "Water"] = order2; // acha yaha ham ne default value bhi dia ha or uper order main bhi drink ko add kia ha to yaha per default value nahi ho gi keuke value already mojud ha 

console.log(drink2); // pepsi
console.log(roti2); // rogni Naan 
console.log(salan2) // Nihari 

// Important nuance: Default sirf undefined par trigger hoti hai  agar array mein explicitly undefined bhi likha ho, tab bhi default use hogi:

let arr = [5, undefined, 20];
let [a, b = 40, c] = arr;
console.log(b); // 40 (kyunke value undefined thi)

// Lekin agar null ho, default trigger nahi hoti  null ek "valid value" mana jata hai JS mein, undefined nahi:


let arr2 = [2, null, 283]; 
let [a2, b2 = 100, c2] = arr2; 
console.log(b2); // null he ai ga 


//! Practice Tasks  Default Values

//? Task One
console.log("===Task One===");

let studentMarks = [84, 98]; 
let [english, math, science = 0] = studentMarks; 

console.log(english); // 84
console.log(science); // 0 keuke abhi default value 0 di ha 
console.log(math); // 98


//? Task 2 (null vs undefined test):

console.log("===Task Two===");

let data = [10, null, 30, undefined]; 

let [a3, b3 = 28, c3, d3 = 15] = data; 

console.log(b3); // null he ai ga keuke null value pehle se di hui ha is lia default value skip ho jai gi 

console.log(d3); // 15 keuke default value undefined value per trigger hoti ha jab ke null per nahi hoti ha 


//? Task Three 

console.log("===Task Three==="); 

function getUserInfo() {
    return ["Ali", 23]; 
}; 


let [userName, userAge, userCity = "Abbottabad"] = getUserInfo(); 

console.log(userAge); // 23
console.log(userName); // Ali
console.log(userCity); // Abbottabad


//! Part H, Sub-topic 3: Skipping Elements
console.log("===Array Skipping Elements====");
//? Syntax Breakdown

// let [first, , third] = [10, 20, 30];


//! Real Code Example


let colors = ["Red", "Blue", "Green", "Orange"]; // let's say i want to skip Blue and Green 

let [firstColor, , , lastColor] = colors; // ab main ne beach wale do skip kar dia hain 

console.log(firstColor); // red 
console.log(lastColor); // Orange


//! Practice Tasks  Skipping Elements

console.log("===Practice Tasks Skipping Elements==="); 


//? Task One 

console.log("===Task One==="); 

const days = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];


let [, , , , holyDay1, , holyDay2] = days;

console.log(holyDay1); // friday 
console.log(holyDay2); // Sunday 

console.log(`I'm on leave on every ${holyDay1} & ${holyDay2} in Every Week`);


//? Task Two 

console.log("===Task Two==="); 

function getUserData() {
    return [101, "Hammad", 23, "Abbottabad", "0300-12345-12"];
};

let [, theName, , , number] = getUserData(); 

console.log(theName); // Hammad
console.log(number); // 0300 ... 

console.log(`The Number of ${theName} is: ${number}`);


//? Task 3 
console.log("===Task Three==="); 

let scores = [90, 85]; 

let [maths, , bonus = 10] = scores; 

console.log(maths); // 90
console.log(bonus); // 10


//! Part H, Sub-topic 4: Swapping Variables
console.log("===Variable Swapping===");


//? abhi ham bina destructure ke variable swap kare ge 


let student1 = "Hammad"; 
let student2 = "Faizan"; 
console.log("===Before Swaping"); 
console.log(student1); // Hammad
console.log(student2); // faizan 

let temp = student1; 
student1 = student2; 
student2 = temp;

console.log("===After Swapping Values==="); 

console.log(student1); // Faizan 
console.log(student2); // Hammad

// ye abhi in variables ke values ko swap karne ke lia hame alag se temporary variable banana para ha 



console.log("Swapping The Values Using Destructuring==="); 

let name1 = "Madhi"; 
let name2 = "Hadi"; 

console.log("===Before Swapping==="); 

console.log(name1); // Madhi
console.log(name2); // Hadi 


//? Now Swap the variable using Destructuring 

[name1, name2] = [name2, name1]; 

console.log("===After Swapping the Variable==="); 
console.log(name1); // Hadi
console.log(name2); // Madhi


//! Practice Tasks — Swapping

console.log("===Practice Task Swapping==="); 

//? Task One 

console.log("===Task One==="); 

let glass1 = "Milk"; 
let glass2 = "Water"; 

//? Now Swap these two variables values 

[glass1, glass2] = [glass2, glass1]; 

console.log(glass1); // Water 
console.log(glass2); // Milk


//? Task Two 

console.log("===Task Two==="); 

let seat1 = "Bilal"; 
let seat2 = "Faizan"; 
let seat3 = "Umar"; 

// Now swapping the three variable values seat1 value should be seat3 and seat 2 value should be seat 1 and seat 3 value should be seat 2 


[seat1, seat2, seat3] = [seat3, seat1, seat2]; 

console.log(seat1); // Umar
console.log(seat2); // Bilal
console.log(seat3); // Faizan


//? Task Three 

console.log("===Task Three==="); 


let range = [50, 20]; // yahan wrong calculation ha 50 bara ha 20 chota 


if(range[0] > range[1]) {
    [range[0], range[1]] = [range[1], range[0]];
}; 

console.log(range[0]); // 20 
console.log(range[1]); // 50

console.log(`Min Num: ${range[0]} & The Max Num: ${range[1]}`);

//! Mini Project

console.log("===Mini Project==="); 

function getStudentProfile() {
    return [12, "Hammad", 90, 84, 98, undefined];
}; 


let [rollNum, studentName, , subjectMarks2, subjectMarks3, studentCity = "Abbottabad"] = getStudentProfile();

let oldRoll = rollNum;
let newRoll = "22:02"; 

[oldRoll, newRoll] = [newRoll, oldRoll]; 

console.log(studentName); // Hammad

console.log(rollNum); // 12
console.log(studentCity); // Abbottabad
console.log(subjectMarks2); // 84
console.log(subjectMarks3); // 98

console.log(oldRoll); // 22: 02
console.log(newRoll); // 12

console.log(`Roll No: ${rollNum}, Name: ${studentName}, Marks: ${subjectMarks2} & ${subjectMarks3}, City: ${studentCity}, New Roll: ${oldRoll}`); 