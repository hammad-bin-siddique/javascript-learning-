//! Queue — Phase 1, Topic 1: Queue Kya Hota Hai? 🗂️


//? 📌 Definition

// Queue ek aisi data structure hai jahan:

// Entry hoti hai BACK (peeche) se
// Exit hoti hai FRONT (aage) se


// Seedha simple:

// "Pehle aao, pehle jao"

//? 🔤 Technical Naam
// Iska principle kehte hain:

// FIFO — First In, First Out

//? 🖼️ Visual Diagram

// BACK                              FRONT
//   ↓   (naya element yahan aata)    ↓  (purana element yahan se nikalta)
 
// [ Kamran | Bilal | Asad ]
//    (3)      (2)    (1)
//                     ↑
//               Yeh pehle niklay ga
// [ Kamran | Bilal ]
//             ↑
//       Ab Bilal front pe hai

//! Queue — Phase 1, Topic 2: FIFO Principle (Deep) 📐


//? 🧠 FIFO Ka Matlab Seedha

// F — First
// I — In
// F — First
// O — Out

//? 🔑 Ek Zaroori Baat — Dono Ends Alag Hain
// Queue mein do sides hoti hain:

// REAR (پیچھے)          FRONT (آگے)
//      ↓                     ↓
// [ Element3 | Element2 | Element1 ]
//      ↑                     ↑
//   Yahan se               Yahan se
//   ENTER karo             EXIT karo

// REAR — naya element yahan add hota hai → isko kehte hain enqueue
// FRONT — purana element yahan se nikalta hai → isko kehte hain dequeue

//? ⚠️ Queue Ki Strict Rule

// ❌ Beech se element nahi nikal sakte
// ❌ Front se add nahi kar sakte
// ❌ Rear se remove nahi kar sakte

// ✅ Sirf REAR se add
// ✅ Sirf FRONT se remove


//!  Queue — Phase 1, Topic 3:  Diff between stack and queue 

// stack main lifo rule hota ha last in first out 
// queue main fifo rule hota ha first in first out 

//! Queue — Phase 1, Topic 4: Visual Diagram (Detailed) 🖼️

//? 🔑 Key Points Jo Diagram Se Samjhe

// 1. FRONT  → hamesha sabse pehle wala element
// 2. REAR   → hamesha sabse baad wala element
// 3. enqueue → REAR aage badhta hai
// 4. dequeue → FRONT aage badhta hai
// 5. Empty   → jab FRONT aur REAR dono -1 pe hon

//! Queue — Phase 1, Topic 5: Real Life Examples 🌍
//? 🔷 Example 1 — 🖨️ Printer Queue
// Scene:

// Office mein 5 log hain — sab ne ek saath print bheja:

// ╔══════════════════════════════════════╗
// ║         PRINTER QUEUE                ║
// ║                                      ║
// ║  [ Report | CV | Form | Letter | Invoice ] ║
// ║      ↑                          ↑    ║
// ║    FRONT                       REAR  ║
// ╚══════════════════════════════════════╝

// Printer pehle "Report" print karega
// Phir "CV", phir "Form"... FIFO!

//? 🔷 Example 2 — 📞 Call Center
// Scene:

// Ufone call center pe 3 log ek saath call karte hain:
// ╔══════════════════════════════════════╗
// ║         CALL QUEUE                   ║
// ║                                      ║
// ║     [ Raza | Sana | Ahmed ]          ║
// ║        ↑               ↑             ║
// ║      FRONT            REAR           ║
// ╚══════════════════════════════════════╝

// "Aap ki call queue mein hai, 
//  wait karein" — yahi Queue hai!

//?  🔷 Example 3 — 🎮 Game Mein Task Queue
// Scene:

// PUBG mein tumhara character ek saath kaam karta hai:

// ╔══════════════════════════════════════╗
// ║         GAME TASK QUEUE              ║
// ║                                      ║
// ║  [ Reload | Run | Jump | Shoot ]     ║
// ║      ↑                    ↑          ║
// ║    FRONT                 REAR        ║
// ╚══════════════════════════════════════╝

// Pehle reload hoga, phir run,
// phir jump, phir shoot — FIFO order!

//? 🔷 Example 4 — 🌐 WhatsApp Messages
// Scene:

// Tum offline the — 3 messages aaye:

// ╔══════════════════════════════════════╗
// ║         MESSAGE QUEUE                ║
// ║                                      ║
// ║  [ "Kya hal hai?" | "Aaja" | "?" ]  ║
// ║         ↑                    ↑       ║
// ║       FRONT                 REAR     ║
// ╚══════════════════════════════════════╝

// Online hue → pehla message pehle deliver
// hua — FIFO!

//? 🔷 Example 5 — 🏥 Hospital OPD
// Scene:

// Doctor ke paas patients token le ke baithte hain:

// ╔══════════════════════════════════════╗
// ║         OPD QUEUE                    ║
// ║                                      ║
// ║   [ T-01 | T-02 | T-03 | T-04 ]     ║
// ║      ↑                    ↑          ║
// ║    FRONT                 REAR        ║
// ╚══════════════════════════════════════╝

// Token 01 wala pehle andar jaega!

// Jab bhi life mein dekho:

// ✅ "Line lagi hui hai"
// ✅ "Pehle aao pehle pao"
// ✅ "Waiting list hai"
// ✅ "Order maintain ho raha hai"

// → Wahan QUEUE use ho rahi hai!