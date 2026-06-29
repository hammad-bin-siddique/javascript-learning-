//! Phase 3 — Topic 12: Queue Using Array (Simple Tarika) 🏗️


// Phase 2 mein — hum ne alag alag methods seekhe:
// push(), shift(), queue[0], length...

// Lekin sab kuch bikhra hua tha — ek jagah nahi tha!


//? ✅ Solution — Sab Ek Jagah Rakho
// Ek object banao jisme queue ka sara kaam ho:


let queue = {
    items: [],

    //? enqueue function banana mean ke is se khali queue mian items push ho ge 
    enqueue: function(item) {
     this.items.push(item);
    },

    //? dequeue function banana mean ke is se queue se item nikle ge front se 

    dequeue: function(){
        if(this.items.length === 0){
            return null
        }
        return this.items.shift();
    },

    //? peek function banana mean ke front wala element dekhna 

    peek: function() {
        if(this.items.length === 0) {
            return null
        }
        return this.items[0];
    },

    //? size function banana 

    size: function() {
        return this.items.length;
    },
    

    //? isEMpty function banana mean ke check karna ke queue khali ha ya nahi agar khali hua to true return kare ga warna false 


    isEmpty: function() {
        return this.items.length === 0;
    },

    //? Print function banana mean ke pura queue print karna 


    print: function() {
        console.log(this.items);
    }
};

queue.enqueue("Hammad");
queue.enqueue("Bilal");
queue.enqueue("Hamza");
console.log(queue.peek()); // Hammad
console.log(`Size Before Dequeue: ${queue.size()}`); // 3

queue.dequeue(); // Hammad Out 

console.log(`Size After Dequeue: ${queue.size()}`); // 2

console.log(queue.isEmpty());  // false ai ga keuke queue khali nahi ha 

queue.print();