# JavaScript Learning Journey 

A structured JavaScript learning repository by **Hammad Siddique** — documenting hands-on practice, concept notes, and tasks built from solid foundations.

> Study → Practice → Build. Repeat.

---

##  About

This repo tracks my JavaScript learning path topic by topic. Each folder contains:
- A concept file explaining how things work
- A task file with hands-on practice
- Inline comments explaining *why* the code behaves a certain way, not just *what* it does

---

##  Learning Approach

I follow [roadmap.sh/javascript](https://roadmap.sh/javascript) to decide **what to learn next** and in what order.

For each topic I use multiple sources to build a complete understanding:

| Source | Purpose |
|---|---|
| [roadmap.sh](https://roadmap.sh/javascript) | Topic selection & learning order |
| [MDN Web Docs](https://developer.mozilla.org) | Official reference & deep technical detail |
| [W3Schools](https://www.w3schools.com/js) | Quick examples & syntax lookup |
| [javascript.info](https://javascript.info) | Structured explanations with examples |
| Claude (AI) | Concept clarification, debugging & practice tasks |

Once a topic is understood, I write the code myself and build a small task before moving to the next topic.

---

## 📁 Folder Structure

```
javascript-learning/
│
├── Variables/
│   ├── Variables/          → let, const, var — declaration & typeof
│   └── Hoisting/           → var hoisting, TDZ with let/const
│
├── Variable Task/          → Hospital management system task
│
├── Variable Scope/
│   ├── Global/             → Global scope & mutation risks
│   ├── Function Scope/     → Function-level privacy
│   ├── Block/              → Block scope with let/const vs var
│   └── Task/               → School marks system task
│
├── Scope Chain/
│   ├── Chaining/           → Inner to outer scope lookup
│   └── Variable Shadowing/ → Local variable overriding global
│
├── Type-Casting/
│   ├── Type Casting/       → What type casting is and why it matters
│   ├── Conversion/         → Explicit: Number(), String(), Boolean()
│   ├── Coercion/           → Implicit: +, -, ==, if() coercion rules
│   └── Task/               → Smart calculator + coercion challenge
│
├── Data-Types/
│   ├── Boolean/            → Truthy/falsy, boolean operations
│   ├── Number/             → Number methods, NaN, Infinity
│   ├── String/             → String methods, template literals
│   ├── Bigint/             → BigInt for large numbers
│   ├── Typeof/             → typeof operator deep dive
│   ├── Math Random/        → Math.random() usage
│   └── Undefined And Null/ → null vs undefined difference
│
├── Objects/
│   ├── Simple Object/      → Object creation, access, mutation
│   ├── Constructor Object/ → Constructor functions with new keyword
│   └── Object Task/        → Mega task combining object concepts
│
├── Objects-part-two/
│   ├── Arrays Built in/    → Built-in array methods (map, filter, reduce...)
│   ├── Built In Object/    → Math, Number, String built-in objects
│   ├── Date Object/        → Date creation and formatting
│   └── Json/               → JSON.stringify, JSON.parse
│
├── Data-Structure/
│   ├── Data Structure/     → Overview of all JS data structures
│   ├── Array/              → Array creation, access, methods
│   ├── Destructuring/      → Object & array destructuring, rename, defaults
│   ├── Map/                → Map vs Object, iteration, mini projects
│   ├── Sets/               → Set, WeakSet, unique values
│   ├── Object/             → Object as data structure
│   └── Stack/              → LIFO stack implementation
│
└── JS-Mega-Task/           → Combined mega task covering multiple concepts
```

---

## ✅ Concepts Covered

| Topic | Status |
|---|---|
| Variables — let, const, var | ✅ Done |
| Hoisting & TDZ | ✅ Done |
| Variable Scope (Global, Function, Block) | ✅ Done |
| Scope Chain & Variable Shadowing | ✅ Done |
| Type Conversion (Explicit) | ✅ Done |
| Type Coercion (Implicit) | ✅ Done |
| Data Types — String, Number, Boolean, Null, Undefined, BigInt | ✅ Done |
| typeof Operator | ✅ Done |
| Objects — Simple & Constructor | ✅ Done |
| Arrays & Built-in Methods | ✅ Done |
| Destructuring — Object & Array | ✅ Done |
| Map | ✅ Done |
| Set & WeakSet | ✅ Done |
| Stack (LIFO) | ✅ Done |
| JSON | ✅ Done |
| Date Object | ✅ Done |
| Functions & Closures | 🔜 Next |
| DOM Manipulation | 🔜 Next |
| Promises & Async/Await | 🔜 Next |
| Error Handling | 🔜 Next |
| ES6 Modules | 🔜 Next |
| Classes & Prototypes | 🔜 Next |

---

##  How to Run

Make sure [Node.js](https://nodejs.org) is installed.

```bash
# Run any file directly from the terminal
node Variables/Variables/variable.js

# Files with spaces in folder names
node "Data-Structure/Array/array-task.js"
```

---

## 🔗 Connect

- GitHub: [hammad-bin-siddique](https://github.com/hammad-bin-siddique)
- Instagram: [@cove.code](https://instagram.com/cove.code)

---

*Built with consistency and a lot of console.log() — Abbottabad, Pakistan 🇵🇰*
