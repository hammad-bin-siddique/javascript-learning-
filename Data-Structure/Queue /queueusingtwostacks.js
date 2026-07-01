//! Topic 14: Queue Using Two Stacks 🔄


// mean ke 2 stack mila kar queue banao like first stack main jo item dale ga like 1 2 3 to yaha 3 top per ho ga per jab ye pop ho kar dosre stack main jai ga to phir waha 3 pehle top se pop ho ga phir 2 phir 1 to dosre stack main top per 1 ho ga or jab us ko nikale to fifo ho jai ga mean ke stack main 1 pehle aya tha first main to yaha abhi stack two se 1 pehle nikle ga 


class MyQueueUsingTwoStacks {

    constructor() {
        this.stack1 = []; // is main push ho ge item 
        this.stack2 = []; // ye outbox ha is se items pop ho ge but fifo method se 
    };

    // ab stack one main push kare ge 

    enqueue(element) {
        this.stack1.push(element); // stack 1 input le ga lifo main or pop ho ga dosre stack main
    };

    dequeue() {
        // pehle check kare ge ke agar dono khali hain to null return karo 
        if(this.stack1.length === 0 && this.stack2.length === 0) {
            return null;
        } // mean ke agar dono stack khali hain to null return karo 

        //? ab agar stack one main kuch ha or stack stack 2 khali ha to stack one se stack two main push karo stack one se pop kar ke 

        if(this.stack2.length === 0) {
            while(this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()); 
                // mean ke jab tak stack stack one ke length 0 nahi ho jati stack one se pop kar ke stack two main push karte jao 
            };
        };

        return this.stack2.pop(); // or return main stack two se nikalo jo ke queue ban jai ga 
    };

    
}