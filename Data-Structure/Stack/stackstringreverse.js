//! 📚 Topic 16: Problem 1 — String Reverse (Practice)

//? Function 1: reverseWords(str)
// Input:  "I love JavaScript"
// Output: "JavaScript love I"

// Hint:
// 1. String ko SPACE se todo → array of words
// 2. Stack mein push karo
// 3. Pop karo
// 4. Space ke saath jodo

function reverseWords(str) {
    let words = str.split(" "); // strings ko space main kia yani un ka array bana dia 
    let stack = [];

    for(let i = 0; i < words.length; i++) {
        stack.push(words[i]); // yani start main index 0 ha loop chalate raho jab words ki length 0 nahi ho jati 
    }; 

    let reverseWord =  ""; 
    while(stack.length > 0) {
        reverseWord = reverseWord + stack.pop();
    };
    return reverseWord;
};

console.log(reverseWords("HELLO WORLD")); // WORLD HELLO
console.log(reverseWords("Danial Donkey")); // Donkey Danial  mean ke khota khota he hota ha chaia age lagao ya peache 