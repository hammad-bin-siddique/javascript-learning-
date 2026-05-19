// ! Variable Scope  All in one

let global = "i'm global scope";

function scope() {
  let func = "i'm funtion scope";

  if (true) {
    let blockScope = "i'm block scope";

    console.table([global, func, blockScope]);

    // console.log(global);
    // console.log(func);
    // console.log(blockScope);
  }
  console.table([global, func]); //ye 2 chale ge

  //   console.log(global); // ! ye to paka chale ga keuke ye ha he global
  //   console.log(func); // ! ye chale ga keunke ye bahir ha or andar dekh sakta ha
  //   console.log(blockScope);  //! ye nahi print ho ga keunke ye andar ha or bahir ka nahi dekh sakta
}
scope();
console.log(global); // ! ye yaha bhi chale ga keuke global ha wo kahi phi print ho sakta ha
// console.log(func);
// console.log(blockScope);  //! ye dono error de gain keuke ke ye dono bahir print hue hain  is lia
