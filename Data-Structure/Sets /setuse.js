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