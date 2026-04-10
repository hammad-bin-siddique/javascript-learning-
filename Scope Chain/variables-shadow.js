// !Variable Shadowing

/*Andar wala variable bahar wale ka
saaya ban jaata hai — use chupa leta hai.
Lekin bahar wala hamesha safe rehta hai! */

let suitColor = "Blue";   // ! Daily Use main blue

// function eidSuitColor(){
//     let suitColor = "white"; // ! is variable shadow ne daily use wale ko override kar dia 
//     console.log(suitColor);
// }

// eidSuitColor();
console.log(suitColor); // ! yaha per ye phir wapis a gia safe raha 


// ! Real Life Example

let lives = 3

function level1(){
    let lives = 5;
    console.log("level 1 lives:    " + lives); // is ne lives ko override kia 
}
function level2(){
    let lives = 2;
    console.log("level 2 lives:   " + lives); // is ne level 1 ke lives ko override kia 
}
function level3(){
    let lives = 1;
    console.log("level 3 lives:   " + lives); // is ne level 2 ke lives ko override kia mean ke shadow kia 
}
level1();
level2();
level3();
console.log(lives);// or yaha per lives wapis a gia keuke wo global tha is lia 