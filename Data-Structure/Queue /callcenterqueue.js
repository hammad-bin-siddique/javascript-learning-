//! Topic 20: Call Center Queue ☎️


// main yaha call center ka senerio banao ga mean ke kuch customer add karo ga 1 queue main or kuch agents ko add karo 1 array main or customers ko agents ke sath connect kar do ga start main agents ka status free ho ga phir jab us ke sath koi customer connect ho ga to phir us agent ka status free se busy ho jai ga 

class CallCenterQueue {
    constructor() {
        this.customerQueue = []; // is array main customer ai ga 
        this.agents  = [
            {name: "Agent1", status: "free"},
            {name: "Agent2", status: "free"},
            {name: "Agent3", status: "free"}
        ]; // ye 1 array banaya ha jis ke andar object main agents or us ka status data ha 
    };

    //? ab add customer ka function bane ga jis main dekhe ke agar koi agent free ha to us ko customer ke sath connect kar de ga warna use customer queue main add kar de gain waiting ke lia 

    addCustomer(customerName) {
        const freeAgent = this.agents.find(agent => agent.status === "free");

        //? abhi free agent ka status busy kar dain ge or un ko connect kar de customers sath or jo customer re jai ga un ko customer queue main add kar dain ge 

        if(freeAgent) {
            freeAgent.status = "busy";
            console.log(`${customerName} Connected to ${freeAgent.name}`)
        }
        else{
            this.customerQueue.push(customerName);
            console.log(`${customerName} Waiting in Customer Queue`)
        }
    };

    //? ab yaha se finsh call ka function bane ga mean ke jab agent 1 customer se free ho jai to us ko dosre queue main wait karte hue customer se connect karna ha jab tak ke customer khatam naw ho jai 

    finishCall(agentName) {
        const agent = this.agents.find(free => free.name === agentName);
        // ye line agent name main check kare jo name ham ne neache call kia us ko agents name main find kare ge agar exact match hua to phir age function chale ga mean ke status free karna etc ye sab

        agent.status = "free"; // pehele busy tha status ab free kar dia 

        //? ab jo queue main betha hua customer ha us ko connect kare ge free agent ke sath 

        if(this.customerQueue.length === 0) {
            console.log("There is no customer in the queue");
            return;
        }
        let nextCustomer = this.customerQueue.shift(); // ab yaha free agent ko queue main wait karte hue customer ko de dia ha 
        agent.status = "busy";
        console.log(`${nextCustomer} connected to ${agent.name}`);
    };
};


const callCenter = new CallCenterQueue();

callCenter.addCustomer("Hammad"); // Hammad connect hua agent ke sath 
callCenter.addCustomer("Waleed"); // Waleed bhi connect hua agent ke sath 
callCenter.addCustomer("Faizan"); // Faizan bhi connect hua agent ke sath 
callCenter.addCustomer("Hamza"); // tamam agents busy hain is lia ye customer queue main chala gia 
callCenter.addCustomer("Fahad"); 
callCenter.addCustomer("Farhan"); 
callCenter.addCustomer("Sara");  // ye abhi 4 log queue main wait kar rahe hain 
callCenter.finishCall("Agent1"); // abhi Hammad nikla or hamza chala gia agent one ke pas 
callCenter.finishCall("Agent2"); // waleed nikal or fahad connect hua 
