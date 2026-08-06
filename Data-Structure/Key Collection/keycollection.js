//! In this chapter we will learn about key collections


//? Quick Revision: Map

// Map kya hai? Object jaisa hi key-value pair store karta hai, lekin better version hai:

// Object mein keys sirf String ya Symbol ho sakti hain. Map mein key kuch bhi ho sakti hai — number, object, function, even array!
// Map mein insertion order guaranteed hoti hai (jis order mein dala, usi order mein milega)
// map.size se directly length mil jati hai (Object mein Object.keys(obj).length karna parta hai)


let userMap = new Map();

userMap.set("name", "Hammad");
userMap.set(1, "one"); // Number key
userMap.set(true, "Boolean Key"); // Boolean Key

console.log(userMap.get("name")); // Hammad
console.log(userMap.size); // 3
console.log(userMap.has(2)); // false
console.log(userMap.has(1)); // true
userMap.delete(1);
console.log(userMap.has(1)); // false Delete ho gia ha 

for (let values of userMap) {
    console.log(values);
};


//! Quick Revision: Set

// Set kya hai? Array jaisa hi collection hai, lekin sirf unique values rakhta hai — duplicate automatically ignore ho jata hai.


let mySet = new Set([1, 2, 3, 3, 4, 5, 4, 5, 6]);
console.log(mySet); // 1 2 3 4 5 6  duplicate will be removed
