// ! Global Variables with const

const schoolName = "GPGC";

const totalSubjects = 5;

const passingMarks = 40;

console.table([schoolName, totalSubjects, passingMarks]);

// ! info of students using let

let studentName = "Farhan";

let rollNumber = 3959;

let city = "Peshawar";

console.table([studentName, rollNumber, city]);

// ! Marks in each subject

let mathMark = 66;

let englishMark = 53;

let biologyMark = 95;

let physicsMark = 85;

let computerMark = 59;

console.table([mathMark, englishMark, biologyMark, physicsMark, computerMark]);

// ! calculate marks and average of total marks 

{
    let totalMarks = mathMark + englishMark + biologyMark + physicsMark + computerMark;

    let average = totalMarks / 5;

    console.table([totalMarks,average]);
}

// ! now  print outside the block 


console.log(schoolName);
console.log(studentName);
console.log(city);