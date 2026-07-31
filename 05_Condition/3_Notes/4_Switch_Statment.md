# 📖 4. switch Statement

Most beginners think:

```text
switch = Multiple if...else
```

This is partially correct.

A deeper definition is:

```text
The switch statement is a conditional statement that evaluates a single expression and executes one matching block of code from multiple possible choices.
```

The `switch` statement is designed to make code cleaner and easier to read when there are many possible outcomes.

---

# Why Does switch Exist?

Imagine an application that checks the current day.

Without `switch`:

```javascript
if (day === "Monday") {

}

else if (day === "Tuesday") {

}

else if (day === "Wednesday") {

}

else if (day === "Thursday") {

}

else if (day === "Friday") {

}

else if (day === "Saturday") {

}

else {

}
```

As the number of conditions grows, the code becomes difficult to read and maintain.

JavaScript introduced the `switch` statement to solve this problem.

---

# Definition

A `switch` statement compares one value against multiple possible cases.

When a matching case is found, JavaScript executes that block of code.

If no case matches, the `default` block executes.

---

# Syntax

```javascript
switch (expression) {

    case value1:

        // Code

        break;

    case value2:

        // Code

        break;

    default:

        // Default Code

}
```

---

# Syntax Breakdown

```javascript
const day = "Monday";

switch (day) {

    case "Monday":

        console.log("Start Working");

        break;

    default:

        console.log("Invalid Day");

}
```

Explanation:

```text
switch
│
▼
Checks One Value

(day)
│
▼
Expression

case
│
▼
Possible Match

break
│
▼
Stop Execution

default
│
▼
Runs When No Match Exists
```

---

# How switch Works

Every `switch` statement follows the same process.

```text
Input
      │
      ▼
Expression
      │
      ▼
Compare with Cases
      │
 ┌────┼────┐
 │    │    │
 ▼    ▼    ▼
Case1 Case2 Case3
      │
      ▼
Match Found
      │
      ▼
Execute Code
      │
      ▼
break
      │
      ▼
Program Continues
```

---

# case

A `case` represents one possible value that JavaScript checks.

Example:

```javascript
const role = "Admin";

switch (role) {

    case "Admin":

        console.log("Full Access");

        break;

}
```

Flow:

```text
Role
 │
 ▼
Admin
 │
 ▼
Matches Case
 │
 ▼
Execute Code
```

---

# break

The `break` statement immediately stops the execution of the `switch` statement.

Without `break`, JavaScript continues executing the next cases.

Example:

```javascript
const day = "Monday";

switch (day) {

    case "Monday":

        console.log("Work");

        break;

    case "Tuesday":

        console.log("Meeting");

        break;

}
```

Output:

```text
Work
```

---

Without `break`:

```javascript
const day = "Monday";

switch (day) {

    case "Monday":

        console.log("Work");

    case "Tuesday":

        console.log("Meeting");

}
```

Output:

```text
Work

Meeting
```

This is called **Fall Through**.

---

# default

The `default` block executes when none of the cases match.

Example:

```javascript
const role = "Guest";

switch (role) {

    case "Admin":

        console.log("Admin Panel");

        break;

    default:

        console.log("Access Denied");

}
```

Output:

```text
Access Denied
```

---

# When to Use switch

Use `switch` when:

- One variable has many possible values.
- Every value performs a different action.
- Multiple `if...else if` statements make the code difficult to read.

Examples:

```text
Order Status

Payment Method

User Role

Menu Selection

Day of Week

Language Selection
```

Avoid using `switch` for complex comparison expressions like:

```javascript
marks >= 40
```

For these situations, `if...else` is a better choice.

---

# Business Examples

The `switch` statement is widely used in real-world software.

---

# Menu Selection

Input:

```text
Menu Option
```

Example:

```javascript
const menu = "Profile";

switch (menu) {

    case "Home":

        console.log("Home Page");

        break;

    case "Profile":

        console.log("Profile Page");

        break;

    case "Settings":

        console.log("Settings Page");

        break;

    default:

        console.log("Invalid Menu");

}
```

---

# User Role

Input:

```text
User Role
```

Example:

```javascript
const role = "Manager";

switch (role) {

    case "Admin":

        console.log("Full Access");

        break;

    case "Manager":

        console.log("Department Access");

        break;

    case "Employee":

        console.log("Limited Access");

        break;

    default:

        console.log("No Access");

}
```

---

# Order Status

Input:

```text
Order Status
```

Example:

```javascript
const status = "Shipped";

switch (status) {

    case "Pending":

        console.log("Preparing Order");

        break;

    case "Shipped":

        console.log("On the Way");

        break;

    case "Delivered":

        console.log("Delivered Successfully");

        break;

    default:

        console.log("Unknown Status");

}
```

---

# Payment Method

Input:

```text
Payment Method
```

Example:

```javascript
const payment = "UPI";

switch (payment) {

    case "Cash":

        console.log("Cash Payment");

        break;

    case "Card":

        console.log("Card Payment");

        break;

    case "UPI":

        console.log("UPI Payment");

        break;

    default:

        console.log("Invalid Payment Method");

}
```

---

# Day of Week

Input:

```text
Day
```

Example:

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

        console.log("Normal Day");

}
```

---

# Internal Working

Example:

```javascript
const language = "English";
```

Internal Process:

```text
language
      │
      ▼
English
      │
      ▼
Compare with Cases
      │
 ┌────┼────┐
 │    │    │
 ▼    ▼    ▼
Hindi English French
      │
      ▼
Match Found
      │
      ▼
Execute Code
      │
      ▼
break
```

---

# Mental Model

Whenever you see a `switch` statement, think:

```text
One Input
        │
        ▼
Multiple Choices
        │
        ▼
Find Match
        │
        ▼
Execute Action
```

Example:

```text
Payment Method
        │
        ▼
Cash

Card

UPI

Net Banking
        │
        ▼
Selected Method
        │
        ▼
Process Payment
```

---

# Common Mistakes

## ❌ Mistake 1

Forgetting `break`.

Wrong:

```javascript
case "Admin":

console.log("Admin");
```

Correct:

```javascript
case "Admin":

console.log("Admin");

break;
```

---

## ❌ Mistake 2

Forgetting `default`.

Wrong:

```javascript
switch(role){

case "Admin":

}
```

Correct:

```javascript
switch(role){

case "Admin":

break;

default:

console.log("Invalid Role");

}
```

---

## ❌ Mistake 3

Using `switch` for range comparisons.

Wrong:

```javascript
switch(marks >= 40){

}
```

Better:

```javascript
if (marks >= 40) {

}
```

---

# Important Facts

- `switch` compares one expression with multiple values.
- `case` defines possible choices.
- `break` stops execution.
- `default` handles unmatched cases.
- `switch` improves readability when many options exist.

---

# Interview Questions

## Basic

1. What is a `switch` statement?
2. Why do we use `switch`?
3. What is the purpose of `case`?
4. What is the purpose of `break`?
5. What is the purpose of `default`?

---

## Intermediate

6. What happens if `break` is omitted?
7. What is Fall Through in JavaScript?
8. When should you use `switch` instead of `if...else`?
9. Can multiple cases execute?
10. How does JavaScript evaluate a `switch` statement?

---

## Advanced Thinking

11. Explain `switch` using an e-commerce application.
12. Explain `switch` using a CRM dashboard.
13. Explain `switch` using a payment gateway.
14. How is `switch` used in role-based authentication?
15. Why does `switch` improve code readability?

---

# Quick Revision

```text
Input
      │
      ▼
switch
      │
      ▼
case
      │
      ▼
Match Found
      │
      ▼
Execute Code
      │
      ▼
break
      │
      ▼
Done
```

If no case matches:

```text
default
      │
      ▼
Execute Default Code
```

---

# Final Definition

```text
The switch statement is a decision-making statement that compares a single expression against multiple possible values and executes the matching block of code. If no match is found, the default block is executed.
```

---

# Hindi Summary

`switch` statement tab use kiya jata hai jab **ek hi variable ke bahut saare possible values** ho aur har value ke liye alag action perform karna ho.

Ye multiple `if...else if` statements ka cleaner aur more readable alternative hai.

Yaad rakho:

```text
One Value
      │
      ▼
switch
      │
      ▼
Multiple Cases
      │
      ▼
Matching Case
      │
      ▼
Execute Code
      │
      ▼
break
```

Real-world software jaise **CRM, LMS, E-Commerce, Banking, Dashboard, Menu Systems, Payment Gateways aur Role-Based Authentication** mein `switch` ka use bahut common hai.

Programming mein `switch` ka purpose sirf syntax likhna nahi hai, balki **multiple business choices ko clean aur maintainable code mein convert karna** hai.