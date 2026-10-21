//! while Loop

// Syntax aur flow (condition pehle check hoti hai)
// Counter ka update, aur bhoolne par infinite loop
// Kab use karein (jab pata na ho kitni dafa chalega)
// while (true) aur break ka pattern
// Array ko traverse karna
// Real examples: sum, factorial, number reverse, digit count
// Nested while
// Common Mistakes



//! while Loop, Point 1: Syntax aur Flow

//? Formal Definition

// while loop ek code block ko baar baar chalata hai, jab tak condition true rehti hai. Jis lamhe condition false hoti hai, loop ruk jata hai.


//? Syntax Breakdown

// while (condition) {
// body: jo kaam baar baar karna hai
// }

// for loop mein start, condition aur update teeno ek line mein hote hain. while mein ye teeno alag alag jagah hote hain:

// let i = 1;              // 1. START: loop se pehle, bahar
// while (i <= 3) {        // 2. CONDITION: bracket ke andar
//   console.log(i);
//   i++;                  // 3. UPDATE: body ke andar, khud likhna hai
// }

//? Flow (Step by Step)

//         ┌─────────────────────┐
//    ┌───►│  condition check    │
//    │    └──────────┬──────────┘
//    │         true  │      false
//    │               ▼         │
//    │      ┌──────────────┐   │
//    │      │  body chalao │   │
//    │      └──────┬───────┘   ▼
//    └─────────────┘      loop khatam,
//                         aage ka code

// Condition check hoti hai
// true ho to body ek baar chalti hai
// Body khatam hote hi wapas step 1 par jao
// false ho to loop se bahar, aage ka code chalta hai


//? Code Example
console.log("===Loop Syntax and flow===");

let i = 1; 
 
while(i <= 3) {
    console.log("Hammad ne coding ki, number", i); 
    i++; 
}

console.log("Loop End, i =", i); // i ke last value ab 4 ho gi 

// Body 3 baar chali, lekin condition 4 baar check hui. Aakhri check false wala tha.
// Loop ke baad i ki value 4 hai, 3 nahi. Ye wahi slip hai jo tumse pehle hui thi (value check ke waqt vs update ke baad).

//? Condition Pehle Check hoti ha body bad main 

// ager condition start se he false hui to loop chale ga he nahi 


let n = 10; 

while(n < 5)  {
    console.log("Ye Kabhi Print nahi ho ga"); 
    n++; 
}

console.log("n =", n);

// n < 5 yani 10 < 5 → false

//! Comprehension Check

//? Q1

let a = 5; 

while(a < 8) {
    console.log(a);
    a++;
}

//5 6 7 ho ga or loop ke bad a ke value 8 ho gi 

//? Q2

let b = 20;

while(b < 10) {
    console.log("Hello"); 
    b++;
}

// Hello kabhi print nahi hoga, kyunke 20 < 10 false hai.
// Body 0 baar chali, condition sirf 1 baar check hui (wo bhi false).
//? Q3 

let c = 2; 
while(c <= 10) {
    console.log(c); 
    c += 3;
}

// Output: 2 5 8
// Body 3 baar chali, condition 4 baar check hui
//
// Trace:
// Check 1: c = 2  → 2 <= 10 true  → print 2, c = 5
// Check 2: c = 5  → 5 <= 10 true  → print 5, c = 8
// Check 3: c = 8  → 8 <= 10 true  → print 8, c = 11
// Check 4: c = 11 → 11 <= 10 false → body skip, loop khatam
//
// Body 4th baar isliye nahi chali ke 8 wali iteration ke baad c = 11 ho gaya,
// loop wapas condition par gaya, 11 <= 10 false nikla,
// aur condition body se PEHLE check hoti hai, to body mein ghusa hi nahi.
// Rule: body n baar chale to condition n + 1 baar check hoti hai.

console.log("After Loop:", c); // 11

//! Practice Tasks

//? Task 1: 1 se 10 tak
console.log("===Task One===");
let task1 = 1; 
while(task1 <= 10) {
    console.log(task1); 
    task1++;
}

// condition 11 time check ho gi or body 10 time chale ge or loop ke bad task1 ke value 11 ho gi 
console.log("After Loop:", task1); // 11

//? Task 2 Even Numbers 
console.log("===Task Two==="); 
let task2 = 2; 

while(task2 <= 20) {
    console.log(task2); 
    task2 += 2;
}

// yaha bhi condition 11 time check ho or body 10 time chale ge or last value loop ke bad 22 ho gi 
console.log("After Loop:", task2); // 22

//? Task Three Seven Table

let num = 7; 
let multiplier = 1; 

while(multiplier <= 10) {
    console.log(num, "x", multiplier, "=", num * multiplier);
    multiplier++;
}

//yaha body 10 time chale ge or condition 11 time check ho gi or loop ke bad multiplier ke last value 11 ho gi 

console.log("After Loop:", multiplier); // 11

//? Second Method of the seven table 

let num2 = 7; 

while(num2 <= 70) {
    console.log(num2); 
    num2 += 7;
}

///yaha body 10 time chale ge or condition 11 time check ho gi or loop ke bad num2 ke last value 77 ho gi 
console.log("After Loop:", num2); 

// Trace: num2 = 7, condition num2 <= 70, update num2 += 7
//
// Check # | num2 | num2 <= 70 | Action
// --------|------|------------|-------------------
//   1     |  7   | true       | print 7,  num2 = 14
//   2     | 14   | true       | print 14, num2 = 21
//   3     | 21   | true       | print 21, num2 = 28
//   4     | 28   | true       | print 28, num2 = 35
//   5     | 35   | true       | print 35, num2 = 42
//   6     | 42   | true       | print 42, num2 = 49
//   7     | 49   | true       | print 49, num2 = 56
//   8     | 56   | true       | print 56, num2 = 63
//   9     | 63   | true       | print 63, num2 = 70
//  10     | 70   | true       | print 70, num2 = 77
//  11     | 77   | false      | body skip, loop khatam
//
// Body 10 baar, condition 11 baar, final num2 = 77


//! while Loop,  Counter Update aur Infinite Loop



//? Kyun while mein zyada hota hai?

// Point 1 mein dekha tha ke while mein teen hisse alag alag jagah hote hain:

// let i = 1;              // START   (bahar)
// while (i <= 3) {        // CONDITION (bracket mein)
//   console.log(i);
//   i++;                  // UPDATE  (body ke andar, khud likhna hai)
// }

// for mein update bracket ke andar hi likhna parta hai, to bhoolna mushkil hai. while mein update body ke andar hota hai, isliye bhool jana bohat aasan hai.

//! Formal Definition
// Agar loop ki condition kabhi false na ho, to wo infinite loop hai. while mein ye teen wajahon se hota hai:

//? 1: Update bhool gaye

// let i = 1;
// while (i <= 3) {
//   console.log("i =", i);
// i++ bhool gaye!
// }

// i hamesha 1 rehta hai, 1 <= 3 hamesha true, loop kabhi nahi rukta.


//? 2: Update ulti taraf hai

// let i = 1;
// while (i <= 3) {
//   console.log("i =", i);
//   i--;      // 1, 0, -1, -2... ye 3 se door jaa raha hai
// }

// i ghat raha hai aur condition kehti hai “3 se chhota ya barabar ho to chalo”. i 3 se kabhi bara nahi hoga, to condition hamesha true.

//? 3: Condition wala variable alag, update wala alag

// let i = 1;
// let j = 1;
// while (i <= 3) {
//   console.log("i =", i);
//   j++;      // j badh raha hai, lekin condition i dekh rahi hai
// }


// Update chal raha hai, lekin galat variable ka. Condition i ko dekh rahi hai jo kabhi nahi badalta. Typo (count vs count3) se bhi ye ho jata hai, jaisa tumhare saath pehle hua tha.


console.log("===Infinite Loop===");
//? Safe Demo

let i1 = 1; 
let guard = 0; 

while(i <= 3 && guard < 5) {
    console.log("i =", i1); 
    guard++; 
    //  i1++ ye likhna bhool gay 
}

// i har baar 1 hi rehta hai. Sirf guard ki wajah se 5 baar ke baad ruka. guard hata do to ye hamesha chalta rahega.


//! Comprehension Check

//? Q1

let x = 10 ; 
while(x > 4) {
    console.log(x);
    x -= 2;
}

// finite ha yaha per last value loop ke bad 4 ho gi finite is lia ha ke update bhi sahi ho raha direction bhi sahi ha 
console.log("After Loop x value:", x); // 


//? Q2

// let y = 1; 
// while(y <= 5) {
//     console.log(y); 
//     y--;
// }

// infinite ha keuke update ulti tara ho raha ha 

//? Q3

let w = 1; 
let z = 10; 

while(w < z) {
    console.log(w); 
    z--;
}

// yaha per z-- ulta ha or w update nahi ho raha but 1 per a kar z w ke barabar ho jata ha is lia finite ha or ruk jata ha 

//? Q4

let e = 3;
while (e <= 3) {
  console.log("Faizan");
  e++;
}

// yaha per sirf 1 bar iterate ho ga < agar ye laga de to <= ki jaga to first iteration per he condition false ho jai gi or loop ruk jai ga sirf 1 bar faizain print ho ga 

console.log("e after loop", e);  // 4


//! Practice Tasks 


//? Task One 

console.log("===Task One===");


// A
// let n1 = 5;
// while (n1 > 0) {
//   console.log(n);
// }
//? ye infinite loop ha keuke n1 0 se hamasha bara he rahe ga or condition kabhi false nahi ho gi is lia infinite ha 
// B
// let count = 1;
// let total = 0;
// while (count <= 5) {
//   total += count;
//   total++;
// }

//? ye bhi infinite loop ha keuke yaha ham count ko update kar he nahi ha is lia ye bhi infinite loop bane ga 

// C
// let k = 10;
// while (k >= 0) {
//   console.log(k);
//   k++;
// } 

// ye bhi infinite loop ha keuke k 0 ke barabar ya chota ho nahi sakta k start se he 0 se bara ha 

//? Task 2: Countdown

console.log("===Task Two==="); 

let countNum = 10; 
while(countNum >= 1) {
    console.log(countNum); 
    countNum--;
}
console.log("Liftoff!");

// countdown main 11 bar condition chali or 10 bar print kia total 
console.log("countNum after loop:", countNum); // 0

//? Task Three 

console.log("===Task Three==="); 

let left = 1; 
let right = 10; 

while(left < right) {
    console.log(right); 
    console.log(left); 
    right--; 
    left++;
}

// Task 3 trace: left = 1, right = 10, condition left < right
// Har iteration mein pehle right print hota hai, phir left,
// uske baad right-- aur left++ dono chalte hain.
//
// Check # | left | right | left < right | Print        | Update ke baad
// --------|------|-------|--------------|--------------|----------------------
//   1     |  1   |  10   | true         | 10, 1        | right = 9, left = 2
//   2     |  2   |   9   | true         |  9, 2        | right = 8, left = 3
//   3     |  3   |   8   | true         |  8, 3        | right = 7, left = 4
//   4     |  4   |   7   | true         |  7, 4        | right = 6, left = 5
//   5     |  5   |   6   | true         |  6, 5        | right = 5, left = 6
//   6     |  6   |   5   | false        | -            | loop khatam
//
// Body 5 baar, condition 6 baar.
// Final values: left = 6, right = 5
// Dono milte nahi, ek doosre se guzar jate hain (cross). Isliye condition
// left < right hai, left != right nahi, warna 6 != 5 true rehta aur loop
// kabhi na rukta.


//! while Loop, Kab Use Karein

//? Definition

// while loop wahan use hota hai jahan loop ke ruknay ki shart (stopping condition) pata ho, lekin loop kitni baar chalega ye pehle se pata na ho.
// Yani loop iterations ki ginti par nahi, balkay condition ke sach ya jhoot hone par chalta hai. Jab tak condition true hai loop chalta hai, aur jis lamhe false hoti hai wo ruk jata hai.

//? Example
console.log("===When to Use While Loop==="); 

let money = 0; 
let months = 0; 

while(money < 10000) {
    money += 1500; 
    months++; 
}

console.log("Months:", months); // 7
console.log("Money:", money); // 10500


//! While kahan use hota hai

// Rule: ginti pata ho -> for. Ruknay ki shart pata ho, ginti nahi -> while.
//
// 1. PIN sahi hone tak dobara poochna
//    Kyun while: pata nahi user kitni baar galat dalega
//
// 2. Number guess game
//    Kyun while: pata nahi kitni koshish mein sahi guess hoga
//
// 3. Number ke digits ginna (jaise 48213)
//    Kyun while: digits ki tadaad pehle se nahi pata
//
// 4. Value ko baar baar aadha karna jab tak 1 na ho jaye
//    Kyun while: kitni dafa aadha hoga, wohi to nikalna hai
//
// 5. Server se data lena jab tak data khatam na ho
//    Kyun while: total data pehle se nahi pata

//! 5. Comprehension Check

//? Part A: for ya while? Wajah ke saath likho.

// Class ke 40 students ke naam print karna to for ka use kare ge keuke hame tadad ka pata ha 

// User se password maangna jab tak wo sahi na ho jaye to while ka use kare ge keuke hame condition ka pata ha ke password ka sahi hona lekin counting ka nahi kia pata user kitne attempts main sahi password enter kare 

// 1 se 100 tak numbers ka sum yaha for ka use kare keuke hame ginti ka pata ha 

// Number 48213 mein kitne digits hain, ye ginna (shuru mein tumhein digits ki tadaad nahi pata) while ka use kare ga keuke hame digit ke tadad ka nahi pata ha 

let sum = 0; 
let i2 = 0; 

while(sum <= 1000) {
    sum += i2; 
    i2++; 
    console.log(sum);
}

console.log("Sum", sum);  // 
console.log("i2", i2); // 46


let x1 = 1; 
while(x1 < 50) {
    x1 *= 3; 
}

console.log(x1);

// loop sirf 4 iteration ho gi choti per condition 4 bar true ho or 5 bar  false ho jai gi or keuke 27 * 3 is 81 or loop ke last value 81 ho gi 

let y1 = 100;
while (y1 > 10) {
  y1 -= 30;
}
console.log(y1);

// Check # | y   | y > 10 | Action
//   1     | 100 | true   | y = 70
//   2     | 70  | true   | y = 40
//   3       40  | true   | y = 10
//   4       10  | false  | y = 10


//! While Loop,  while (true) aur break

//? Formal Definition

// while (true) aisa loop hai jis ki condition hamesha true hai, yani wo jaan boojh kar infinite banaya gaya hai. Is se bahar nikalne ke liye break statement use hoti hai, jo loop ko foran rok deti hai aur code loop ke baad wali line par chala jata hai.

// while (true) {
   // kaam
//   if (ruknay ki shart) {
//     break;      // foran loop se bahar
//   }
// }

//? Flow

// true hamesha true hai, to body hamesha chalti hai (condition check ka koi faisla nahi)
// Body ke andar if check karta hai: “ab rukna hai?”
// false ho to body baqi lines chala kar wapas upar jati hai
// true ho to break chalta hai aur loop wahin khatam, baqi body ki lines skip ho jati hain


//? Example:

let num1 = 1; 
while(true) {
    if(num1 % 5 === 0 && num1 % 7 === 0) {
        console.log("First Number:", num1);
        break; 
    }
    num1++; 
}

console.log("After The Loop Num:", num1);

// num1 ki final value 35 hai, 36 nahi. Pehle wale loops mein final value hamesha aage nikal jati thi, kyunke update chalta tha. Yahan break ne num1++ ko skip kar diya, kyunke wo break ke baad likha tha aur break ke saath hi loop khatam ho gaya.


// Upar wala kaam while (num1 % 35 !== 0) se bhi ho sakta tha. while (true) + break tab behtar hota hai jab:

// Ruknay ka faisla body ke darmiyan (kuch kaam ke baad) aata hai
// Ruknay ki ek se zyada wajahein hon (ya ye ya wo)
// Condition lambi aur uljhi hui ho aur if mein alag likhna saaf lage

//? break Ka Raasta Zaroor Ho

// while (true) mein agar break kabhi chal hi na paye to asli infinite loop ban jata hai. Point 2 ka checklist yahan bhi lagta hai:

// Kya koi break hai?
// Kya if ki shart kabhi true ho sakti hai?
// Kya jo variable if mein check hota hai wo body mein badalta hai, aur sahi direction mein?


//! Comprehension Check

//! Point 4: while (true) aur break, Comprehension Check

//? Q1
// Trace: n2 = 1, if (n2 * n2 > 30) to break, warna n2++
//
// Check # | n2 | n2 * n2 | n2 * n2 > 30 | Action
// --------|----|---------|--------------|----------------------
//   1     | 1  |   1     | false        | n2++ -> 2
//   2     | 2  |   4     | false        | n2++ -> 3
//   3     | 3  |   9     | false        | n2++ -> 4
//   4     | 4  |  16     | false        | n2++ -> 5
//   5     | 5  |  25     | false        | n2++ -> 6
//   6     | 6  |  36     | true         | break (n2++ nahi chala)
//
// if 6 baar check hua, n2++ 5 baar chala, final n2 = 6
// break ne n2++ ko skip kar diya, isliye n2 6 par ruk gaya
console.log("===Q1===");

let n2 = 1;
while (true) {
  if (n2 * n2 > 30) {
    break;
  }
  n2++;
}
console.log(n2); // 6


//? Q2
// Is dafa update (k -= 3) if se PEHLE hai, to pehle k badle ga, phir check hoga.
//
// Round | k (shuru) | k -= 3 ke baad | k < 0 | Print
// ------|-----------|----------------|-------|------------------
//   1   | 10        | 7              | false | 7
//   2   | 7         | 4              | false | 4
//   3   | 4         | 1              | false | 1
//   4   | 1         | -2             | true  | break, print nahi hua
//
// Output: 7 4 1, phir Final k: -2
// -2 print isliye nahi hua ke break console.log(k) se pehle chal gaya
// aur break loop ki baqi lines skip kar deta hai.
// Lekin -2 loop ke BAAD wali line mein nazar aata hai.
console.log("===Q2===");

let k = 10;
while (true) {
  k -= 3;
  if (k < 0) {
    break;
  }
  console.log(k);
}
console.log("Final k:", k); // -2


//? Q3
// Jawab: INFINITE. Checklist ka sawal fail: jo variable if mein check hota hai
// (t), wo body mein badalta hi nahi.
//
// Round | t | t > 5 | Action
// ------|---|-------|----------
//   1   | 1 | false | print 1
//   2   | 1 | false | print 1
//   3   | 1 | false | print 1
//  ...  | 1 | false | hamesha 1
//
// t hamesha 1 rehta hai, 1 > 5 kabhi true nahi hota, break kabhi nahi chalta.
// Chalane par terminal mein Ctrl + C dabao.

// let t = 1;
// while (true) {
//   if (t > 5) {
//     break;
//   }
//   console.log(t);
// }

// Fix: console.log(t) ke baad t++ lagao
console.log("===Q3===");

let t = 1;
while (true) {
  if (t > 5) {
    break;
  }
  console.log(t);
  t++;
}
// Output: 1 2 3 4 5, final t = 6
console.log(t);

console.log("===Q4===");
let m = 2;
while (true) {
  m += 4;
  if (m > 12) {
    break;
  }
  console.log(m);
}
console.log("Final m:", m);

// Round | m (shuru) | m += 4 ke baad | m > 12 | Print
// ------|-----------|----------------|--------|------
//   1   | 2         | 6              | false  | 6
//   2   | 6         | 10             | false  | 10
//   3   | 10        | 14             | true   | -   (break, print nahi hua)
//
// Output: 6 10
// Final m: 14
// 14 print isliye nahi hua ke break console.log(m) se pehle chal gaya

//! While Loop, Array ko Traverse Karna

//? Formal Definition

// Traversal ka matlab hai array ke har element par ek ek karke guzarna, pehle index se aakhri tak. while ke saath teen cheezein chahiye:

// Start: index ko 0 se shuru karo
// Condition: i < array.length
// Update: body ke andar i++

//? Syntax aur Example
console.log("====Array Traverse with While===");

const fruits = ["Apple", "Mango", "Orange"]; 

let i3 = 0; 

while(i3 < fruits.length) {
    console.log(i3, fruits[i3]); 
    i3++;
}

console.log("Final i3:", i3); // 

//? Important < Likho, <= Nahi

// Array ka aakhri index length - 1 hota hai, length nahi. Isliye condition i < fruits.length hoti hai.

// Agar <= likh do:
// to i = 3 par bhi condition true hogi, aur fruits[3] undefined hai. Loop crash nahi hota, balkay chupchap undefined print kar deta hai. Ye bug dhoondna mushkil hota hai isliye khaas dhyan do.

//? Ulti Taraf Se Traverse Karna

let j = fruits.length - 1; 

while(j >= 0) {
    console.log(fruits[j]); 
    j--;
}
console.log("Final J:", j); 

// Yahan teeno cheezein ulti hain: start length - 1, condition j >= 0, update j--. Ye wohi “sahi direction” ka asool hai.


//? Traversal ka Checklist
// Start 0 se hai (ya ulti taraf ke liye length - 1 se)?
// Condition < hai, <= to nahi (ya ulti taraf ke liye >= 0)?
// Update body ke andar hai, aur sahi direction mein?

// Comprehension Check

console.log("===Comprehesnion Check==="); 

//? Q1

console.log("===Q1==="); 

const nums = [4, 7, 1, 9]; 

let index = 0; 

while(index < nums.length) {
    console.log(index, nums[index]); 
    index++;
}

// yaha loop 4 iterate hua or condition 5 bar check hui or last value of index is 4

console.log("Final Index:", index); // 4


//? Q2 

console.log("===Q2==="); 

const names = ["Ali", "Sara", "Bilal"]; 

let j1 = names.length - 1; 

while(j1 >= 0) {
    console.log(names[j1]); 
    j1--; 
}
// output Bilal Sara Ali
console.log("Final J1:", j1); // -1

//? Q3

console.log("===Q3===");

const colors = ["red", "green", "blue"]; 

let cl = 0; 
let cl2 = 0;
 while( cl2 <= colors.length) {
    console.log(colors[cl2]);
    cl2++;
 } // agar ham <= likhe ge to ye cl = 3 per bhi condition true ho gi loop crash to nahi ho but undefined return kare ga or is se bug dhondna tuff ho ga 


//? Fix 

while(cl < colors.length) {
    console.log(colors[cl]); 
    cl++; 
}

console.log("Final cl:", cl); // 3

//! while Loop,  Real Examples

// Is point mein 4 examples hain: sum, factorial, number reverse, digit count. Do do ke do hisson mein parhenge:

// 6A (ab): sum aur factorial, jo ek hi pattern hain
// 6B (agla): digit count aur number reverse, jo ek doosra pattern hain

//? 6A: Accumulator Pattern

// Programming mein ye accumulator kehlata hai: ek variable jo har round mein kuch jama karta rehta hai, aur loop ke end par us mein final jawab hota hai.

// accumulator ko starting value do (loop se pehle)
// loop mein: accumulator ko update karo
// loop ke baad: accumulator mein jawab

//? Example 1: Sum (1 se 50 tak)

let i4 = 1; 
let sum1 = 0; 

while(i4 <= 50) {
    sum1 += i4; 
    i4++; 
}

console.log("Sum:", sum1); // 1275
console.log("i:", i4); // 51

//! Example 2: Factorial (5!)

let num3 = 5;  
let fact = 1; 
let i5 = 1; 

while(i5 <= num3) {
    fact *= i5; // fact = fact * i5
    i5++;
}

console.log("5! =", fact);


// Agar factorial ko fact = 0 se shuru karo to 0 × koi bhi number = 0, aur jawab hamesha 0 aaye ga. Agar sum ko 1 se shuru karo to jawab hamesha 1 zyada aaye ga.

// Aur ek aur nukta: order matter karta hai. Agar i++ ko sum += i se pehle likh do:

// while (i <= 5) {
//   i++;
//   sum += i;   // ab 2+3+4+5+6 = 20, 15 nahi
// }


//! Comprehension Check 

//! Point 6A: Accumulator Pattern (sum aur factorial)

// Rule: jama karna (+=) -> accumulator 0 se shuru
//       guna karna (*=)  -> accumulator 1 se shuru

//? Q1: total (jama), i6 (counter)
// Trace: i6 = 2, total = 0, condition i6 <= 8, update i6 += 2
//
// Check # | i6 | total (shuru) | i6 <= 8 | Action
// --------|----|---------------|---------|-------------------------------
//   1     | 2  | 0             | true    | total = 0 + 2 = 2,   i6 = 4
//   2     | 4  | 2             | true    | total = 2 + 4 = 6,   i6 = 6
//   3     | 6  | 6             | true    | total = 6 + 6 = 12,  i6 = 8
//   4     | 8  | 12            | true    | total = 12 + 8 = 20, i6 = 10
//   5     | 10 | 20            | false   | loop khatam
//
// Body 4 baar, condition 5 baar.
// Output: 20 10
// (2 + 4 + 6 + 8 = 20, aur i6 aakhri number 8 se aage 10 par ruka)
console.log("===Q1===");

let i6 = 2;
let total = 0;
while (i6 <= 8) {
  total += i6;
  i6 += 2;
}
console.log(total, i6); // 20 10


//? Q2: fact1 (guna), k1 (counter)
// Trace: fact1 = 1, k1 = 1, condition k1 <= 4, update k1++
//
// Check # | k1 | fact1 (shuru) | k1 <= 4 | Action
// --------|----|---------------|---------|-------------------------------
//   1     | 1  | 1             | true    | fact1 = 1 * 1 = 1,  k1 = 2
//   2     | 2  | 1             | true    | fact1 = 1 * 2 = 2,  k1 = 3
//   3     | 3  | 2             | true    | fact1 = 2 * 3 = 6,  k1 = 4
//   4     | 4  | 6             | true    | fact1 = 6 * 4 = 24, k1 = 5
//   5     | 5  | 24            | false   | loop khatam
//
// Body 4 baar, condition 5 baar.
// Output: 24 5
// (4! = 4 * 3 * 2 * 1 = 24)
console.log("===Q2===");

let fact1 = 1;
let k1 = 1;
while (k1 <= 4) {
  fact1 *= k1;
  k1++;
}
console.log(fact1, k1); // 24 5


//? Q3: fact2 galat (0 se shuru), fact3 sahi (1 se shuru)
// Galat version: fact2 = 0, i7 = 1, condition i7 <= 5
//
// Check # | i7 | fact2 (shuru) | i7 <= 5 | Action
// --------|----|---------------|---------|-------------------------------
//   1     | 1  | 0             | true    | fact2 = 0 * 1 = 0, i7 = 2
//   2     | 2  | 0             | true    | fact2 = 0 * 2 = 0, i7 = 3
//   3     | 3  | 0             | true    | fact2 = 0 * 3 = 0, i7 = 4
//   4     | 4  | 0             | true    | fact2 = 0 * 4 = 0, i7 = 5
//   5     | 5  | 0             | true    | fact2 = 0 * 5 = 0, i7 = 6
//   6     | 6  | 0             | false   | loop khatam
//
// Body 5 baar, condition 6 baar. Output: 0
// Wajah: 0 ko jis bhi number se guna karo, jawab 0 hi aata hai.
// Loop bilkul theek chala (counter bhi sahi), lekin accumulator ki
// starting value galat thi, isliye jawab galat aaya.
console.log("===Q3===");

let fact2 = 0;
let i7 = 1;
while (i7 <= 5) {
  fact2 *= i7;
  i7++;
}
console.log(fact2); // 0

// Fix: fact3 = 1 se shuru
//
// Check # | i8 | fact3 (shuru) | i8 <= 5 | Action
// --------|----|---------------|---------|--------------------------------
//   1     | 1  | 1             | true    | fact3 = 1 * 1 = 1,   i8 = 2
//   2     | 2  | 1             | true    | fact3 = 1 * 2 = 2,   i8 = 3
//   3     | 3  | 2             | true    | fact3 = 2 * 3 = 6,   i8 = 4
//   4     | 4  | 6             | true    | fact3 = 6 * 4 = 24,  i8 = 5
//   5     | 5  | 24            | true    | fact3 = 24 * 5 = 120, i8 = 6
//   6     | 6  | 120           | false   | loop khatam
//
// Body 5 baar, condition 6 baar. Output: 120 (5! = 120)

let fact3 = 1;
let i8 = 1;
while (i8 <= 5) {
  fact3 *= i8;
  i8++;
}
console.log(fact3); // 120