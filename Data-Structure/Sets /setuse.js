//! 📦 Topic 6: Set ka Real-World Use

//? Real world mein Set ke 4 main use cases hain:

// 1️⃣ Duplicates remove karna
// 2️⃣ Unique values check karna
// 3️⃣ Common values dhundhna (Intersection)
// 4️⃣ Alag values dhundhna (Difference)

//? 1️⃣ Duplicates Remove Karna


// Raw Data 
// ? Example
const cities = [
    "Lahore",
    "Karachi",
    "Peshawar",
    "Islamabad",
    "Lahore",
    "Peshawar",
    "Multan"
];

// Duplicate ko remove 

const cleanCities = [...new Set(cities)]; // Duplicate Remove ho gay 

console.log(cleanCities);
console.log(`Total Unique Cities: ${cleanCities.length}`);

//? 📌 Numbers mein bhi

const num = [
    1,
    2, 
    3,
    4,
    2,
    1,
    3,
    5,
    6
];

const uniqueNums = [...new Set(num)];

console.log(uniqueNums);

//? 2️⃣ Unique Values Check Karna

const loggedInUser = new Set(["Ali", "Wasib", "Bilal", "Hamza", "Hammad", "Ali"]);

console.log(loggedInUser); // duplicate remove ho gia sirf unique name he count hue 


//? 📌 Tags system — blog post pe

const tags = new Set(["Programming", "JavaScript", "Coding", "CS", "Developer", "Coding"]);

console.log(tags);
console.log(`Total Tags: ${tags.size}`);

//? 3️⃣ Common Values Dhundhna — Intersection


const hammadHobbies = new Set(["Chess", "Programming", "Gaming", "Reading"]);
const aliHobbies = new Set(["Reading", "Writing", "Hiking", "Gaming"]);


const commonHobbies = [...hammadHobbies].filter(hobby => 
    aliHobbies.has(hobby)
);

console.log(`Common Hobbies: ${commonHobbies}`);


//? 4️⃣ Difference — Alag Values

// yani ye check karo ke kn se value dosre main nahi ha wo print karo 

// hobby wali he example lete hain 

const hammadHobby = [...hammadHobbies].filter( hobby =>
    !aliHobbies.has(hobby)
);

console.log(`Hammad Hobbies Only: ${hammadHobby}`); // Programming or chess ho gi khali keuke bake 2 ali se match karti hain 

// ab ali ke diff hobby nikalo 

const aliHobby = [...aliHobbies].filter(hobby => 
    !hammadHobbies.has(hobby)
); 

console.log(`Ali Hobbies Only: ${aliHobby}`); // Hiking And Writing ai ga

//? 📌 Real World — Do lists compare karna

const oldCustomer = new Set(["Ali", "Hammad", "Sara"]);
const newCustomer = new Set(["Ali", "Hamza", "Bilal"]);

// Returning Customer

const returning = [...oldCustomer].filter (old =>
    newCustomer.has(old)
);  // yani wo customer jo dobara ai hain 

// Brand new customer 

const brandNew = [...newCustomer].filter (old =>
    !oldCustomer.has(old)
);


console.log(`Old Customer: ${returning}`);
console.log(`New Customer: ${brandNew}`);


//! Tasks
console.log("=====Tasks=====");


//? Task 1 — Duplicates remove:
// Yeh array hai:
// ["Ali", "Sara", "Hammad", "Ali", "Sara", "Zara"]
// Duplicates remove karo aur clean array print karo.


const task1Array = ["Ali", "Sara", "Hammad", "Ali", "Sara", "Zara"];

const task1Unique = [...new Set(task1Array)];

console.log("====Task 1====");
console.log(`Unique Names Size: ${task1Unique.length}`);
console.log(`Unique Names: ${task1Unique}`);


//? Task 2 — Unique check:
// Ek Set banao visitedPages naam ka.
// Yeh pages visit karo:
// "home", "about", "home", "contact", "about"
// Phir print karo ke kitne unique pages visit hue.

const visitedPages = ["home", "about", "home", "contact", "about"];

const uniquePages = [...new Set(visitedPages)];

console.log("====Task 2====");
console.log(`Unique Visited Pages: ${uniquePages}`);
console.log(`Total Unique Pages: ${uniquePages.length}`);


//? Task 3 — Intersection:
// Dono mein common values nikalo.

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4, 5, 6, 7]);

const commonNum = [...set1].filter(num => 
    set2.has(num)
);

console.log("===Task 3====");
console.log(`Common Num In Both Sets: ${commonNum}`); // 3 4 5 

//? Task 4 — Difference:
// Same sets use karo — set1 mein jo values hain jo set2 mein nahi hain woh nikalo.

const diffNum = [...set1].filter(num =>
    !set2.has(num)
); 

console.log("===Task 4===");
console.log(`Diff Num in both Sets  ${diffNum}`); // agar set 1 ko filter kare ge to 1 2 ai ga diff number or agar set 2 ko kia to 6 7 ai ga 


