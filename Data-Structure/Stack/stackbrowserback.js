//! 📚 Topic 13: Browser Back Button

//? 🧠 Pehle Socho
// Bhai tum rozana browser use karte ho:

// google.com khola
// youtube.com khola
// github.com khola
// stackoverflow.com khola

// ← Back dabaya → stackoverflow gaya, github pe aaye
// ← Back dabaya → github gaya, youtube pe aaye
// → Forward dabaya → github wapas aaya

// Yeh sab 2 Stacks se hota hai — bilkul Undo/Redo jaisa!

//? 📖 Kaise Kaam Karta Hai?

// 2 Stacks:
// ─────────
// 1. backStack    → visited pages store hoti hain
// 2. forwardStack → back kiye pages store hote hain


class Stack {
    constructor() {
        this.page = [];
    };

    //? push function banana 

    push(element) {
        return this.page.push(element);
    }; 

    //? Pop Function banana

    pop(){
        if (this.isEmpty()) {
            return null
        }
        return this.page.pop();
    };

    //? Peek Function banana 
    peek() {
        if(this.isEmpty()) {
            return null
        }
        return this.page[this.page.length - 1];
    };

    //? isEmpty Function banana 

    isEmpty() {
        return this.page.length === 0;
    }; 

    //? Size Function banana 

    size(){
        return this.page.length;
    };

    //?Print Function banana 

    print() {
        console.log(this.page);
    };

};