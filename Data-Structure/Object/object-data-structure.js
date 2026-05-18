//! 1 Nested Objects with arrays

const details = {
    name: "Hammad",
    fatherName: "Siddique",
    age: 23,
    address: {
        city: "Abbottabad",
        provicnce: "KPK",
        country: "Pakistan",
        street: "Nawasher Saba Colony"
    },
    hobbies: ["Cricket", "Footbal", "Chess", "Coding"]
};

console.log(details); // complete object print karna 
console.log(details.address); // sirf address print karna 
console.log(details.hobbies[3]); // object ke array ke 4 hobby print karna jo ke coding ha 


//! Methods aur this yani function banana object ke andar or this keyword ka use karna 


let student = {
    name: "Farhan",
    class: "BS Biology",
    rollNumber: 1345,

    // yaha function banao ga jise method bhi kehte hain 

    introduce: function() {
        console.log(`Mera Name ${this.name} ha or mian ${this.class} ka student ho or mera roll number ${this.rollNumber} ha`);
    }
};
student.introduce();

