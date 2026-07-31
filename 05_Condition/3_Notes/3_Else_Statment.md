# 📖 3. else Statement

Most beginners think:

```text
else = opposite of if
```

This is partially correct.

A deeper definition is:

```text
The else statement executes a block of code when the condition inside the if statement evaluates to false.
```

The `else` statement provides an alternative action when the expected condition is not satisfied.

---

# Why Does else Exist?

Imagine a student result system.

Input:

```text
Marks = 35
```

Condition:

```text
Marks >= 40
```

Without `else`:

```javascript
if (marks >= 40) {
    console.log("Pass");
}
```

Output:

```text
Nothing
```

The system does not tell the student that they failed.

To handle the opposite situation, JavaScript provides:

```text
else
```

---

# Definition

The `else` statement runs when the `if` condition becomes false.

It provides a fallback or default action.

---

# Syntax

```javascript
if (condition) {

    // True Block

} else {

    // False Block

}
```

---

# Syntax Breakdown

```javascript
const marks = 35;

if (marks >= 40) {

    console.log("Pass");

} else {

    console.log("Fail");

}
```

Explanation:

```text
if
│
▼
Check Condition

Condition True?
      │
 ┌────┴────┐
 │         │
 ▼         ▼
Yes       No
 │         │
 ▼         ▼
Pass      Fail
```

---

# How if...else Works

Every `if...else` statement follows the same process.

```text
Input
      │
      ▼
Condition
      │
      ▼
true or false
      │
 ┌────┴────┐
 │         │
 ▼         ▼
if Block   else Block
```

---

# Example

```javascript
const age = 20;

if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");

}
```

Internal Working:

```text
Age = 20
      │
      ▼
20 >= 18
      │
      ▼
true
      │
      ▼
Adult
```

Output:

```text
Adult
```

---

Now:

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
Minor
```

Output:

```text
Minor
```

---

# Default Action

The main purpose of `else` is:

```text
Default Action
```

Think of it as:

```text
If Rule Satisfied
      │
      ▼
Action A

Otherwise
      │
      ▼
Action B
```

Example:

```javascript
const stock = 0;

if (stock > 0) {

    console.log("Buy Now");

} else {

    console.log("Out of Stock");

}
```

Here:

```text
Out of Stock
```

is the default action.

---

# Decision Flow

Visual Flow:

```text
Input
      │
      ▼
Condition
      │
 ┌────┴────┐
 │         │
 ▼         ▼
True      False
 │         │
 ▼         ▼
Action A  Action B
```

Example:

```text
Payment Successful?
```

```text
Yes
 │
 ▼
Generate Invoice
```

```text
No
 │
 ▼
Show Payment Failed
```

---

# Business Examples

The `else` statement is used everywhere in software development.

---

# Pass / Fail System

Input:

```text
Student Marks
```

Rule:

```text
Marks >= 40
```

Example:

```javascript
const marks = 35;

if (marks >= 40) {

    console.log("Pass");

} else {

    console.log("Fail");

}
```

Output:

```text
Fail
```

---

# Login Failed

Input:

```text
Username

Password
```

Rule:

```text
Credentials Match?
```

Example:

```javascript
const password = "1234";

if (password === "admin123") {

    console.log("Login Successful");

} else {

    console.log("Invalid Password");

}
```

Output:

```text
Invalid Password
```

---

# Payment Failed

Input:

```text
Payment Status
```

Rule:

```text
Payment Success?
```

Example:

```javascript
const paymentSuccess = false;

if (paymentSuccess) {

    console.log("Invoice Generated");

} else {

    console.log("Payment Failed");

}
```

Output:

```text
Payment Failed
```

---

# Product Out of Stock

Input:

```text
Stock Quantity
```

Rule:

```text
Stock > 0
```

Example:

```javascript
const stock = 0;

if (stock > 0) {

    console.log("Available");

} else {

    console.log("Out of Stock");

}
```

Output:

```text
Out of Stock
```

---

# User Access

Input:

```text
Admin Status
```

Rule:

```text
Is Admin?
```

Example:

```javascript
const isAdmin = false;

if (isAdmin) {

    console.log("Access Granted");

} else {

    console.log("Access Denied");

}
```

Output:

```text
Access Denied
```

---

# Internal Working

Example:

```javascript
const amount = 500;

if (amount >= 1000) {

    console.log("Discount Available");

} else {

    console.log("No Discount");

}
```

Internal Process:

```text
amount = 500
      │
      ▼
500 >= 1000
      │
      ▼
false
      │
      ▼
Execute else Block
```

Output:

```text
No Discount
```

---

# Mental Model

Whenever you see `if...else`, think:

```text
Business Rule
        │
        ▼
Condition
        │
 ┌──────┴──────┐
 │             │
 ▼             ▼
True         False
 │             │
 ▼             ▼
Action A     Action B
```

Example:

```text
Customer Paid?
```

```text
Yes
 │
 ▼
Generate Invoice
```

```text
No
 │
 ▼
Show Payment Failed
```

---

# Common Mistakes

## ❌ Mistake 1

Writing separate if statements instead of using else.

Wrong:

```javascript
if (marks >= 40) {
    console.log("Pass");
}

if (marks < 40) {
    console.log("Fail");
}
```

Better:

```javascript
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

---

## ❌ Mistake 2

Forgetting braces.

Wrong:

```javascript
if (age >= 18)
console.log("Adult");
else
console.log("Minor");
```

Correct:

```javascript
if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");

}
```

---

## ❌ Mistake 3

Using impossible conditions.

Example:

```javascript
if (marks > 100) {

}
```

Normally marks cannot exceed 100.

---

# Important Facts

- `else` always works with an `if`.
- `else` executes only when the `if` condition is false.
- Only one block executes at a time.
- `if...else` creates complete decision-making logic.
- Every real-world software application uses `if...else`.

---

# Interview Questions

## Basic

1. What is the purpose of the `else` statement?
2. When does an `else` block execute?
3. Can `else` exist without `if`?
4. What is the syntax of `if...else`?
5. Why do we use `else`?

---

## Intermediate

6. What is the difference between `if` and `if...else`?
7. Can multiple `if...else` statements exist in one program?
8. How does JavaScript choose between `if` and `else`?
9. What happens when the condition becomes false?
10. Why is `else` called a fallback block?

---

## Advanced Thinking

11. How is `if...else` used in CRM software?
12. Explain `if...else` using an e-commerce example.
13. Explain `if...else` using a banking application.
14. How is `if...else` used in authentication systems?
15. Why is `if...else` considered a complete decision-making structure?

---

# Quick Revision

```text
Condition
      │
 ┌────┴────┐
 │         │
 ▼         ▼
True      False
 │         │
 ▼         ▼
if Block else Block
```

Remember:

```text
if
 ↓
Positive Decision

else
 ↓
Alternative Decision
```

---

# Final Definition

```text
The else statement provides an alternative block of code that executes when the condition in the if statement evaluates to false.
```

---

# Hindi Summary

`else` statement JavaScript mein **alternative action** dene ke liye use hota hai.

Agar `if` condition **true** hoti hai to `if` block execute hota hai.

Agar condition **false** hoti hai to `else` block execute hota hai.

Isliye `if...else` ko programming ka sabse basic **decision-making structure** mana jata hai.

Yaad rakho:

```text
Business Data
        │
        ▼
Condition
        │
 ┌──────┴──────┐
 │             │
 ▼             ▼
True         False
 │             │
 ▼             ▼
Action A     Action B
```

Real-world software jaise **CRM, LMS, Banking, E-Commerce, Login Systems aur Payment Gateways** mein har jagah `if...else` ka use hota hai kyunki har business rule ke do outcomes hote hain:

```text
Success

or

Failure
```

Aur in dono ko handle karne ke liye `if...else` sabse important tool hai.