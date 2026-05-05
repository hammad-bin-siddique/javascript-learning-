// Step 1 — Array Banao
// Array.of() se 5 students ke marks banao

const studentMarks = Array.of(86, 84, 59, 90, 80); // student Marks banai array.of se
console.log(studentMarks);

// Step 2 — Convert Karo
// Apne sheher ka naam Array.from() se letters mein toddo

let city = "Abbottabad";
let letter = Array.from(city);
console.log(letter);

// Step 3 — Add Karo
// push() se 2 naye marks add karo
// unshift() se ek VIP mark shuru mein add karo

studentMarks.push(79, 59); // push se 2 marks or add kia
console.log(studentMarks);

studentMarks.unshift(99); // vip marks start main add kia
console.log(studentMarks);

// Step 4 — Nikalo
// pop() se last mark nikalo
// shift() se pehla mark nikalo

let remove = studentMarks.pop();
console.log(remove); // end se hata dia 80

let removeFirst = studentMarks.shift();
console.log(removeFirst); // start se bhi hata dia

// Step 5 — Dhundho
// indexOf() se koi mark dhundho
// includes() se check karo koi mark hai ya nahi

console.log(studentMarks.indexOf(90)); // index  is ka three ai ga keuke start se pehle wala hataya hua unshift se to 0 se start kare to ye 4 number per ha

console.log(studentMarks.includes(59)); // true ai ga keuke mojod ha

// Step 6 — Copy Nikalo
// slice() se beech ke 3 marks nikalo

console.log(studentMarks.slice(1, 4)); // 84 59 90 ai ga

// Step 7 — Transform Karo
// map() se har mark mein 10 bonus add karo

let bonusMarks = studentMarks.map(function (studentMarks) {
  return studentMarks + 10;
});
console.log(bonusMarks);

// Step 8 — Chhanno
// filter() se sirf 80+ marks wale nikalo

let topMarks = studentMarks.filter(function (x) {
  return x > 80;
});
console.log(`80 Above Marks: ${topMarks}`); // yaha 80 plus wale print ho ge

// Step 9 — Total Nikalo
// reduce() se saare marks ka total nikalo

let totalMarks = studentMarks.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(`All Marks: ${studentMarks}`);
console.log(`Total Marks: ${totalMarks}`);

// Step 10 — Sort Karo
// Spread [...arr] use karke original safe rakhte hue ascending sort karo

let sorted = [...studentMarks].sort(function (x, y) {
  return x - y;
}); // ascending kia yaha pehle chota ai ga phir bara or original safe ha

console.log(studentMarks); // Original wale
console.log(sorted); // sort kia hua

// Step 11 — String Banao
// join() se saare marks ko " | " se jodo

console.log(studentMarks.join(" | "));

// Step 12 — Print Karo
// forEach() se numbered list print karo

studentMarks.forEach(function (x) {
  console.log(x);
}); // for each se sab ko print karna
