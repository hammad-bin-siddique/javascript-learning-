// Real Life use of Math Objects

// ! round 

let rating  = 4.6;
console.log(Math.round(rating)); // it the value is .5 or above it will be up else down;


//! floor no matter the value after the point it always down ;
let pocketMoney = 6000;
let itemPrice = 1300;
let canBuy = Math.floor(pocketMoney / itemPrice);
console.log(`You can buy ${canBuy} things from this Pocket Money`);

//! ceil always value up 

let friends = 10;
let burger = 3;
let burgerNeeded = Math.ceil(friends / burger);
console.log(`${burgerNeeded} burgers order karo`);

// !Max And Min 

let aliNUmber = 50;
let fahadNumber = 59;
let hammadNumber = 90;
console.log(`sab se ziada number ${Math.max(aliNUmber,fahadNumber,hammadNumber)} hain`); // Max 
console.log(`sab se kam number ${Math.min(aliNUmber,fahadNumber,hammadNumber)} hain`); // Min

// ! ABS

let price1 = 2904;
let price2 = 9395;
let difference = Math.abs(price1 - price2);
console.log(`dono ke qeemto main ${difference} ka fark ha`);