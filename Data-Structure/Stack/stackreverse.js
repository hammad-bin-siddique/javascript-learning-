//! 📚 Topic 15: Reverse String Using Stack

//? 📖 Concept

// String → "Hello"

// Step 1: Har character STACK mein PUSH karo
//         H, e, l, l, o → stack: [H, e, l, l, o]
//                                             TOP

// Step 2: Har character POP karo
//         TOP se nikalta hai → o, l, l, e, H

// Step 3: Pop kiye characters ko
//         jodo → "olleH"

// REVERSE HO GAYA! ✅

//! Code of reverse String 

function reverseString(str) {
    let stack = [];

    // Step 1: Push Every Character

    for(let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }; // yani start main i 0 ha jab string ke length  i se choti nai ho jati tab tak loop ko chalao 

    //Step Two: Pop kar ke reverse karo 
    let reversed = "";
    while(stack.length > 0){
        reversed = reversed +  stack.pop();
    };
    // yani jab tak stack ke length 0 nahi ho jati tak tak loop ko chalao 

    return reversed; 
    // or reverse karo return value reverse is lia ke stack main lifo method hota ha 

};

console.log(reverseString("Hammad")); // dammaH ai ga 
console.log(reverseString("Hello")); // olleH ai ga 
console.log(reverseString("Bulb")); // bluB ai ga
console.log(reverseString(""));  // empty space ai gi
console.log(reverseString("a"));  // yehe character hi ga


//! Task Reverse string vs palindrome string compare 

//? first reverseString function banai ge 

function reverseStringNew(str) {
    let stack = []; // empty stack array banaya 

    for(let x = 0; x < str.length; x++) {
        stack.push(str[x]);
    }; // yani start main x 0 ha loop chalaya ke jab tak string ke length 0 nahi ho jati tab tak loop chalo or  stack main value push karo 

    let reversedNew = "";
    while (stack.length > 0) {
        reversedNew = reversedNew + stack.pop(); // yani while loop chalao jab tak stack ke length 0 nahi  ho jati tak loop chalao or stack se pop karo or reversed main dalte jao 
    };
    return reversedNew;
};

//? Palindrome Function banana 

function isPalindrome(str) {
    if(str === reverseStringNew(str)) {
        return true;
    }
    else {
        return false;
    };
};


console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Hammad")); // false

console.log(reverseStringNew("Madam")); // madaM
console.log(isPalindrome("tibit")); // true
