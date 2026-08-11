//! Topic 4 JSON.parse() — Concept


// Converts a JavaScript Object Notation (JSON) string into an object or Array.
// Basic Syntax
// JSON.parse(value);

// Example

//? Json string banate hain phir us ko convert kare ge proper object main

const jsonString = '{"name": "Hammad", "age": 22, "city": "Abbottabad"}';

// ye ab json string ha ham dot notation se is ke value access nahi kar sakte

console.log("===JSON String===");
console.log(jsonString.name); // undefined
console.log(typeof jsonString, jsonString); // String

// Now Convert it into Ojbect and make it live so we can access the values with dot notation

console.log("JSON String To Object===");
const jsonParse = JSON.parse(jsonString);
console.log(typeof jsonParse, jsonParse); // Object
console.log(jsonParse.name); // Hammad cuz now it's live object so we can access key with notations

//? Json array main convert karna

const jsonArr = '[1, 5, 3, "Abbottabad", true, false, "Hammad", "Fahad"]';
console.log("===JSON String of Array===");
console.log(typeof jsonArr, jsonArr); // string
console.log(Array.isArray(jsonArr)); // false keuke abhi ye string ha
const parsedArr = JSON.parse(jsonArr);

console.log(parsedArr[7]); // Fahad
console.log(Array.isArray(parsedArr)); // true keuke ab ye array ha

//! Parse Task

//? Task One

const jsonMovie = '{"name": "interstallar", "year": 2014, "rating": 9.5}';
const parseMovie = JSON.parse(jsonMovie);

console.log("===Task One===");
console.log(parseMovie.name); // interstallar
console.log(parseMovie.year); // 2014
console.log(parseMovie.rating); // 9.5

//? Task Two

const studentsJSON = '[{"name":"Ali","marks":85},{"name":"Sara","marks":92}]';
console.log("===Task Two===");
const studentParse = JSON.parse(studentsJSON);

console.log(studentParse[0].name);

for (let student of studentParse) {
  console.log(`${student.name} Scored ${student.marks}`);
}


//? Task Threee
const nested =
  '{"name": "Hammad", "address": {"city": "Abbottabad", "Province": "Kpk", "areas": ["Manshera", "Haripur", "Havaliann"]}}';

  console.log("===Task Three===");
  
  const nestedParse = JSON.parse(nested);
  console.log(nestedParse.address.areas[1]); // Haripur
  console.log(nestedParse.address.areas); // manshera , haripur havalian
  console.log(typeof nestedParse.address.areas); // object



  //! Topic 2: JSON.parse() advanced — Reviver Function

  // wese jab json ko ham parse main convert karte hain to wo simple hota ha mean ke us main modification ya kuch hide change nahi kar sakte ab ham is topic main review bhi kare ge ke kn sa data nikalna ha or kn sa nahi 


  //? Syntax
  // JSON.parse(value, reviverFunction);

  const data = '{"name": "Hammad", "age": 23}';
  console.log("===Convert To Parse Without Modification===");
  const dataResult = JSON.parse(data, function(key, value) {
    console.log(`Key: ${key}, Value: ${value}`);
    return value;
  });


  //? Real World Use Case

  const record = '{"name": "Hammad Siddique", "cnic": "13101-3842332-1", "dob": "2003-02-13"}';

  // ab yaha agar ham normal parse kare ge to DOB khali string ho ga jis per ham calculation nahi kar sake ge is lia hame yaha javascript Date object chaia or is ke lia advance method use ho ga 

  const recordParsed = JSON.parse(record, function(key, value) {
    if(key === "dob") {
      return new Date(value); // yani agar key dob ho to us ko date object main nikalo 
    };
    return value; // baki sab keys ko wese nikalo
  });

  console.log("===Real Purpose Case One===");
  console.log(recordParsed);
  console.log(recordParsed.dob); // ab ye date object ha 
  console.log(typeof recordParsed.dob); // object date bhi object hota ha 

  //? Real world use case 2


  // man lo tum ne secret data ko hide karna ha us ke lia bhi ye method use ho ga 


  const userData = '{"name": "Hammad", "email": "hammad@gmail.com", "pass": 1231231, "age": 23, "isMarried": false}'


  console.log("===Real Case 2 Hide Sensitive Data===");
  const safeParsed = JSON.parse(userData, function(key, value) {
    if(key === "pass" || key === "email") {
      return undefined;
    };
    return value;
  });

  console.log(safeParsed); // ab yaha email or pass dono nahi print ho ge 


  //? Modify a JSON 

  const productJson = '{"item": "Laptop", "price": 20000}'

  const discountedParse = JSON.parse(productJson, function(key, value) {
    if(key === "price"){
      return value * 0.9; // yani agar price key ho to 10 percent discount do 
    };
    return value;
  });


  console.log("===convert a json with modification===");
  console.log(discountedParse.price); 

  const inventory = '{"item": "Chair", "quantity": 5, "price": 2000}';


  console.log("===2x The Quantity===");
  const inventoryParsed = JSON.parse(inventory, function(key, value) {
    if(key === "quantity") {
      return value * 2;
    };
    return value;
  });

  console.log(inventoryParsed);
  console.log(inventoryParsed.quantity);