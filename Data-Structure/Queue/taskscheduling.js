//! 🖥️ Phase 5, Topic 3: Task Scheduling (CPU Queue)


// is task main cpu ke task process karne ko senirio create kare ga mean ke jab koi task ham open karte hain man lo chrome open ha vs code open music open but cpu ke limited cores hote hain is lia wo queue ka use karta ha jo sab se pehle task open kia pehle us ko run kare ga phir dosre ko 

class TaskSheduler {
    constructor() {
        this.taskQueue = []; // yaha wo task ho ge jo abhi pending main hain mean ke waited list ha ye tasks ki 
    };

    addTask(taskName, priority) {
        let addedTask = {taskName, priority};
        let added = false;
        for(let i = 0; i < this.taskQueue.length; i++) {
            if(addedTask.priority < this.taskQueue[i].priority) {
                this.taskQueue.splice(i, 0, addedTask);
                added = true;
                break;
            }
        }

        if(!added) {
            this.taskQueue.push(addedTask);
        }

    };

    // abhi 1 new function bane ga jo batai ga ke agar queue khali nahi ha to dosre task ko run karo fifo method se 

    runNextTask(){
        if(this.taskQueue.length === 0) {
            console.log("No Task Left");
            return;
        }

        let runningTask = this.taskQueue.shift();
        console.log(`Running Task is: ${runningTask.taskName}`);
    };

    // ab print function bane ga 

    printTask(){
        this.taskQueue.forEach(tasks => {
            console.log(`Tasks => ${tasks.taskName} Priority => ${tasks.priority}`);
        });
    };
};


const scheduler = new TaskSheduler();
scheduler.addTask("Open Chrome", 5);
scheduler.addTask("Open Whatsapp", 3);
scheduler.addTask("Backup Files", 4);
scheduler.addTask("Run Music", 1);
scheduler.addTask("Open Vs Code", 2);

scheduler.printTask(); // ab is main top per run music phir vs code phir open whatsapp phir backup files or phir open chrome ho ga 
scheduler.runNextTask(); // run music
scheduler.runNextTask(); // vs code 
scheduler.addTask("Open Teams", 6); ;
scheduler.printTask(); // team ke priorty ziada ha sab se is lia ye last main add ho jai ga 
//abhi top whatsapp phir backup files phir chrome or phir last main teams ho ga 

