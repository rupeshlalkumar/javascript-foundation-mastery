```javascript
// =============================================
// Day 3 Practice
// Topic: JavaScript Operators
// =============================================

// =============================================
// 1. Arithmetic Operators
// =============================================

console.log("========== Arithmetic Operators ==========");

// Addition (+)
const num1 = 20;
const num2 = 10;

const addition = num1 + num2;
console.log("Addition:", addition);

// Subtraction (-)
const subtraction = num1 - num2;
console.log("Subtraction:", subtraction);

// Multiplication (*)
const multiplication = num1 * num2;
console.log("Multiplication:", multiplication);

// Division (/)
const division = num1 / num2;
console.log("Division:", division);

// Modulus (%)
const remainder = num1 % 3;
console.log("Modulus:", remainder);

// Exponentiation (**)
const power = 5 ** 2;
console.log("Exponentiation:", power);

// Increment (++)
let visitors = 100;

visitors++;

console.log("Increment:", visitors);

// Decrement (--)
let stock = 50;

stock--;

console.log("Decrement:", stock);



// =============================================
// 2. Comparison Operators
// =============================================

console.log("\n========== Comparison Operators ==========");

// Equal (==)
console.log("10 == '10' :", 10 == "10");

// Strict Equal (===)
console.log("10 === '10' :", 10 === "10");

// Not Equal (!=)
console.log("10 != 20 :", 10 != 20);

// Strict Not Equal (!==)
console.log("10 !== '10' :", 10 !== "10");

// Greater Than (>)
console.log("20 > 10 :", 20 > 10);

// Less Than (<)
console.log("10 < 20 :", 10 < 20);

// Greater Than or Equal (>=)
console.log("18 >= 18 :", 18 >= 18);

// Less Than or Equal (<=)
console.log("15 <= 20 :", 15 <= 20);



// =============================================
// 3. Logical Operators
// =============================================

console.log("\n========== Logical Operators ==========");

const emailVerified = true;
const passwordCorrect = true;

const isAdmin = false;
const isManager = true;

const paymentCompleted = false;

// AND (&&)
console.log(
  "Email Verified AND Password Correct:",
  emailVerified && passwordCorrect
);

// OR (||)
console.log(
  "Admin OR Manager:",
  isAdmin || isManager
);

// NOT (!)
console.log(
  "NOT Payment Completed:",
  !paymentCompleted
);
```

### ✅ Expected Output

```text
========== Arithmetic Operators ==========
Addition: 30
Subtraction: 10
Multiplication: 200
Division: 2
Modulus: 2
Exponentiation: 25
Increment: 101
Decrement: 49

========== Comparison Operators ==========
10 == '10' : true
10 === '10' : false
10 != 20 : true
10 !== '10' : true
20 > 10 : true
10 < 20 : true
18 >= 18 : true
15 <= 20 : true

========== Logical Operators ==========
Email Verified AND Password Correct: true
Admin OR Manager: true
NOT Payment Completed: true
```

This completes your **Day 3 `practice.js`** file and covers all **Arithmetic**, **Comparison**, and **Logical Operators** with clean, interview-ready examples.
