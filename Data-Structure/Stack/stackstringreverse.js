//! Function One  string ko reverse karo 

function reverseString(str) {
    let stack = [];  // start main stack ko khali rakho 
    for(let i = 0; i < str.length; i++) {
        stack.push(str[i]); // yani start main index 0 ho ga jab tak latters baki hain loop chalao or i main add karte jao 
    }; 

    let reverse = ""; // khali variable banaya jis main revrse string jama ho ge 
    while(stack.length > 0) { 
        reverse = reverse + stack.pop(); // yani loop chalao jab tak string ke lenght 0 nahi ho jati us ko stack stack se nikalte jao or reverse main add karte jao lifo method ke through 
    }; 
    return reverse; // akhir main reverse return karo 
};

console.log(reverseString("Hammad")); // dammaH
console.log(reverseString("I Love JavaScript")); 

    //! Function two is main words ko reverse karo 

    function reverseEachWord(string) {
        let word = string.split(" ");  // yani string ko toro 
        let result = [];

        for(let i = 0; i < word.length; i++) {
            result.push(reverseString(word[i]));
        };
        return result.join(" "); 
    }; 

    console.log(reverseEachWord("Hello Hammad"));
    console.log(reverseEachWord("I Love JavaScript"));