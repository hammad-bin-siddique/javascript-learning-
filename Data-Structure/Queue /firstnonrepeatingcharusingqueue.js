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

console.log("===First Non Repeating Character Using Map===")
console.log(fristNonRepeatingChar("Hammad")); // H
console.log(fristNonRepeatingChar("ammara")); // r


//? Abhi ham ne queue ka class se blueprint banaya ha 
class Queue {
    constructor(){
        this.queue = [];
    };

    enqueue(element) {
        this.queue.push(element);
    };

    dequeue() {
        if(this.isEmpty()){
            console.log("There is nothing to dequeue");
            return null;
        }
        return this.queue.shift();
    };

    peek() {
        if(this.isEmpty()) {
            console.log("There is nothing to peek");
            return null;
        }
        return this.queue[0];
    };

    size() {
        return this.queue.length;
    };

    isEmpty() {
        return this.queue.length === 0;
    };

    print() {
        console.log(this.queue);
    };
};

//? acha pehle ham ne just map ke help se first non repeating character nikala tha abhi ham queue ke help se is tara ka function banai ge 


function fristNonRepeatingCharUsingQueue(string) {
    let charCount = new Map();
    let queue = new Queue();

    for(let char of string) {
        if(charCount.has(char)) {
            let current = charCount.get(char);
            current++; 
            charCount.set(char,current);
        }
        else{
            charCount.set(char, 1);
        }
    }

    for(let char of string) {
        queue.enqueue(char); // her charcter ko queue mian push karo 
    };

    while(!queue.isEmpty()) {
        let char = queue.dequeue()
        if(charCount.get(char) === 1){
            return char;
        }
    }

    return null;
}

console.log("===First Non Repeating Character Using Queue===");
console.log(fristNonRepeatingCharUsingQueue("ahmad")); // h 
console.log(fristNonRepeatingCharUsingQueue("abdullah")); // b