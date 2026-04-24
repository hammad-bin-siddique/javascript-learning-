//! Typeof Kisi bhi value ka TYPE batata hai

// Yeh sab VS Code mein likho aur run karo:

let myName = "Hammad";
let myAge = 22;
let isStudent = true;
let nothing = null;
let notDefined;
let myHobbies = ["Coding", "Chess"];
let myProfile = { city: "Abbottabad" };

// Har ek ka typeof print karo
// Phir check karo — kaunsa "object" aa raha hai
// Aur kyun?

console.log(
  typeof myName,
  myName,
  typeof myAge,
  myAge,
  typeof isStudent,
  isStudent,
  typeof nothing,
  nothing,
  typeof notDefined,
  notDefined,
  typeof myHobbies,
  myHobbies,
  typeof myProfile,
  myProfile,
);

/*First wale ka string ai ga second wale ka number third wale ka boolean 4th wale object ai ga javascript ka bug 5th ka undefined ai ga 
6th wale ka object ai ga array ka typof object he ata ha or 7th ka bhi object he ai ga  */
