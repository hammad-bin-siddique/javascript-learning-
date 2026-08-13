//! Topic 7: Common Errors & Edge Cases in JSON

// Part A: Invalid JSON — Parse Errors
// is part main ham conver kare ge ke kn kn se error se json parse main convert nahi ho sakta or error deta ha 

//? 1. Single quotes
//! console.log(JSON.parse("{'name': 'Hammad'}")); 
// SyntaxError: Expected property name or '}' in JSON
console.log(JSON.parse('{"name": "Hammad"}')); // uper wala json main single quotes use kia the is lia error aya ha 


//? 2. Trailing comma

//! console.log(JSON.parse('{"name": "Hammad", "age": 23,}')); 
// ye bhi syntax error last item ke bad comma ha 
console.log(JSON.parse('{"name": "Hammad", "age": 23}')); // ab ye perfect kam kare ga keuke last item ke bad comma nahi ha 

//? 3. Keys bina quotes ke
//! console.log(JSON.parse('{name: "Hammad"}'));
//  SyntaxError - key quotes mein honi chahiye
console.log(JSON.parse('{"name": "Hammad"}')); // ye proper work kare ga keuke ab keys quotes main hain 


//? 4. undefined or functions in JSON String

//! JSON.parse('{"name": undefined}');
//  SyntaxError - undefined valid JSON value nahi json sirf number boolean string null object and array ko accept karta ha is main undefined function symbol work nahi kare ga error de or agar object se convert kare ge to phir json main ye keys hide ho jai like undefined or function symbol etc or agar array main hua to phir undefined ke jaga null a jai ga 

//? 5. Comments

//! console.log(JSON.parse('{"name": "Hammad" // this is a comment}'));
// SyntaxError - JSON comments support nahi karta
console.log(JSON.parse('{"name": "Hammad"}')); // ye work kare ga 


