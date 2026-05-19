// ! All About Scope Chain

let home = "This is a Home" // ye chale ga 

function myRoom(){
    let room = "This is a Room"
    {
        let roomTable = "I'm Room Table"
        console.table([home,room,roomTable]); // ! Yaha 3 show ho ge keuke yaha andar se bahir wale ko print kia gia ha 
    }
    console.table([home,room,roomTable]); //! yaha error a jai ga keuke block andar ha or print bahir hua is lia code ruk jai ga or error ai ga 
}
myRoom();

// ! javascript main jab error a jai to phir ane wala code ruk jata ha is lia ye chale ga he nahi 
console.log(home); 
console.log(room);
console.log(roomTable);