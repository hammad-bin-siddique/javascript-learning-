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

    //? peek function banana mean ke front element dekhna 

    peek() {
        if(this.stack1.length === 0 && this.stack2.length === 0) {
            return null;
        }

        if(this.stack2.length === 0) {
            while(this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }; // yani ke pehle check karo ke kia stack two khali ha agar khali ha to us main stack one se dalo jab tak stack one 0 naw ho jai or phir last main return karo stack two ka last element jo ke queue ho kar nikle ga stack two se 


    //? is Empth function banana mean ke check karna ke kia dono stack khali hain ke nahi 

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
    

    //? Size Function banana 

    size() {
        return this.stack1.length + this.stack2.length;
    };

    //? Print function banana 

    print() {
        console.log("Stack 1 => (Inbox):", this.stack1);
        console.log("Stack 2 => (Outbox):", this.stack2);
    };
};

let myQueue = new MyQueueUsingTwoStacks();

myQueue.enqueue("Bilal");
myQueue.enqueue("Faizan");
myQueue.enqueue("Hammad");
myQueue.enqueue("Imran");

myQueue.print(); // ab is main stack one main ho ga bilal faizan hammad or imran jo ke top per ho ga or stack two khali ho ga
console.log(myQueue.size());// size 4
console.log(myQueue.dequeue()); // bilal nikal gia keuke dequeue function main stack one se two main pop ho kar ai ga like lifo method se but dequeue return kare ga stack two se pop kia hua to zahir ha jab stack one se pehle imran pop ho kar aya or last main bilal aya to bilal top per tha or jab stack two ne pop return kia to bilal nikal gia 
myQueue.print(); // dequeue uper ho gia ha jis ke waja se stack one khali ho gia while loop ke waja se ab stack two main faizan top per phir hammad or phir imran ha ab jese jese dequeue karte jai ge ye nikalte jai ge 
console.log(myQueue.size());// size 3
console.log(myQueue.dequeue()); // abhi faizan nikala or stack one khali or stack two main hammad or imran ha 

console.log(myQueue.peek()); // hammad ho ga peek per 
myQueue.print(); // stack one empty ho ga or stack two main top per hammad or phir neache imran 

console.log(myQueue.size());// size 2

console.log(myQueue.dequeue()); // hammad nikla stack two se 
myQueue.print(); // ab sirf imran ho ga stack two main or stack one empty ho ga 

myQueue.enqueue("Subhan"); // ab stack on main subhan ho ga or stack two main imran 
myQueue.print();

console.log(myQueue.dequeue()); // imran nikal gia stack two se or stack one mian sirf subhan bacha 
myQueue.print()

console.log(myQueue.dequeue()); // ab subhan bhi nikal gia or 2 stack khali hain 
console.log(myQueue.isEmpty()); // ab ye true return kare ga 

myQueue.print()
