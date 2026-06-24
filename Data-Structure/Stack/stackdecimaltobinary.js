//! Convert number form decimal to binary 

function decimalToBinary(num) {
    let stack = []; // start main stack empty ho ga 

    // jab tak  quotient 0 nahi ho jata tab tak loop chalao 

    while(num > 0) {
        let reminder = num % 2; // number ko 2 se divide kar ke reminder nikalo 
        stack.push(reminder); // reminder ko stack main push karo 

        num = Math.floor(num / 2); // num ko 2 se divide karo 
    };

    // ab stack se pop karke binary banao 

    let binary = "";
    while(stack.length > 0) {
        binary = binary + stack.pop(); // jab tak stack ke lenght 0 nahi ho jati tab tak stack se nikalo 
    };
    return binary;
};

console.log(decimalToBinary(20));
console.log(decimalToBinary(10)); 
console.log(decimalToBinary(5));
console.log(decimalToBinary(100)); // 1100100


//! NOTE
//kisi bhi decimal number ko binary main convert karne ke lia us number ko 2 per divide karte raha ge jab tak quationt 0 naw ho jai or reminder ko jo ho wo binary number ho ga 