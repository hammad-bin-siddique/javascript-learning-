
//!  do...while  |  Practice Tasks + Mini Project  

//  Har task ek { } block ke andar hai.
//  Wajah: let/const sirf apne block ke andar zinda rehte hain, is liye
//  har task mein same naam (attempts, maxAttempts, ...) dobara use ho
//  sakte hain, aur "attempts1", "maxAttempts1" jaise naam nahi banane parte.




//  TASK 1: OTP verify (3 koshish ki limit)
//  Idea: OTP pehle maanga jata hai, check baad mein  → do...while
//  Loop DO wajah se rukta hai: OTP sahi ho gaya YA koshishen khatam
{
  console.log("=== Task 1: OTP ===");

  const otpEntries = ["1111", "2222", "4821"]; // user ne yeh OTP likhe
  const correctOtp = "4821";
  const maxAttempts = 3;
  let attempts = 0;
  let otp; // loop ke BAHAR, taake while(...) ki condition ko nazar aaye

  do {
    otp = otpEntries[attempts]; // pehle is koshish ka OTP uthao
    attempts++;                 // phir ginti badhao
    console.log("Try:", attempts, ":", otp);

    if (otp !== correctOtp) {
      console.log("Wrong Otp");
    }
    // && ka matlab: dobara tabhi jab OTP galat HO AUR koshishen baqi HON
  } while (otp !== correctOtp && attempts < maxAttempts);

  // Loop do wajah se ruk sakta hai, is liye baad mein dobara check zaroori hai
  if (otp === correctOtp) {
    console.log("Otp is Correct");
  } else {
    console.log("Try Again After 30 Minutes");
  }

  //  Doosra run: otpEntries = ["1", "2", "3", "4821"] rakh kar dekho 
  // Round 1: "1" galat, 1 < 3 true  → dobara
  // Round 2: "2" galat, 2 < 3 true  → dobara
  // Round 3: "3" galat, 3 < 3 false → STOP   ("4821" kabhi padha hi nahi gaya)
  // Body 3 dafa, attempts = 3, aakhri message: "Try Again After 30 Minutes"
}



//  TASK 2: "Dobara khelna hai?"
//  Idea: game ek dafa to khelna hi hai, phir poochte hain → do...while
{
  console.log("\n=== Task 2: Dobara khelna hai? ===");

  const answers = ["y", "y", "n"]; // har game ke BAAD user ka jawab
  let gamesPlayed = 0;
  let again; // loop ke BAHAR

  do {
    again = answers[gamesPlayed]; // pehle index (0), phir ginti badhi
    gamesPlayed++;
    console.log("Games Played:", gamesPlayed);
  } while (again === "y"); // "y" ho to dobara, warna STOP
  //                ^^^^^ sirf text "y" (answers["y"] nahi, wo undefined deta hai)

  console.log("Game Khele:", gamesPlayed);

  // Doosra run: answers = ["n"] → Games Played: 1 / Game Khele: 1 

  // while yahan kamzor kyun?
  // while (again === "y") pehle check karta, lekin us waqt again ki koi value
  // hi nahi (undefined). Loop shuru karne ke liye nakli value (let again = "y")
  // deni parti. do...while mein game pehle, jawab baad mein → nakli value nahi.
}


//  TASK 3: Khali queue ka bug (while vs do...while)
//  Idea: jab khali hone ka imkaan ho, while lo (pehle check, phir kaam)
{
  console.log("\n=== Task 3: Orders ===");

  // --- A) while, 3 orders ---
  const orders = ["Biryani", "Karahi", "Naan"];
  let count = 0; // orders.length se ginti nahi ho sakti (shift se wo ghat-ti hai)

  while (orders.length > 0) {
    const order = orders.shift(); // pehla order nikalo AUR array se hata do
    console.log("Order Tayar:", order); // order ka naam print karo, poora array nahi
    count++;
  }
  console.log("Total Orders:", count); // 3

  // --- B) while, KHALI array: SAHI ---
  const emptyForWhile = [];
  let countWhile = 0;

  while (emptyForWhile.length > 0) {
    emptyForWhile.shift();
    countWhile++; // body kabhi chalti hi nahi
  }
  console.log("while (khali) Total Orders:", countWhile); // 0  ← sahi

  // --- C) do...while, KHALI array: BUG ---
  const emptyForDo = [];
  let countDo = 0;

  do {
    const order = emptyForDo.shift(); // khali array par shift() → undefined
    console.log("Order Tayar:", order); // Order Tayar: undefined
    countDo++;
  } while (emptyForDo.length > 0);
  console.log("do...while (khali) Total Orders:", countDo); // 1  ← galat!

  // Nateeja: body pehle chal gayi, check baad mein hua. Koi order tha hi nahi,
  // phir bhi 1 order "tayar" ho gaya. Khali ka imkaan ho to while lo.
}


//  MINI PROJECT: ATM Simulator
//  Stage 1: PIN (3 koshish)  →  Stage 2: Menu (0 dabane tak)
//  Dono stage mein do...while, kyunke PIN aur menu pehle ek dafa aate hain
{
  console.log("\n=== Mini Project: ATM Simulator ===");

  const pinEntries = ["1111", "9999", "1234"]; // user ke PIN
  const choices = [1, 2, 3, 5, 0];             // user ke menu options
  const amounts = [2000, 8000];                // deposit/withdraw ke amount
  const correctPin = "1234";
  const maxAttempts = 3;
  let balance = 5000;

  // Teen alag counter, kyunke teeno arrays alag raftar se padhe jate hain
  let attempts = 0;  // PIN array ka index bhi yehi hai (har koshish par +1)
  let choiceIdx = 0; // har menu round par +1
  let amountIdx = 0; // sirf Deposit/Withdraw par +1

  let pin, choice; // dono loop ke BAHAR

  //  Stage 1: PIN 
  do {
    pin = pinEntries[attempts];
    attempts++;
    console.log("Try:", attempts, ":", pin);

    if (pin !== correctPin) {
      console.log("Wrong Pin");
    }
  } while (pin !== correctPin && attempts < maxAttempts);

  //  Stage 2: Menu (sirf PIN sahi ho to) 
  if (pin === correctPin) {
    do {
      choice = choices[choiceIdx];
      choiceIdx++;
      console.log("User Press", choice);

      if (choice === 1) {
        // Balance dekhna (balance badalta nahi)
        console.log("Balance:", balance);
      } else if (choice === 2) {
        // Deposit: agla amount uthao, amountIdx badhao, balance mein jodo
        const amount = amounts[amountIdx];
        amountIdx++;
        balance += amount;
        console.log("Deposit ho gaya:", amount, "| Naya balance:", balance);
      } else if (choice === 3) {
        // Withdraw: pehle check, phir ghatao
        const amount = amounts[amountIdx];
        amountIdx++;
        if (amount > balance) {
          console.log("Balance kam hai"); // balance nahi ghatta
        } else {
          balance -= amount;
          console.log("Withdraw ho gaya:", amount, "| Naya balance:", balance);
        }
      } else if (choice !== 0) {
        // 0 Exit hai, usay "galat option" nahi kehna
        console.log("Wrong Option");
      }
    } while (choice !== 0); // 0 dabao tabhi menu band
  } else {
    console.log("Card Blocked");
  }

  console.log("Koshishen:", attempts);
  console.log("Final balance:", balance);
  console.log("Allah hafiz");
}