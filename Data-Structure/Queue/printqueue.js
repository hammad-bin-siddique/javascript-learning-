//! 🔷 PHASE 5: Real-World Use Cases


// Topic 19: Print Queue 🖨️


class PrintQueue {
    constructor() {
        this.printer = []; // start main 1 khali printer ka array banaya 
    };

    // ab is printer mian push kare ge 

    addPrintTask(docName, userName) {
        const task = {docName, userName, time: new Date().toLocaleTimeString()}; // abhi variable banaya jis print karne wale ka name or jo chez print ho rahe ha us ko save kare ge as a object keuke yaha per 2 keys hain is lia or sath main print karte waqt time bhi print kare ge 

        this.printer.push(task); // abhi jo bahir se data ai ga wo printer name ke array main store ga mean ke doc name or user name

        console.log(`Document of ${userName} => ${docName} is added in the printer`);
    };

    // ab dequeue kare ge mean ke jo printer print kar ke bahi behj raha ha wo 

    printedTask() {
        if(this.printer.length === 0) {
            console.log("There is nothing to print"); // mean ke agar printer empty ha to message return karo ke printer empty ha 

            return; // function close karo 
        }

        const task = this.printer.shift(); // mean ke printer ke front se task ko nikalo fifo method ha 
        console.log(`Printing: ${task.docName} => ${task.userName}`);
    };

    // abhi ye dekhna ke next kn sa ha print karne ke lia 

    nextToPrint(){
        if(this.printer.length === 0) {
            console.log("Printer is Empty");
            return;
        };
        console.log(`Next To Print: ${this.printer[0].userName}`); // mean ke agar printer khali nahi ha to next wala batao ke kn task ha jo print karna ha 
    };


    //? abhi is ke andar ham 1 filter function banai ge jis se kisi ki job cancel ho gi 

    cancelTask(userName) {
        this.printer = this.printer.filter(task => task.userName !== userName);
        console.log(`Job Cancelled for ${userName}`);
    };

    //? abhi ye check karna ha kitne task pending hain or kitna time lage ga sab jobs print hone main 

    estimatedWaitTime(){
        if(this.printer.length === 0) {
            console.log("No Tasks Pending In Printer");
            return;
        }
        const pendingTasks = this.printer.length; // mean ye batai ga ke abhi kitne pending tasks hain 
        const totalTime = pendingTasks * 60; // her task 60 sec leta ha complete hone main 
        console.log(`${pendingTasks} Pending Tasks, Estimated Wait Time ${totalTime} Seconds`);
    };

};


const printer = new PrintQueue();

console.log("====Printer===")
printer.addPrintTask("ID Card Copy", "Hammad");
printer.addPrintTask("Cv.pdf", "Farhan");
printer.addPrintTask("Notes.docx", "Ali");
printer.addPrintTask("Presentation", "Imran");

printer.estimatedWaitTime(); // yaha abhi 4 task pending hain or time 240 seconds hain 
printer.cancelTask("Imran")

printer.nextToPrint(); // Hammad 
printer.printedTask(); // hammad ka print ho raha 
printer.printedTask(); // Farhan ka print ho ga 
printer.estimatedWaitTime(); // yaha abhi 1 pending task ha or 60 seconds hain keuke imran ka task cancel ho gia ha 
printer.printedTask(); // Ali ka print ho ga 
printer.printedTask(); // yaha abhi kuch bhi print nahi ho ga keuke imran cancle ho chuka ha 
printer.nextToPrint(); // yaha abhi empty ai ga printer keuke abhi sab uper print ho chuke hain or imran cancel ho chuka ha 


//? Task One Restaurant Queue Order

class RestaurantOrderQueue {
    constructor() {
        this.order = [];
    };

    //yaha order add karne ka function banai ge 

    addOrder(customerName, dish) {
        const theOrder = {customerName, dish, date: new Date().toLocaleTimeString()};

        this.order.push(theOrder); 
        console.log(`The Customer: ${customerName} Ordered ${dish} `);
    };

    // yaha abhi order serve karne ka function banai ge 

    serveNextOrder() {
        if(this.order.length === 0) {
            console.log("There is Nothing to Serve");
            return;
        }

        const serveOrder = this.order.shift(); // yani ke ab order fifo method se serve karo 

        console.log(`Serve to ${serveOrder.customerName} this ${serveOrder.dish}`); 
    };

    // ab next order dekhe gain ke kis ka ha 

    nextOrder() {
        if(this.order.length === 0) {
            console.log("There is no customer to order");
            return;
        }

        console.log(`Next To Serve: ${this.order[0].customerName}`);
    };
};


const restaurant = new RestaurantOrderQueue();

console.log("===Restaurant Order Task===");
restaurant.addOrder("Hammad", "Pizza");
restaurant.addOrder("Waleed", "Biryani");
restaurant.addOrder("Hamza", "Burger");

restaurant.nextOrder(); // Hammad ai ga
restaurant.serveNextOrder(); // Hammad Ka order serve ho raha ha 
restaurant.serveNextOrder(); // Waleed Ka order serve ho raha ha 
restaurant.nextOrder(); // Hamza ai ga 


