//! WeakMap kya hai?

// WeakMap, Map jaisa hi hai lekin 2 bari differences ke sath:

// Key sirf Object ho sakti hai — string, number, boolean key allowed nahi
// "Weak" reference hoti hai — matlab agar us object ki koi aur jagah reference na ho, to garbage collector use memory se automatically hata deta hai

let weakMap = new WeakMap();

let user = {name: "Hammad Siddique"};
weakMap.set(user, "Live in Abbottabad");

console.log(weakMap.get(user)); // Live in Abbottabad

user = null; // ab yaha original object ka koi reference nahi ha is lia weakmap se bhi ye entry automatically chali gai ha 

console.log(weakMap.get(user)); // undefined is lia aya ha user null ha or null 1 invalid key ha 



//! Real-world use case

let clickData = new WeakMap();

let button = document.querySelector("#myBtn");
clickData.set(button, {clicks: 0}); // abhi clicks 0 hain 

button.addEventListener("click", () => {
    let data = clickData.get(button); // yani ke weak map se button ke click ka data lo or data variable main store karo 
    data.clicks++;
    console.log(data.clicks);
});

//  is code ko working karne ke lia html file ke zarurat ha lekin yaha as a example likh sakte hain 

//! <button id ="myBtn">Click Me</button>