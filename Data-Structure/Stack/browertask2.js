

class StackMain {
    constructor() {
        this.pages = [];
    };

    // push function banana 

    push(element) {
        return this.pages.push(element);
    };

    // pop function banana 

    pop(){
        if(this.isEmpty()){
            return null
        }
        return this.pages.pop();
    };

    // isempty function banana 

    isEmpty(){
        return this.pages.length === 0;
    };

    // size function banana 

    size(){
        return this.pages.length;
    };

    // peek function banana 

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.pages[this.pages.length - 1];
    };

    //print function banana 

    print(){
        console.log(this.pages);
    };
};

const backStackMain = new StackMain();
const forwardStackMain = new StackMain();
let currentPageMain = null;


//? Visit Function 

function visitMain(page){
    if(currentPageMain !== null){
        backStackMain.push(currentPageMain);
    }

    currentPageMain = page;
    forwardStackMain.pages = [];
    console.log(`Visiting: ${currentPageMain}`);
};

//? Back Stack 

function backMain(){
    if(backStackMain.isEmpty()){
        console.log("There is no Previous Page");
        return;
    };

    forwardStackMain.push(currentPageMain);
    currentPageMain = backStackMain.pop();
    console.log(`Back: ${currentPageMain}`);
};

//? Forward Function banana 

function forwardMain(){
    if(forwardStackMain.isEmpty()){
        console.log("There is no forward page");
        return 
    };
    backStackMain.push(currentPageMain);
    currentPageMain = forwardStackMain.pop();
    console.log(`Forward: ${currentPageMain}`);
};

visitMain("amazon.com");
visitMain("nizafa.com");
visitMain("hayatislamic.com");
visitMain("hamali.store");

backStackMain.print(); // amazon nizafa hayatislamic 
forwardStackMain.print(); //empty

backMain()// hayatislamic pop
backMain() // nizafa out 

backStackMain.print(); // amazon  only 
forwardStackMain.print(); // hamali hayatislamic

forwardMain(); // hayatislamic pop 

backStackMain.print(); // amazon nizafa 

forwardStackMain.print(); // hamali only 

visitMain("daraz.com"); 

backStackMain.print(); // amazon nizafa hayatislamic

forwardStackMain.print(); // empty 


