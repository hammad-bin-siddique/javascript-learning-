//! Topic 1: Loose Equality ( == ).

// Loose Equality Operator (==), jise Abstract Equality Comparison bhi kehte hain, do operands ko compare karta hai value ke liye. Agar dono operands ka data type alag ho, to JavaScript engine comparison se pehle type coercion (implicit conversion) perform karta hai — matlab dono values ko ek common type mein convert karta hai — aur uske baad unki values compare karta hai.

console.log(5 == "5"); // true

// Yahan 5 number hai aur "5" string hai. JS ne "5" ko andar hi andar number 5 mein convert kar diya, phir compare kiya. Isliye true aaya.

//! == Operator kaam kaise karta hai

// == (Loose Equality / Abstract Equality) ka rule simple hai:

// Agar dono values ka type alag ho, to pehle unko convert karo (coerce karo) same type mein, phir compare karo.

//? Surprising Cases
console.log("===Loose Equality===");

console.log(0 == false); // true keuke false bhi 0 he count hota ha
console.log("" == 0); // true empty string bhi 0 count hote hain
console.log(null == undefined); // true special case null or undefined baki kisi ke sath bhi ai to false he ho ge but ye special case ha

console.log(NaN == NaN); // Not a number Mean ke invalid values hote to same nahi ho sakti hain is lia false

console.log("0" == false); // true cuz false ka type coercion hota ha false 0 ban jata ha "0" bhu number 0 ban jata or is lia true ata ha output

console.log(undefined == 0); // false sirf null or undefined main true ai ga baki null ya undefined kisi ke sath bhi ho ge to false ho ga
console.log("Bilal" == "Bilal"); // true
console.log(null == false); // false

//! Practice Tasks

//? Task 1 Predict & Verify

console.log("===Task One===");

console.log("5" == 5); // true cuz coercion ho gi "5" number se badle ga or 5 5 same ha is lia true
console.log(false == undefined); // false keuke undefined kisi ke bhi sath ai ga to false he return kare ga siwai null ke
console.log(null == 0); // false
console.log(" " == 0); // space bhi empty string he count hoti or empty string coercion main number ban jati ha 0 or 0 0 same is lia true

console.log([] == false); // true empty bracket bhi coercion ho kar 0 ban jata ha or false bhi is lia true ai ga

console.log("Faizan" == "faizan"); // false type same ha but value same nahi ha is lia false ye == type check karta ha agar same ho to direct compare karta ha warna coercion karta ha

//? Task 2

console.log("===Task Two===");

console.log(15 == "15"); // true cuz loose equality sirf value check karti ha naw ke type

console.log(true == 1); // true cuz true coercion ho kar 1 treat kia jata ha is lia true ai ga

console.log(null == 0); // false null undefined ke ilawa kisi ke sath bhi ai to false he return karta ha

console.log(NaN == "1"); // false ai ga keuke Nan invalid number ha agar NaN NaN ke sath bhi compare karo bhi phir bhi false he ai ga

//? Task 3

console.log("===Task Three===");

let userId = "0";
let isLoggedOut = false;

if (userId == isLoggedOut) {
  console.log("Id Matched: User is Logged Out");
} else {
  console.log("Id Didn't Matched");
}

// yaha Id Matched ho jai gi keuke == type agar same naw to coercion karti ha or false coercion ho kar 0 ban jata ha or string "0" bhi coercion ho kar 0 ban jata ha is lia dono compare hote hain or true ata ha is lia if wali condition chal jati ha jo ke bug ha

//? Solution for this bug use Strict Equality ===

if (userId === isLoggedOut) {
  console.log("Id Matched: User is Logged Out");
} else {
  console.log("Id Didn't Matched");
}

// yaha per else wali condition chale gi keuke === strict check karta ha or false or "0" same nahi ha is lia wo false return kare ga or yaha per id didn't matched ai ga or bug se bach jai ga warna real project main ye bug or user logged out ho ga he or system use logged out treat kare ga

//! Mini Project

// The value which come from the user
console.log("===Mini Project===");

const ageInput = "18"; // string
const subscribedInput = "1"; // string
const phoneInput = ""; // emptyString
const couponInput = "0"; // string

// Now we make these string values into actual types like number boolean etc and than compare each other

const minAge = 18; // number
const isSubscribed = true; // boolean
const hasPhone = false; // boolean
const couponApplied = 0; // number

if (ageInput == minAge) {
  console.log("Age Requirment Met");
} else {
  console.log("Age Requirment Does Not Met");
} // yaha per if wali condition chale ge keuke type coercion ho ga or string 18 number bane or phir dono compare ho ge is lia true ai ga or if condition chale gi

if (subscribedInput == isSubscribed) {
  console.log("The User Subscribed The Channel");
} else {
  console.log("This User Did Not Subscribed Yet");
} // yaha per bhi if wali condition chale gi string 1 number bane or true bhi number main convert ho ga or true ko 1 treat kia jata ha to 2no 1 is lia true ai ga or first condition chale gi

if (phoneInput == hasPhone) {
  console.log("User Has Not The Phone");
} else {
  console.log("User Has Phone");
} // yaha per first condition chale gi empty string number main convert ho ge or boolean bhi false se 0 bane ga or empty string bhi 0 ban jata ha coercion karte hue is lia true ai ga or first condition chale gi  Mean ke falsy value match ho gai ha halke yaha phone false tha loose equlity ke waja se yaha per first condition chali ha jo ke real projects main bug ha  // lekin abhi condition ke according set kia ha to bug bhi remove ho ga ab User Has not the phone print ho ga 

if (couponInput == couponApplied) {
  console.log("User Didn't Enter The Coupon Code");
} else {
  console.log("User Enter The Coupon Code");
} // yaha per bhi string number main convert ho ga or phir 0 ho jai or compare per true ai ai ga is lia yaha bhi first condition chale gi lekin yaha loose equality ke waja se falsy value bhi true ho gai ha or first condition chali ha jo ke 1 real project main bug ha // yaha bih same console change kia ha take agar false wali condition ho to User didn't enter the coupon code print ho 



//? Now Fix This Real Bug With Strict Equality
console.log("===Fix With Strict Equality===");
if(ageInput === minAge) {
    console.log("Age Requirment Is Met"); 
}
else {
    console.log("Age Requirment Isn't Met"); // Yaha per ye condition chale gi keuke strict checking ho rahi ha is lia 
}; 

if(subscribedInput === isSubscribed) {
    console.log("User Has Subscribed The Channel");
}
else {
    console.log("User Hasn't Subscribed The Channel"); // yaha per bhi ye condition chale gi keuke 1 boolean ha or input string
}; 

if(phoneInput === hasPhone) {
    console.log("User Has The Phone");
}
else {
    console.log("User Hasn't The Phone"); // Yaha per bhi ye condition chale gi 
}; 

if(couponInput === couponApplied) {
    console.log("User Enter The Coupon Code");
} 
else {
    console.log("User Didn't Enter The Coupon Code"); // yaha per bhi ye condition chale ge 
}


//? Now Proper Fix Conver and Than Compare 

if(Number(ageInput) === minAge) {
    console.log("Age Requirment Met");
}
else {
    console.log("Age Requirment Isn't Met");
}; // yaha per first condition chale gi keuke age input ko number main convert kia or minage se same is lia first condition chale gi 

if(Number(subscribedInput) === 1) {
    console.log("User Subscribed The Channel");
}
else {
    console.log("User Didn't Subscribed");
} // yaha per first chale gi keuke user ne 1 dia hua ha agar user 0 deta ha to phir second condition chale gi 

if(phoneInput.length === 0) {
    console.log("User Hasn't The Phone")
}
else {
    console.log("User has Phone");
}; // yaha per phone input ke lenght dekhe ke agar 0 hui to first condition warna second

if(Number(couponInput) === couponApplied) {
    console.log("User Didn't Enter The Coupon Code");
}// yaha per coupon input number main convert ho gi or phir check ho gi agar match hui the to first condition warna second
else {
    console.log("User Enter The Coupon Code");
}; 


// Field       |  ==                         | === (raw)               |     Proper fix
// age         |  Requirment Met             | Not Met   Wrong         |    Requirment Met
// subscribed  |  Subscribed                 | Not Subscribed Wrong    |    Subscribed 
// phone       |  has phone Wrong            | Has Not Phone           |    Has Not Phone
// coupon      |  enter the coupon   Wrong   | Didn't Enter            |    Didn't Enter The Coupon