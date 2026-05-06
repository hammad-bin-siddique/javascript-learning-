//! normal variable value swaping 
let a = "Hammad";
let b = "Subhan";
// 2 variable banai 

let c = a; // A ke value ko c main store kia 

a = b; // a ke value ko b main convert kia jo ke 
b = c;
console.log(a, b);

//! Swap Values via Destructuring

let x = "Fahad";
let y = "Imran";

// swap ki yaha 

[x,y] = [y,x];
console.log(x,y);


//! 📤 Function Return Value nikalna simple pehle 

function getDetails (){
    return {userName: "Hammad", userId: 10390, userEmail: "hammad@gmail.com"};
};

let result = getDetails();
console.log(result);

//! Ab Destructuring Saath Mein

const {userName, userEmail} = getDetails(); // supoose hame userID nahi chaia
console.table({userName, userEmail}); // with desturing ab function ke return value ko print kia 
