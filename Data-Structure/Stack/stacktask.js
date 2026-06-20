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
}

// console.log(isBalanced("( { [ ] } )")); // true
// console.log(isBalanced("( { [ ) } )")); // false
// console.log(isBalanced("{ }")); // true
// console.log(isBalanced("( ( ( )")); // false
// console.log(isBalanced("")); // true

//! Function is balanced task

function isBalancedNew(string) {
  //? step one khali stack banana

  let stackNew = [];

  //? step 2 opening and closing pair banana

  let openNew = ["(", "{", "["];
  let closeNew = [")", "}", "]"];

  //? step three her character ko dekhna

  for (let x = 0; x < string.length; x++) {
    let character = string[x]; // yani jab tak x string ke length se chota ha tab tak loop chalao or her bar x main 1 add karte jao

    //? agar opening bracket ha to us ko stack main dalo

    if (openNew.includes(character)) {
      stackNew.push(character);
    }
    // yani open new main dekho ke character ha yani ( [ ye to us ko stack ke andar push karo character ko

    //? ab dosri condition lage gi yani closing wali
    else if (closeNew.includes(character)) {
      if (stackNew.length === 0) {
        return false;
      } // yani jab pehle wala if nahi chale mean ke "( { [ " in main se koi naw ho to phir dekho ke closing bracket ha ke nahi ")}]" to ye chalo jab tak stack ke length 0 nahi ho jati ye condition is lia lagate ha ke agar stack khali hua to undefined return kare ga

      let topNew = stackNew.pop(); //yani stack se uper wala nikalo or use top new wale variable main store karo

      let topIndexNew = openNew.indexOf(topNew); // yani jo stack se abhi pop hua us ka index of ko dhondta  ha like openNew.indexOf("("); is ka index of 0 ha
      let closeIndexNew = closeNew.indexOf(character); // ye bhi same kam karta ha but closing bracket main ke un ka index kn sa ha agar closing or opening bracket ka index same ha like ( ) in dono ka index 0 ha to phir pair matched ho ga or balanced main true ai ga

      if (topIndexNew !== closeIndexNew) {
        return false; // yani ye condition ye check kare gi ke top index or close index agar brabar nahi ha to false ai ga like ( is ka index 0 ha or is ka } 1 ha to false return kare ga warna agar dono ka same ata ha to loop continue ho ga or kuch return nahi ha ga
      }
    }
  }
  // agar stack khali ha to mean ke sab match hua or balanced ha

  return stackNew.length === 0; // yani agar stack khali ha to mean ke sab match ho gia or agar "({[" ye ho to stack khali nahi ho or match bhi nahi to false return kare ga mean ke agar sab match hut to true warna false
}

console.log(isBalancedNew("({[]})")); // true ai ga
console.log(isBalancedNew("({)}")); // false ai ga keuke pair match nahi kar rahe
console.log(isBalancedNew("()")); // true ai ga

console.log(isBalancedNew("")); // true ai ga keuke stack khola he nahi ke band karna pare 
console.log(isBalancedNew("(((")); // false ai ga khola to ha magar band nahi kia 

console.log(isBalancedNew(")(")); // false ai ga keuke kholne se pehle he band kar dia 