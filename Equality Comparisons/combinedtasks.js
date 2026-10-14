//! Topic 7: Combined Practice + Mini Project


//? Combined Task 1 (smartCompare)

console.log("===Task One===");

function smartCompare(a, b) {
  return { loose: a == b, strict: a === b, ObjectIS: Object.is(a, b) };
}

console.table([smartCompare(5, "5")]); // true, false, false,
console.table([smartCompare(null, undefined)]); // true, false, false,
console.table([smartCompare(NaN, NaN)]); // false, false, true
console.table([smartCompare(0, -0)]); // true, true, false
console.table([smartCompare("", false)]); // true, false, false
console.table([smartCompare([1], [1])]); // false, false, false, reference change
const obj = { name: "Bilal" };
const obj2 = obj;
console.table([smartCompare(obj, obj2)]); // true, true, true, reference same
console.table([smartCompare("abc", "abc")]); // true, true, true

//? ===== Task 1 Summary Table (smartCompare) =====
//  #  | a        | b         | loose | strict | objectIs | Kyun?
// ----|----------|-----------|-------|--------|----------|--------------------------------------------
//  1  | 5        | "5"       | true  | false  | false    | types alag, == string ko number bana deta hai
//  2  | null     | undefined | true  | false  | false    | == ka khaas rule: sirf yeh dono aapas mein barabar
//  3  | NaN      | NaN       | false | false  | true     | NaN kisi ke barabar nahi, sirf Object.is isay maanta hai
//  4  | 0        | -0        | true  | true   | false    | == aur === ke liye 0 aur -0 same, Object.is farq karta hai
//  5  | ""       | false     | true  | false  | false    | dono number 0 ban jate hain (== mein), types alag hain
//  6  | [1]      | [1]       | false | false  | false    | do alag arrays = do alag reference
//  7  | obj      | obj2      | true  | true   | true     | dono ek hi reference
//  8  | "abc"    | "abc"     | true  | true   | true     | same type, same value
//
// RULES:
// 1) strict true => loose bhi hamesha true (same type par == bhi === jaisa)
// 2) objectIs true, strict false => sirf NaN
// 3) objectIs false, strict true => sirf 0 aur -0

//? Task 2: typeSafeCompare(a, b)

console.log("===Task Two===");

function getType(x) {
  if (x === null) return "null";
  if (Array.isArray(x)) return "array";
  return typeof x;
}

function typeSafeCompare(a, b) {
  const typeA = getType(a);
  const typeB = getType(b);

  if (typeA !== typeB) {
    return { equal: false, reason: `type mismatch: ${typeA} vs ${typeB}` };
  }

  if (typeA === "object" || typeA === "array") {
    const same = a === b;
    return {
      equal: same,
      reason: same ? "same reference" : "different reference",
    };
  }

  if (typeA === "number") {
    const same = Object.is(a, b);
    return {
      equal: same,
      reason: same
        ? "same number value (Object.is, NaN bhi barabar)"
        : "different number value (Object.is, 0 aur -0 alag)",
    };
  }

  const same = a === b;
  return {
    equal: same,
    reason: same ? `same ${typeA} value` : `different ${typeA} value`,
  };
}

const arr = [1];
console.log(typeSafeCompare(5, "5")); // { equal: false, reason: 'type mismatch: number vs string' }
console.log(typeSafeCompare([1], [1])); // { equal: false, reason: 'different reference' }
console.log(typeSafeCompare(arr, arr)); // { equal: true, reason: 'same reference' }
console.log(typeSafeCompare({}, {})); // { equal: false, reason: 'different reference' }
console.log(typeSafeCompare([], {})); // { equal: false, reason: 'type mismatch: array vs object' }
console.log(typeSafeCompare(null, null)); // 'same null value'

const pairs = [
  [5, "5"],
  [null, undefined],
  [null, null],
  [NaN, NaN],
  [0, -0],
  [[1], [1]],
  [arr, arr],
  [{}, {}],
  [[], {}],
  [true, 1],
];

const results = pairs.map(([a, b]) => ({ a, b, ...typeSafeCompare(a, b) }));
console.table(results);

// ┌─────────┬───────┬───────────┬───────┬─────────────────────────────────────────────────────┐
// │ (index) │ a     │ b         │ equal │ reason                                              │
// ├─────────┼───────┼───────────┼───────┼─────────────────────────────────────────────────────┤
// │ 0       │ 5     │ '5'       │ false │ 'type mismatch: number vs string'                   │
// │ 1       │ null  │ undefined │ false │ 'type mismatch: null vs undefined'                  │
// │ 2       │ null  │ null      │ true  │ 'same null value'                                   │
// │ 3       │ NaN   │ NaN       │ true  │ 'same number value (Object.is, NaN bhi barabar)'    │
// │ 4       │ 0     │ -0        │ false │ 'different number value (Object.is, 0 aur -0 alag)' │
// │ 5       │ [ 1 ] │ [ 1 ]     │ false │ 'different reference'                               │
// │ 6       │ [ 1 ] │ [ 1 ]     │ true  │ 'same reference'                                    │
// │ 7       │ {}    │ {}        │ false │ 'different reference'                               │
// │ 8       │ []    │ {}        │ false │ 'type mismatch: array vs object'                    │
// │ 9       │ true  │ 1         │ false │ 'type mismatch: boolean vs number'                  │
// └─────────┴───────┴───────────┴───────┴─────────────────────────────────────────────────────┘

//! Mini Project: Login Validator
console.log("===Mini Project===");

function validateInput(username, password) {
  if (getType(username) !== "string") {
    return {
      ok: false,
      message: `username ka type string hona chahiya, mila: ${getType(username)}`,
    };
  }
  if (getType(password) !== "string") {
    return {
      ok: false,
      message: `password ka type string hona chahiya, mila: ${getType(password)}`,
    };
  }
  if (username.trim() === "") {
    return { ok: false, message: "username khali ha" };
  }
  if (password.trim() === "") {
    return { ok: false, message: "password khali ha" };
  }
  return { ok: true, message: "input valid ha" };
}

console.log(validateInput("bilal", "pass123"));
console.log(validateInput("", "pass123"));
console.log(validateInput("bilal", ""));
console.log(validateInput(null, "pass123"));
console.log(validateInput("bilal", 12345));
console.log(validateInput(undefined, undefined));


const storedUsername = "bilal"; 
const storedPassword = "pass123"; 

function login(username, password) {
  const check = validateInput(username, password); 

  if(check.ok === false) {
    return check;
  }

  const userMatch = typeSafeCompare(username.toLowerCase(), storedUsername.toLowerCase()); 
  const passMatch = typeSafeCompare(password, storedPassword);

  if(userMatch.equal === true && passMatch.equal === true) {
    return {ok: true, message: "login kamiyab"}; 
  }
  return {ok: false, message: "username ya password ghalat ha"}
};

console.log(login("bilal", "pass123")); // login kamiyab  
console.log(login("bilal", "wrong")); // username ya password ghalata 
console.log(login("Bilal", "pass123")); // login kamiyab  
console.log(login("", "pass123")); // username khali ha 
console.log(login("bilal", 123)); // password ka type string hona chaia mila number
console.log(login("Bilal", "pass123"));  // login kamiyab  
console.log(login("BILAL", "Pass123")); // { ok: false, message: 'username ya password ghalat ha' }