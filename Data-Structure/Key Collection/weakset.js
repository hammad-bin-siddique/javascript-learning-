//! WeakSet kya hai?


// Set jaisa hi hai (unique values), lekin:

// Sirf Objects store kar sakta hai (string, number allowed nahi)
// Weak reference rakhta hai — agar object ka koi aur reference na bache, garbage collector use hata deta hai
// .size nahi hota, loop nahi kar sakte (WeakMap jaisi hi limitation)


let visitedUsers = new WeakSet();

let user1 = {name: "Ali"};
let user2 = {name: "Sara"};

visitedUsers.add(user1);
visitedUsers.add(user2);

console.log(visitedUsers.has(user1)); // true;
visitedUsers.delete(user2);
console.log(visitedUsers.has(user2)); // false 


//! Real World Use case man 1 website per track karna ho ke kaunse user ne already form submit kar dia ha take dobara submit naw kar pai is ke lia best ha weak set 

let submittedForms = new WeakSet();

function submitForm(userObj) {
    if(submittedForms.has(userObj)) {
        console.log("Form Already Has Been Submitted");
        return; // mean ke agar submitted form main already user obj ha mean ke user ne already form fill kia hua to print karo ke form already has been submitted 
    };
    submittedForms.add(userObj); // warna submitted form main addd karo user ko 
    console.log("Form Submitted!");
};

let currentUser = {id: 101};
submitForm(currentUser); // Form Submitted!
submitForm(currentUser); // Form Already has been submitted


//? Weak Set Task 


let bannedUsers = new WeakSet();

let bannedUser1 = {name: "Hammad"};
let bannedUser2 = {name: "Fahad"};

bannedUsers.add(bannedUser1); 
bannedUsers.add(bannedUser2); // ye dono user banned user main add kar dia 

console.log("===Weak Set Task===");
console.log(bannedUsers.has(bannedUser1)); // true;
console.log(bannedUsers.has(bannedUser2)); // true;
bannedUsers.delete(bannedUser1); // ab user 1 ko delete kar dia weak map se 
console.log(bannedUsers.has(bannedUser1)); // false keuke wo add he nahi ha 