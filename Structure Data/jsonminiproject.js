//! Project: "User Data Exporter"


// Is project mein hum `jsonplaceholder.typicode.com/users` API se 10 users ka data fetch karenge (`async/await` ke sath), phir `.map()` use kar ke har user mein se sirf **name, email, aur city** nikaal ke ek naya chhota array banayenge (city `address` ke andar nested hai, isliye `user.address.city` likhna hoga). Uske baad us naye data ko `JSON.stringify()` se string mein convert karenge, aur Node ke `fs` module (`fs.writeFileSync()`) se ek nayi file `users-export.json` mein save kar denge. Sab kuch `try...catch` ke andar rahega taake fetch fail hone pe program crash na ho, sirf error print ho jaye.


const fs = require("fs");


async function exportUser() {
    try {
        //step 1 fetch all users from the url 
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const users = await response.json()

        //Step 2 Filter kar ke user ka sirf name email  address website phone num print kare ge 

        const filterdUsers = users.map(user => {

            return {
                name: user.name,
                email: user.email,
                website: user.website,
                phone: user.phone,
                city: user.address.city
            };
        });


        fs.writeFileSync("users-export.json", JSON.stringify(filterdUsers, null, 2)); // is line se ham ne 1 new file banai json ki or us main jo filtered data tha user ka wo save kar dia ha 

        fs.writeFileSync("without-filter-user-data.json", JSON.stringify(users));
        console.log("Data has been saved To users-export.json & without-filter-user.json");
    }
    catch(error) {
        console.log("Something is Wrong:", error.message);
    };
};

exportUser();