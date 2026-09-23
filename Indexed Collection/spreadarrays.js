//! Part i. Spread / Rest with Arrays

// Spread operator (...) ek array (ya iterable) ke elements ko individually "unpack" karta hai. Do main uses (Arrays ke context mein):


//? Copying — array ki naye reference wali copy banana
//? Merging — do ya zyada arrays ko ek mein combine karna


//! Real Code Example
console.log("===Spread Arrays===");
//? Copying

let hammadMarks = [89, 90, 83]; 
let subhanMarks = [...hammadMarks]; // New Independant Array

subhanMarks[0] = 100; // abhi subhan wale first index ke marks change ho ge khali 

console.log(subhanMarks); // 100, 90, 83
console.log(hammadMarks); // 89, 90, 83

//? Merging 

let group1 = ["Bilal", "Hamza", "Imran"]; 
let group2 = ["Faizan", "Fahad", "Ali"]; 
let wholeClass = [...group1, ...group2]; 

console.log(wholeClass); // group1 and 2 merged 

// Compare with old (reference) tarika:


let arr1 = [1, 2, 3]; 
let arr2 = arr1; 

arr2[0] = 90;
console.log(arr1); // 90, 2, 3
// reference same ha is lia arr1 main bhi changes ho gi 


//? Shallow Copy Concept 

const students = [{name: "Hammad", marks: 89}]; 

const studentCopy = [...students]; 

studentCopy[0].marks = 99; // ye shallow copy karta ha mean ke object khud copy nahi hota ha khali un ka reference copy hota ha or ye shared object ban jata ha 

console.log(studentCopy); // Hammad, 99
console.log(students); // will be same 


//! Practice Task Spread Arrays 

//? Task One 

console.log("===Task One==="); 

const bilalScores = [70, 85, 90]; 
const faizanScores = [...bilalScores]; 

faizanScores[0] = 100;

console.log(bilalScores); // 70 85 90
console.log(faizanScores); // 100, 84, 90

//? Task Two 

console.log("===Task Two==="); 

const weekdayTasks = ["Code", "Study"]; 
const weekendTasks = ["Rest", "Gym"];

const allTasks = [...weekdayTasks, "Meeting", ...weekendTasks];

console.log(allTasks);


//? Task Three 

console.log("===Task Three===");


const friends = [
    {name: "Hammad", city: "Abbottabad"}, 
    {name: "Ali", city: "Manshera"}
]; 

const copyFriends = [...friends];

copyFriends[0].city = "Balakot"; 

console.log(friends); 
console.log(copyFriends); 
console.log(copyFriends === friends); // false keuke spread array new array return karta ha 

console.log(copyFriends[0] === friends[0]); // true cuz dono objects ka reference same ha 


//! Part I Topic 2 Rest Parameters in Functions with Arrays.

// Rest parameter function definition mein ... use karke variable number of arguments ko ek array mein collect karta hai. Hamesha function parameters ka aakhri parameter hota hai.

//? Syntax

// function example(a, b, ...rest) {
// a aur b specific values lenge
// rest baaki sab kuch array mein lega
// }

//? Code Example
console.log("===Spread Arrays With Rest Parameters==="); 

function profileInfo(name, email, ... remainingInfo) {

    console.log("Name", name); 
    console.log("Email", email); 
    console.log("Remaining Info", remainingInfo);
}; 

profileInfo("Hammad", "hammad@gmail.com", "Pakistan", "KPK", "Abbottabad"); 


//? Rest Paremeter Hamesha function ka akhiri parameter hona chaia 



//! Combined Practice Tasks 

//? Task One (Rest Sum Function); 

console.log("===Task One===");


function totalMarks(...marks) {
    const total = marks.reduce((acc, crr) => {
        return acc + crr;
        
    }, 0);
    return total;
};

console.log(totalMarks(392, 842, 495));
console.log(totalMarks(80)); // 80


//? Task Two Rest + Normal Parameter Mix 

console.log("==Task Two==="); 

function classAverage(className, ...scores) {
    console.log("Class Name:", className); 
    const total = scores.reduce((acc, crr) => {
        return acc + crr;
        
    }, 0);
    const average = total / scores.length; 
    console.log(average);
    return total;
};

console.log(classAverage("Section B", 59,90, 95, 98, 84));


//? Task Three Spread + Rest Combined

console.log("===Task Three==="); 


let mathScores = [80, 90]; 
let scienceScores = [70, 85];

let mergedArray = [...mathScores, ...scienceScores];

function theTotalMarks(...allMarks) {
    const total = allMarks.reduce((acc, crr) => {
        return acc + crr
    }, 0);

    return total;
}; 

console.log(theTotalMarks(...mergedArray)); 


//! Mini Project 

console.log("===Mini Project==="); 


//? Part 1: addScores Function

function addScores(studentName, ...scores) {
    if(scores.length === 0) {
        console.log("No Score Available"); 
        return;
    };
    console.log("Student:", studentName); 
    console.log("Scores:", scores); 
    console.log("Highest Score:", Math.max(...scores));
}; 

//? Part 2: Merge karna

let bilalOld = [60, 70]; 
let bilalNew = [80, 90];

let combinedBilal = [...bilalOld, ...bilalNew]; 

addScores("Bilal", ...combinedBilal);

addScores("Hammad");