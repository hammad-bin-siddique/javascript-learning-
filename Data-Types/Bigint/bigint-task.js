//! Task 1 — Normal vs BigInt:

// - Normal number banao → 9007199254740991
// - Us par + 2 karo → galat answer dekho
// - Ab same number BigInt banao → n lagao
// - Us par + 2n karo → sahi answer dekho
// - Dono compare karo aur comment mein farq likho!

let normalNum = 9007199254740991 + 2;
console.log(normalNum); //9007199254740992 The answer is wrong

let bigNum = 9007199254740991n + 2n;
console.log(bigNum); //9007199254740993n The answer is correct

/*acha normal wale ne wrong calculate kia ha jab ke bigint ne sahi calculate bhi kia or normal number ke akhir main kuch nahi tha jab ke bigint ke akhir mian n tha  */

// ! Task 2 — BigInt Maths:

// - 2 BigInt variables banao → 500n aur 300n
// - + - * / % sab karo
// - Sab results print karo
// - Har line pe comment likho kya aaya

let x = 500n;
let y = 300n;
console.table([x + y, x - y, x / y, x * y, x % y]);


// ! Task 3 — Convert:

// - Ek BigInt banao → 750n
// - Ek Normal banao → 250
// - BigInt() use karke dono add karo
// - Number() use karke dono add karo
// - Dono results aur unka typeof print karo

let a = 750n;
let b = 250;
let resultBigInt = a + BigInt(b);
let resultNumber = Number(a) + b;
console.log(`BigInt Result: ${resultBigInt} Type: ${typeof resultBigInt}`);
/* is main n show nahi hota template literal main agar call karo to */
console.log(resultBigInt); // ! yaha phir se main ne add kia take n bhi show ho 
console.log(`Number Result: ${resultNumber} Type: ${typeof resultNumber}`);


//! Task 4 — Real Life:

// - Bank account banao → balance BigInt mein rakho
// - Deposit amount → BigInt
// - Withdraw amount → BigInt
// - Final balance calculate karo
// - Template literal mein print karo

let bankAccount = "Bank Al Habib";
let bankBalance = 5000n
let depositAmount = 7000n;
let newBalanace = bankBalance + depositAmount;
let withdrawAmount = 3000n;
let remainBalance = newBalanace -withdrawAmount;

console.log(`Mere Bank ka name ${bankAccount} ha or mera bank main pehle se ${bankBalance} cash tha phir main ne beach main ${depositAmount} deposit kia ab mere bank main ${newBalanace} cash ha phir main ne ${withdrawAmount} ka withdrawal lagaya ab mera account main ${remainBalance} paise bache hain`);
// yaha per main ne process banaya ke pehle kitne paisa the phir kitne hue or phir withdrawal per kitne re gay sab 