//! Practice Tasks

//? Task 1 — Phone Book System

// Ek phone book banao jisme:
// 1. 5 contacts daalo — name key, number value
// 2. Ek naya contact add karo .set() se
// 3. Ek contact delete karo .delete() se
// 4. Check karo — "Ali" exist karta hai?
// 5. forEach se poori phone book print karo
// 6. Total contacts print karo
// 7. Ek specific contact ka number nikalo .get() se

const phoneBook = new Map([
  ["hammad", "+92-3245469030"],
  ["waleed", "+92-3345399030"],
  ["usman", "+92-3445464030"],
  ["ehtisham", "+92-3445461030"],
  ["imran", "+92-3145469330"],
]);

phoneBook.set("faizan", "+92-3232454658"); // .set se 1 or contact add kia

phoneBook.delete("ehtisham"); // .delete se 1 contact delete kia ha

console.log(phoneBook.has("ali")); // false ai ga keuke ali exist nahi karta

// for each se print karna sab number ko

let count = 0;

phoneBook.forEach((number, name) => {
  console.log(`${name} => ${number}`);
  count++;
});

console.log(`Total Contacts: ${count}`); // total contact count kia yaha

console.log(phoneBook.get("hammad")); // specific contact nikala

//?  Task 2 — Inventory System karo! 💪

// 1. 4 products daalo — name key, {price, stock} value
// 2. forEach se har product print karo
// 3. Total inventory value nikalo — price * stock
// 4. Stock 10 se kam wale products print karo
// 5. Ek product ka stock update karo .set() se
// 6. .keys() se sirf product names print karo
// 7. Size print karo pehle aur update ke baad

const inventory = new Map([
  ["iphone", { price: 150000, stock: 12 }],
  ["dataCable", { price: 500, stock: 30 }],
  ["charger", { price: 1500, stock: 50 }],
  ["laptop", { price: 153900, stock: 9 }],
]);

let totalValue = 0;

inventory.forEach((data, name) => {
  console.log(`Product Name: ${name}`);
  console.log(`Price: ${data.price}`);
  console.log(`Stock: ${data.stock}`);
  totalValue += data.price * data.stock;
}); // for each se her product ka data print kia

console.log("=================================");
console.log(`Inventory Total Value: ${totalValue}`); // total value stock ki print ki yaha

// 10 se kam stock wale product print ho ge

inventory.forEach((data, name) => {
  if (data.stock <= 10) {
    console.log(`Product: ${name}`);
    console.log(`Stock: ${data.stock}`);
  }
});

inventory.set("charger", { price: 1500, stock: 100 });
console.log(inventory.get("charger")); // ab yaha stock change ho gia ha

// keys se sirf name print karna

console.log(inventory.keys()); // sirf keys print ho ge

inventory.forEach((value, key) => {
  console.log(`Only Key: ${key}`);
}); // loop se keys print karna

console.log(inventory.size); // last main size print kar dia

//! Task 3 — Student Grade System karo! 💪

// Nested Map banao — 3 students:
// har student mein: name, rollNo, subjects Map
// subjects mein: 5 subjects ke marks

// Phir:
// 1. forEach se har student ki info print karo
// 2. Har subject ka grade do
// 3. Total aur average nikalo
// 4. Overall grade do average se
// 5. Highest marks wala subject nikalo
// 6. Fail subjects count karo

// her student ke subjects ka nested maps

const student1Subject = new Map([
  ["math", 89],
  ["english", 95],
  ["physics", 71],
  ["chemistry", 62],
  ["biology", 56],
  ["urdu", 45],
]);

const student2Subject = new Map([
  ["math", 89],
  ["english", 99],
  ["physics", 79],
  ["chemistry", 82],
  ["biology", 46],
  ["urdu", 45],
]);

const student3Subject = new Map([
  ["math", 84],
  ["english", 65],
  ["physics", 51],
  ["chemistry", 82],
  ["biology", 76],
  ["urdu", 45],
]);

// ab her 1 student ka nested map

const student1 = new Map([
  ["name", "Ali Abdullah"],
  ["rollNumber", "ENG 21:02"],
  ["department", "English"],
  ["subject", student1Subject],
]);

const student2 = new Map([
  ["name", "Hammad Siddique"],
  ["rollNumber", "ISL 22:09"],
  ["department", "Islamic Studies"],
  ["subject", student2Subject],
]);

const student3 = new Map([
  ["name", "Danial"],
  ["rollNumber", "PHY 22:22"],
  ["department", "Physics"],
  ["subject", student3Subject],
]);

// ab in ke lia 1 parent map jis main tamam student ai ge

const studentMap = new Map([
  ["student1", student1],
  ["student2", student2],
  ["student3", student3],
]);

studentMap.forEach((studentValue, studentKey) => {
  console.log(`Student Name: ${studentValue.get("name")}`);

  console.log(`Roll Number: ${studentValue.get("rollNumber")}`);

  console.log(`Departmant: ${studentValue.get("department")}`);

  // ab yaha students ke subjects ko 1 variable main wrap kare ge

  const subjectMap = studentValue.get("subject");

  let subjectMarks = 0;
  let subjectCount = 0;

  subjectMap.forEach((mark, name) => {
    subjectMarks += mark;
    subjectCount++;

    if (mark >= 90) {
      console.log(`${name} => ${mark} Grade A+`);
    } else if (mark >= 80) {
      console.log(`${name} => ${mark} Grade A`);
    } else if (mark >= 70) {
      console.log(`${name} => ${mark} Grade B`);
    } else if (mark >= 60) {
      console.log(`${name} => ${mark} Grade C`);
    } else {
      console.log(`${name} => ${mark} Grade Fail`);
    }
  }); // yaha her subject ka grade or number print kia ha

  //  ab yaha total number or average print ho ga

  const average = subjectMarks / subjectCount;

  console.log("=====================");
  console.log(`Total Marks: ${subjectMarks}`); // total marks print ho ge each student ke

  console.log("====================");
  console.log(`Total Average: ${average}`); // tatal average print ho ge each student ki

  // ab yaha average base per Overall grade define ho ga with condition

  if (average >= 90) {
    console.log("Overall Grade: A+");
  } else if (average >= 80) {
    console.log("Overall Grade: A");
  } else if (average >= 70) {
    console.log("Overall Grade: B");
  } else if (average >= 60) {
    console.log("Overall Grade: C");
  } else if (average <= 50) {
    console.log("Overall Grade Fail");
  }

  //?   Highest marks wala subject nikalo

  let highestMarks = 0;
  let highesSubject = "";

  subjectMap.forEach((mark, subject) => {
    if (mark > highestMarks) {
      highestMarks = mark;
      highesSubject = subject;
    }
  });

  console.log(highestMarks);
  console.log(highesSubject);

  // fail count

  let failCount = 0;

  subjectMap.forEach((mark, subject) => {
    if (mark < 50) failCount++;
  });

  console.log(`Total Failed ${failCount}`);
});
