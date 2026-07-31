# 📑 JavaScript Conditions Cheat Sheet

> **Purpose:** Quick revision guide for JavaScript Conditions.

---

# 📚 JavaScript Conditions

Conditions are used to make decisions in JavaScript.

```text
Input
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

# 1. if Statement

## Purpose

Execute code **only when a condition is true**.

---

## Syntax

```javascript
if (condition) {

    // Code

}
```

---

## Example

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

## Business Examples

```text
Age Verification

Login Validation

Stock Availability

Payment Success

Course Eligibility
```

---

# 2. if...else Statement

## Purpose

Execute one block when the condition is **true** and another block when it is **false**.

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

## Example

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

## Business Examples

```text
Pass / Fail

Login Success / Failed

Payment Success / Failed

Product Available / Out of Stock

User Access
```

---

# 3. switch Statement

## Purpose

Execute one block of code from multiple possible options.

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

## Example

```javascript
const role = "Admin";

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
Full Access
```

---

## Business Examples

```text
Menu Selection

User Role

Order Status

Payment Method

Day of Week
```

---

# Decision Flow

```text
Business Data
        │
        ▼
Condition
        │
   ┌────┴────┐
   │         │
 True      False
   │         │
   ▼         ▼
Execute   Skip / Else
```

---

# Comparison Operators Used in Conditions

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal | `10 == "10"` |
| `===` | Strict Equal | `10 === "10"` |
| `!=` | Not Equal | `10 != 5` |
| `!==` | Strict Not Equal | `10 !== "10"` |
| `>` | Greater Than | `20 > 10` |
| `<` | Less Than | `10 < 20` |
| `>=` | Greater Than or Equal | `18 >= 18` |
| `<=` | Less Than or Equal | `18 <= 20` |

---

# Logical Operators Used in Conditions

| Operator | Meaning | Example |
|----------|---------|---------|
| `&&` | AND | `isLoggedIn && isAdmin` |
| `||` | OR | `isLoggedIn || isAdmin` |
| `!` | NOT | `!isLoggedIn` |

---

# Quick Examples

## if

```javascript
const stock = 10;

if (stock > 0) {

    console.log("Available");

}
```

---

## if...else

```javascript
const paymentSuccess = false;

if (paymentSuccess) {

    console.log("Payment Successful");

} else {

    console.log("Payment Failed");

}
```

---

## switch

```javascript
const day = "Sunday";

switch (day) {

    case "Sunday":

        console.log("Holiday");

        break;

    default:

        console.log("Working Day");

}
```

---

# Interview Tips

## Prefer Strict Equality

✅ Recommended

```javascript
10 === 10
```

❌ Avoid

```javascript
10 == "10"
```

---

## Always Use break in switch

```javascript
case "Admin":

    console.log("Admin");

    break;
```

Without `break`, execution continues to the next case.

---

## Use switch When

```text
Multiple Fixed Options

↓

switch
```

Examples

```text
Role

Month

Day

Menu

Payment Method
```

---

## Use if When

```text
Ranges

↓

if...else
```

Examples

```text
Marks

Age

Salary

Discount

Stock
```

---

# Real-World Applications

```text
CRM
↓

Lead Qualification

LMS
↓

Pass / Fail

E-Commerce
↓

Stock Availability

Banking
↓

Loan Approval

Payroll
↓

Salary Eligibility

HRMS
↓

Attendance Check

Food Delivery
↓

Order Status

Authentication
↓

Login Verification
```

---

# Common Mistakes

❌ Forgetting curly braces

❌ Using `=` instead of `===`

❌ Missing `break` in `switch`

❌ Incorrect condition order

❌ Forgetting the `default` case

---

# Condition Summary

| Statement | Purpose | Best Use |
|-----------|---------|----------|
| `if` | Execute when true | Single Decision |
| `if...else` | Two possible outcomes | Pass/Fail, Login |
| `switch` | Multiple fixed choices | Menu, Role, Status |

---

# Memory Trick

```text
if
↓

One Decision

if...else
↓

Two Decisions

switch
↓

Many Choices
```

---

# Mental Model

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

# One-Line Revision

```text
if → Execute code when a condition is true.

if...else → Choose between two outcomes.

switch → Select one option from multiple choices.
```

---

# Interview Revision (30 Seconds)

```text
✔ if → One decision

✔ if...else → Two decisions

✔ switch → Multiple fixed choices

✔ Use === instead of ==

✔ Use break in switch

✔ Conditions return true or false

✔ Conditions are used in Login, CRM, LMS, Banking, HRMS, E-Commerce, and every real-world application.
```