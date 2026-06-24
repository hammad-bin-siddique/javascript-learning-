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
};

let calc = new Calculator(); // yaha let ka use kia is lia ke is ki value bar bar change ho gi 

calc.calculate(199, "+" , 51); // result: 250