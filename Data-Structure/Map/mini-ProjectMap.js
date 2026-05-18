//! Neste Map main student Ke subject with Marks


const student1Subject = new Map([
    ["math", 90],
    ["physics", 89],
    ["chemistry", 99],
    ["biology", 76],
    ["computerScience", 78]
]);

const student2Subject = new Map([
    ["math", 70],
    ["physics", 69],
    ["chemistry", 79],
    ["biology", 56],
    ["computerScience", 48]
]);

const student3Subject = new Map([
    ["math", 60],
    ["physics", 89],
    ["chemistry", 99],
    ["biology", 46],
    ["computerScience", 88]
]);

const student4Subject = new Map([
    ["math", 90],
    ["physics", 59],
    ["chemistry", 39],
    ["biology", 56],
    ["computerScience", 68]
]);

// ab yaha student five ka data banaya keuke task main abhi 1 student .set se add karna ha but data custom banana pare ga 
const student5Subject = new Map([
    ["math", 30],
    ["physics", 59],
    ["chemistry", 39],
    ["biology", 56],
    ["computerScience", 78]
]);

//! ab student ke details ke lia map 

const student1 = new Map([
    ["name", "Hammad Siddique"],
    ["age", 23],
    ["rollNo", "ISL 22:02"],
    ["department", "Islamic Studies"],
    ["marks", student1Subject]
]);

const student2 = new Map([
    ["name", "Usama Zahoor"],
    ["age", 25],
    ["rollNo", "ISL 22:44"],
    ["department", "Islamic Studies"],
    ["marks", student2Subject]
]);

const student3 = new Map([
    ["name", "Mudassar Shabeer"],
    ["age", 27],
    ["rollNo", "ISL 22:20"],
    ["department", "Islamic Studies"],
    ["marks", student3Subject]
]);

const student4 = new Map([
    ["name", "Usman Rehman"],
    ["age", 22],
    ["rollNo", "ISL 22:32"],
    ["department", "Islamic Studies"],
    ["marks", student4Subject]
]);

const student5 = new Map([
    ["name", "Imran Khan"],
    ["age", 22],
    ["rollNo", "ISL 22:22"],
    ["department", "Islamic Studies"],
    ["marks", student5Subject]
]);
//! ab in students ko parent map main wrap karo ga 

const classMap = new Map([
    ["student1", student1],
    ["student2", student2],
    ["student3", student3],
    ["student4", student4]
]);

classMap.delete("student4"); // ab usman rehman delete ho gia ha 
classMap.set("student5", student5); // ab yaha new student add kia ha jis ka data uper add kia ha 


let bestStudent = "";
let bestAvg = 0;
let worstAvg = Infinity;
let worstStudent = "";
let totalMarkSum = 0;
let totalClassCount = 0;

classMap.forEach((studentValue, studentKey) => {
    console.log(`=======${studentKey}========`);
    console.log(`Student Name: ${studentValue.get("name")}`);
    console.log(`Age: ${studentValue.get("age")}`);
    console.log(`Roll Number: ${studentValue.get("rollNo")}`);
    console.log(`Department: ${studentValue.get("department")}`);


    const markMap = studentValue.get("marks");

    let totalMarks = 0;
    let totalCount = 0;
    

    markMap.forEach((mark, subject) => {
        totalMarks += mark;
        totalCount++;

        if (mark >= 90) {
            console.log(`${subject} => ${mark} Grade A+`);
        } else if (mark >= 80) {
            console.log(`${subject} => ${mark} Grade A`);
        } else if (mark >= 70) {
            console.log(`${subject} => ${mark} Grade B`);
        } else if (mark >= 60) {
            console.log(`${subject} => ${mark} Grade C`);
        } else if(mark >= 50) {
            console.log(`${subject} => ${mark} Grade D`);
        } else {
            console.log(`${subject} => ${mark} Grade Fail`)
        };
    }); // yaha number print ho ge with grade 

    // ab yaha total number or overall grade or average print ho gi 

    const average = totalMarks / totalCount;


    console.log("====================");
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Total Average: ${average}`);
    
    // ab yaha se overall grade print ho ga 

    if (average >= 90) {
        console.log("Overall Grade A+");
    } else if(average >= 80) {
        console.log("Overall Grade A");
    } else if(average >= 70) {
        console.log("Overall Grade B");
    } else if(average >= 60) {
        console.log("Overall Grade C");
    } else if(average >= 50) {
        console.log("Overall Grade D");
    } else {
        console.log("Overall Grade Fail");
    };

    //? ab highest marks or best subject nikalo each student 

    let highestMarks = 0;
    let bestSubject = ""

    markMap.forEach((mark, subject) => {
        if(mark > highestMarks) {
            highestMarks = mark;
            bestSubject = subject;
        };
    });

    console.log(`Highest Marks ${bestSubject} => ${highestMarks}`);


    //? Ab each student ke total Fail Count karna 

    let failCount = 0;

    markMap.forEach((mark, subject) => {
        if (mark < 50) {
            failCount++
        };
    });

    console.log(`Subject Failed: ${failCount}`);


    //? Ab class Summary yaha likho ga or phir bahir un ka output karo ga 

    // class ka best student nikalna 

    if (average > bestAvg) {
        bestAvg = average;
        bestStudent = studentValue.get("name");
    };

    // ab class ka wrost student nikalna 

    if (average < worstAvg) {
        worstAvg = average;
        worstStudent = studentValue.get("name");
    };

    // ab class ki total average nikalna 

    totalClassCount++
    totalMarkSum += average;
});


//? Ab yaha class ke summary print ho gi 

console.log("========Class Summary========");
console.log(`Best Student: ${bestStudent} Average: ${bestAvg}`);
console.log(`Worst Student: ${worstStudent} Average: ${worstAvg}`);
console.log(`Total Class Average: ${totalMarkSum / totalClassCount}`);

// 1. 4 students ka data store karo:
//    — name, age, rollNo, department
//    — 5 subjects ke marks (nested Map)

// 2. Yeh sab features banao:

//    ✅ Har student ki complete info print karo
//    ✅ Har subject ka grade do
//    ✅ Total + Average nikalo
//    ✅ Overall grade do
//    ✅ Highest marks wala subject nikalo
//    ✅ Fail subjects count karo
//    ✅ Class ka best student nikalo — sabse zyada average
//    ✅ Class ka worst student nikalo — sabse kam average
//    ✅ Poori class ka overall average nikalo
//    ✅ Ek student ko .delete() se remove karo
//    ✅ Naya student .set() se add karo


// ===== YEH SARE VARIABLES FOREACH SE PEHLE BANAO =====

// best student ke liye 0 se start karo kyuke koi bhi average 0 se zyada hogi
// jab bhi koi student ki average isse badi milegi, update hota rahega
// let bestAvg = 0;
// let bestStudent = "";

// worst student ke liye Infinity se start karo
// Infinity matlab "bohot bada number" — pehli value hamesha isse choti hogi
// isliye pehle student par hi update ho jayega, phir compare karta rahega
// let worstAvg = Infinity;
// let worstStudent = "";

// class average ke liye — har student ki average yahan jama hoti rahegi
// baad mein total students se divide karenge
// let totalMarkSum = 0;
// let totalClassCount = 0;

// ===== FOREACH KE ANDAR — har student par yeh karo =====

// har student ki average nikaalo pehle
// const average = totalMarks / subjectCount;

// best student — agar current student ki average abhi tak ki best se zyada hai
// if (average > bestAvg) {
//     bestAvg = average;               // naya best set karo
//     bestStudent = studentValue.get("name"); // us student ka naam yaad rakho
// }

// worst student — agar current student ki average abhi tak ki worst se kam hai
// if (average < worstAvg) {
//     worstAvg = average;              // naya worst set karo
    // worstStudent = studentValue.get("name");
// }

// class average ke liye har student ki average jama karte jao
// totalMarkSum += average;
// totalClassCount++;  // student count barhao

// ===== FOREACH KE BAHAR — class summary print karo =====

// totalMarkSum mein sab students ki averages jami hain
// totalClassCount se divide karo to poori class ki average milegi
// console.log(`Total Class Average: ${totalMarkSum / totalClassCount}`);
// console.log(`Best Student: ${bestStudent} => Average: ${bestAvg}`);
// console.log(`Worst Student: ${worstStudent} => Average: ${worstAvg}`);