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
};


const printer = new PrintQueue();

console.log("====Printer===")
printer.addPrintTask("ID Card Copy", "Hammad");
printer.addPrintTask("Cv.pdf", "Farhan");
printer.addPrintTask("Notes.docx", "Ali");

printer.nextToPrint(); // Hammad 
printer.printedTask(); // hammad ka print ho raha 
printer.printedTask(); // Farha ka print ho ga 
printer.nextToPrint(); // ali show ho ga 


