// 📌 Map ki Definition

// Map ek aisa data structure hai jo key-value pairs store karta hai — bilkul Object ki tarah — lekin zyada powerful aur flexible hai.
// Map ek data structure hai jisme hum key-value pairs store karte hain — jahan key KUCH BHI ho sakti hai, insertion order maintain hota hai, aur data manage karne ke liye built-in methods milte hain.

//? 🔍 Object vs Map — 4 Bara Farq

//! Farq #1 — Key ki type

// object main key sirf string ya symbol ho sakti ha
const obj = {};

obj[1] = 1; // yaha 1 string ban jai gi
obj[true] = "yes"; // yaha bolean bhi string bane gi "true" { '1': 1, true: 'yes' } string

console.log(obj);
console.log(typeof Object.keys(obj)[1]); // is ka typeof string ai ga but true ke uper quotes nahi ai ge

// is ke baraks map main key koi bhi ho sakti ha

const myMap = new Map();
myMap.set(1, "one"); // ye number rahe ge key
myMap.set(true, "Yes"); // ye boolean rahe gi key
myMap.set({ a: 1 }, "Object"); // ye object rahe gi
console.log(myMap);

//? Object keys hamesha string banti hain. Map mein key apni original type rehti hai.

//! Farq #2 — Size

const obj2 = {
  name: "Hammad",
  age: 23,
};

console.log(obj2.length); // undefined seedha nahi milta

const map2 = new Map();
map2.set("name", "Hammad");
map2.set("age", 23);
console.log(map2.size); // yaha undefined nahi ai ga balke size ai ga ke kitni entries hain or yaha 2 hain

//! Farq #3 — Order
// object main orderd guranteed nahi especially in numbers
const obj3 = {
  a: 1,
  b: 5,
  3: "Hello",
};
console.log(Object.keys(obj3)); // [ '3', 'a', 'b' ] ab yaha per 3 pehle le ai but ha wo last main
console.log(obj3); // { '3': 'Hello', a: 1, b: 5 }

// Map mein insertion order hamesha preserve hoti hai
const map3 = new Map();
map3.set("b", 2);
map3.set("a", 90);
map3.set(3, "hello");
console.log(map3);

//! Farq #4 — Performance
// Jab bohot zyada data baar baar add/remove karna ho — Map Object se faster hai. (Yeh advanced topic hai, abhi sirf yaad rakho)

//? 🗺️ Map — Topic 2: Map kaise banate hain?

//syntax
const map4 = new Map();

// new kyun lagaya?
// Yaad karo — Map ek built-in class hai JavaScript ki.
// Class se cheez banane ke liye new lagate hain
// Bina new ke likho toh error aayega:

console.log(map4); // empty map ban gia  Map(0) {}
console.log(map4.size); // size zero ho ga 0

//! Prefilled Map — Seedha Data Dalna
// Haan bilkul! Map banate waqt seedha data de sakte ho!
// Syntax hai — array of arrays:

// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
//   [key3, value3]
// ])

const map5 = new Map([
  //string
  ["Name", "Hammad"],
  // number
  [5, "ye key number ha"],
  // boolean
  [true, "ha ye boolean ha"],
  // object
  [{ object: "object key" }, "Ye object ha"],
  //array
  [[1, 4, "hello"], "Ha ye array ha"],
]);

console.log(map5);

//! .set() Se Bhi Yahi Types

const maap = new Map();

// string
maap.set("name", "Hammad");

//number
maap.set(2, "Ye Number key ha");

// boolean

maap.set(true, "Ye boolean key ha");

// object as a key

// object/array key save karni ho toh variable mein rakho:
// Kyun? Kyunki JavaScript mein do alag objects kabhi equal nahi hote — chahe andar same data ho!

const key = { name: "Hammad siddique" };
maap.set(key, "Object ko key banaya");

const arr = [1, 4, "Hello"];
maap.set(arr, "Array ko key banaya");

console.log(maap);

// Ab Karo Yeh Task
// Ek prefilled Map banao jisme ho:

// String key: "country" → "Pakistan"
// Number key: 1 → "ek"
// Boolean key: false → "jhoot"
// Object key: pehle variable mein rakho const user = { name: "Ali" } phir key banao

const user = { name: "Ali" };

const map6 = new Map([
  ["country", "Pakistan"],
  [1, "ek"],
  [false, "jhoot"],
  [user, "object"],
]);

console.log(map6);

//! 🗺️ Topic 3 — .set()

//? Syntax
// myMap.set(key, value)

//? #1 — Naya Data Daalna

const myMap1 = new Map();
myMap1.set("name", "Danial");
myMap1.set("city", "Chakwal");
myMap1.set("age", 23);

console.log(myMap1);

//?  #2 — Purana Data Update Karna

myMap1.set("name", "Hammad"); // ab name main hammad ho ga

console.log(myMap1); // ab danial ke jaga hammad ho ga

// Yaad rakho — same key dobara doge toh nai entry nahi banegi — sirf value update hogi!

//? #3 — Chaining

const myMap2 = new Map();

// alag alag line main

myMap2.set("name", "Umer");
myMap2.set("city", "Abbottabad");
myMap2.set("age", 23);

// Ya ek saath chain mein — dono same kaam karte hain!

myMap2.set("name", "Umer").set("city", "Abbottabad").set("age", 23);

// Kyun chain hota hai? Kyunki .set() kaam karne ke baad Map ko wapas return karta hai — isliye us pe dobara .set() laga sakte hain!

console.log(myMap2);
console.log(myMap2.size);

// task

const myMap3 = new Map();
myMap3
  .set("username", "hammad123")
  .set("score", 100)
  .set("active", true)
  .set("username", "ali456"); // username hammad se change ho jai ga keuke same key name ha or pehle wale ko overwrite kar de ga
console.log(myMap3);
console.log(myMap3.size);

//! 🗺️ Topic 4 — .get()

//? 1️⃣ Basic — Value Nikalna

const myMap4 = new Map();

myMap4.set("accountNumber", 3848120848);
myMap4.set("accountName", "Muhammad Hammad Siddique");
myMap4.set("isActive", true);
myMap4.set("accountBalance", 23488);

console.log(myMap4.get("accountNumber")); // ye map main keys ke values nikalne ke lia use hota ha

//? 2️⃣ Object Key Se Value Nikalna

myMap4.set({ b: 394 }, "Kpk");
console.log(myMap4.get({ b: 394 })); // undefined ai ga
// Kyun? Kyunki yeh NAYA object hai — alag hai memory mein!

// ✅ Variable mein rakho sahi way ha

const branch = { branch: "name" }; // variable banaya us ke andar object ko rakha
myMap4.set(branch, "Bank Al Habib");
console.log(myMap4.get(branch)); // ab yaha per branch name ai ga keuke ab ye alada object nahi ha

//? 3️⃣ Key Na Mile Toh — undefined

console.log(myMap4.get("transactions")); // undefined ai ga keuke ye key exist he nahi  karti

//? 4️⃣ Type Match Zaroori Hai

// yani agar string ko key lia ha to us ke format main he likho like with quotes

//? 5️⃣ .get() Ki Return Value Use Kar Sakte Ho

// .get() sirf value print nahi karta — value return karta hai — matlab us value ke saath kuch bhi kar sakte ho!

const myMap5 = new Map();
myMap5.set("price", 25000);
myMap5.set("discount", 6500);

const price = myMap5.get("price");
const discount = myMap5.get("discount");
const finalPrice = price - discount;
console.log(finalPrice);
console.log(myMap5);

//? 6️⃣ Nested Map Se Value Nikalna
// Map ke andar Map bhi ho sakti hai!

const bankingSystemMap = new Map(); // ye main map jo parent ha
const accountInfo = new Map(); // Nested map banaya

accountInfo.set("accountHolder", "Hammad Siddique");
accountInfo.set("accountNumber", 384021084010);
accountInfo.set("isActive", true);
accountInfo.set("accountType", "Current"); // ye sab nested map ka data ha

// ab parent map ka data dale ga

bankingSystemMap.set("accountBlc", 500000);
bankingSystemMap.set("bankName", "Bank Al Habib");
bankingSystemMap.set("bankLocation", "Mandia Supply Abbottabad");

// nested map ko parent ke sath link kare ga or pura map 1 value ban jai ga key ka

bankingSystemMap.set("bankDetails", accountInfo);

console.log(bankingSystemMap); // pura map print ho ga with nested
console.log(bankingSystemMap.get("bankDetails")); // sirf nested map ka data print ho ga
console.log(bankingSystemMap.get("bankDetails").get("isActive")); // nested map ke specific key ke value print ho gi  is ko chaining kehte hian

//! Shop Task

const shop = new Map();
shop.set("item", "Mobile");
shop.set("price", 100000);
shop.set("company", "Iphone");
shop.set("inStock", true);
shop.set(1, "First Item"); // number use in map key
shop.set("1", "Category One"); // string use in map key
shop.set("deliveryCharges", "Free"); // ye sab parent map ka data ha

const location = new Map();
location.set("city", "Abbottabad");
location.set("area", "Fawara Chock");
location.set("plaza", "Iqbal Plaza Fawara Chock Ground Floor");
location.set("shopName", "Hammad & Son's");

shop.set("location", location);

// .get() se yeh karo:
// 1. item nikalo
// 2. price nikalo aur 5000 discount lagao — final price print karo
// 3. "ITEM" se get karo — kya milega?
// 4. 1 (number) se get karo
// 5. "1" (string) se get karo
// 6. location ki city nikalo — nested Map se!

console.log(shop.get("item")); // sirf item ke value nikle gi
const itemPrice = shop.get("price");
const discountedPrice = 5000;
const itemFinalPrice = itemPrice - discountedPrice;
console.log(itemFinalPrice); // 95000 ai ga

console.log(shop.get("ITEM")); // undefiend ai ga case sensitive ha

console.log(shop.get("location").get("city")); // abbottabad ai ga

console.log(shop.get(1)); // first item ai ga
console.log(shop.get("1")); // categroy 1 ai ga

console.log(shop.get("1") === shop.get(1)); // false ai ga

console.log(shop); // pura shop print ho ga

//? 🗺️ Topic 5 — .has()

// Kaam kya karta hai?
// Key exist karti hai ya nahi — check karta hai!
// Returns: true ya false

// myMap.has(key)
//         ^^^
//         woh key jo dhundhni ha

const cartMap = new Map();
cartMap.set("item1", "Laptop");
cartMap.set("item2", "IPhone");
cartMap.set("item3", "Monitor");
cartMap.set("price1", 10000);
cartMap.set("price2", 20000);
cartMap.set("price3", 50000);
cartMap.set("discount", 10000);

// has ka kam value check karna
console.log(cartMap.has("item1")); // true ai ga
console.log(cartMap.has("item4")); // false ai ga
console.log(cartMap.has("item3")); // true ai ga
console.log(cartMap.has("price4")); // false ai ga keuke wo exist he nahi karti
console.log(cartMap.has("ITEM1")); // false ai ga key ha but yaha case sensitive ha blkl same spelling or same case hona chaia

const cartTotal =
  cartMap.get("price1") + cartMap.get("price2") + cartMap.get("price3");

// Sabse Zaroori Use — .has() + .get() Saath

if (cartMap.has("discount")) {
  console.log(`Discounted Price is ${cartTotal - cartMap.get("discount")}`);
} else {
  console.log(`Without discounted Price: ${cartTotal}`);
}

//? Nested Map Mein .has()

const myBankMap = new Map();

myBankMap.set("user", "Hammad Khan");
myBankMap.set("pin", 2939);
// myBankMap.set("balance", 14000);
const bankInfo = new Map();
bankInfo.set("branch", "Bank Al Habib");
bankInfo.set("location", "Abbottabad, Supply");
bankInfo.set("isActive", true);
myBankMap.set("fullDetail", bankInfo);

console.log(myBankMap); // map with nested map print

// has ke sath checking ke exist karti hain keys ke nahi

console.log(myBankMap.has("fullDetail"));
console.log(myBankMap.has("bankInfo")); // false ai ga keuke ye my bank ke value ha key nai

// has or get ka use karna condition main

if (myBankMap.has("balance")) {
  console.log(`The Balance is ${myBankMap.get("balance")}`);
} else {
  console.log("Balance Mojood Nahi ha");
}

// School Result System

const resultMap = new Map();
const marksInfo = new Map();

// marksInfo mein daalo:
// "math"    → 95
// "english" → 88
// "science" → 76

// resultMap mein daalo:
// "studentName" → "Hammad Siddique"
// "class"       → "10th"
// "passed"      → true
// marksInfo ko bhi link karo — key: "marks"

// Ab .has() se yeh karo:
// 1. "studentName" exist karta hai? check karo
// 2. "feesPaid" exist karta hai? check karo
// 3. Nested map mein "math" exist karta hai? check karo
// 4. "passed" hai toh "Mubarak! Pass ho gaye!" print karo
//    nahi hai toh "Result nahi mila!"
// 5. Object key trap:
//    const subjectKey = { name: "math" }
//    set karo — ek baar has(subjectKey)
//    ek baar has({ name: "math" }) — farq dekho!

marksInfo.set("math", 95);
marksInfo.set("english", 88);
marksInfo.set("science", 76);

resultMap.set("studentName", "Hammad Siddique");
resultMap.set("class", "BS Islamic Studies");
resultMap.set("passed", true);
resultMap.set("marks", marksInfo);

console.log(resultMap.has("studentName")); // true ai ga exist karta ha
console.log(resultMap.has("fessPaid")); // false ai ga key exist nahi karti

if (marksInfo.has("math")) {
  console.log("Mubarak ho bahi pass ho gay ho ");
} else {
  console.log("Result Nahi Mila");
} // mubarak ho wala ai ga keuke math exist karta ha marksinfo main

// object key add karna
const subjectKey = { name: "math" };
resultMap.set(subjectKey, "Math Subject");
console.log(resultMap.has(subjectKey)); // true ai ga keuke key mojood ha
console.log(resultMap.has({ name: "math" })); // false ai ga keuke ye key nahi key ke value ha or has main key check ki jati value nahi


//? 🗺️ Topic 6 — .delete()
// Map se ek specific entry hatana — key do, woh entry hamesha ke liye chali jaayegi!

// Syntax
// myMap.delete(key)

//? Basic Example

const mapDelete = new Map();
mapDelete.set("name", "Fahad");
mapDelete.set("age", 25);
mapDelete.set("isMarried", true);
mapDelete.set("city", "Bonair");
mapDelete.set("country", "Pakistan");

console.log(mapDelete.size); // abhi size 5 ha 

mapDelete.delete("isMarried");
console.log(mapDelete, mapDelete.size); // size four ho ga or is married key delete ho gai ha 

//? Return Value — True Ya False
// mean ke check karne ke lia agar delete ho gai ha to true warna false 

const result1 = mapDelete.delete("isMarried"); // false ai ga keuke uper wo key delete ho chuki ha is lia wo exist he nahi karti 

console.log(result1); // false ai ga 
const result2 = mapDelete.delete("city"); 
console.log(result2); // ab true ai ga keuke city exist karti thi or ab delete ho gai ha 

//? .has() + .delete() — Safe Tarika

if (mapDelete.has("city")) {
  mapDelete.delete("city");
  console.log("City Delete ho gai ha");
}
else{
  console.log("City Exist He Nahi karti");
}; // second wala ai ga output keuke city uper pehle se delete ho gai thi 

//? ⚠️ Object Key Delete Karna 

const keyDeleteMap = {city: "Peshawar"};
mapDelete.set(keyDeleteMap, "KPK");
console.log(mapDelete.size, mapDelete); // yaha size four ho ga 
// direct kare ge to nahi ho ge delete 
mapDelete.delete({city: "Peshawar"}); 
const result3 = mapDelete.delete({city: "Peshawar"});
console.log(result3); 
// false ai ga keuke ye object ha key nahi 

//! Sahi tareeqa variable se ho ga 

mapDelete.delete(keyDeleteMap);
console.log(mapDelete.size, mapDelete); // ab yaha ye key nahi ho gi or size bhi 3 ho ga 


// Nested Map Se Delete Karna

const collegeMap = new Map(); // parent map 
const collegeMarks = new Map(); // nested map 

collegeMarks.set("math", 98);
collegeMarks.set("english", 39);
collegeMarks.set("physics", 59);

collegeMap.set("studentName", "Hammad Tanoli");
collegeMap.set("collegeName", "GPGC NO 1 Abbottabad");
collegeMap.set("subjectMarks", collegeMarks);

// parent se delete 

collegeMap.delete("collegeName"); // delete kia parent se 
console.log(collegeMap.has("collegeName"));  // false ai ga delete ho gia 

// Nested Map se delete 

if (collegeMap.has("subjectMarks")) {
  collegeMap.get("subjectMarks").delete("physics");
  console.log(collegeMap.get("subjectMarks")); // sirf 2 he ai ge  physics delete ho chuka ha 
}
else{
  console.log("Subject Mark key mili he nahi");
};

//? Real Life Example — Shopping Cart

const productCart = new Map();
productCart.set("item1", "Iphone");
productCart.set("item2", "Laptop");
productCart.set("item3", "Monitor");

console.log("Cart Map:", productCart);
console.log("Cart Size", productCart.size);

if (productCart.has("item2")) {
  productCart.delete("item2");
  console.log("Laptop Remove ho gia ha ");
}
else {
  console.log("item2 exist he nahi karta");
};

// mean agar item naw ho to us ke eg

if (productCart.has("item4")) {
  productCart.delete("item4");
  console.log("Item4 Remove ho gia ha ");
}
else{
  console.log("item4 exist he nahi karta");
};

//! Task

// School result system banao aur:

// 1. "science" marks delete karo nested map se
// 2. "class" delete karo — return value variable mein pakdo — print karo
// 3. "feesPaid" delete karo — jo exist nahi karti — kya return aayega?
// 4. Delete ke baad size print karo — pehle aur baad mein
// 5. Object key banao — variable mein rakho
//    set karo — delete karo variable se — phir seedha try karo
//    farq dekho!

const schoolResult = new Map();
schoolResult.set("studentClass", "10th");
schoolResult.set("nameStudent", "Muhammad Huzaifa");
schoolResult.set("rollNumber", 3849);

// nested Map
const schoolMarks = new Map();
schoolMarks.set("science", 89);
schoolMarks.set("english", 39);
schoolMarks.set("physics", 80);

schoolResult.set("subjectMarks", schoolMarks);

schoolMarks.delete("science"); // science ko delete kia ha 
console.log(schoolMarks); // yaha science print nahi ho ga

schoolResult.delete("studentClass");

const result4 = schoolResult.delete("studentClass");
console.log(result4); // false ai ga uper delete ho chuki ha 
console.log(schoolResult.size);
schoolResult.delete("feesPaid");  // koi bhi changes nahi ho gi keuke wo exist he nahi karta 
console.log(schoolResult.size); // yaha bhi size 3 he rahe ga jese uper ha 

const schoolKey = {school: "name"};
schoolResult.set(schoolKey, "GPGC");

schoolResult.delete({school: "name"});

const result5 = schoolResult.delete({school: "name"});
console.log(result5); // false ai ga keuke direct object se delete nahi hoti ha 
console.log(schoolResult); // yaha show ho gi school key 
// variable se delete karna 

schoolResult.delete(schoolKey); 
console.log(schoolResult); // yaha delete ho gai ha ab key

// ab variable main dal kar check kare ge ke hui ha ke nahi 
const result6 = schoolResult.delete(schoolKey);
console.log(result6); // yaha false ai ga keuke delete ho chuki ha uper pehle he sa is lia wo exist he nahi karti 

//? 🗺️ Topic 7 — .clear()

// Kaam Kya Karta Hai?
// Map ki saari entries ek saath hatana — ek hi baar mein poori Map khali ho jaayegi!

// .delete() vs .clear() — Farq
//  .delete() — sirf ek entry hatata hai
// myMap.delete("name")  // sirf "name" gaya

// .clear() — sab kuch hatata hai — ek saath!
// myMap.clear()         // poori Map khali!

//? Basic Example

const mapClear = new Map();
mapClear.set("name", "Hammad")
.set("isStudent", true);

console.log(mapClear.size); // 2 ai ga 

mapClear.clear();
console.log(mapClear.size); // 0 ai ga sab kuch reset kar deta ha 

//? ⚠️ Clear Ke Baad .get() — Undefined

console.log(mapClear.has("name")); // false ai ga 
console.log(mapClear.get("name")); // undeined ai ga keuke ab wo exist he nahi karti 

//? ⚠️ Return Value — Undefined!
// .delete() true/false return karta tha — lekin .clear() kuch return nahi karta!

const getResult = mapClear.clear();
console.log(getResult); // undeined ai ga 

//? Nested Map Pe Clear

const playerMap = new Map(); // parent Map
const statsMap = new Map(); // nested Map

statsMap.set("kills", 52000);
statsMap.set("damage", 200899);
statsMap.set("playedFor", "7 Years");

playerMap.set("playerName", "Mufasa");
playerMap.set("rank", "Ace Dominator");
playerMap.set("playerLevel", 81);
playerMap.set("stats", statsMap);

console.log(playerMap); // pura map ka output ai ga with nested map

// Nested Map clear 

playerMap.get("stats").clear();
console.log("Stats clear hone ke bad", playerMap.get("stats")); // stats clear ho gai hain ab map main 0 show ho ga

playerMap.clear();
console.log("Player Map Clear ke bad", playerMap); // clear ho gia 

console.log("Stats Map", statsMap);

//? Real Life Example — Logout System

const userSession = new Map();
userSession.set("username", "hammad123");
userSession.set("password", "2384duodk3");
userSession.set("role", "admin");
userSession.set("loginTime", "10:30 AM");

console.log("Logged In:", userSession);
console.log("Session Size", userSession.size);


// user ne logout kia sab session hatao 

userSession.clear();
console.log("Logged Out");
console.log("Session:", userSession);
console.log("Session Size:", userSession.size);

//? Real Life Example 2 — Cart Reset

const shoppingCart = new Map();
shoppingCart.set("item1", "Laptop");
shoppingCart.set("item2", "Mobile");
shoppingCart.set("item3", "Cloths");

console.log("Cart:", shoppingCart);
console.log("Cart Size:", shoppingCart.size); 


// orderplace hone ke bad cart ko reset karo 

shoppingCart.clear();
console.log("Order Place ho gia ha Cart is Reset Now");
console.log(shoppingCart);
console.log(shoppingCart.size);

//? 🗺️ Topic 8 — .size

// Kaam Kya Karta Hai?
// Map mein kitni entries hain — yeh batata hai!

//? ⚠️ Yeh method nahi — property hai!
// jsmyMap.size    // ✅ sahi — property
// myMap.size()  // ❌ galat — function nahi hai!

const sizeMap = new Map();
console.log("The Size Is 0", sizeMap.size); // size 0 ho ga

sizeMap.set("name", "Hammad");
console.log("The Size is 1", sizeMap.size);

sizeMap.set("fatherName", "Muhammad Siddique Zaman");
console.log("The size is 2", sizeMap.size);

sizeMap.set("city", "Abbottabad");
console.log("The Size is 3", sizeMap.size);

//? Delete Ke Baad Size

sizeMap.delete("name"); // abhi 3 se kam ho kar 2 ho jai ga 
console.log("The Size is 2 Now", sizeMap.size);

// Same Key Pe Size Nahi Barhta
sizeMap.set("name", "Ali"); // hammad ke jaga ali print ho ga or size same he rahe ga yani 2 he 

console.log(sizeMap, sizeMap.size);

//? Size Se Condition Lagana

const sizeCart = new Map();
sizeCart.set("item1", "Laptop");
sizeCart.set("item2", "IPhone");

if (sizeCart.size === 0){
  console.log("Cart Khali ha");  
}
else{
  console.log(`Cart main ${sizeCart.size} items hain`);
};
// yaha per output ho ga cart main 2 item hain 

// Size Ko Variable Mein Rakhna

const totalItems = sizeCart.size;
console.log("Total Items:", totalItems, "Hain");

// Real Life Example — Student Attendance

const attendanceMap = new Map();
attendanceMap.set("Hammad", true);
attendanceMap.set("Fahad", true);
attendanceMap.set("Bilal", true);
attendanceMap.set("Azan", true);

console.log(`Class mian student ke tadad ${attendanceMap.size} ha or aj itne ${attendanceMap.size} Student ai hain`);


//! 🗺️ Topic 9 — Prefilled Map

// Kya Hai Prefilled Map?
// Pehle hum pehle khali Map banate the — phir .set() se data dalete the:
// Prefilled Map mein — ek hi baar mein Map banao aur data bhi do!

// Syntax — Poori Detail
// const myMap = new Map([
//             ↑
//             Bada array — sab entries iska hain

//   [ key,  value ],
//  ↑       ↑
//  key    value — chhota array

//   [ key2, value2 ],
//   [ key3, value3 ]
// ])

const mapPrefilled = new Map([

  ["name", "Hammad Siddique"],
  ["fatherName", "Muhammad Siddique Zaman"],
  ["rollNumber", "ISL 22:02"],
  ["semester", "8th"]
]);

console.log(mapPrefilled);

//? Prefilled Map — Real Life Example

const studentCard = new Map([
  ["name", "Hammad Siddique"],
  ["rollNbr", "ISL 22:02"],
  ["subject", "Islamic Studies"],
  ["semester", "8th"],
  ["cgpa", 3.59]
]);

console.log(`Student Name is ${studentCard.get("name")} Student Roll Number is ${studentCard.get("rollNbr")} Subject Name is ${studentCard.get("subject")} Current Semester ${studentCard.get("semester")} Student CGPA is ${studentCard.get("cgpa")}`);


//? Prefilled + Nested Map

const addressKey = new Map([
  ["city", "Batgram"],
  ["country", "Pakistan"],
  ["district", "Thakot"]
]);

const studentCard2 = new Map([
  ["name", "Imran Khan"],
  ["subject", "Islamic Studies"],
  ["rollNbr", "ISL 22:23"],
  ["cgpa", 3.43],
  ["address", addressKey]
]);


console.log(`Student Name is ${studentCard2.get("name")} Student Roll No is ${studentCard2.get("rollNbr")} student CGPA is ${studentCard2.get("cgpa")} Student City Name is ${studentCard2.get("address").get("city")} Student District Name is ${studentCard2.get("address").get("district")}`);


// 1. Ek prefilled Map banao — apni profile ke saath:
//    name, age, city, isStudent, hobby

// 2. Us pe yeh sab karo:
//    .get() se name nikalo
//    .has() se "salary" check karo
//    .set() se "university" add karo
//    .delete() se "hobby" hatao
//    .size pehle aur baad mein print karo

// 3. Nested prefilled Map banao:
//    addressMap — city, area, street
//    profileMap — name, age, address (addressMap link karo)
//    city nikalo nested se

// 4. Object key ke saath prefilled Map:
//    const courseKey = { id: 101 }
//    Map mein courseKey → "JavaScript" daalo
//    .get(courseKey) se nikalo
//    .get({ id: 101 }) try karo — kya aayega?

const profileAddress = new Map([
  ["city", "Abbottabad"],
  ["area", "Nawasher Residential Area"],
  ["street", "Saba Colony"]
]); // nested map banaya 

const courseKey = {id: 101}; // object ke banay variable main

const myProfile = new Map([
  ["name", "Hammad Siddique"],
  ["age", 23],
  ["city", "Abbottabad"],
  ["isStudent", true],
  ["hobbies",["Coding", "Programing", "Chess", "Blogging"]],
  ["address", profileAddress],
  [courseKey, "javascript"]
]);
console.log(myProfile.get("hobbies"))
console.log(myProfile.get("name")); // name show ho ga
console.log(myProfile.has("salary")); // salary ke key nahi false ai ga 
myProfile.set("universty", "GPGC NO 1 Abbottabad"); // set se universty add kar dia ha 
console.log(myProfile.size);  // 
myProfile.delete("hobbies"); // hobbies wali key delete kar di ha 
console.log(myProfile.size); // 
console.log(myProfile.get("address").get("city")); // city nikal di ha nested se 
console.log(myProfile.get(courseKey)); // Javascript ai ga
console.log(myProfile.get({id: 101})); // undefined ai ga keuke ke get key ko select karta ha value ko nahi 