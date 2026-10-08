//! 26. Problem 4 — Hard   → Sliding Window Maximum

//? Sab se pehle ham class banai ge deque ki jis main ham end pe push front se nikalna or end se nikalne ke function banai ge

class Deque {
  constructor() {
    this.items = [];
  }

  // add last wala function banai ge

  addLast(element) {
    this.items.push(element);
  }

  // remove last wala function banai ge

  removeLast() {
    if (this.isEmpty()) {
      console.log("There is nothing to remove from the last");
      return null;
    }
    return this.items.pop();
  }

  // start se remove karne wala function banai ge

  removeFirst() {
    if (this.isEmpty()) {
      console.log("There is nothing to remove from the front");
      return null;
    }
    return this.items.shift();
  }

  //Peek front wala function banai ge

  peekFront() {
    if (this.isEmpty()) {
      console.log("There is nothing to peek front the front");
      return null;
    }
    return this.items[0];
  }

  // End se peek karne wala function banai ge

  peekEnd() {
    if (this.isEmpty()) {
      console.log("There is nothing to peek From the End");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty function banai ge

  isEmpty() {
    return this.items.length === 0;
  }

  //size function banai ge

  size() {
    return this.items.length;
  }

  // print function banai ge
  print() {
    console.log(this.items);
  }
}

let deque = new Deque();
deque.addLast("Hammad");
deque.addLast("Faizan");
deque.addLast("Farhan");
console.log(deque.peekFront()); // Hammad
console.log(deque.peekEnd()); // Farhan

console.log(deque.removeLast()); // Farhan gia
console.log(deque.peekEnd()); // Faizan ai ga

function slidingWindowMaximum(arr, k) {
  let deque = new Deque(); // yaha per indices store ho ge

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // mean ke loop chalao start mian i 0 ha or loop chalte raho jab tak array ke length 0 nahi ho jati or phir sath sath i yani index mian increament bhi karte jao + 1 ka

    while (!deque.isEmpty() && arr[deque.peekEnd()] < arr[i]) {
      deque.removeLast();
    } // yaha 2 condition dekhi jai ge pehli ye check karo ke deque khali to nahi agar nahi to phir dosre condition check karo ke kia ke deque ke andar jo last element ha wo new ane wale item se chota ha ya nahi agar ha to us last element ko remove kar do

    deque.addLast(i);

    //Step 3 mean ke yaha dekhe ge ke agar dequeu ka front element chota ha i -k + 1 se to deque ke start se element ko remove kar do  i se mean ke index of array like 7 - k k = suppose 3 - 7 = 4 ; 4 + 1 = 5 ab dekhe ge ke agar front element dequeue ka 5 se chota ha to us first element ko remove kar dain ge

    if (deque.peekFront() < i - k + 1) {
      deque.removeFirst();
    }

    //  Step 4 mean jab 1 window complete ho jai like i k ke brabar ya us se bara ho jai mean ke i 3 ho jai ya ziada like 4 to us waqt k - 1 karna ha 3 - 1 = 2 ho jai ga or - 1 wala element front se nikal kar array main push ho jai ga or wo result ham return kar dain ge man lo i tha [1, -1, 3, 4, 5,..]; pehli window complete hone per 3 jo ha wo nikal kar result main push ho jai ga

    if (i >= k - 1) {
      result.push(arr[deque.peekFront()]);
    }
  }

  return result;
}
console.log("===Next Sliding Window Maximum===");
console.log();
console.log(slidingWindowMaximum([9, 4, 3, 8, 2, 1], 2));
// 94882 output ai ga
console.log(slidingWindowMaximum([1, -1, 3, 4, 6, 2], 2));
// 1 3 4 6 6 output ho ga

console.log(slidingWindowMaximum([9, 4, 3, 8, 2, 1], 3));
// 9 8 8 8 ai ga
