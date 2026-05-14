//? 🗺️ Topic 13 — Object Key as Map Key — Real Use Case

// Object Key Ka Trap

const myMap = new Map();
myMap.set({ id: 1 }, "Hammad");
console.log(myMap.get({ id: 1 })); // undefined ai ga

// is lia key ko variable main rakho tab mile ga

const key = { id: 1 };
myMap.set(key, "Hammad");

console.log(myMap.get(key)); // ab mile ga Hammad Output mile ga

// Real Use Case — Kyun Object Key Use Karein?
// Kabhi kabhi ek poori cheez key ban jaati hai — sirf string nahi!

//? Example 1 — DOM Elements Key

// her button ka data store karna

const button1 = {
  id: "btn1",
  type: "submit",
};

const button2 = {
  id: "btn2",
  type: "reset",
};

// dono button ko map main add karna

const buttonData = new Map([
  [button1, { clicks: 0, label: "Submit" }],
  [button2, { clicks: 0, label: "Reset" }],
]);

// button ka ab data print karo

console.table([button1, button2]);

//? Example 2 — Student Object Key

const student1 = {
  rollNumber: "ISL 22:02",
  name: "Hammad Siddique",
};

const student2 = {
  rollNumber: "ISL 22:23",
  name: "Waleed Awan",
};

const grade = new Map([
  [student1, "A+"],
  [student2, "B"],
]);

console.log(grade.get(student1));
console.log(grade.get(student2));

//? Object Key + forEach

grade.forEach(function (grade, student) {
  console.log(`${student.name} ${student.rollNumber} ${grade}`);
});

//? Object Key + Nested Data

const product1 = {
    sku: 384391,
    id: 1,
    name: "Iphone"
};

const product2 = {
    sku: 38434321,
    id: 2,
    name: "Laptop"
};

const product3 = {
    sku: 3844921,
    id: 3,
    name: "Monitor"
};


const inventory = new Map([

    [product1, {price: 155500, stock: 20}],
    [product2, {price: 1555940, stock: 10}],
    [product3, {price: 239403, stock: 90}]
    
]);



// ab in ko loop se nikalna 
let totalPrice = 0;

inventory.forEach((data, product) => {
    console.log(`Product Name: ${product.name} SKU ${product.sku}`);
    console.log(`Price: ${data.price}`);
    console.log(`Stock ${data.stock}`);

    totalPrice += data.price;

});

console.log("===============");
console.log(`Total Price: ${totalPrice}`);

//? ⚠️ Yaad Rakho — 3 Rules

// Rule 1 — Variable mein rakho hamesha
// const key = { id: 1 }  // ✅

// Rule 2 — Same variable se get karo
// myMap.get(key)   // ✅
// myMap.get({ id: 1 })  // ❌ — naya object!

// Rule 3 — Key object ki property bhi access kar sakte ho
// grades.forEach((value, key) => {
//     console.log(key.name)  // ✅ — key object ki property!
// })


//! Task

  const patient1 =  {
    id: 1,
    name: "Hammad",
    age: 25
  };

  const patient2 = {
    id: 2,
    name: "Waleed",
    age: 22
  };

  const Patient3 = {
    id: 3,
    name: "Fahad",
    age: 30
  };

  const patientDetails = new Map([

    [patient1, {
      disease: "Cancer",
      doctor: "Dr Bilal",
      ward: "Cancer Ward"
    }],

    [patient2, {
      disease: "Kedney Transplantation",
      doctor: "Dr Hamza",
      ward: "Kedney Ward"
    }],

    [Patient3, {
      disease: "Heart Problem",
      doctor: "Dr Aiza",
      ward: "Heart Ward"
    }],
  ]);


  //for each ka use kar ke patient ke info or name print karna 

  patientDetails.forEach((detail, patient) => {
    console.log(`Patient Name: ${patient.name}`); // patient name print kia 
    console.log(`Patient Desease: ${detail.disease}`); // disease 
    console.log(`Patient Doctor: ${detail.doctor}`); // doctor 
    console.log(`Patient Ward: ${detail.ward}`); // patient Ward
  });


  // ab random patient ke info nikalna using get 

  console.log("Patient Info:", patientDetails.get(patient1)); // patient 1 ke info nikali 

  // ab random patient ko check karna ha ke wo exist karta ha ke nahi 

  console.log(`Is This Patient Exist: ${patientDetails.has(patient1)}`);