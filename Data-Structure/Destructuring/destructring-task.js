//! Task 1:
// Ek phone object banao jisme brand, model, price, aur color ho. Destructure karo lekin brand ko company ke naam se nikalo aur warranty ko default value "1 Year" ke saath nikalo.


const phone = {
    brand: "Oppo",
    model: "Oppo A9 2020",
    price: 35000,
    color: "cyan"
};

const {brand: company, model, price, color, warranty = "1 Year"} = phone;

console.table({company, model, price, color, warranty});


//! Task 2:
// Ek hospital object banao jisme name, city, aur andar ek doctor object ho jisme doctorName aur specialization ho. Ek hi line mein name, doctorName aur specialization nikalo.

const hospital = {
    hospitalName: "Ayub Medical Complex",
    city: "Abbottabad",
    doctor: {
        doctorName: "Kamran Rizwi",
        specialization: "Skin Specialist"
    }
};

const {hospitalName,city, doctor} = hospital; // doctor name or specializatioin dono sath print ho ge

console.log(doctor); // doctor name or specialization dono print ho ge 

const {doctor:{doctorName,specialization}} = hospital; // ab sirf nested object ko destructure kia ha 
console.log(doctorName,specialization);

//! Task 3:
// 5 countries ka array banao — har country object mein countryName, capital, aur population ho. Ek function banao jo destructuring parameter use kare aur har country ki details print kare. Loop se sab countries function mein bhejo.


let countries = [
    {countryName: "Pakistan", capitalName: "Islamabad", countryPopulation: "25 CR"},
    {countryName: "Chaina", capitalName: "Beijing", countryPopulation: "100 CR"},
    {countryName: "Bangladash", capitalName: "Dhaka", countryPopulation: "13 CR"},
    {countryName: "Japan", capitalName: "Tokyo", countryPopulation: "20 CR"},
    {countryName: "Korea", capitalName: "Soul", countryPopulation: "22 CR"}
];

// countries ka data array ke andar object main store kia 

function printCountryData ({countryName, capitalName,countryPopulation}) {
    console.log(`Country Name is ${countryName} | Capital Name is ${capitalName} | & Country Population is ${countryPopulation}`);
};

// function bana kar student ka data print kia 

for (let country of countries) {
    printCountryData(country);
}; 

// loop ke andar funciton ko call kia 


//! Task 4:
// Ek function getWeather banao jo ek object return kare jisme city, temperature, aur condition ho. Function call karke seedha destructure karo aur print karo.

function getWeather () {
    return {mainCity: "Abbottabad", temp: "19 deg", condition: "Cloudy"};
};

const {mainCity, temp, condition} = getWeather();
console.log(mainCity, temp, condition);


//! Task 5:

let firstChoice = "MBBS";
let secondChoice = "BCS";

// Swap karo — array destructuring se. Phir print karo.

[firstChoice, secondChoice] = [secondChoice, firstChoice];

console.log(firstChoice,secondChoice);
