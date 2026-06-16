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
    let words = str.split(" "); // strings ko split kia or array banaya 
    let stack = [];

    for(let i = 0; i < words.length; i++) {
        stack.push(words[i]); // yani start main index 0 ha loop chalate raho jab words ki length 0 nahi ho jati 
    }; 

    let reverseWord =  ""; 
    while(stack.length > 0) {
        reverseWord = reverseWord + stack.pop() + " ";
    };
    return reverseWord.trim(); // extra space hata dia 
};

console.log(reverseWords("HELLO WORLD")); // WORLD HELLO
console.log(reverseWords("Fahad Shafique")); // Shafique Fahad
console.log(reverseWords("I Love JavaScript"));

//! Function 2: reverseEachWord(str)

// Input:  "I love JavaScript"
// Output: "I evol tpircSavaJ"

// Hint:
// 1. String ko SPACE se todo → array of words
// 2. HAR WORD ko reverseString() (Topic 15) se reverse karo
// 3. Space ke saath jodo (order same rakho!)



function reverseString(string) {
    let wordNew = string.split(" ");
    let stackNew = [];

    for(let i = 0; i < string.length; i++){

        stackNew.push(string[i]);
    }; 

    let reverseNew = "";

    while(stackNew.length > 0){
        reverseNew = reverseNew + stackNew.pop();
    };

    return reverseNew.trim();
};

console.log(reverseString("I Love JavaScript"));