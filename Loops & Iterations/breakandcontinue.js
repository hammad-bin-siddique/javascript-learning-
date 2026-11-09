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

//! Point 2: continue

console.log("===Point Two Continue==="); 

//? Definition

// Jab JavaScript continue par pohanchti hai to:

// Is round ki baaki body skip ho jati hai.
// Loop band nahi hota.
// for loop mein control seedha update part (i++) par jata hai, phir condition check hoti hai, phir agla round shuru.

// Yaad rakho: break mein i++ skip hota tha, lekin continue mein for loop ka i++ chalta hai.


//! Code Example

let marks1 = [70, 85, 40, 90, 55]; 

let count1 = 0; 

for(let i = 0; i < marks1.length; i++) {
    if(marks1[i] < 50) {
        continue;

    }
    count1++;
    console.log(marks1[i]);
}

console.log(count1);

// Pichli dafa break ke saath jawab 2 tha. Ab continue ke saath 4 hai. Farq yehi hai: break ne 90 aur 55 ko dekhne hi nahi diya, jab ke continue ne sirf 40 ko chhoda.

//?
// continue = sirf is round ki baaki body skip. Loop chalta rehta hai.
// for loop mein continue ke baad i++ CHALTA hai (break mein nahi).

let nums = [5, -2, 8, 0, 12, -7, 3];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) {
    continue;
  }
  if (nums[i] === 0) {
    break;
  }
  sum += nums[i];
}

console.log(sum); // 13

// Round | i | nums[i] | < 0?  | === 0? | Kya hua        | sum
//   1   | 0 |    5    | false | false  | sum += 5       | 5
//   2   | 1 |   -2    | true  |  --    | continue       | 5
//   3   | 2 |    8    | false | false  | sum += 8       | 13
//   4   | 3 |    0    | false | true   | break          | 13
//
// (a) Output: 13
// (b) Body: 4 dafa (round 4 mein break hua, par body shuru ho chuki thi)
// (c) Condition: 4 dafa (i = 0, 1, 2, 3)
// (d) i++: 3 dafa (round 2 mein continue ke baad bhi chala, round 4 mein break ne skip kiya)
// (e) 12, -7, 3 kabhi check nahi hue