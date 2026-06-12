//! 📚 Topic 13: Browser Back Button

//? 🧠 Pehle Socho
// Bhai tum rozana browser use karte ho:

// google.com khola
// youtube.com khola
// github.com khola
// stackoverflow.com khola

// ← Back dabaya → stackoverflow gaya, github pe aaye
// ← Back dabaya → github gaya, youtube pe aaye
// → Forward dabaya → github wapas aaya

// Yeh sab 2 Stacks se hota hai — bilkul Undo/Redo jaisa!

//? 📖 Kaise Kaam Karta Hai?

// 2 Stacks:
// ─────────
// 1. backStack    → visited pages store hoti hain
// 2. forwardStack → back kiye pages store hote hain


class Stack {
    constructor() {
        this.pages = [];
    };

    //? push function banana 

    push(element) {
        return this.pages.push(element);
    }; 

    //? Pop Function banana

    pop(){
        if (this.isEmpty()) {
            return null
        }
        return this.pages.pop();
    };

    //? Peek Function banana 
    peek() {
        if(this.isEmpty()) {
            return null
        }
        return this.pages[this.pages.length - 1];
    };

    //? isEmpty Function banana 

    isEmpty() {
        return this.pages.length === 0;
    }; 

    //? Size Function banana 

    size(){
        return this.pages.length;
    };

    //?Print Function banana 

    print() {
        console.log(this.pages);
    };

};

//? Ab Forward or back jane ke lia variables banai ge 

const backStack = new Stack(); // back stack banaya yaha visisted pages store ho ge 
const forwardStack = new Stack(); // forward stack banaya  yaha jo ham pages back kare ge wo store ho ge 

let currentPage = null; // current page abhi null ha keuke ke koi page visit nahi kia or let ka use kia keuke is ke value change ho gi 

//? Visit function banana 

function visit(page) {
    if(currentPage !== null){
        backStack.push(currentPage); 
        // yani agar current page empty nahi ha to mean ke jo prana page ha to us ko back stack main dalo 
    };

    currentPage = page; // jo new page visit kia us ko current page bana do 

    forwardStack.pages = []; // yani jese he new page open kia forward stack clear kar do 

    console.log(`Visiting: ${currentPage}`); // yani print karo like visiting youtube.com hostinger.com so on 

};

//? Back Function Banana 

function back() {
    if(backStack.isEmpty()) {
        console.log("Koi Previous Page Nahi ha"); 
        // yani agar back stack kahli ha to msg print karo ke koi page nahi ha 

        return // funciton close karo 
    }; 

    forwardStack.push(currentPage); // ab forward stack main current page ko dalo 

    currentPage = backStack.pop(); // current page wo ha jo backstack ka top element pop hua ha wo ab current page ban gia ha or ye current page forward stack main chala gia 

    console.log(`Back ${currentPage}`); //
};

//? Forward Function banana 

function forward() {
    if(forwardStack.isEmpty()) {
        console.log("Koi Forward Page Nahi ha");
        // yani agar forwardstack khali ha to to msg print karo koi forward page nahi ha 
        return // function close karo 
    };

    backStack.push(currentPage); // back stack main current page ko dalo 

    currentPage = forwardStack.pop(); // current page wo ha jo forward stack se nikla 

    console.log(`Forward: ${currentPage}`);



};

//! ✅ Summary

// visit()   → currentPage backStack mein
//             naya page currentPage bana
//             forwardStack CLEAR

// back()    → currentPage forwardStack mein
//             backStack se pop karo
//             currentPage bana do

// forward() → currentPage backStack mein
//             forwardStack se pop karo
//             currentPage bana do

visit("google.com");
visit("hostinger.com");
visit("hamalistore.com");
visit("qanadeel.org");


console.log("===Back Stack===");

backStack.print(); // yaha per wo pages ho ge jo previeous the like google hostinger hamalistore abhi qanadeel current page ha is lia wo nahi ai ga 

back(); // back stack se hamali store pop ho kar current ban gia or jo qanadeel current page tha wo ab forward stack main chala gia 

back(); // ab hostinger bhi  pop ho kar current ban gia or hammali store forward stack main chala gia 

console.log("===Back Stack After Two Backs===");
backStack.print(); // yaha per sirf ab google.com ho ga 

console.log("===Forward Stack After Two Back===");
forwardStack.print();// yaha per abhi top pe hamali store ho ga or neache qanadeel

forward(); // forward ke top se hamalistore nikal gia  or current ban gia 

console.log("===Forward Stack After Forward===");
forwardStack.print(); 
// ab yaha sirf qanadeel.org ha ab bas 

console.log("===Back Stack After Forward"); 
backStack.print(); // yaha per google neache ho ga or jese ke forward karne se hamali store current ban gia tha to jo current page hostinger tha wo wapis se back main a gia top per 

visit("moviesbox.com");

console.log("===Final Back Stack===");

backStack.print(); // is main ab google hostinger or hamlistore ho ga  

console.log("===Final Forward Stack==="); 

forwardStack.print(); // ye khali ho ga keuke ke new action ke bad forward stack clear ho jata ha 


//! Task — Browser Back Button

class StackNew  {

    constructor() {
        this.item = []
    };

    // push function banana 

    push(page){
        return this.item.push(page);
    };

    // pop function banana 

    pop() {
        if(this.isEmpty()) {
            return null
        }
        return this.item.pop();
    };

    //isEmpty Function banana 

    isEmpty(){
        return this.item.length === 0;
    };

    //peek function banana 

    peek() {
        if(this.isEmpty()){
            return null
        }
        return this.item[this.item.length - 1];
    };

    //size function banana 

    size() {
        return this.item.length;
    };

    //print function banana 

    print(){
        console.log(this.item);
    }
};

// ab forward or back jane ke lia variable banai ge 

const backStackNew = new StackNew();

const forwardStackNew = new StackNew();

let currentPageNew = null;

//?visit Function banana 

function visitNew(myPage){
    if(currentPageNew !== null) {
        return backStackNew.push(currentPageNew);
    }; // yani agar current page empty nahi ha to jo prana page ha us ko back stack main dalao 
};

currentPageNew = myPage; // yani jo new page visit kia us ko current page bana do 

forwardStackNew.item = []; // forward stack ko clear kar do new page visit karte he 

console.log(`Visiting ${currentPageNew}`);

// yani jo visit kia page hain wo print karo like visiting daraz.pk aliexpress.com etc

//? Back function banana 

function backNew() {
    if(backNew.isEmpty()) {
        console.log("Koi Previous Page Nahi ha");
        // yani agar back stack khali ha to print karo ke koi page nahi ha previous 
        return; // function close karo 
    };


    forwardStackNew.push(currentPageNew); //ab forward stack main current page ko dalo

    currentPageNew = backStackNew.pop(); // abhi current page wo ha jo backstack ke top se pop hua 

    console.log(`Back ${currentPageNew}`);

    // yani jo back stack main pages hain un ko print karo 

};


//? Ab forward function banao 


function forwardNew() {
    if(forwardNew.isEmpty()){
        console.log("Koi Forward Page Nahi ha");
        // yani agar forwardstack khali ha to msg print karo ke koi forward page nahi ha 
        return; 
    };

    backStackNew.push(currentPage); // backstack main current page ko dalao 

    currentPageNew = forwardStackNew.pop(); 
    // forward stack se jo top item pop karo us ko current page bana do 

    console.log(`Forward: ${currentPage}`);

    // yani jo forward stack main pages hain un ko print kar do 

};

visitNew("daraz.pk");
visitNew("aliexpress.com");
visitNew("amazon.com");
visitNew("ebay.com");

console.log("===Back Stack===");

backStackNew.print();

//abhi back stack main top per amazon ho ga phir aliexpres ho phir daraz ho ga lifo rule ke waja se or current page main abhi ebay.com ho ga 
