//! 📚 Topic 12: Undo/Redo Functionality


//? 📖 Undo/Redo Kaise Kaam Karta Hai?

// 2 Stacks hote hain:

// 1. UNDO STACK  → jo actions kiye woh yahan store hote hain
// 2. REDO STACK  → jo undo kiye woh yahan store hote hain

//! 👁️ Visual — Step By Step

//? Normal Kaam Karte Waqt:

// Action karo → Undo Stack mein push karo

// "Hello" likha:
// Undo Stack: [ "Hello" ]
// Redo Stack: [ ]

// "World" likha:
// Undo Stack: [ "Hello", "World" ]
// Redo Stack: [ ]

// Bold kiya:
// Undo Stack: [ "Hello", "World", "Bold" ]
// Redo Stack: [ ]

//? Undo Karte Waqt:

// Undo Stack se pop karo → Redo Stack mein push karo

// Ctrl+Z dabaya:
// Undo Stack: [ "Hello", "World" ]  ← "Bold" nikal gaya
// Redo Stack: [ "Bold" ]            ← yahan chala gaya

// Ctrl+Z dobara:
// Undo Stack: [ "Hello" ]           ← "World" nikal gaya
// Redo Stack: [ "Bold", "World" ]   ← yahan chala gaya

//? Redo Karte Waqt:


// Redo Stack se pop karo → Undo Stack mein push karo

// Ctrl+Y dabaya:
// Redo Stack: [ "Bold" ]            ← "World" nikal gaya
// Undo Stack: [ "Hello", "World" ]  ← wapas aa gaya

// Ctrl+Y dobara:
// Redo Stack: [ ]                   ← "Bold" nikal gaya
// Undo Stack: [ "Hello", "World", "Bold" ] ← wapas

//? Naya Action Karne Pe:

// Agar Undo ke baad naya action karo:
// → Redo Stack CLEAR ho jata hai!

// Kyun?
// Undo Stack: [ "Hello" ]
// Redo Stack: [ "Bold", "World" ]

// Ab naya action "Italic" kiya:
// Undo Stack: [ "Hello", "Italic" ]
// Redo Stack: [ ]  ← CLEAR! Redo history gayi!

//? 💡 Rule Yaad Rakho:

// Action karo  → Undo Stack push
//                Redo Stack clear

// Undo karo    → Undo Stack se pop
//                Redo Stack mein push

// Redo karo    → Redo Stack se pop
//                Undo Stack mein push


class Stack {
    constructor() {
        this.word = [];
    };

    //? Push function banana 

    push(element) {
        this.word.push(element);
    };

    //? Pop function banana 

    pop(){
        if(this.isEmpty()) {
            return null
        }
        return this.word.pop();
    };

    //? Peek Function banana 

    peek() {
        if(this.isEmpty()) {
            return null
        }
        return this.word[this.word.length - 1];
    };

    //? isEmpty Function banana 

    isEmpty() {
        return this.word.length === 0;
    };

    //? Size Function banana 

    size() {
        return this.word.length;
    };

    //? sab ko print karne ka function banana 

    print() {
        console.log(this.word);
    };


};


//? Undo Redo Stack System 

const undoStack = new Stack();
const redoStack = new Stack();

//? ab action function banao 

function action(word) {
    undoStack.push(word); // yani jo bhi action karo us ko undo stack main dalo 

    redoStack.word = []; // or redo stack ko clear karo keuke new action per redo stack clear ho jata ha 

    console.log(`Action: ${word}`); // yani jo bhi action hue hain un ko console karo 
};

//? ab undo function banao 

function undo() {
    if(undoStack.isEmpty()) {
        console.log("Kuch Nahi ha Undo karne ko"); // yani jab undo stack empty ho to wo kuch return nahi kare ga 
        return // yaha function ko close kar do 
    }

    const word = undoStack.pop(); // undo stack se words ko nikalo 

    redoStack.push(word); // or redo stack main dalo words ko 

    console.log(`Undo: ${word}`); // jo word undo function main hain un ko print karo 
};

//? Ab Redo Function banao 

function redo() {
    if(redoStack.isEmpty()) {
        console.log("Kuch Nahi ha Redo karne ko!"); // yani jab redo stack khali ho ga to wo kuch return nahi kare ga 

        return // ab is function ko close karo 
    }

    const word = redoStack.pop(); // redo stack se pop karo words ko 

    undoStack.push(word); // or undo stack main dalo 
    console.log(`Redo: ${word}`); // jo kuch redo main ha wo print karo 
};


action("My"); // ab ye first action kia undostack main chala gia 

action("Name"); // ye bhi undo stack main chala gia 

action("is Hammad"); // ye bhi undo stack mian gia 

console.log("=====Undo Stack====");
undoStack.print(); // yaha ab my name is hammad ho ga [ 'My', 'Name', 'is Hammad' ]

undo(); // is Hammad gia undo se Redo main 
undo(); // Name bhi Gia redo main 

console.log("====Undo Stack After 2 Undos====");
undoStack.print(); // ab undo main sirf My ho ga 

console.log("===Redo Stack After 2 Undos===");
redoStack.print(); // us main top per Name ho ga or neache is Hammad lifo method se 

redo(); 

console.log("===Undo Stack After Redo===");

undoStack.print(); // ab undo main Name bhi a jai ga top per or neache my ho ga 

console.log("===Redo Stack After Redo===");
redoStack.print(); // ab redo stack main sirf is Hammad HO ga 

action("."); 

console.log("===Final Undo Stack===="); 
undoStack.print(); // ab is main my name or . ho ga 

console.log("===Final Redo Stack===");
redoStack.print(); // redo stack main kuch nahi ha  or wo khali array return kare ga 

