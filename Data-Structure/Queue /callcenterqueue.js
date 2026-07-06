//! Topic 20: Call Center Queue ☎️


// main yaha call center ka senerio banao ga mean ke kuch customer add karo ga 1 queue main or kuch agents ko add karo 1 array main or customers ko agents ke sath connect kar do ga start main agents ka status free ho ga phir jab us ke sath koi customer connect ho ga to phir us agent ka status free se busy ho jai ga 

class CallCenterQueue {
    constructor() {
        this.customerQueue = []; // is array main customer ai ga 
        this.agents  = [
            {name: "Agent1", status: "Free"},
            {name: "Agent2", status: "Free"},
            {name: "Agent3", status: "Free"}
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
    }
};
