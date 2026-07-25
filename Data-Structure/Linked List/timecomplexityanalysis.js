//! Phase 4 — Topic 1: Big O Notation kya hota hai (Foundation)

//? Big O Notation  Definition:

// Big O Notation ek mathematical way hai jisse hum measure karte hain ke koi algorithm (operation) data size (n) barhne par kitni tezi se slow hota hai — worst-case scenario mein.

// Teen key points is definition mein chhupe hain:

// "Data size (n) barhne par" — Big O hamesha relation batata hai time aur data ke size ke darmiyan, exact seconds nahi. (Jaise "n barha to time bhi barha" — but kitni raftar se barha, wo important hai)
// "Kitni tezi se slow hota hai" — Ye growth rate hai, matlab performance ka trend, na ke ek fixed number. Isi liye O(1) hamesha O(n) se behtar hota hai — chahe chhote data pe dono barabar lagen.
// "Worst-case scenario" — Big O generally sabse bura case consider karta hai (jaise search mein target sabse last mein mile). Ye isliye kyunke hum system ko guarantee dena chahte hain ke ye "at most" itna time lega — kabhi is se zyada slow nahi hoga.

/*
========================================
? BIG O NOTATION - COMMON TYPES
========================================

Notation  | Naam         | Matlab
----------|--------------|--------------------------------------------
O(1)      | Constant     | Data chahe 10 ho ya 10 crore, time same rahega
O(n)      | Linear       | Data double, time bhi double
O(log n)  | Logarithmic  | Data double, time thora sa hi barhta hai
          |              | (binary search jaisa)
O(n²)     | Quadratic    | Data double, time 4x ho jata hai (nested loops)

========================================
*/

/*
========================================
?LINKED LIST - TIME COMPLEXITY (BIG O)
========================================

Operation             | Big O | Reason
-----------------------|-------|--------------------------------
Access (index se)      | O(n)  | Traverse karna parta hai
Search                 | O(n)  | Traverse karna parta hai
Append (tail ke sath)  | O(1)  | Direct reference
Prepend                | O(1)  | Sirf head update
Insert at index        | O(n)  | Position tak traverse
removeFromStart        | O(1)  | Sirf head update
removeFromEnd          | O(n)  | Second-last tak traverse
removeAt                | O(n)  | Position tak traverse

========================================
*/

//! Phase 4 — Topic 2: Array vs Linked List Comparison

// Array = Fixed Seating Bus

// Saari seats number se fixed hain (1, 2, 3...50). Aap seedha seat 25 pe jaa sakte ho, dekhne ki zaroorat nahi.
// Lekin agar seat 10 aur 11 ke beech mein ek naya banda ghusana hai, to seat 11 se 50 tak sabko ek ek seat peeche khisakna parega — mushkil aur time-consuming.

// Linked List = Chain of Connected Rickshaws

// Har rickshaw agle rickshaw se connected hai (jaise chain). Kisi bhi jagah naya rickshaw jorna easy hai — bas do connection tor kar naya beech mein daal do.
// Lekin agar aapko 10th rickshaw tak pohonchna hai, to aapko 1st se shuru karke, ek ek rickshaw se hoke guzarna parega — seedha jump nahi maar sakte.

//? Core Comparison Table:
/*
========================================
ARRAY vs LINKED LIST - COMPARISON
========================================

Feature            | Array              | Linked List
--------------------|--------------------|-----------------------
Memory Storage      | Continuous (ek     | Scattered (jahan
                    | sath jama hui)     | khali jagah mile)
Access (by index)   | O(1) - fast        | O(n) - slow
Search              | O(n)               | O(n)
Insert at start     | O(n) - shift hota  | O(1) - fast
                    | hai sab            |
Insert at end       | O(1) (push)        | O(1) (agar tail
                    |                    | reference ho)
Insert in middle    | O(n) - shift hota  | O(n) - traverse
                    | hai                | karna parta hai
Delete from start   | O(n) - shift hota  | O(1) - fast
                    | hai                |
Memory usage        | Kam (sirf data)    | Zyada (data +
                    |                    | .next reference)
Fixed size?         | Kabhi fixed hota   | Dynamic - hamesha
                    | tha (purane        | grow/shrink hota
                    | languages mein)    | hai

========================================
*/
