//! 📚 Topic 9: Stack Using Array

//? Definition:

// Stack Using Array ek aisa tarika hai jisme
// hum JavaScript ke built-in Array ko
// apne Stack ki storage ki tarah use karte hain
// aur uske upar apne functions (push, pop, peek,
// isEmpty, size) ek Object mein likh ke
// ek proper Stack banate hain

//? Stack Using Array Ki Properties:

// 1. Storage  → Array (items[])
// 2. Order    → LIFO (Last In First Out)
// 3. Access   → Sirf TOP se
// 4. Built-in → Array ka push/pop use karte hain
// 5. Custom   → peek, isEmpty, size khud banate hain


const stack = {

    thing: [], // khali stack array banaya

    //? push function banana

    push: function(element) {
        this.thing.push(element);
    },

    //? Pop function banana

    pop: function() {
        if(this.isEmpty()) {
            return "Stack Is Empty!"
        } 
        return this.thing.pop();
    },

    //? peek Function Banana 

    peek: function() {
        if(this.isEmpty()) {
            return "Stack Is Empty";
        }
        return this.thing[this.thing.length - 1];
    },

    //? IsEmpty Funciton banana

    isEmpty: function() {
        return this.thing.length === 0;
    },

    //? Size Function banana

    size: function() {
        return this.thing.length;
    },

    //? Pure item ko print karne ka function banana


    print: function(){
        console.log(this.thing);
    }

};

//? ab thing key main push se element add karna 

stack.push("Hammad");
stack.push("Ali");
stack.push(true);
stack.push(2);
stack.push(50);

//? ab stack ko print karte hain 

stack.print(); // 5 element ai ge

//? ab stack ka size print kare ge 

console.log(`Stack Size: ${stack.size()}`); // 5 ai ga keuke abhi kuch bhi pop nahi hua 

//? abhi stack ke top wale element ko dekhe ge ke kn sa ha 

console.log(`Top Element: ${stack.peek()}`); // 50 ai ga top element whi ha 

//? ab remove kia hue element ko variable main store kare ge 

let removed = stack.pop(); 

console.log(`Removed: ${removed}`); // 50 ai ga whi top element ha is lia 

//? abhi dobara size or pura stack print kare ge 

console.log(`Stack Size: ${stack.size()}`); // 4 ai ga keuke last element pop ho gia uper 

stack.print(); // 50 nahi ai ga wo pop ho gia 


//? ab is empty se check karna ke stack empty ha ke nahi 


console.log(`Empty? ${stack.isEmpty()}`); // false ai ga keuke abhi stack khali nahi ha 

//? pure stack ko pop kar ke check karna 

stack.pop();
stack.pop(); 
stack.pop();
stack.pop(); // yaha tak sab element remove ho gay

console.log(stack.pop());// yaha pop nahi ho ga balke 1st condtion lagi gi "Stack is Empty"

console.log(`Empty? ${stack.isEmpty()}`); // ab true ai ga 

console.log(`Peek: ${stack.peek()}`); // yaha ab last element show nahi ho ga balke stack is empty ai ga 



const myStack = {
    items: [],

    //? push ka function banana

    push: function(element) {
        return this.items.push(element);
    },

    //? pop ka function banana 

    pop: function() {
        if(this.isEmpty()) {
            return "Stack Is Empty!";
        } 
        return this.items.pop();
    },

    //? peek ka function banana 

    peek: function() {
        if(this.isEmpty()){
            return "Stack is Empty!";
        }
        return this.items[this.items.length - 1];
    },

    //? isEmpty function banana 

    isEmpty: function() {
        return this.items.length === 0;
    },

    //? size function banana 

    size: function() {
        return this.items.length;
    },

    //? sab ko 1 sath print karne ka function banana 

    print: function(){
        console.log(this.items);
    }

};


myStack.push(10);
myStack.push("Hammad");
myStack.push(true); 
myStack.push("Fahad");
myStack.push(30);


myStack.print(); // 5 items show ho ge top per 30 ai ga 


//? mystack ka size print karna 

console.log(`My Stack Size: ${myStack.size()}`);

//? top element print karna jo ke 30 ha 

console.log(`Top Element: ${myStack.peek()}`);

//? is empty check karna 

console.log(`Empty?: ${myStack.isEmpty()}`); // false ai ga keuke abhi stack main element hain 

//? karna 

let stackRemoved = myStack.pop(); 

console.log(`Removed Element: ${stackRemoved}`); // 30 ai ga last element wo ha jo remove hua ha

myStack.print(); // ab 30 nahi ai ga keuke wo remove ho gia ha 

//? ab sab element ko pop kar ke phir size peek or isempty check karna 

myStack.pop(); 
myStack.pop(); 
myStack.pop(); 
myStack.pop(); 

// ab sab remove ho gay hain element 

//? is empty check karna 

console.log(`Empty? ${myStack.isEmpty()}`); // true ai ga ab stack khali ha 

//? size check karna 

console.log(`My Stack Size: ${myStack.size()}`); // 0 ai ga 

//? Peek karna 

console.log(`Peek After Poping: ${myStack.peek()}`); // stack khali ha wali condition apply ho gi  stack is empty ai ga 

//? Khali stack ko pop karna 

console.log(`Pop: ${myStack.pop()}`); // pop nahi ho ga keuke stack khali ha stack is empty ai ga 


//! 🎯 Summary:

// Stack Using Array use hota hai:
// → Undo/Redo systems mein
// → Browser history mein
// → App navigation mein
// → Order systems mein
// → Function calls mein
// → Game levels mein