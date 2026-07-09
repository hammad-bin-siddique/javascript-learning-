//! 🔷 Problem 3 (Medium) — First Non-Repeating Character

// is task main ham queue ke or bina queue ki help se Kisi bhi string ka first non repeating character find kare ge 
// mean ke Jese Hammad ha ab is ka first non repeating character H ha wese d bhi non repeating ha but wo pehla nahi ha 


//? Abhi ham first non repeating character find kare using map is main ham queue ka use nahi kare ge 

function fristNonRepeatingChar(string) {
    let charCount = new Map();

    // first step main ham string ke double character count kare ge 
    for(let char of string) {
        if(charCount.has(char)) {
            let current = charCount.get(char);
            current++;
            charCount.set(char, current);
        }
        else{
            charCount.set(char, 1); // yaha get is lia use nahi kia keuke wo existing value nikalne ke lia hota ha 
        }
    }

    // ab yaha per ham jo first non repeating character ha us ko nikale ge 

    for(let char of string) {
        if(charCount.get(char) === 1) {
            return  char;
        }
    }

    return null;
};

console.log(fristNonRepeatingChar("Hammad")); // H
console.log(fristNonRepeatingChar("ammara")); // r
