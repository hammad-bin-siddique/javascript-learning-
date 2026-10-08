//! Topic 13: Queue Using Class / OOP 🏛️
//? Object Method Mein Problem Kya Thi?
// Yaad karo Topic 12 mein humne kya banaya tha:

// let queue = {
//     items: [],
//     enqueue: function(item) { this.items.push(item); },
//     dequeue: function() { return this.items.shift(); }
// };

//? Ab sawaal yeh hai — agar mujhe DO queues banani hon to?


// let queue2 = {
//     items: [],
//     enqueue: function(item) { this.items.push(item); },
//     dequeue: function() { return this.items.shift(); }
// };

// 😫 Pura code dobara likhna pare ga! Agar 5 queues chahiye to 5 baar yehi code copy-paste karna pare ga!

// isi lia is ke lia class ka use kare ge jo 1 blueprint bana de gi 

//? Class ka syntyx

class Queue {
    // constructor mean ke jab bhi new object banta ha ye auto chalta ha sab se pehle or her new ko 1 khali array mil jata ha 
    constructor() {
        this.items = []; 
    };


    //? enqueue function banana mean ke queue ke andar kuch push karne ho to 

    enqueue(element) {
        this.items.push(element);
    };

    //? dequeue function banana mean ke queue ke front se kuch nikalna ho to 

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items.shift();

    };


    //? peek function banana mean ke front wale element ko dekhna 

    peek() {
        if(this.isEmpty()) {
            return null
        }
        return this.items[0]; 
    };

    //? isEmpty function banana mean ke check karna ke queue empty ha ya nahi hua to true return kare ga warna false 

    isEmpty() {
        return this.items.length === 0;
    };

    //? size function banana 

    size() {
        return this.items.length;
    };

    //? print function banana pura queue print karna 

    print() {
        console.log(this.items);
    };

    //! note yaha function bina function keyword ke bante hain class auto samaj jata ha 
};

let busQueue = new Queue;  // buses ka queue banaya mean ke buses kn kn se city se nikalti hain 
let ticketQueue = new Queue;  // ticket ka queue banaya 

console.log("===Bus Queue Results====")
busQueue.enqueue("Islamabad");
busQueue.enqueue("Peshawar"); 
busQueue.enqueue("Mardan");
busQueue.enqueue("Naran"); 
busQueue.enqueue("Abbottabad");


busQueue.print(); // pure 5 ke 5 print ho ge 
busQueue.size(); // 5 ai ga
console.log(busQueue.peek()); // islamabad
busQueue.dequeue() // sab se top wala gia i mean ke islamabad
busQueue.print(); // 4 he print ho gi islamabad ke ilawa 
busQueue.size(); // 4 ai ga islamabad remove ho gia
console.log(busQueue.peek()); // Peshawar ai ga 
console.log(`is Empty? ${busQueue.isEmpty()}`); // false ai ga 
busQueue.dequeue(); // peshawar gia 
busQueue.dequeue(); //mardan gia 
busQueue.dequeue(); //naran gia 
busQueue.dequeue(); // abbottabad bhi gia 
console.log(`is Empty? ${busQueue.isEmpty()}`); // true ai ga ab 
console.log(busQueue.size()); // abhi 0 ai ga
console.log(busQueue.peek());  // null ai ga keuke peek karne ko kuch nahi ha

ticketQueue.enqueue("Fahad");
ticketQueue.enqueue("Waleed");
ticketQueue.enqueue("Faizan");
ticketQueue.enqueue("Farhan");

console.log("===Ticket Queue Result===");

ticketQueue.print(); // 4 print ho ge 
ticketQueue.size(); // 4 keuke abhi koi nahi nikla
console.log(`is Empty? ${ticketQueue.isEmpty()}`); // false ai ga
console.log(`Peek: ${ticketQueue.peek()}`); // Fahad ai ga
ticketQueue.dequeue(); // fahad nikla 
ticketQueue.size(); // 3
ticketQueue.print(); // abhi fahad nahi ho baki 3 ho ge 
console.log(`Peek: ${ticketQueue.peek()}`); // Waleed ai ga
ticketQueue.dequeue(); // waleed gia 
ticketQueue.dequeue(); // faizan gia 
ticketQueue.dequeue(); // farhan gia 
console.log(`Peek: ${ticketQueue.peek()}`);  // null ai ga keuke peek karne ko kuch ha he nahi 
console.log(`is Empty? ${ticketQueue.isEmpty()}`); // true ai ga abhi empty ha queue 
console.log(ticketQueue.size()); // 0 ai ga keuke khali ha 