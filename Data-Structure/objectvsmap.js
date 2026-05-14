//? 🗺️ Topic 14 — Kab Map Karein, Kab Object?

//! Object Use Karo — Jab...
// 1 — Fixed Structure Ho

//! 2 — Dot Notation Se Access Karna Ho

//! 3 — JSON Ke Saath Kaam Karna Ho


//! 4 — Methods/Functions Store Karne Hon


//? Map Use Karo — Jab...
//! 1 — Key Koi Bhi Type Ho

//! 2 — Baar Baar Add/Delete Karna Ho
// ! 3 — Size Seedha Chahiye
// ! 4 — Order Important Ho
// ! 5 — Frequently Loop Karna Ho



//? Real Life Examples

//! Object Use Karo — User Profile

const userProfile = {
    name: "Hammad Siddique",
    age: 23,
    city: "Abbottabad",
    email: "hammad@gmail.com"
};

const {name, age, city, email} = userProfile;

console.log(userProfile.name);
console.log(name);
console.log(email); // assan access  ha dot notation se bhi or destructuring se bhi 

//? Map Use Karo — Shopping Cart

const cart = new Map();

cart.set("iphone", 150000)
.set("monitor", 200500)
.set("laptop", 5400000);


console.log(cart.get("monitor"));
console.log(cart.size);

//? Map Use Karo — Leaderboard


const leaderboard = new Map([
    ["hammad", 10000000],
    ["ali", 480202],
    ["hamza", 349042]
]);


// total player dekhna 

console.log(`Total Players: ${leaderboard}`);

// loop asaan ha 
leaderboard.forEach(function(score, name){
    console.log(`Player Name: ${name} Player Score: ${score}`);
});

// Object = Ghar ki almari
//   — fixed drawers hain
//   — pehle se pata hai kya kahan hai
//   — JSON, methods ke saath kaam karta hai

// Map = Locker room
//   — naye lockers add karo
//   — purane hatao
//   — koi bhi cheez key ban sakti hai
//   — size seedha milta hai

