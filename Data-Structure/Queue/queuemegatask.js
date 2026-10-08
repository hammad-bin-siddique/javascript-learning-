//! 🔷 PHASE 7: Mega Task Smart Ticket Booking System 

//is task main 1 booking system banaya jai ga jis main 2 tara ke customer add ho ge 1 vip or dosre normal in sab ko alag alag queue main define kia jai but in ke ticket ke id same he rahe ge mean ke shared ticket id vip walo ko pehle serve kia jai ga but vip main bhi jo fifo method use ga mean ke vip main jo pehle aya pehle he use mila ga phir us ke normal walo ko serve kia jai ga pure booking system ke history print ki jai ge is ke ilawa order cancelled booked served tamam chezain ki jai gi 



//? Ab Ham booking system ke class banai ge 

class TicketBookingSystem {
    constructor(){
        this.vipQueue = [];
        this.regularQueue = [];
        this.history = [];
        this.ticketCounter = 1;
    };

    bookTicket(name, type) {
        // step 1 New ticket bane ga jis main name id number type and status store ho ge 
        let ticket = {
            id: this.ticketCounter,
            name: name,
            type: type,
            status: "booked"
        };

        this.ticketCounter++;

        if(type === "VIP") {
            this.vipQueue.push(ticket);
        }
        else{
            this.regularQueue.push(ticket);
        };

        this.history.push(ticket);
    };


    //? abhi ham served next wala function banai ge jis main vip ko pehle out kare ge phir us ke regular ko or agar koi bhi naw bacha 2 queue main to alert return kare ge or phir servedticket ka status booked se served kare ge 



    serveNext() {
        // step 1 agar 2 queue kahli ha to alert message return kar do 
        if(this.vipQueue.length === 0 && this.regularQueue.length === 0) {
            console.log("There is nothing to Served In both queues");
            return;
        };

        let servedticket; 
        if(this.vipQueue.length !== 0) {

            servedticket = this.vipQueue.shift();
        }
        else{
            servedticket = this.regularQueue.shift();
        };

        servedticket.status = "served";

    }
    

    //? Abhi ham next function likhe ge cancel ticket ka mean ke agar koi apna ticket cancel karwa de ya ham khud kar de to ham use kese pakre ge dono queues main or agar 2 main aisa koi bhi naw mile to phir kia kare ge 


    cancelTicket(id) {
        //? pehle vip queue main check kare ge ke aisa koi ha ya nahi 

        let vipIndex = this.vipQueue.findIndex(function(ticket) {
            return ticket.id === id;
        });

        //? Agar vip queue main aisa koi mil jata ha jis ke condition match kar jati ha 

        if(vipIndex !== -1) {
            this.vipQueue[vipIndex].status = "canceled";
            this.vipQueue.splice(vipIndex, 1);
            console.log("Ticket Cancelled:", id);
            return 
        };

        //? agar vip queue main koi aisi id nahi jo cancelled hui ho mean sab served ya booked ho to phir regular main check kare ge 

        let regularIndex = this.regularQueue.findIndex(function(ticket) {
            return ticket.id === id;
        });

        //agar regular queue main koi aisa mil jata ha mean ke jis ka ticket cancel ho gia ho to 

        if(regularIndex !== -1) {
            this.regularQueue[regularIndex].status = "canceled";
            this.regularQueue.splice(regularIndex, 1);
            console.log("Ticket Cancelled:", id);
            return;
        };

        //? Agar koi bhi nahi milti aisi id man lo sab served ho gay ho ya booked ho to phir 

        console.log("Ticket not found or already served: ", id);
    };


    showHistory() {
        console.log("===Booking System History===");

        this.history.forEach(function(ticket) {
            console.log(ticket);
        });
    };
    

}
let cinema = new TicketBookingSystem();

// Kuch tickets book karo
cinema.bookTicket("Hammad", "Regular");
cinema.bookTicket("Bilal", "VIP");
cinema.bookTicket("Faizan", "Regular");
cinema.bookTicket("Fahad", "VIP");

console.log("\n--- Booking ke baad ---");
console.log("VIP Queue:", cinema.vipQueue);  // Bilal Or fahad ho ge 
console.log("Regular Queue:", cinema.regularQueue); // Hammad or faizan ho ge

// Ek serve karo - dekho VIP pehle serve hota hai ya nahi
console.log("\n--- Serve Next ---");
cinema.serveNext();
console.log("VIP Queue after serve:", cinema.vipQueue); // Bilal Nikal gia wo show nahi ho ga

// Ek cancel karo
console.log("\n--- Cancel Ticket ID 3 ---");
cinema.cancelTicket(3);
console.log("Regular Queue after cancel:", cinema.regularQueue); // Faizan nikal gia keuke us ka 3 number ha id main 

// Non-existent id cancel karne ki koshish
console.log("\n--- Cancel Invalid ID ---");
cinema.cancelTicket(99); // yaha message ai ga Ticket not found or already served

// Poori history dekho
console.log("\n--- Full History ---");
cinema.showHistory();

// Sab serve kar do jab tak khali na ho jaye
console.log("\n--- Serve Remaining ---");
cinema.serveNext();
cinema.serveNext();
cinema.serveNext(); // ab dono khali honi chahiye, message aana chahiye
// yaha message ai ga There is nothing to served in both queues;