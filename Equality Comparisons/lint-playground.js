//! Mini Project
//? Pehle main null ko choro ga mean ke wo exclude nahi karo ga to is waja se null wale per bhi error ai ga to total 5 error ai ga 

const value = 10; 

value == "10"; // error ai ga expected 
0 == false; 
value == null; 
value != undefined; 
value == "";


// PS C:\Users\MH\Desktop\javascript-learning-> npx eslint "Equality Comparisons/lint-playground.js"

// C:\Users\MH\Desktop\javascript-learning-\Equality Comparisons\lint-playground.js
//    6:7  error  Expected '===' and instead saw '=='  eqeqeq
//    7:3  error  Expected '===' and instead saw '=='  eqeqeq
//    8:7  error  Expected '===' and instead saw '=='  eqeqeq
//    9:7  error  Expected '!==' and instead saw '!='  eqeqeq
//   10:7  error  Expected '===' and instead saw '=='  eqeqeq

// ✖ 5 problems (5 errors, 0 warnings)

// PS C:\Users\MH\Desktop\javascript-learning-> 


//? ab main config file main null ko ignore karo ga to 4 error ai ga 1 skip ho jai ge null wala 

// C:\Users\MH\Desktop\javascript-learning-\Equality Comparisons\lint-playground.js
//    6:7  error  Expected '===' and instead saw '=='  eqeqeq
//    7:3  error  Expected '===' and instead saw '=='  eqeqeq
//    9:7  error  Expected '!==' and instead saw '!='  eqeqeq
//   10:7  error  Expected '===' and instead saw '=='  eqeqeq

// ✖ 4 problems (4 errors, 0 warnings)

// PS C:\Users\MH\Desktop\javascript-learning-> 