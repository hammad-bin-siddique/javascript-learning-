//! 🔷 Problem 2 (Medium) — Queue Se String Reverse Karo


// is problem main ham queue se string ko reverse kare ge stack ke help se 



//? yaha per queue ke class banai ha jis main data ai ga nikle ga or print ho ga 

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


//? Abhi stack ke lia class banai ge jis main data ai ga nikle ga or print ho ga

class Stack {
    constructor() {
        this.stack = [];
    };

    push(element) {
        this.stack.push(element);
    };

    pop() {
        if(this.isEmpty()) {
            console.log("There is nothing to pop");
            return null;
        }
        return this.stack.pop();
    };

    peek() {
        if(this.isEmpty()) {

            console.log("There is nothing to peek in stack");
            return null;
        }
        return this.stack[this.stack.length - 1];
    };

    isEmpty() {
        return this.stack.length === 0;
    };

    size() {
       return this.stack.length;
    };

    print() {
        console.log(this.stack);
    };
};


function ReverseStringUsingQueueAndStack(string) {
    let queue = new Queue();
    let stack = new Stack();

    for(let char of string) {
        queue.enqueue(char);
    }

    while(!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

    let result = "";

    while(!stack.isEmpty()) {
        result = result + stack.pop();
    }

    return result;
};

console.log(ReverseStringUsingQueueAndStack("Hammad")); // dammaH
console.log(ReverseStringUsingQueueAndStack("Faizan")); // naziaF