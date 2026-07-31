# 💻 Practice: JavaScript Conditions

The purpose of this practice section is to strengthen your understanding of JavaScript Conditions by writing simple programs.

Instead of memorizing syntax, focus on understanding **how JavaScript makes decisions**.

---

# Practice 1: if Statement

## Objective

Learn how JavaScript executes code only when a condition is **true**.

---

## Syntax

```javascript
if (condition) {

    // Code to Execute

}
```

---

## Example 1: Age Verification

```javascript
const age = 20;

if (age >= 18) {

    console.log("Eligible to Vote");

}
```

Output

```text
Eligible to Vote
```

---

## Example 2: Course Eligibility

```javascript
const marks = 85;

if (marks >= 75) {

    console.log("Eligible for Admission");

}
```

Output

```text
Eligible for Admission
```

---

## Example 3: Stock Availability

```javascript
const stock = 15;

if (stock > 0) {

    console.log("Product Available");

}
```

Output

```text
Product Available
```

---

# Practice 2: if...else Statement

## Objective

Learn how JavaScript performs one action when the condition is **true** and another action when the condition is **false**.

---

## Syntax

```javascript
if (condition) {

    // True Block

} else {

    // False Block

}
```

---

## Example 1: Pass / Fail

```javascript
const marks = 35;

if (marks >= 40) {

    console.log("Pass");

} else {

    console.log("Fail");

}
```

Output

```text
Fail
```

---

## Example 2: Login Validation

```javascript
const password = "1234";

if (password === "admin123") {

    console.log("Login Successful");

} else {

    console.log("Invalid Password");

}
```

Output

```text
Invalid Password
```

---

## Example 3: Payment Status

```javascript
const paymentSuccess = false;

if (paymentSuccess) {

    console.log("Payment Successful");

} else {

    console.log("Payment Failed");

}
```

Output

```text
Payment Failed
```

---

# Practice 3: switch Statement

## Objective

Learn how JavaScript selects one option from multiple choices.

---

## Syntax

```javascript
switch (expression) {

    case value:

        // Code

        break;

    default:

        // Default Code

}
```

---

## Example 1: Day of Week

```javascript
const day = "Sunday";

switch (day) {

    case "Monday":

        console.log("Office");

        break;

    case "Sunday":

        console.log("Holiday");

        break;

    default:

        console.log("Invalid Day");

}
```

Output

```text
Holiday
```

---

## Example 2: User Role

```javascript
const role = "Manager";

switch (role) {

    case "Admin":

        console.log("Full Access");

        break;

    case "Manager":

        console.log("Department Access");

        break;

    default:

        console.log("Limited Access");

}
```

Output

```text
Department Access
```

---

## Example 3: Payment Method

```javascript
const paymentMethod = "UPI";

switch (paymentMethod) {

    case "Cash":

        console.log("Cash Payment");

        break;

    case "UPI":

        console.log("UPI Payment");

        break;

    default:

        console.log("Invalid Payment Method");

}
```

Output

```text
UPI Payment
```

---

# 🧠 Logic Practice

## Project: Pass / Fail System

### Objective

Build a simple decision-making program using an `if...else` statement.

---

## Input

```text
Student Marks
```

Example

```javascript
const studentMarks = 72;
```

---

## Business Rule

```text
Marks >= 40
        │
        ▼
Pass

Otherwise
        │
        ▼
Fail
```

---

## Expected Thinking

```text
Student Marks
        │
        ▼
Condition
        │
        ▼
Decision
        │
        ▼
Result
```

---

## Step 1: Store Input

```javascript
const studentMarks = 72;
```

---

## Step 2: Apply Condition

```javascript
if (studentMarks >= 40) {

    console.log("Pass");

} else {

    console.log("Fail");

}
```

---

## Dry Run

### Case 1

```text
Student Marks = 72
```

Condition

```text
72 >= 40
```

Decision

```text
true
```

Result

```text
Pass
```

---

### Case 2

```text
Student Marks = 28
```

Condition

```text
28 >= 40
```

Decision

```text
false
```

Result

```text
Fail
```

---

# Business Mental Model

Whenever you solve a condition-based problem, think like this:

```text
Business Data
        │
        ▼
Variables
        │
        ▼
Condition
        │
        ▼
Decision
        │
        ▼
Business Result
```

---

# Practice Challenges

## Challenge 1

Check whether a person can vote.

```text
Input

Age
```

Rule

```text
Age >= 18

↓

Eligible

Otherwise

↓

Not Eligible
```

---

## Challenge 2

Check product stock.

```text
Input

Stock Quantity
```

Rule

```text
Stock > 0

↓

Available

Otherwise

↓

Out of Stock
```

---

## Challenge 3

Check payment status.

```text
Input

Payment Status
```

Rule

```text
true

↓

Payment Successful

false

↓

Payment Failed
```

---

## Challenge 4

Display user role using `switch`.

```text
Admin

Manager

Employee

Guest
```

Display the correct dashboard for each role.

---

# Learning Outcome

After completing this practice section, you will be able to:

- ✅ Write `if` statements
- ✅ Write `if...else` statements
- ✅ Write `switch` statements
- ✅ Build decision-making programs
- ✅ Solve basic business logic problems
- ✅ Think like a JavaScript developer instead of only memorizing syntax