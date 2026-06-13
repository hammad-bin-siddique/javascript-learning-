//! Task — Browser Back Button

class Stack {
    constructor() {
        this.pages = [];
    };

    //? Push Function Banana

    push(element) {
        return this.pages.push(element);
    };

    //?Pop Function banana 

    pop() {
        if(this.isEmpty()) {
            return null;
        }
       return this.pages.pop();
    };

    //? isEmpty Function banana 

    isEmpty() {
        return this.pages.length === 0;
    };

    //? Size Function banana 

    size(){
        this.pages.length;
    };

    //? Peek Function banana 

    peek(){
        if(this.isEmpty()){
            return null;
        }
        this.pages[this.pages.length - 1];
    };

    //? Print Function Banana 

    print(){
        console.log(this.pages);
    };
};

//? Ab 3 variable bane ge 

const backStack = new Stack(); // backstack banaya yaha visited page show ho ge 
const forwardStack = new Stack(); // forward stack is main wo page show ho ge jo pages ham back kare ge 
let currentPage = null; // abhi koi current page nahi ha or let ka use is lia kia keuke is ke values change ho gi 


//? visit function banana 

function visit(page){
    if(currentPage !== null) {
        backStack.push(currentPage);

        // yani agar current page empty nahi ha to us pehle wale page ko back stadck main dalo
    };

    currentPage = page; // yani current page page ha jo visit kia ha abhi 

    forwardStack.pages = []; // abhi forward stack khali ha keuke abhi ham ne kuch back kia he nahi jo forward stack main jai 
    console.log(`Visiting: ${currentPage}`);  //? yani print karo un pages ko jo visit ho rahe hain 
};



//?back function banana 

function back() {
    if(backStack.isEmpty()){
        console.log("Koi Previous Page Nahi ha");
        return; // function close kia 
    };

    forwardStack.push(currentPage); // forward stack ke andar current page ko dal do 

    currentPage = backStack.pop(); // abhi current page us ko bana do jo backstack se pop hua ha mean ke jab hab back function apply kare ge to jo page backstack se pop ho ga wo current page bane ga or wo current page forward stack main push ho ga

    console.log(`Back ${currentPage}`);
};

//? Forward function banana 

function forward() {
    if(forwardStack.isEmpty()){
        console.log("koi forward page nahi ha ");
        return;
    }

    backStack.push(currentPage); // backstack ke andar current page dalo 
    currentPage = forwardStack.pop(); // abhi current page forward stack se pop hue item ko bana do mean ke jab ham forward function call kare ge to forward stack main se item pop ho ga or current page main jai ga or current page back stack main push ho jai ga 
};


visit("daraz.pk");
visit("aliexpress.com");
visit("amazon.com");
visit("ebay.com");

console.log(`Current Page At First ${currentPage}`); // abhi is main ebay.com ho ga 

console.log("====Back Stack====");

backStack.print();
// abhi back stack main total 3 page hi ge top per amazon phir neache ali express or phir daraz or ebay filhal current page ha 

console.log("====Forward Stack====");
forwardStack.print(); // abhi khali ho ga keuke abhi ham ne back function call he nahi kia 

back(); // ab back function call hone se amazon chala jai ga current page per or jo pehle current page tha ebay wo chala jai ga forward stack main or abhi ebay current page ban jai ga or back stack main sirf 2 pages re jai ge 

back(); // abhi ebay current jo taha pehle wo chala jai ga forward stack main or ali express current page ban jai ga or back stack main sirf daraz pk re jai ga 

console.log(`Current Page after two backs ${currentPage}`); // ab yaha ali express ho ga 
console.log("===Back stack atfer two backs===");
backStack.print(); // sirf daraz pk ho ga 

console.log("===Forward Stack after two backs===");
forwardStack.print();

// is main abhi top per amazon.com ho ga or bottom per ebay.com ho ga 

forward(); // forward funciton call karne se ali express jo pehle current page tha wo ab back stack main jai ga or amazon current page ban jai ga 

console.log(`Current Page After 1 one forward ${currentPage}`); // ab is main amazon current page ho ga 
console.log("===Back stack after 1 forward===");
backStack.print(); // abhi is main daraz bottom per ho ga ga or ali express ho ga

console.log("===Forward Stack after 1 forward===");
forwardStack.print(); // yaha ab sirf ebay.com ho ga 

visit("flipkart.com");

console.log(`current page after visit new page ${currentPage}`); // ab is main flipkart ho ga or amazon chala gia backstack main 

console.log("===final back stack after calling visit function===");

backStack.print(); // jab new page visit hua to jo pehle amazon current page tha wo back stack main a gia or flipkart new current page ban gia 

console.log("===final forward  stack after calling visit function===");

forwardStack.print(); // ye jese he new visit function chala clear ho gia keuke new action se ye clear ho jata ha 