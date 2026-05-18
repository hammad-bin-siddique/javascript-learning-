// 3 students ka Map banao — har student ke andar:
// name, age, or subjects ka nested Map
// subjects mein — math, english, science, urdu, physics ke marks

// Phir loop se yeh sab karo:
// 1. Har student ka naam print karo
// 2. Har student ke har subject ka mark print karo
// 3. Har student ka total calculate karo
// 4. Har student ka average calculate karo
// 5. Average ke hisaab se grade do:
//    90+ = A+
//    80+ = A
//    70+ = B
//    60+ = C
//    60 se kam = Fail ❌

// Expected Output kuch aisa hoga:
// ================================
// Student: Hammad
// Age: 22
// --------------------------------
// Math: 85
// English: 72
// Science: 91
// Urdu: 65
// Physics: 78
// --------------------------------
// Total: 391
// Average: 78.2
// Grade: B
// ==========================

// sab se pehle marks ke nested maps

const student1Marks = new Map([
  ["math", 95],
  ["urdu", 85],
  ["physics", 69],
  ["english", 84],
  ["science", 94],
]);

const student2Marks = new Map([
  ["math", 65],
  ["urdu", 85],
  ["physics", 99],
  ["english", 74],
  ["science", 54],
]);

const student3Marks = new Map([
  ["math", 89],
  ["urdu", 95],
  ["physics", 75],
  ["english", 64],
  ["science", 54],
]);

// ab her 1 student ka parent map

const student1 = new Map([
  ["name", "Hamza Babar"],
  ["age", 23],
  ["marks", student1Marks],
]);

const student2 = new Map([
  ["name", "Waleed Awan"],
  ["age", 24],
  ["marks", student2Marks],
]);

const student3 = new Map([
  ["name", "Fahad Shafeeq"],
  ["age", 29],
  ["marks", student3Marks],
]);

// ab in ke lia 1 parent map jis main tamam student ko wrap kare ge

const classMap = new Map([
  ["student1", student1],
  ["student2", student2],
  ["student3", student3],
]);

// ab  classmap wale map ko loop kare ge

for (const [studentKey, studentValue] of classMap) {
  console.log(studentKey); // yaha per student ka index show ho ga ke kn sa student ha like 1 2 etc
  console.log(studentValue.get("name")); // yaha ham se her student ke name wali key ko target kia ha
  console.log(studentValue.get("age")); // yaha ham ne her student ke age ko target kia ha

  const marksMap = studentValue.get("marks"); // ab yaha ham se student ke marks value ko 1 variable ke andar wrap kia ha

  // abhi ham total or count ke variable banai ge

  let total = 0; // 0 se start ho ge
  let count = 0; // ye bhi 0 se start ho ga or 1 1 increase ho ga

  // abhi ham ne jo variable marks ka banaya tha ham us ko loop main call kare ge

  for (const [subject, marks] of marksMap) {
    total += marks; // yaha ab total ke sath marks add hote jai ge jab tak loop end naw ho mean ke jab tak akhiri subject ke marks calculate naw ho jai
    count++; // or yaha jab tak marks add hote jai ge 1 1 number count hota jai ga mean ke agar 5 subject hain to 5 count ho ge

    if (marks >= 90) {
      console.log(`${subject} => ${marks} Grade A+`);
    } else if (marks >= 80) {
      console.log(`${subject} => ${marks} Grade A`);
    } else if (marks >= 70) {
      console.log(`${subject} => ${marks} Grade B`);
    } else if (marks >= 60) {
      console.log(`${subject} => ${marks} Grade C`);
    } else if (marks >= 50) {
      console.log(`${subject} => ${marks} Grade Failed`);
    }
  }

  // ab yaha average nikale ge

  const average = total / count;

  console.log("----------------");
  console.log(`Total Marks: ${total}`); // yaha per total marks print ho ge
  console.log("-----------------");
  console.log(`Total Average: ${average}`); // yaha per average print kia ha

  // yaha ab condition lagai ge overall kitni average gain ki ha

  if (average >= 90) {
    console.log("Overall Grade A+");
  } else if (average >= 80) {
    console.log("Overall Average A");
  } else if (average >= 70) {
    console.log("Overall Grade B");
  } else if (average >= 60) {
    console.log("Overall Grade C");
  } else if (average >= 50) {
    console.log("Overall Grade Fail");
  }
}
