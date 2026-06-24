// Problem 20 — Mini Project: Undo System 🛠️



class UndoSystem {

    constructor() {
        this.stack = []; // yaha per pehle wali stats store ho gi state mean ke us waqt state kia thi  yani type karne se pehle state kia thi 
        

        this.current = ""; // start main current main kuch nahi ho ga jaab type kare ge tab current main ai ga 
        
    }

    // ab new function banana ha type karne ka us main jo word type ho ga wo current main jai ga or current push hota jai ga stack main jese he new word type ho ga prana current stack main jai ga or new wala current bane ga like h likha phir e likha h gia stack main or current ban gia e

    type(text) {
        this.stack.push(this.current); // yani stack ke andar pehle state ko dalo jo type karne se pehle thi 
        this.current  = text; // nai state ko current banao

        console.log(`Current Text: ${this.current}`);
    };

    // ab undo function banai ge jo pehle state ko wapis lai gi mean ke jab h likha phir e likha or undo dabaya to e chala gia or wapis h pehle state a jai gi 

    undo() {
        if(this.stack.length === 0) {
            console.log("There is nothing to undo");
            return; // function close karo
        };

        this.current = this.stack.pop(); // yani ke undo karne ke lia stack se pop karo or pehle state wapis le ao 
        console.log(`Undo! Current Text: ${this.current}`); // yani ke abhi h likha phir e likha to undo karne se e hat jai ga or pehle state wapis a jai gi 
    };

    // ab History print karna puri 
    getHistory(){
        console.log(`Stack History: ${this.stack}`);
        console.log(`Current Text: ${this.current}`);
    };


};

let editor = new UndoSystem();
//        Yeh "new" → class se naya object banata hai
//        Constructor() chalta hai
//        this.stack = [] set hota hai
//        this.current = "" set hota hai


editor.type("H");
editor.type("He");
editor.type("Hel");
editor.type("Hell");
editor.type("Hello");

console.log("===Undo Start===");
editor.undo(); // hello gia 
editor.undo(); // hell  gia
editor.undo(); // hel gia 

console.log("===History===");
editor.getHistory();




