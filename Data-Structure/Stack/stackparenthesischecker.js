//! 📚 Topic 14: Balanced Parentheses Checker

//? 📖 Balanced Parentheses Kya Hai?

// Ek string mein brackets hain: ( ) { } [ ]

// BALANCED hoga agar:
// 1. Har OPENING bracket ka
//    ek MATCHING CLOSING bracket ho

// 2. SAHI ORDER mein band hon
//    (jo sabse aakhir khula, woh sabse pehle band ho)

// 3. Koi extra ya missing
//    bracket na ho

//! 🤔 Stack Kyun Use Hota Hai Yahan?

// LIFO → Last In First Out
// Jo aakhir mein khula → sabse pehle band hona chahiye

//? Yeh EXACTLY brackets ka rule hai!

// ( { [ ] } )

// [ sabse aakhir khula → sabse pehle band hua ✅
// { uske baad         → uske baad band hua    ✅
// ( sabse pehle khula → sabse aakhir band hua  ✅

// LIFO Pattern! 🎯

//? 👁️ Visual — Step By Step

// String: ( { [ ] } )

// Character: (
// Yeh OPENING bracket hai → STACK mein PUSH karo

// Stack: [ ( ]

// ━━━━━━━━━━━━━━━━━━━━━━

// Character: {
// Yeh OPENING bracket hai → STACK mein PUSH karo

// Stack: [ (, { ]

// ━━━━━━━━━━━━━━━━━━━━━━

// Character: [
// Yeh OPENING bracket hai → STACK mein PUSH karo

// Stack: [ (, {, [ ]

// ━━━━━━━━━━━━━━━━━━━━━━

// Character: ]
// Yeh CLOSING bracket hai!
// → Stack ka TOP nikalo (pop)
// → TOP tha: [
// → Kya ] aur [ MATCH karte hain? HAAN! ✅

// Stack: [ (, { ]

// ━━━━━━━━━━━━━━━━━━━━━━

// Character: }
// Yeh CLOSING bracket hai!
// → Stack ka TOP nikalo (pop)
// → TOP tha: {
// → Kya } aur { MATCH karte hain? HAAN! ✅

// Stack: [ ( ]

// ━━━━━━━━━━━━━━━━━━━━━━

// Character: )
// Yeh CLOSING bracket hai!
// → Stack ka TOP nikalo (pop)
// → TOP tha: (
// → Kya ) aur ( MATCH karte hain? HAAN! ✅

// Stack: [ ]

// ━━━━━━━━━━━━━━━━━━━━━━

// String khatam ho gayi!
// Stack KHALI hai!

// → BALANCED! ✅

//? 🔑 3 Important Cases

// Case 1: Opening bracket mila
//         → Stack mein PUSH karo

// Case 2: Closing bracket mila
//         → Stack se POP karo
//         → Match check karo
//         → Match nahi hua → FALSE

// Case 3: String khatam ho gayi
//         → Stack khali hai?
//           → HAAN → TRUE (Balanced!)
//           → NAHI → FALSE (kuch khula reh gaya)

//? 📖 isBalanced() — Complete Line By Line

function isBalanced(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    //Opening Bracket

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }

    //Closing Brackets
    else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (top !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};


console.log(isBalanced("()")); // true 
console.log(isBalanced("([])")); // true 
console.log(isBalanced("([)]")); // false 
console.log(isBalanced("(((")); // false 
console.log(isBalanced(")(")); // false
console.log(isBalanced("")); // true

