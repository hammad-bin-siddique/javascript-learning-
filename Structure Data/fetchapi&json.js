//! Topic 8: fetch() API + JSON

// fetch internet per kisi server se data mangta ha or jawab ane main time lagta ha is lia ye asynchronous ha mean ke 1 promise return karta ha

// ? Basic Syntax

console.log("===Fetching From Fake URL===");
fetch("https://api.example.com/data") // server per request behji ha data leni ki

.then(response => response.json()) // waha server se jo data aya ha us ko json main convert kia

.then(data => console.log(data)) // ab server wale data ko print kia

.catch(error => console.log("Error to Fetch Data:", error)); // yaha error ai ga keuke url exist he  nahi karta ha or wo ye catch method print kar de ga is se baki code crash nahi kare ga

//? Let test it with real url

console.log(1);
console.log("===Fetching From Real URL===");

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log("3:", data.name))
.catch(error => console.log("Error to Fetch:", error)); // safety ke lia catch ka use kia in case agar error a jai to pure code ko crash naw kare

console.log(2); // sab se pehle 1 print ho ga phir 2 ho phir 3 wala ho keuke fetch promise return karta ha or is main time lagta ha data fetch karne main is lia baki js chalti rehti ha

//! Tasks

//? Task 1: users/3 se naam, phone, website print karo

console.log("===Task One===");

fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => response.json())
.then(data => console.log(data.name, data.phone, data.website))
.catch(error => console.log("Fetching Error:", error));

//? Task 2: Post ka title or body fetch and catch the error

console.log("===Task Two===");

fetch("https://jsonplaceholder.typicode.com/posts/5")
.then(response => response.json())
.then(data => console.log("Title:", data.title, "Body:", data.body))
.catch(error => console.log("Error The Fetch The Post", error));

//? Task Fetch all the posts and print 1st three post titles

console.log("===Task Three===");
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    for (let i = 0; i < 3; i++) {
        console.log(data[i].title);
    };
})
.catch(error => console.log("Error to Fetch Posts:", error));

// ab ye uper task kam to kar rahe hain but in ka order sahi nahi ha jo pehle data fetch ho jata ha wo print ho jata ha abhi ham ise order by order sequence main chalai ge async function or await keyword ka use kar ke

//! async aur await JavaScript mein asynchronous code ko synchronous jaisa dikhne aur likhne ka tareeqa hain — bina .then() chains ke.

async function getAllData() {
  try {
    console.log("===Task One===");
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/users/3",
    );
    const data1 = await response1.json();
    console.log("Name:", data1.name);
    console.log("Email:", data1.email);
    console.log("Website:", data1.website);

    console.log("===Task Two===");

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5",
    );
    const data2 = await response2.json();
    console.log("Title:", data2.title);
    console.log("Body:", data2.body);

    console.log("===Task Three===");
    const response3 = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data3 = await response3.json();

    for (let i = 0; i < 3; i++) {
      console.log(data3[i].title);
    }
  } catch (error) {
    console.log("Something Is Wrong:", error.message);
  }
}

getAllData();



//! Note Mmmm now in terminal may the output shows messi if you want the clean output use the async and await code portion first 