//! Topic 3: Object.is()


//? Formal definition aur syntax

// Object.is() do values leta hai aur batata hai ke wo bilkul same value hain ya nahi. Result hamesha true ya false.

// Object.is(value1, value2);

// Object → JavaScript ka built-in global object
// .is → us ka static method (instance par nahi, seedha Object.is likhte hain)
// value1, value2 → jin do cheezon ko compare karna hai
// Return → boolean

//!: Object.is() bhi === ki tarah type coercion nahi karta. Yaani:
console.log("===Object.is Method===");


console.log(Object.is(5, "5")); // false type different
console.log(Object.is(5, 5)); // true 
console.log(Object.is("a", "a")); // true
console.log(Object.is(null, undefined)); // false 
console.log(Object.is(true, 1)); // fase

//! Aur objects ke liye bhi === jaisa hi hai: reference compare hota hai, content nahi.

console.log(Object.is({}, {})); // false dono alag objects hain 

const a = {name: "Hammad"}; 
const b = a; 

console.log(Object.is(a, b)); // true reference same ha 


//? Zyada-tar cases mein Object.is() aur === ka result bilkul same hota hai. Farq sirf 2 special cases mein hai.

//!  Special Case 1, NaN

// NaN = "Not a Number". Ye tab banta hai jab koi math operation ka koi valid number result na ho:

console.log(0 / 0); // NaN
console.log(Number("abc")); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt("xyz")); // Nan


//? Now Compare With Both

console.log(NaN === NaN); // false 
console.log(Object.is(NaN, NaN)); // true

// === mein false kyun? IEEE 754 ka rule: NaN kisi bhi value ke barabar nahi, apne aap ke bhi nahi. Wajah ye hai ke 0/0 aur Number("abc") dono NaN dete hain, lekin ye do bilkul alag failures hain. Unko "barabar" kehna logically galat lagta hai.

// Object.is() mein true kyun? Ye sawal "kya ye do values same value hain?" poochta hai, "kya ye do computations barabar hain?" nahi. Dono NaN hain, to same value hain.

//? Practical code mein:

const x = [1, NaN, 3]; 

console.log(x.indexOf(NaN)); // -1  (indexOf === use karta hai, NaN nahi milta!)
console.log(x.includes(NaN)); // true (includes SameValueZero use karta hai)
console.log(x.findIndex(i => Object.is(i, NaN))); // 1 (Object.is se index Mil gia)



//! indexOf ke saath NaN dhoondna fail ho jata hai. Ye ek mashhoor bug ka source hai.

//? Methods To Check NaN 

const val = Number("abc"); 

console.log(Number.isNaN(val)); // true
console.log(Object.is(val, NaN)); // true 
console.log(val !== val); // true (Old Method Nan Apne Ap se bhi different hota ha)

//? Special Case 2, +0 vs -0

// -0 banta kaise hai?

console.log(-0);
console.log(0 * -1); 
console.log(Math.round(-0.4)); 
console.log(-5 % 5); 
console.log(Math.sign(-0));


//? Now Compare === and Ojbec.is(); 

console.log(+0 === -0);   // true  (=== sign ignore kar deta hai)
console.log(Object.is(+0, -0)); // false (Ojbect.is Sign bhi dekhta ha)
console.log(Object.is(0, +0)); // true (0 or +0 same he ha)
console.log(Object.is(0, -0)); // false same nahi ha 


//? Proof ke -0 different ha 
console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity

//! === vs Object.is()

// Expression	        ===	          Object.is()
// 5, 5	                true	      true
// 5, "5"	            false	      false
// null, undefined	    false	      false
// {}, {}	            false	      false
// "a", "a"	            true	      true
// NaN, NaN	            false	      true
// +0, -0	            true	      false
// 0, 0	                true	      true

//! Execution trace

function myIs(x, y) {
    if(x === y) {
        // yani === se barabar hain lekin kya +0/-0 ka problem ha 
        return x !== 0 || 1 / x === 1 / y; // yani agar x 0 nahi ha phir to thek ha agar 0 ha phir ye check karo ke agar us ko 1 ke sath divide karo to kia us pehle perameter ka answer dosre se same ha ke nahi 
    }
    else {
        // === ne false dia. Kia ye dono values Nan Hain 

        return x !== x && y !== y;
    }
}

console.log(myIs(-0, 0)); 
console.log(myIs("hi", "hi")); 
console.log(myIs(NaN, 0 / 0)); 
console.log(myIs(null, undefined));


//! Real use-cases

//? 1) React internals (sab se mashhoor use)

// React Object.is ko bahut jagah use karta hai:

// useState: jab tum setCount(newValue) call karte ho, React Object.is(oldValue, newValue) check karta hai. Agar true aaye to re-render skip kar deta hai.
// useEffect / useMemo / useCallback dependencies: dependency array ki har value purani aur nayi Object.is se compare hoti hai, aur farq mile to effect dobara chalta hai.
// React.memo ka shallow compare: props ek ek karke Object.is se compare hote hain.

// Is liye React mein NaN state kabhi "har bar change" nahi samjha jata (agar === hota to NaN ki state par har bar infinite re-render ka khatra hota).

// Aur ye wajah hai ke React mein object/array ko mutate karna kaam nahi karta:

const oldArr = [1, 2, 3]; 
oldArr.push(4); 
console.log(Object.is(oldArr, oldArr)); // true => React ko change nazar nahi ata ha 

const newArr= [...oldArr, 5]; 
console.log(Object.is(oldArr, newArr)); // false => React Ko change Nazar ata ha 

//? 2) Deep equality check ka base

// Deep equal function (do objects ka content compare karne wala) mein jab aakhir mein primitive values aati hain, to un ko compare karne ke liye Object.is sab se sahi hai, kyunke ye NaN ko theek handle karta hai:


function deepEqual(x, y) {
    if (Object.is(x, y)) return true; // primitives aur same reference yahin pakre gaye

    if (typeof x !== "object" || typeof y !== "object" || x === null || y === null) {
        return false;
    }

    const keysX = Object.keys(x); 
    const keysY = Object.keys(y);

    if(keysX.length !== keysY.length) return false;

    for (const key of keysX) {
        if(!deepEqual(x[key], y[key])) return false;
    }

    return true;
};


console.log(deepEqual({ x: NaN }, { x: NaN })); // true  (=== hota to false!)
console.log(deepEqual({ a: 1 }, { a: 1 }));     // true
console.log(deepEqual({ a: 1 }, { a: 2 }));     // false


//? Kab Object.is, kab ===?

// Roz-marra code, conditions, if-else: === use karo. Ye sab ko samajh aata hai.
// NaN dhoondna ho: Number.isNaN() behtar hai.
// -0 ko pehchanna ho, ya "bilkul exact same value" chahiye (frameworks, utility libraries, deep-equal): Object.is().