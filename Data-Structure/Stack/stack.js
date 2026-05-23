//! 📚 Topic 1: Stack kya hota hai?


//? Stack Ki Definition

// Stack ek aisi data structure hai jisme elements ek specific order mein store hote hain — jо sabse aakhir mein aaya, woh sabse pehle jayega

// Iska naam hai:

// ╔══════════════════════════════╗
// ║   L I F O                    ║
// ║   Last In — First Out        ║
// ╚══════════════════════════════╝

//! STACK Diagram
//        ┌────────┐
// TOP →  │   D    │  ← sabse aakhir add hua
//        ├────────┤
//        │   C    │
//        ├────────┤
//        │   B    │
//        ├────────┤
//        │   A    │  ← sabse pehle add hua
//        └────────┘
//         BOTTOM

// ADD karna ho  → D ke UPAR add hoga
// REMOVE karna ho → D sabse PEHLE jayega

//! 🔄 Simple Flow

// START:  [ ]                 → Stack khali hai

// push A: [ A ]               → A add kiya
// push B: [ A, B ]            → B add kiya  
// push C: [ A, B, C ]         → C add kiya

// pop:    [ A, B ]            → C nikal gaya (sabse upar tha)
// pop:    [ A ]               → B nikal gaya
// pop:    [ ]                 → A nikal gaya

//? ✅ Topic 1 Summary

// Stack   → Ek ordered collection of elements
// LIFO    → Last In First Out
// Rule    → Sirf TOP se add/remove hota hai
// Uses    → Undo, Browser back, Function calls



//! Topic 2: LIFO Principle — Deep Dive

//?  LIFO Ka Matlab

// L → Last   → Jo sabse AAKHIR mein aaya
// I → In     → andar
// F → First  → woh sabse PEHLE
// O → Out    → bahar jayega


//! 🌍 3 Real World Examples — LIFO Ke

//? Example 1: Browser History

// Page 1 khola  → [ Page1 ]
// Page 2 khola  → [ Page1, Page2 ]
// Page 3 khola  → [ Page1, Page2, Page3 ]

// Back button dabaya →  Page3 gaya, Page2 pe aaye
// Back button dabaya →  Page2 gaya, Page1 pe aaye

// → Jo PAGE sabse AAKHIR khola, woh PEHLE back hua
// → LIFO! ✅


//? Example 2: MS Word Undo


// Page 1 khola  → [ Page1 ]
// Page 2 khola  → [ Page1, Page2 ]
// Page 3 khola  → [ Page1, Page2, Page3 ]

// Back button dabaya →  Page3 gaya, Page2 pe aaye
// Back button dabaya →  Page2 gaya, Page1 pe aaye

// → Jo PAGE sabse AAKHIR khola, woh PEHLE back hua
// → LIFO! ✅

//? Example 3: Function Calls

// function a() {
//     b()        // b ko call kiya
// }
// function b() {
//     c()        // c ko call kiya
// }
// function c() {
// kaam kiya
// }

// a() call hua

// [ a ]           → a call hua
// [ a, b ]        → b call hua
// [ a, b, c ]     → c call hua

// c complete hua  → [ a, b ]    c gaya pehle
// b complete hua  → [ a ]       b gaya
// a complete hua  → [ ]         a gaya

// → Jo FUNCTION sabse AAKHIR call hua, woh PEHLE complete hua
// → LIFO! ✅

//! 💡 LIFO vs FIFO — Farq Samjho

// LIFO (Stack)                FIFO (Queue)
// ════════════                ════════════
// Last In First Out           First In First Out

// Chapaati ki plate           Bank ki line
// Jo upar hai pehle jaye      Jo pehle aaya pehle jaye

// [ 1, 2, 3 ]                [ 1, 2, 3 ]
// remove → 3 nikla            remove → 1 nikla


//? ✅ Topic 2 Summary

// LIFO     → Last In First Out
// Rule     → Aakhri aaya = Pehle jayega
// Examples → Browser back, Undo, Function calls
// Farq     → LIFO (Stack) vs FIFO (Queue)


function chai() {
    pani()
    console.log("Chai Ready");
}
function pani() {
    glass()
    console.log("Pani Ready");
}
function glass() {
    console.log("Glass Lia");
}

chai();


//! 📚 Topic 3: Stack Ka Visual Diagram

//? 👁️ Stack Ki Basic Structure

// STACK
//     ┌───────────┐
//     │           │  ← OPENING (yahan se push/pop hota hai)
//     ├───────────┤
//     │  Element  │  ← TOP (sabse upar wala)
//     ├───────────┤
//     │  Element  │
//     ├───────────┤
//     │  Element  │
//     ├───────────┤
//     │  Element  │  ← BOTTOM (sabse neeche wala)
//     └───────────┘
//          ↑
//       CLOSED (yahan se kuch nahi nikalta)


//? 🎯 3 Important Parts

// ┌───────────┐
// │   TOP     │  → 1. TOP
// ├───────────┤         → Sabse upar wala element
// │           │         → Yahan se push hota hai
// │  MIDDLE   │         → Yahan se pop hota hai
// │           │
// ├───────────┤  → 2. MIDDLE
// │  BOTTOM   │         → Baaki sare elements
// └───────────┘         → Directly access nahi kar sakte

//                 → 3. BOTTOM
//                       → Sabse pehle aaya element
//                       → Sabse aakhir jayega

//? 📽️ Animation — Push Karte Waqt

// STEP 1: Khali Stack
//     ┌───────────┐
//     │           │
//     │           │
//     │           │
//     │           │
//     └───────────┘
//     size = 0
//     TOP  = null

// ━━━━━━━━━━━━━━━━━━━━━━━━

// STEP 2: push(10)
//     ┌───────────┐
//     │           │
//     │           │
//     │           │
//     │    10     │ ← TOP
//     └───────────┘
//     size = 1
//     TOP  = 10

// ━━━━━━━━━━━━━━━━━━━━━━━━

// STEP 3: push(20)
//     ┌───────────┐
//     │           │
//     │           │
//     │    20     │ ← TOP
//     │    10     │
//     └───────────┘
//     size = 2
//     TOP  = 20

// ━━━━━━━━━━━━━━━━━━━━━━━━

// STEP 4: push(30)
//     ┌───────────┐
//     │           │
//     │    30     │ ← TOP
//     │    20     │
//     │    10     │
//     └───────────┘
//     size = 3
//     TOP  = 30

// ━━━━━━━━━━━━━━━━━━━━━━━━

// STEP 5: push(40)
//     ┌───────────┐
//     │    40     │ ← TOP
//     │    30     │
//     │    20     │
//     │    10     │
//     └───────────┘
//     size = 4
//     TOP  = 40


//? 📽️ Animation — Pop Karte Waqt

// STEP 1: pop()
//     ┌───────────┐
//     │           │ ← 40 nikal gaya!
//     │    30     │ ← TOP (ab yeh)
//     │    20     │
//     │    10     │
//     └───────────┘
//     size = 3
//     TOP  = 30
//     returned = 40

// ━━━━━━━━━━━━━━━━━━━━━━━━

// STEP 2: pop()
//     ┌───────────┐
//     │           │
//     │           │ ← 30 nikal gaya!
//     │    20     │ ← TOP (ab yeh)
//     │    10     │
//     └───────────┘
//     size = 2
//     TOP  = 20
//     returned = 30

// ━━━━━━━━━━━━━━━━━━━━━━━━

// STEP 3: pop()
//     ┌───────────┐
//     │           │
//     │           │
//     │           │ ← 20 nikal gaya!
//     │    10     │ ← TOP (ab yeh)
//     └───────────┘
//     size = 1
//     TOP  = 10
//     returned = 20

// ━━━━━━━━━━━━━━━━━━━━━━━━

// STEP 4: pop()
//     ┌───────────┐
//     │           │
//     │           │
//     │           │
//     │           │ ← 10 nikal gaya!
//     └───────────┘
//     size = 0
//     TOP  = null
//     returned = 10

// ━━━━━━━━━━━━━━━━━━━━━━━━

// STEP 5: pop()  ← DANGER!
//     ┌───────────┐
//     │           │
//     │           │
//     │           │
//     │           │ ← Stack khali hai!
//     └───────────┘
//     size = 0
//     TOP  = null
//     returned = ERROR! ← Khali stack se pop karo
                        //  to ERROR aata hai!

//? 🔑 TOP Pointer Kya Hota Hai?

// TOP ek pointer hai — yeh hamesha
// sabse upar wale element ko point karta hai

// ┌───────────┐
// │    40     │ ← TOP pointer yahan hai
// ├───────────┤
// │    30     │
// ├───────────┤
// │    20     │
// ├───────────┤
// │    10     │
// └───────────┘

// Jab push hota hai → TOP upar jaata hai
// Jab pop hota hai  → TOP neeche aata hai
// Jab khali ho      → TOP = null

//? 🌍 Real Life Visual Comparison

// Stack               Lift/Elevator
// ══════              ══════════════
// TOP    →            Sabse upar ki floor
// BOTTOM →            Ground floor
// push   →            Upar jaana
// pop    →            Neeche aana


//? ✅ Topic 3 Summary

// ✅ Stack ki structure    → TOP, MIDDLE, BOTTOM
// ✅ TOP pointer           → Hamesha upar wale ko point karta hai
// ✅ Push animation        → TOP upar jaata hai
// ✅ Pop animation         → TOP neeche aata hai
// ✅ Empty stack pop       → ERROR aata hai