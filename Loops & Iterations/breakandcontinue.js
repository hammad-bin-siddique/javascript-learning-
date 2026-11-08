// break and continue

// break: loop ko fauran rokna
// continue: sirf ek iteration chhodna
// Nested loops mein ye kis loop par kaam karte hain
// Labeled break / continue
// Real examples: pehla match dhoondhna, ghalat data skip karna
// forEach mein break kyun nahi chalta, aur uske badal
// continue
// while ka infinite loop wala khatra


//! Point 1: break
console.log("====Point One Break==="); 

//? Definition

// break ek statement hai. Jab JavaScript isay run karti hai to:

// Loop ki baaki body skip ho jati hai.
// Update part bhi skip ho jata hai (i++ nahi chalta).
// Condition dobara check nahi hoti.
// Control seedha loop ke baad wali pehli line par chala jata hai.

//! Code Examples 

let numbers = [4, 9, 12, 7, 20]; 

for(let i = 0; i < numbers.length; i++) {
    console.log("Checking Numbers:", numbers[i]); 

    if(numbers[i] > 10) {
        console.log("Got It!");
        break;
    }
}

console.log("The Line After The loop");



//* Counts 

// Body: 3 dafa chali.
// Condition (i < numbers.length): 3 dafa check hui. Pehle ki tarah “body + 1” nahi hai, kyunke loop condition false hone se nahi, break se khatam hua.
// Update (i++): sirf 2 dafa chala. Teesre round mein break ne use skip kar diya.



//* 3 zaroori baatein

// break sirf loop ko rokta hai, poora program nahi. Loop ke baad wala code chalta rehta hai.
// break sirf loop ya switch ke andar chalta hai. Akela if mein likhoge to error aayega: SyntaxError: Illegal break statement.
// break aksar if ke andar hota hai. Bina if ke break pehle hi round mein loop rok dega, to loop ka faida hi khatam.


let prices = [500, 1200, 300, 2500, 100]; 
let total = 0; 
for(let i = 0; i < prices.length; i++) {
    if(prices[i] > 2000) {
        break;
    }
    total += prices[i];
}

console.log(total);

//  Point 1: break 
// break = loop ko foran rokna.
// Baaki body, i++ aur condition check, sab skip.
// break sirf loop (ya switch) ke andar chalta hai.

let marks = [70, 85, 40, 90, 55];
let count = 0;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 50) {
    break;          // 40 par loop yahin band
  }
  count++;          // break wale round mein ye line nahi chalti
}

console.log(count); // 2

// (a) Output: 2
// (b) Body: 3 dafa chali
// (c) Condition: 3 dafa check hui (loop break se khatam hua, false se nahi)
// (d) i++: 2 dafa chala (teesre round mein break ne skip kar diya)
// (e) 90 aur 55 kabhi check hi nahi hue