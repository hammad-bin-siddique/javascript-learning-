//! Stack — Mega Task 🔥


//? Part 1 — Basic Stack (Class)

class Stack {
    constructor(){
        this.item = [];
    };

    // push function banana 

    push(element) {
        return this.item.push(element);
    };

    // pop function banana 

    pop() {
        if(this.isEmpty()) {
            return null
        }
        return this.item.pop();
    }

    // peek function banana 

    peek() {
        if(this.isEmpty()){
            return null;
        }
        return this.item[this.item.length - 1];
    };

    //Size function banana 

    size() {
        return this.item.length;
    };

    // isEmpty function banana 

    isEmpty() {
        return this.item.length === 0;
    }; 

    // print function banana 

    print(){
        console.log(this.item);
    };
};

const stackOne = new Stack();

stackOne.push("Hammad");
stackOne.push("Ali");
stackOne.push("Fahad");

stackOne.print(); // hammad ali fahad
console.log(stackOne.size()); //3 ai ga 
console.log(`Peek: ${stackOne.peek()}`); // fahad
console.log(`Pop: ${stackOne.pop()}`); // fahad out

console.log(stackOne.size()); // 2 ai ga fahad out ho gia 

console.log(stackOne.isEmpty()); //false ai ga empty nahi ha 


//? Ab Part 2 — Calculator Class 

class Calculator {
    constructor() {
        this.stack = new Stack();
        this.redoStack = new Stack();
        this.current = 0;
    }

    // abhi calculate ka function banai ge jo addition multiplication division substraction calculate kare ga 

    calculate(a, operator, b) {
        // abhi stack ke andar current value save kare ge 
        this.stack.push(this.current); 

        // abhi all operator check kare ge strict comparison ke sath 

        if(operator === "+") {
             this.current = a + b;
        }
        else if(operator === "-") {
            this.current = a - b;
        }
        else if(operator === "/") {
            this.current = a / b;
        }
        else if(operator === "*") {
             this.current = a * b;
        };

        let result = this.current;
        console.log(`Result: ${this.current}`);

    };


    //? Part three Undo and get history 

    undo(){
        if(this.stack.isEmpty()) {
            console.log("There is nothing to Undo");
            return;
        };

        this.redoStack.push(this.current);
        this.current = this.stack.pop();
        
        console.log(`Undo ${this.current}`);
    };

    //? redo function banana 

    redo(){
        if(this.redoStack.isEmpty()){
            console.log("There is nothing to redo");
            return;
        };

        this.stack.push(this.current);
        this.current = this.redoStack.pop();
       
        console.log(`Redo ${this.current}`);
    }

    //? Get History Function banana 

    getHistory(){
        console.log("Stack History:", this.stack);
        console.log("Current Text:", this.current);
    };

    //? Part 4 — isBalanced() 
    
    isBalanced(str) {
        let stackTwo = new Stack();
        let open = ["(", "{", "["];
        let close = [")", "}", "]"];
        // yaha 1 isi function ke andar 1 stack banaya or 2 variable banai open brackets or closing brackets ke 

        // abhi loop bane bani jis main i yani index 0 se start ho ga or tab tak chalta rahe ga jab tak jo string ha wo 0 nahi ho jata 

        for(let i = 0; i < str.length; i++) {
            let character = str[i];

            // abhi agar opening bracket hain to us ko stack main dalo 

            if(open.includes(character)) {
                stackTwo.push(character);
            }
            else if(close.includes(character)) {
                if(stackTwo.isEmpty()) {
                    return false;
                    //mean ke agar stack khali ha to false return karo keuke koi opening bracket nahi ha 
                };

                let top = stackTwo.pop(); // stack se pop karo or use top variable bana do 

                // abhi check kare ge ke opening or closing pari match karte hain ke nahi 

                let topIndex = open.indexOf(top);
                let closeIndex = close.indexOf(character);

                if(topIndex !== closeIndex) {
                    return false; // agar match naw kare to false return karo 
                }
            }
        }

        return stackTwo.isEmpty();
        
    };

    //?  Part 5 — lastThree()

    lastThree() {
        console.log("Last Three Calculations:");
        console.log(this.stack.item[this.stack.item.length - 1]); // last one
        console.log(this.stack.item[this.stack.item.length - 2]); // second last
        console.log(this.stack.item[this.stack.item.length - 3]); // third last
        
    };

};

let calc = new Calculator(); // yaha let ka use kia is lia ke is ki value bar bar change ho gi 

calc.calculate(199, "+" , 51); // result: 250
calc.calculate(199, "-" , 51); // result: 148
calc.calculate(199, "*" , 51); // result: 10149
calc.calculate(199, "/" , 51); // result: 3.9019607843137254
calc.lastThree(); // 199 / 51 wala abhi current main ha wo nahi gia abhi stack main ab stack main top per 10149 ha phir 148 phir 250 ye hain or ye 3 last elements hain 
calc.undo(); // abhi current text 10149
calc.undo(); // abhi 148
calc.redo(); // abhi redo se wapis 10149
calc.redo(); // abhi 3. wala ho ga 

calc.getHistory()

console.log(calc.isBalanced("(5 / 5) * (10 - 5)")); // true ai ga 
console.log(calc.isBalanced("{ [ ( ) ] }"));     // true ai ga 

console.log(calc.isBalanced("([}])")); // false ai ga keuke match nahi karte 
console.log(calc.isBalanced("(5 + 10) * (10 / 5")); // false ai ga keuke bracket open hui ha close nahi hui