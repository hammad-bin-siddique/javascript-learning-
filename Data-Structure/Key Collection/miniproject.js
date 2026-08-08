//! Mini Project: User Session Tracker


let activeSession = new WeakMap();

let bannedUsers = new WeakSet();


function login(userObj, time) {
    if(bannedUsers.has(userObj)) {
        console.log("Access Denied");
        return;
    }

    activeSession.set(userObj, time);
    console.log("Login Successful at", time);
}
 
function banUser(userObj) {
    bannedUsers.add(userObj);
};

let user1 = {name: "Hammad"};
let user2 = {name: "Fahad"};

login(user1, "10 AM"); // Login Successfull
banUser(user2); // User Two Baned
login(user2, "11 AM"); // Access Denied

console.log(activeSession.get(user1)); // ye time print kare ga 