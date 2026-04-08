// Jo variable function ke andar declare ho — woh sirf us function ke andar accessible hai. Bahar nahi ja sakta.


function myFunction(){
    let name = "Hammad";
    console.log(name);
}
myFunction();
// console.log(name); //error ai ga cuz ke funtion is bar anda he hua ha is waja se 


function lightOff()
{
    let switchOff = "off";
    console.log(switchOff);
}

function lightOnn(){
    let switchOn = "on";
    console.log(switchOn);
}
lightOff();
lightOnn();

// console.table(switchOff,switchOnn); //! Same Things yaha bhi error ai ga keuke funtion block ke andar he likha hua ha 