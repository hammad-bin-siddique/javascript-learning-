//! Phase 5 — Practice Problems 🎯
//? Problem 16 — Stack se String Reverse karo

//! Function One  string ko reverse karo

function reverseString(str) {
  let stack = []; // start main stack ko khali rakho
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]); // yani start main index 0 ho ga jab tak latters baki hain loop chalao or i main add karte jao
  }

  let reverse = ""; // khali variable banaya jis main revrse string jama ho ge
  while (stack.length > 0) {
    reverse = reverse + stack.pop(); // yani loop chalao jab tak string ke lenght 0 nahi ho jati us ko stack stack se nikalte jao or reverse main add karte jao lifo method ke through
  }
  return reverse; // akhir main reverse return karo
}

console.log(reverseString("Hammad")); // dammaH
console.log(reverseString("I Love JavaScript"));

//! Function two is main words ko reverse karo

function reverseEachWord(string) {
  let word = string.split(" "); // yani string ko toro
  let result = [];

  for (let i = 0; i < word.length; i++) {
    result.push(reverseString(word[i]));
  }
  return result.join(" ");
}

console.log(reverseEachWord("Hello Hammad"));
console.log(reverseEachWord("I Love JavaScript"));

//! Problem 17 — Balanced Parentheses Checker 🔍

function isBalanced(str) {
  // step one empty stack banao

  let stack = [];

  // step 2 opening and closing pair banana

  let open = ["(", "{", "["];
  let close = [")", "}", "]"];

  // step 3 her character ko dekho

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // agar opening bracket ha to us ko stack main dalao

    if (open.includes(char)) {
      stack.push(char);
    }

    // agar closing bracket ha
    else if (close.includes(char)) {
      if (stack.length === 0) {
        return false; // mean ke agar stack khali ho to return karo false keuke  koi opening bracket nahi ha
      }

      // stack se upar wala nikalo

      let top = stack.pop();

      // check karna ke kya pair match kar raha ha ke nahi

      let topIndex = open.indexOf(top);
      let closeIndex = close.indexOf(char);

      if (topIndex !== closeIndex) {
        return false; // agar match naw kare to false return karo
      }
    }
  }
  // step 4: agar stack khali hai or sab match ho jai 

  return stack.length === 0;
};


console.log(isBalanced("( { [ ] } )"));  // true
console.log(isBalanced("( { [ ) } )"));  // false
console.log(isBalanced("{ }"));          // true
console.log(isBalanced("( ( ( )"));      // false
console.log(isBalanced(""));             // true
