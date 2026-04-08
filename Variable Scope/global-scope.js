 /* Jo variable kisi bhi function ya block ke bahar declare ho — woh global hota hai. Poore code mein kahi se bhi access ho sakta hai.*/

let city = "Abbottabad"

function showCity(){
    console.log(city);
}

function updateCity(){
    city = "Lahore";
    console.log(city);
}

showCity();
updateCity();
console.log(city);

// ! Yahi problem hai global variables ki — koi bhi function inhe badal sakta hai. Isliye unnecessarily global variables mat banao.