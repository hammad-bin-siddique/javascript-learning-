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

//! ab in students ko parent map main wrap karo ga 

const classMap = new Map([
    ["student1", student1],
    ["student2", student2],
    ["student3", student3],
    ["student4", student4]
]);

console.log("======School Mangement System======");

classMap.forEach((studentValue, studentKey) => {
    console.log(`=====${studentKey}=====`);
    console.log(`Student Name: ${studentValue.get("name")}`);
    console.log(`Age: ${studentValue.get("age")}`);
    console.log(`Roll Number: ${studentValue.get("rollNo")}`);
    console.log(`Deparetmen: ${studentValue.get("department")}`);

    // ab marks ko 1 variable main wrap kare ge 

    const markmap = studentValue.get("marks");

    let totalmarks = 0;
    let totalCount = 0;


    markmap.forEach((mark, subject) => {
        totalmarks += mark;
        totalCount++;
        if (mark >= 90) {
            console.log(`${subject} => ${mark} Grade A+`);
        } else if (mark >= 80) {
            console.log(`${subject} => ${mark} Grade A`);
        } else if (mark >= 70) {
            console.log(`${subject} => ${mark} Grade B`);
        } else if (mark >= 60) {
            console.log(`${subject} => ${mark} Grade C`);
        } else {
            console.log(`${subject} => ${mark} Grade Fail`);
        };
    });

    console.log("==========================");
    console.log(`Total Numbers: ${totalmarks}`); // total number nikale each student ke
    console.log(`Total Average: ${totalmarks / totalCount}`); // average nikali each student ki 

    // overall grade 

    const average = totalmarks / totalCount;

    if (average >= 90) {
        console.log("Overall Grade A+");
    } else if (average >= 80) {
        console.log("Overall Grade A");
    } else if (average >= 70) {
        console.log("Overall Grade B");
    } else if (average >=60) {
        console.log("Overall Grade C");
    } else {
        console.log("Overall Grade Fail");
    };

    // highest Mark wala subject 

    let highestMarks = 0;
    let bestSubject = "";

    markmap.forEach((mark, subject) => {
        if(mark > highestMarks) {
            highestMarks = mark;
            bestSubject = subject;
        };
    });

    console.log(`Best Subject: ${bestSubject} => ${highestMarks}`);

    // fail count karna 

    let failCount = 0;

    markmap.forEach((mark, subject) => {
        if (mark < 50) failCount++;
    });

    console.log(`Total Fail Subject: ${failCount}`);

    console.log("======Class Summary======");

    console.log(`Total Student: ${classMap.size}`);

    // best student or best average of student 

    let bestAvg = 0;
    let bestStudent = "";

    markmap.forEach((mark, subject) => {
        if (average > bestAvg) {
            bestAvg = average;
            bestStudent = studentValue.get("name");
        };
    });

    console.log(`Best Student: ${bestStudent} Average: ${bestAvg} `);

    let totalClassAverage = 0;
    let studentCount = 0;

    markmap.forEach((mark, subject) => {
        totalClassAverage += average;
        studentCount++;
    });

    console.log(`Total Class Average: ${totalClassAverage / studentCount}`);

});




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

