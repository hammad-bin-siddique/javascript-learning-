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


//! Comprehension check (predict-before-run)
console.log("===Comprehension Check===");
console.log(Object.is(10, 10));          // true type same 
console.log(Object.is("10", 10));        // false type not same 
console.log(Object.is(NaN, 0 / 0));      // true 0 / 0 = NaN or object is Nan vs Nan Mai true deta ha 
console.log(NaN === NaN);                // false === NaN vs Nan Main false return karta ha keuke ye 2 different invalid number hain is lia
console.log(Object.is(0, -0));           // false not same   Object.is sign bit dekhta hai, 0 aur -0 ka sign alag hai
console.log(0 === -0);                   // true sign === ignore karta ha 
console.log(Object.is(null, undefined)); // false same as ===
console.log(Object.is([], []));          // false reference check hota ha 
const p = { naam: "Faizan" };
const q = p;
console.log(Object.is(p, q));            // true reference same ha 
console.log(Object.is(Math.round(-0.4), 0)); // false Math.round(-0.4) ka result -0 hota hai (0 nahi), isi liye Object.is(-0, 0) false aayaobject is
console.log([NaN].indexOf(NaN));         // -1 Wajah: indexOf andar === use karta hai, aur NaN === NaN false hai, to nahi milta
console.log([NaN].includes(NaN));        // true Wajah: includes SameValueZero use karta hai, jisme NaN, NaN ke barabar hota hai


// Q14: React useState mein Object.is kyun use karta hai, aur agar tum array mein push karke setState karo to re-render kyun nahi hoga?


// Agar React === use karta, to setState(NaN) har bar call hone par React ko lagta ke state badal gayi, aur unnecessary re-render hota.
// "Infinite" tab hota jab tum setState(NaN) ko kisi useEffect mein bina condition ke call karte.\



//! Practices Tasks 

//? Task One 

console.log("===Task One===");

function isSameValue(a, b) {
    if(a === b) {
        // yani a b ke brabar ha but ab ye check karna ha ke kia in ke sath koi sign to nahi ha 

        return a !== 0 || 1 / a === 1 / b; // yani agar a  0 nahi ha phir to thek ha or agar 0 ha phir ye check karna ha ke kia to 1 ke sath divide karo us parameter ko   kia ata ha mean ke sign change hota ha ke nahi 
    }
    else {
        return a !== a && b !== b;
    }
};

console.log(isSameValue(NaN, NaN));   // true hona chahiye
console.log(isSameValue(0, -0));      // false
console.log(isSameValue(-0, -0));     // true
console.log(isSameValue(5, "5"));     // false
console.log(isSameValue(null, null)); // true
console.log(isSameValue({}, {}));     // false



//? Task Two 
console.log("===Task Two==="); 

const data = [10, NaN, 30, -0, 50, NaN];

// (a) Object.is aur findIndex se pehle NaN ki index

console.log(data.findIndex((i) => Object.is(i, NaN)));

// (b) -0 ki index (sirf -0, 0 nahi)

console.log(data.findIndex((i) => Object.is(i, -0)));


// (c) indexOf(NaN) aur includes(NaN) ka result, aur ek line mein wajah

console.log(data.indexOf(NaN)); // ye === ke tara check karta ha is lia NaN ko check nahi karta ha is lia -1 answer deta ha 

console.log(data.includes(NaN)); // or include SameValueZero algorithm use karta hai, jisme NaN apne aap ke barabar hota hai.


//? Task Three

console.log("===Task Three==="); 

const withNaN = [88, 92, NaN, 75];
const clean   = [88, 92, 75];

if (withNaN.indexOf(NaN) !== -1) {
  console.log("NaN mil gaya, data theek karo");
} else {
  console.log("Data bilkul theek hai");
} // yaha per indexof Nan ko catch nahi kar sakta ha is lia -1 return karta ha or or condition lagai ha ke agar nan ka index -1 naw to phir Nan mil gia ha wala chalao but yaha Nan ka index -1 ke brabar ho ga keuke index of nan ka index nahi find kar sakta is lia yaha per phir second condition chale gi 

//? Fix This Method One 

if(withNaN.findIndex((i) => Object.is(i, NaN)) !== -1) {
    console.log("Nan Has Found, Fix The Data");
}
else {
    console.log("Data is Perfect");
} // is bar first condition chale gi keuke findIndex or Ojbect.is ke help se ham Nan ka bhi index find kar sakte hain is lia yaha per first conditoin chale gi 


//? Fix This Second Method

if(withNaN.includes(NaN)) {
    console.log("Nan Has Found, Fix The Data");
}
else {
    console.log("Data is Perfect");
}

//! Without Nan
console.log("===Without Nan===");
//? Fix This Method One 

if(clean.findIndex((i) => Object.is(i, NaN)) !== -1) {
    console.log("Nan Has Found, Fix The Data");
}
else {
    console.log("Data is Perfect");
} // is bar first condition chale gi keuke findIndex or Ojbect.is ke help se ham Nan ka bhi index find kar sakte hain is lia yaha per first conditoin chale gi 


//? Fix This Second Method

if(clean.includes(NaN)) {
    console.log("Nan Has Found, Fix The Data");
}
else {
    console.log("Data is Perfect");
}



//! Mini Project: React-style Change Detector
console.log("===Mini Project===");

function hasChanged(oldValue, newValue) {
    if(Object.is(oldValue, newValue)) {
        return false;
    }
    else {
        return true;
    }
}

console.log(hasChanged(5, 5)); // false keuke values nahi badli hain 
console.log(hasChanged(5, 6)); // true keuke values badli hain 


function makeState(initial) {
    let current = initial; 

    return {
        get() {
            return current;
        },

        set(newValue) {
            if(hasChanged(current, newValue)) {
                current = newValue;
                console.log("RE-RENDER");
            }
            else {
                console.log("No Change");
            }
        }
    }
};


const count = makeState(0); // abhi make state ke dabbe main current main 0 gia 
count.set(0);  // or ham set se new value add ki or phir ye compare ho gi current ke sath jo ke 0 ha to answer ai ga no change 
count.set(-0);  // phir ye set se add ho gi new value or compare ho gi current ke sath or current abhi 0 ha or or ye same nahi ha keuke Object.is value ke sath sath sign bhi check karta ha or ye he main key difference ha === is se is lia Re Render ai ga 
count.set(NaN);  // phir us ke set se new value gai or compare hui current se jo ke -0 ha or ye dono same nahi ha is lia ai ga Rerender
count.set(NaN);  // phir set se Nan gia or current se compare hua jo ke NaN ha to ye dono same or ye he difference ha Object.is ka === ka is lia output ai ga No Change
count.set(5);  // phir ye 5 add ho ga new value main or phir compare ho ga current se jo ke Nan ha or dono same nahi ha is lia output ai ga Re Render
count.set("5");  // phir "5" add ho ga new value main or compare ho ga current main jo ke same nahi ha is lia output ai ga re render

const list = makeState([1, 2]);  // yaha per ham ne makeState dabe main 1 array ka address store kia current main 
const same = list.get();  // phir 1 new variable main list ka reference store kia 

same.push(3); // phir same ke array main jo list ka he reference ha us main 3 push kia 
list.set(same); // or yaha per list main set kia same ko or compare kia dono reference to dono same ha islia no change 
list.set([...same, 4]) // yaha per ham ne reference he badal dia mean ke ...same ko spread array se new reference dia or us main value add ki is lia yaha per ai ga re render 



/*

 MINI PROJECT TRACE: React-style Change Detector (Object.is)
 Rule: set(newValue) -> Object.is(current, newValue)
       SAME  -> "No Change"   (dabba waisa hi rehta hai)
       ALAG  -> "RE-RENDER"   (current = newValue)
 Purani value = pichli call ke baad dabbe mein jo rakha tha


 COUNT WALA DABBA (shuru mein current = 0)

 #  | Call          | Purani | Nayi  | Object.is | Output     | Dabba ab

 1  | set(0)        | 0      | 0     | true      | No Change  | 0
 2  | set(-0)       | 0      | -0    | false     | RE-RENDER  | -0
 3  | set(NaN)      | -0     | NaN   | false     | RE-RENDER  | NaN
 4  | set(NaN)      | NaN    | NaN   | true      | No Change  | NaN
 5  | set(5)        | NaN    | 5     | false     | RE-RENDER  | 5
 6  | set("5")      | 5      | "5"   | false     | RE-RENDER  | "5"


 LIST WALA DABBA (shuru mein current = address of [1, 2])

 #  | Call                  | Purani      | Nayi           | Output

 7  | set(same)             | wohi address| wohi address   | No Change
 8  | set([...same, 4])     | purana addr | NAYA address   | RE-RENDER


 WAJAH (har call ki)
 1: 0 aur 0 bilkul same value
 2: Object.is sign dekhta hai, 0 aur -0 alag (=== yahan true deta)
 3: -0 aur NaN alag values
 4: Object.is mein NaN, NaN ke barabar hai (=== yahan false deta)
 5: NaN aur 5 alag values
 6: 5 number hai, "5" string hai, Object.is type coercion nahi karta
 7: same.push(3) se content badla, lekin address wahi, Object.is sirf
    address compare karta hai, is liye No Change
    (React mein push karke setState yahi wajah se kaam nahi karta)
 8: spread [...same, 4] ne naya array (naya address) banaya

 YAAD RAKHNE KI BAATEN
 - set value "add" nahi karta, purani ko REPLACE karta hai
 - "re-render" yahan sirf console.log hai, asli React mein screen dobara banti hai
 - count aur list do alag dabbe hain, ek dusre ko nahi chhute

*/