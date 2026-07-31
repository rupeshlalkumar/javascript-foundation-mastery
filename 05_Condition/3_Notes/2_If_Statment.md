# 📖 2. if Statement

Most beginners think:

```text
if = Condition
```

This is true, but incomplete.

A deeper definition is:

```text
The if statement is a conditional statement that executes a block of code only when a specified condition evaluates to true.
```

The `if` statement is the simplest and most commonly used decision-making statement in JavaScript.

---

# Why Does the if Statement Exist?

Imagine a login system without an `if` statement.

User enters:

```text
Username

Password
```

Without checking the credentials, the system would allow everyone to log in.

That would be a major security problem.

The `if` statement exists so that software can make decisions before performing an action.

Example:

```text
Password Correct?

↓

Yes

↓

Login

Otherwise

↓

Stay on Login Page
```

---

# Definition

The `if` statement checks a condition.

If the condition is **true**, JavaScript executes the code inside the block.

If the condition is **false**, JavaScript skips the block.

---

# Syntax

```javascript
if (condition) {

    // Code to execute

}
```

---

# Syntax Breakdown

```javascript
if (age >= 18) {

    console.log("Eligible");

}
```

Explanation:

```text
if
│
▼
Decision Statement

(age >= 18)
│
▼
Condition

{
}
│
▼
Code Block

console.log()
│
▼
Action
```

---

# How if Works

Every `if` statement follows the same process.

```text
Input
      │
      ▼
Condition
      │
      ▼
true or false
      │
      ▼
Execute Code
```

Example:

```javascript
const age = 20;

if (age >= 18) {

    console.log("Eligible");

}
```

Internal Working:

```text
age = 20
      │
      ▼
20 >= 18
      │
      ▼
true
      │
      ▼
Execute Code
```

Output:

```text
Eligible
```

---

If the value becomes:

```javascript
const age = 15;
```

Internal Working:

```text
15 >= 18
      │
      ▼
false
      │
      ▼
Skip Code
```

Output:

```text
Nothing
```

---

# Single Condition

A single `if` statement checks only one condition.

Example:

```javascript
const marks = 75;

if (marks >= 40) {

    console.log("Pass");

}
```

Flow:

```text
Marks
      │
      ▼
Marks >= 40 ?
      │
      ▼
true
      │
      ▼
Pass
```

---

# Nested if

A nested `if` means writing an `if` statement inside another `if` statement.

Example:

```javascript
const age = 20;
const hasLicense = true;

if (age >= 18) {

    if (hasLicense) {

        console.log("Can Drive");

    }

}
```

Flow:

```text
Age >= 18 ?
      │
      ▼
Yes
      │
      ▼
Has License ?
      │
      ▼
Yes
      │
      ▼
Can Drive
```

Nested `if` is useful when one decision depends on another decision.

---

# Real Business Examples

The `if` statement is used in almost every software application.

---

## Age Verification

Input:

```text
Age
```

Rule:

```text
Age >= 18
```

Decision:

```text
Eligible to Vote
```

Example:

```javascript
const age = 21;

if (age >= 18) {

    console.log("Eligible to Vote");

}
```

---

## Login Validation

Input:

```text
Username

Password
```

Rule:

```text
Credentials Correct?
```

Decision:

```text
Login Successful
```

Example:

```javascript
const password = "admin123";

if (password === "admin123") {

    console.log("Login Successful");

}
```

---

## Stock Availability

Input:

```text
Stock Quantity
```

Rule:

```text
Stock > 0
```

Decision:

```text
Show Buy Now
```

Example:

```javascript
const stock = 15;

if (stock > 0) {

    console.log("Buy Now");

}
```

---

## Payment Success

Input:

```text
Payment Status
```

Rule:

```text
Payment Successful?
```

Decision:

```text
Generate Invoice
```

Example:

```javascript
const paymentSuccess = true;

if (paymentSuccess) {

    console.log("Invoice Generated");

}
```

---

## Course Eligibility

Input:

```text
Marks
```

Rule:

```text
Marks >= 75
```

Decision:

```text
Eligible
```

Example:

```javascript
const marks = 82;

if (marks >= 75) {

    console.log("Eligible for Admission");

}
```

---

# Internal Working

JavaScript first evaluates the condition.

Example:

```javascript
const number = 100;

if (number > 50) {

    console.log("Greater");

}
```

Internal Process:

```text
Variable
      │
      ▼
number = 100
      │
      ▼
number > 50
      │
      ▼
true
      │
      ▼
Execute Code Block
```

If the condition is false:

```text
Variable
      │
      ▼
Condition
      │
      ▼
false
      │
      ▼
Skip Code Block
```

---

# Mental Model

Whenever you see an `if` statement, think:

```text
Business Data
        │
        ▼
Business Rule
        │
        ▼
if Statement
        │
        ▼
Decision
        │
        ▼
Business Action
```

Example:

```text
Customer Paid?
        │
        ▼
Yes
        │
        ▼
Generate Invoice
```

---

# Common Mistakes

## ❌ Mistake 1

Using assignment instead of comparison.

Wrong:

```javascript
if (marks = 40) {

}
```

Correct:

```javascript
if (marks >= 40) {

}
```

---

## ❌ Mistake 2

Forgetting curly braces.

Wrong:

```javascript
if (age >= 18)
console.log("Adult");
console.log("Eligible");
```

Correct:

```javascript
if (age >= 18) {

    console.log("Adult");
    console.log("Eligible");

}
```

---

## ❌ Mistake 3

Expecting code to run when the condition is false.

Example:

```javascript
const age = 15;

if (age >= 18) {

    console.log("Adult");

}
```

Output:

```text
Nothing
```

---

# Important Facts

- `if` checks only one condition.
- Code executes only when the condition is true.
- If the condition is false, JavaScript skips the block.
- Every `if` statement returns either true or false.
- `if` is the foundation of decision-making in programming.

---

# Interview Questions

## Basic

1. What is an `if` statement?
2. Why do we use an `if` statement?
3. What happens when an `if` condition is false?
4. What is the syntax of an `if` statement?
5. Can an `if` statement execute without a condition?

---

## Intermediate

6. What is a nested `if` statement?
7. When should you use nested `if`?
8. How does JavaScript evaluate an `if` condition?
9. What is the difference between `if` and `if...else`?
10. Can multiple `if` statements exist in one program?

---

## Advanced Thinking

11. How is the `if` statement used in CRM software?
12. Explain `if` with an e-commerce example.
13. Explain `if` with a banking example.
14. How is `if` used in authentication systems?
15. Why is the `if` statement considered the foundation of decision-making?

---

# Quick Revision

```text
Input
      │
      ▼
Condition
      │
      ▼
true
      │
      ▼
Execute Code
```

If the condition becomes:

```text
false
```

Then:

```text
Skip Code
```

---

# Final Definition

```text
The if statement is a conditional statement that evaluates a condition and executes a block of code only when that condition is true.
```

---

# Hindi Summary

`if` statement JavaScript ka sabse basic aur important **decision-making statement** hai.

Ye kisi condition ko check karta hai. Agar condition **true** hoti hai to code execute hota hai. Agar condition **false** hoti hai to JavaScript us code block ko skip kar deta hai.

Real-world software jaise **CRM, LMS, Banking, E-Commerce, Login Systems aur Inventory Management** mein har jagah `if` statement ka use hota hai.

Hamesha yaad rakho:

```text
Business Data
        │
        ▼
Business Rule
        │
        ▼
if Statement
        │
        ▼
Decision
        │
        ▼
Business Action
```

**Programming mein `if` statement sirf syntax nahi hai, balki business rules ko software logic mein convert karne ka sabse pehla step hai.**