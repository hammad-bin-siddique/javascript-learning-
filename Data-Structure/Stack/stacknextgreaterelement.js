//! Problem 19 — Next Greater Element 🔥

//? Tumhare paas ek array hai numbers ka:

// Har number ke liye dhundna hai — uske daayein taraf (right side) pehla number jo usse BADA ho!

// 4  → 6   (4 ke right mein pehla bada number 6 hai)
// 6  → 8   (6 ke right mein pehla bada number 8 hai)
// 3  → 8   (3 ke right mein pehla bada number 8 hai)
// 2  → 8   (2 ke right mein pehla bada number 8 hai)
// 8  → -1  (8 ke right mein koi bada number nahi → -1)
// 1  → -1  (1 ke right mein koi bada number nahi → -1)



// 1 function bananya jo array leta ha input main 
function nextGreaterElement(arr) {
    let stack = []; // stack banay khali is main position number store ho ge mean ke 0 se le kar so on 
    let result = new Array(arr.length).fill(-1);
    // is ke 2 kam ha pehle ke 1 new array banao jo array leta ha mean ke arr wala input main array leta ha us ki length jitna new array bano or us new array main sab jago ko -1 se fill kar do ye default answer ha agar koi bara number nahi mila to -1 he answer ho ga or is se hame pata chal jai ga 

    //ab loop chalo counter ko 0 se start karo or jab tak jo arr array input le ga wo khatam naw ho tab tak loop ko chalate or i main increament karte raho 

    for(let i = 0; i < arr.length; i++) {

        // Jab tak stack khali nahi AUR current number stack ke top wale number se bada hai — loop chalta raho
        while(stack.length > 0 && arr[i] > arr[stack[stack.length -1]]) {
            let topIndex = stack.pop(); // start ke top se index pop karo 
            result[topIndex] = arr[i]; // yani jo array se top index nikle ha wo result ha 
        };
        stack.push(i); // Current index (number nahi, index!) stack mein daalo: Kyun index push karte hain number nahi? Kyunki baad mein result[topIndex] mein answer store karna hota hai — index chahiye hota hai position jaanne ke liye!


    };

    return result;
    
};

let arr = [4, 6, 3, 8];
console.log(nextGreaterElement(arr));

//! Poora Flow Ek Sath — [4, 6, 3, 8]

// Start:
// stack = []
// result = [-1, -1, -1, -1]

// i=0, num=4:
//   while: stack khali → skip
//   push(0) → stack = [0]

// i=1, num=6:
//   while: arr[0]=4, 6>4? HAAN!
//     topIndex = pop() = 0
//     result[0] = 6
//     stack = []
//   while: stack khali → stop
//   push(1) → stack = [1]
//   result = [6, -1, -1, -1]

// i=2, num=3:
//   while: arr[1]=6, 3>6? NAHI → skip
//   push(2) → stack = [1, 2]

// i=3, num=8:
//   while: arr[2]=3, 8>3? HAAN!
//     topIndex = pop() = 2
//     result[2] = 8
//     stack = [1]
//   while: arr[1]=6, 8>6? HAAN!
//     topIndex = pop() = 1
//     result[1] = 8
//     stack = []
//   while: stack khali → stop
//   push(3) → stack = [3]
//   result = [6, 8, 8, -1]

// Loop khatam!
// return [6, 8, 8, -1] ✅

