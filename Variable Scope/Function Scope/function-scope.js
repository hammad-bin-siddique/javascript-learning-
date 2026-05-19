// Jo variable function ke andar declare ho — woh sirf us function ke andar accessible hai. Bahar nahi ja sakta.

function myFunction() {
  let name = "Hammad";
  console.log(name);
}
myFunction();
// console.log(name); //error ai ga cuz ke funtion is bar anda he hua ha is waja se

function lightOff() {
  let switchOff = "off";
  console.log(switchOff);
}

function lightOnn() {
  let switchOn = "on";
  console.log(switchOn);
}
lightOff();
lightOnn();

// console.table(switchOff,switchOnn); //! Same Things yaha bhi error ai ga keuke funtion block ke andar he likha hua ha


// Block scope
{
  let studentName = "Fahad";
  console.log(studentName);
}
// console.log(studentName); // ! Erorr ai ga same 



//Block scope with let and const

{
  let rollNum = 1294;
  const shopName = "CodeCove";

  console.log(rollNum);
  console.log(shopName);
}

// console.log(rollNum);
// console.log(shopName);   //! const or let dono block scope or function scope main bahir jo print ho ga us ka error ai ga 


// with var block scope 


{
  let fatherName = "Siddique Zaman"

  var cityName = "Manshera"
  console.log(fatherName);
  console.log(cityName);
}

console.log(cityName);
// console.log(fatherName); // !let se block scope banaya ha is lia print nahi hua jab ke var wala ho gia ha 




//block scope with if


let marks = 90

if (marks >= 90){
  let grade = "A"
  let message = "Exellent"
  console.table([grade,message]);
}



