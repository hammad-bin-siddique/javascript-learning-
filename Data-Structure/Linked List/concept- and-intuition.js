//!  Phase 1, Topic 1: Linked List kya hoti hai (Array se kaise different)


//? Linked List kya hai?

// Linked List ek linear data structure hai jisme data elements ("nodes") ek dusre se connected hote hain via pointers/references — Array ki tarah continuous memory block mein nahi hote.


//! Array vs Linked List — core difference

//? Array:

// Memory mein contiguous (lagataar) block mein store hota hai
// Har element ka index fix hota hai (0, 1, 2...)
// Size fix karni parti hai (ya resize costly hota hai)
// Agar beech mein insert/delete karna ho to baaki sab elements shift karne parte hain

//? Linked List:

// Memory mein scattered hota hai — nodes kahin bhi ho sakte hain RAM mein
// Har node sirf apne agle node ka address janta hai
// Size dynamic hoti hai — jitni chahiye utni grow/shrink ho sakti hai
// Beech mein insert/delete karna easy hai — sirf pointers change karne parte hain, koi shifting nahi


//! Phase 1, Topic 2: Real-world Analogy


//? 🚂 Train ki Bogiyan (Compartments)

// Socho ek train hai jisme har bogi (compartment) alag hai, aur har bogi ke saath ek coupling/hook laga hota hai jo usay agli bogi se jodta hai.

// Har bogi = ek node
// Bogi ke andar samaan/passengers = data
// Coupling/hook jo agli bogi se juda hai = pointer/next reference
// Last bogi ka koi hook nahi hota agay = null (list ka end)

// Ab yahan interesting baat: agar tumhe train ke beech mein ek nayi bogi lagani ho, to poori train ko uthaa kar shift nahi karna parta — bas do bogiyon ke darmiyan coupling khol kar nayi bogi lagao aur wapas jod do. Baaki bogiyan apni jagah rehti hain.
// Yehi Linked List mein hota hai — beech mein node insert karne ke liye sirf pointers change hote hain, poori list "shift" nahi karni parti (jaisa Array mein karna parta hai).


//? 🗺️ Treasure Hunt Chain

// Doosri analogy: ek treasure hunt game socho.

// Tumhe ek chitthi (note) milti hai jisme location A ka clue hota hai
// Us clue pe pohanch kar tumhe agli chitthi milti hai jisme location B likha hota hai
// Aur ye chain chalti rehti hai jab tak tumhe "Treasure yahan hai, aur koi clue nahi" waali chitthi na mil jaye (ye null hai)

// Important baat: tumhe pata nahi hota ke 5th clue kahan hoga jab tak tum 1st, 2nd, 3rd, 4th clue follow na karo. Tum seedha "5th clue" pe jump nahi kar sakte — sequentially chalna parta hai.
// Yahi Linked List ka sabse bara characteristic hai: Array mein tum arr[5] likh kar seedha 5th element pe pohanch jate ho (direct/random access), lekin Linked List mein tumhe head se shuru kar ke node-by-node traverse karna parta hai 5th node tak pohanchne ke liye (sequential access).

//! Dono analogies ka core lesson:

// Har node sirf agle node ka pata janta hai (khud se disconnected floating nahi)
// Beech mein add/remove easy hai (sirf connection change hoti hai)
// Kisi specific node tak pohanchne ke liye shuru se chalna parta hai


//! Phase 1, Topic 3: Node Structure (data + pointer/reference)

//? Node kya hota hai?

// Node Linked List ka basic building block hai. Har node do parts pe consist karta hai:

// data — asal value jo store karni hai (number, string, object, kuch bhi)
// next — ek reference/pointer jo agle node ka address rakhta hai (agar last node hai to ye null hota hai)


//? Javascript main node kese banta ha 

class Node {
    constructor(data) {
        this.data = data; // is main data store ho ga 
        this.next = null; // is main ye pata lage ga ke next wala kn sa ha abhi null ha 
    };
};


// ab new node banate hain 

const firstNode = new Node(10); 

// ab is node ko agle ke sath link karte hain 

const secondNode = new Node(20);

firstNode.next = secondNode;

console.log(firstNode);


//! Phase 1, Topic 4: Memory mein Array vs Linked List kaise store hote hain 


//? Array Memory mein kaise store hota hai

// Jab tum Array banate ho, engine (JS engine) koshish karta hai ke elements ko contiguous memory mein rakhe — matlab ek dusre ke bilkul saath, lagataar memory addresses mein.

// const arr = [10, 20, 30, 40];

//? Memory picture kuch aisi hoti hai:

// Address:   1000   1004   1008   1012
// Value:      10     20     30     40

//? Linked List Memory mein kaise store hoti hai

// Linked List ke nodes memory mein bikhre hue (scattered) hote hain — koi guarantee nahi ke agla node memory mein "saath" hoga.

// Dekho — addresses 2000 → 5000 → 8500 — koi pattern nahi, koi lagataar order nahi. Har node sirf apne andar agle node ka address (pointer) carry kar raha hai. Engine ko pata hi nahi ke agla node kahan hoga jab tak wo current node ka next na parhe.


//! Ek important point:
// Linked List thodi extra memory use karti hai kyunki har node ko apne data ke sath-sath ek pointer bhi store karna parta hai. Array mein ye overhead nahi hota.
