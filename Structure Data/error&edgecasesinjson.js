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


//! try...catch Keyword se Error Handle Karna 

console.log("===Try Catch Invalid JSON===");

const badJson = "{'name': 'Hammad', 'age': 23}"; // ye ham ne 1 invalid json ke value ko 1 variable main store kia ha 

// ab try catch keyword se ham agar invalid json hua to program crash nahi kare ga balke bata de ga ke ye issue ha 

try {
    const result = JSON.parse(badJson);
    console.log(result); 

    // try keyword se js ko pata chal jata ha ke ye is ke andar ka code risky ha agar sahi ha to chalo warna is ko shift kar do catch ki taraf

}
catch(error) {
    console.log("There is the Problem in JSON:", error.message);
}

console.log("Program ran at this point, Mean's there is no crash");



//! Part B: Circular Reference Error
// is ka mean ha ke kisi object ke andar usi object ka reference dal dia jai is se infinte circle ban jai ga or wo kabhi kahtam nahi ho 


//? Example 

const person = {name: "Hammad"};

person.self = person; // ab person ke andar person ka he reference de dia ha mean ke person.self person ko he refer kar raha ha Jab stringify() self ko process karega, wo dobara person ko stringify karne ki koshish karega, jisme phir self hai, jo phir person hai... infinite loop. JS ye pattern detect kar ke turant error de deta hai.

//! console.log(JSON.stringify(person)); // TypeError: Converting circular structure to JSON

//? Tasks 

//! Task 1 

// acha is task main ham try and catch function banai ge jo catch kare ga ke agar invalid json hua to us ko detect kar ke error de da 

function safeJSONParse(jsonString) {
    try {
        const result = JSON.parse(jsonString); // mean ke jo json string parametar main jo value  ai gi wo ye try check kare ga agar valid ho gi to phir result return kar de ga warna us ko catch ke taraf shift kar de ga or error message show kar de ga  

        console.log("Valid JSON", result);
        return result;
    }
    catch(error) {
        console.log("Invalid JSON:", error.message);
        return null; // mean ke agar error a jata ha to null return karo 
    };
};

console.log("=== Task One==="); 
safeJSONParse("{'name': 'Hammad'}"); // single quotes error 
safeJSONParse('{"age": 23,}'); // comma at the last 
safeJSONParse('{city: "Abbottabad"}'); // keys without quotes 
safeJSONParse('{"city": "Abbottabad"}'); // valid json 


const jsonList = [
    "{'name': 'Hammad'}",
    '{"age": 23,}',
    '{"city": "Abbottabad"}'
]; 

// agar 1 he bar sab ko check karna ho ke kn sa sahi ha or kn sa invalid to phir loop main print kare ge 

console.log("===Check Multiple JSON===");
for (let json of jsonList) {
    safeJSONParse(json); 
}; 

//! Task 2

// acha ab is task main ham circular reference ko try and catch error se check kare ge or function banai ga take hame bar bar custom check naw karna pare 


function safeJSONString(jsonParse) {
    try {
        const result = JSON.stringify(jsonParse); 
        console.log("Valid Parse:", result);
        return result;
    }
    catch(error) {
        console.log("Circular Reference Error:", error.message); 
        return null;
    };
};


// now test the function 
console.log("===Task Two===");

const myself = {name: "Hammad"};
myself.self = myself;


safeJSONString(myself); // circular error