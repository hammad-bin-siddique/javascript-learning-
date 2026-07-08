//! Phase 5 Topic 22 BFS Graph Traversal Trees

//? 📖 BFS (Breadth-First Search) — Solid Definition

// BFS ek tree/graph traversal technique hai jo kisi bhi node se shuru hoke, usके saare "hum-level" (same level) nodes ko pehle explore karti hai, phir agle level par jaati hai — aur ye process Queue (FIFO) ke zariye hoti hai.

const familyTree = {
  name: "Father",

  children: [
    {
      name: "Hammad",
      children: [
        { name: "Son1", children: [] },
        { name: "Son2", children: [] },
      ],
    },

    {
      name: "Subhan",
      children: [{ name: "Son3", children: [] }],
    },
  ],
};
const collegeTree = {
  name: "Principle",

  children: [
    {
      name: "HOD English",
      children: [
        { name: "Teacher1", children: [] },
        { name: "Teacher2", children: [] },
      ],
    },

    {
      name: "HOD CS",
      children: [{ name: "Teacher3", children: [] }],
    },
  ],
};


//? BFS Function banai ge 

function bfs(root) {

  const queue = []; // start name queue ka 1 khali array banaya 
  queue.push(root); // ab queue main push kar do root ko root 1 parameter ha jo function call karte waqt ham behje ge wo is main push ho jai ga queue main 


  while(queue.length > 0) {
    const current = queue.shift(); // mean ke 1 condition rakhi ke jab tak queue ke length 0 nahi ho jati tab tak loop ko chalo or current name ka variable banaya jis main wo wo value store ho gi jo queue ke start se nikle gi 
    console.log(current.name); // ab yaha current name ko print kar do 

    current.children.forEach(child =>  {
      queue.push(child);
    }); // ab yaha per 1 loop chalaya ke current value ha us ke her 1 children ke value ko queue main push karte jao 

  }
};
console.log("===Family Tree===");
bfs(familyTree); // sab se uper father phir hammad phir subhan phir son1 phir 2 phir 3


console.log("===College Tree===");
bfs(collegeTree); // sab se uper principle phir hod english phir hod cs phir teacher 1 or pihr 2 phir 3
