//! 📚 Topic 10: Stack Using Class (OOP)

//? 📖 Class Kya Hoti Hai?

// Class ek TEMPLATE / BLUEPRINT hai
// JavaScript mein jisse hum:

// 1. Ek baar structure define karte hain
//    (kya data hoga, kya functions honge)

// 2. Phir us structure se
//    jitne chahiye utne
//    NAYE OBJECTS bana sakte hain

// Har object ALAG hota hai —
// apna apna data hota hai —
// but sab ke functions same hote hain!

//? 💻 Class Ka Basic Structure

class Stack {

    constructor() {
        this.elements = []; 
    };


    // constructor  → ek special function hai
    //            jab bhi "new Stack()" karo
    //            YEH PEHLE CHALTA HAI!


    // push function banana 

    push(element) {
        this.elements.push(element);
    };

    // pop function banana 

    pop() {
        if(this.isEmpty()) {
            return "Stack Is Empty!";
        } 
        return this.elements.pop();
    };

    //peak function banana

    peek() {
        if (this.isEmpty()) {
            return "Stack is Empty!";
        }
        return this.elements[this.elements.length - 1];
    };

    // isEmpty Function banana 

    isEmpty() {
        return this.elements.length === 0;
    };

    // size function banana 

    size() {
        return this.elements.length;
    }; 

    // whole class stack print karna 

    print() {
        console.log(this.elements);
    };


};

//! new keyword

const stack1 = new Stack(); 

// mean ke uper ham ne class se blue print bana dia ab us bluprint per ham jitne chaia stacks bana sakte hame custom likhne ke zrurat nahi ho gi  

// new Stack()  → factory se naya
//                Stack banao!

// new          → "naya object banao"
// Stack()      → "is blueprint se"
//                constructor chalta hai
//                this.elements = [] set hota hai

// stack1      → ab yeh hamara
//                naya Stack hai!


//! Functions (Methods)
// Topic 9 se farq dekho:

// Topic 9 — Object style:
// push: function(element) {
//     this.items.push(element)
// }

// Topic 10 — Class style:
// push(element) {
//     this.items.push(element)
// }

// Class mein:
// → function keyword nahi likhte
// → colon (:) nahi lagate
// → seedha naam likh do
// → baaki sab same!

//? ab data dalna stack 1 main 

stack1.push("Ali");
stack1.push("Fahad");
stack1.push(true);
stack1.push(7); // ye abhi ham ne first stack main dale hain class ke waja se ham multiple stacks bana sakte hain bina bar bar function repeat kia object constructor ke tara 

console.log("====Stack One Data====");
stack1.print(); // pura stack print karna 

console.log(`Check Empty? ${stack1.isEmpty()}`); // false ai ga 

console.log(`Stack One Size: ${stack1.size()}`); // 4 ai ga total 4 elements hain 

stack1.pop();  // abhi 7 pop ho gia ha 

console.log(`Size After Poping: ${stack1.size()}`);

console.log(`Top Element: ${stack1.peek()}`); // true ai ga ab last element wo ha 

//? sab pop karne ka bad isempty peek or size or pop ko dobara check karna 

stack1.pop();
stack1.pop();
stack1.pop(); // sab element pop ho gay hain ab check karte hain 

console.log(`Poping After pop Every element: ${stack1.pop()}`); // stack is empty ai ga 
console.log(`Peeking: ${stack1.peek()}`); // stack is empty is lia peek nahi ho ga 
console.log(`Stack Size: ${stack1.size()}`); // 0 
console.log(`Is Empty? ${stack1.isEmpty()}`); // true ai ga abhi stack khali ha 

//! 🎯 Multiple Stacks Banana

// uper ham ne 1 stack banaya tha abhi yaha usi data ko use kare bina likhe kar sakte hain 

const stack2 =  new Stack(); // ye 2nd stack ban gia 
const stack3 = new Stack(); // ye 3 

// ab in main data add karna 


stack2.push("Hammad"); 
stack3.push(1);
stack2.push("Fahad"); 
stack3.push(5); 

// ab in ko ham print peek pop push emtpy check karna sab kar sakte hain 

console.log("=====Stack Two====");
stack2.print(); // yaha second stack print ho ga hammad or fahad ai ga outputh 

console.log("===stack 3====");
stack3.print(); // yaha stack three 1 5 output ai ga 


//! Object Style vs Class Style — Proper Comparison Table


// OBJECT (Topic 9):          CLASS (Topic 10):
// ══════════════════         ══════════════════
// Ek hi Stack                Jitne chahiye
// bana sakte the             utne banao

// function keyword           function keyword
// likhna parta tha           nahi likhte

// Colon (:) lagate the       Colon nahi lagate

// Dobara use                 new se baar baar
// nahi ho sakta              use ho sakta hai

// Chote kaam ke liye ✅      Proper OOP tarika ✅

//! Class Ka Naam Capital Kyun?

// class stack { }  // ❌ Wrong
// class Stack { }  // ✅ Sahi

// Convention hai:
// Class ka naam hamesha
// Capital letter se shuru hota hai!
// Isse pata chalta hai ke
// yeh ek Class hai — function nahi!


//! Task 

class StackTask {

    constructor(){
        this.items = [];
    };

    // push function banana 

    push(element) {
        return this.items.push(element);
    };

    // pop function banana 

    pop() {
        if (this.isEmpty()) {
            return "Stack Is Empty!";
        }
        return this.items.pop();
    }; 

    // size function bananaa 

    size() {
        return this.items.length;
    };

    peek() {
        if(this.isEmpty()) {
            return "Stack is Empty";
        }
        return this.items[this.items.length - 1];
    };

    // isempty function banana 

    isEmpty() {
        return this.items.length === 0;
    };

    // print function banana 

    print(){
        console.log(this.items);
    };
};

// ab 2 stack banana new keyword ki help se 

const mathStack = new StackTask();
const englishStack = new StackTask();

// ab 2ono stack main data add karna 

mathStack.push("What is 5 + 5");
mathStack.push("What the difference B/W Noraml and Integer Numbers");
mathStack.push("What is the Main Purposes to Learn Maths"); 

//? ye stack one ke question hain 

//ab stack two ke add karte hain push ke zaria 

englishStack.push("What is Vocabullary");
englishStack.push("What is Noun & Pronoun");
englishStack.push("What is the difference B/W Singular & Prular");

// ab dono stack ko print karte hain 

console.log("Math Stack");
mathStack.print();


console.log("English Stack");
englishStack.print();

// ab dono ka size print karta ho 

console.log(`English Stack Size: ${englishStack.size()}`); // 3 ai ga 
console.log(`Math Stack Size: ${mathStack.size()}`); // ye bhi 3 ai ga 

// ab dono ka peek nikalta ho 

console.log(`Math Top Question: ${mathStack.peek()}`); // what is the main purpose wala ai ga 

console.log(`Eng Top Question: ${englishStack.peek()}`); // singular wala ai ga 

// dono main main se kisi 1 ko pop karta ho 

mathStack.pop(); // math wale ka question pop kia 

// ab dobara size print karta ho 

console.log(`English Stack Size After Poping: ${englishStack.size()}`); // 3 ai ga 
console.log(`Math Stack Size After Poping: ${mathStack.size()}`); // ye 2 ai ga is ka last wala question pop kar dia ha 

// english wale per koi effect nahi para pop ka keuke wo alag stack ha or ye alag