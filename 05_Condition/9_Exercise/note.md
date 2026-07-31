# 🤖 AI Notes: JavaScript Conditions with Real Business Examples

The purpose of this section is to understand **how Conditions are used in real software applications** and strengthen your logic-building skills through practical exercises.

---

# 📚 Explain JavaScript Conditions with Real Business Examples

## Professional Definition

A **Condition** is a decision-making statement that allows JavaScript to execute different blocks of code based on whether a specified condition is **true** or **false**.

Conditions help software respond intelligently to different situations.

---

# Why Do Conditions Exist?

Imagine every software application making the same decision for every user.

Example:

```text
Everyone can log in.

Everyone gets Admin access.

Everyone receives a discount.

Everyone passes the exam.
```

That would be incorrect.

Software needs to ask questions before making decisions.

```text
Is the user logged in?

Is payment completed?

Is the customer eligible?

Does the product exist?

Are marks greater than 40?
```

These questions are solved using **Conditions**.

---

# Mental Model

```text
Business Data
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

# Real Business Example 1: Login System

Input

```text
Username

Password
```

Business Logic

```text
Correct Password?

        │
   ┌────┴────┐
   │         │
 Yes        No
   │         │
   ▼         ▼
Login      Error Message
```

JavaScript

```javascript
const password = "admin123";

if (password === "admin123") {

    console.log("Login Successful");

} else {

    console.log("Invalid Password");

}
```

---

# Real Business Example 2: ATM Machine

Input

```text
Account Balance

Withdrawal Amount
```

Thinking

```text
Balance >= Withdrawal ?

        │
   ┌────┴────┐
   │         │
 Yes        No
   │         │
   ▼         ▼
Cash      Insufficient Balance
```

---

# Real Business Example 3: E-Commerce Website

Input

```text
Stock Quantity
```

Thinking

```text
Stock > 0 ?

        │
   ┌────┴────┐
   │         │
 Yes        No
   │         │
   ▼         ▼
Buy Now    Out of Stock
```

---

# Real Business Example 4: CRM System

Input

```text
Lead Score
```

Business Rule

```text
Lead Score >= 80

↓

High Priority Lead

Otherwise

↓

Normal Lead
```

---

# Real Business Example 5: LMS

Input

```text
Marks
```

Business Rule

```text
Marks >= 40

↓

Pass

Otherwise

↓

Fail
```

---

# Real Business Example 6: Banking System

Input

```text
Credit Score
```

Business Rule

```text
Credit Score >= 750

↓

Loan Approved

Otherwise

↓

Loan Rejected
```

---

# Real Business Example 7: HRMS

Input

```text
Attendance
```

Business Rule

```text
Attendance >= 75%

↓

Eligible for Exam

Otherwise

↓

Not Eligible
```

---

# Real Business Example 8: Food Delivery App

Input

```text
Order Status
```

Possible Values

```text
Preparing

Out for Delivery

Delivered

Cancelled
```

Use

```javascript
switch()
```

---

# Real Business Example 9: User Roles

Possible Roles

```text
Admin

Manager

Employee

Guest
```

Decision

```text
Different Dashboard
```

---

# Real Business Example 10: Payment Gateway

Input

```text
Payment Status
```

Business Rule

```text
Success

↓

Generate Invoice

Failure

↓

Retry Payment
```

---

# 📝 Practice Exercises

## 10 if Statement Exercises

### Exercise 1

Check whether a person is eligible to vote.

Input

```text
Age
```

Rule

```text
Age >= 18
```

---

### Exercise 2

Check whether stock is available.

Input

```text
Stock
```

Rule

```text
Stock > 0
```

---

### Exercise 3

Check whether a student is eligible for admission.

Rule

```text
Marks >= 75
```

---

### Exercise 4

Check whether salary is greater than ₹50,000.

---

### Exercise 5

Check whether GST is applicable.

Rule

```text
Price >= 1000
```

---

### Exercise 6

Check whether revenue crossed ₹1,00,000.

---

### Exercise 7

Check whether battery percentage is below 20%.

---

### Exercise 8

Check whether customer is Premium.

---

### Exercise 9

Check whether a file exists before opening.

---

### Exercise 10

Check whether user email is verified.

---

# 📝 10 if...else Exercises

### Exercise 1

Pass / Fail

```text
Marks >= 40
```

---

### Exercise 2

Login Success / Failed

---

### Exercise 3

Payment Success / Failed

---

### Exercise 4

Product Available / Out of Stock

---

### Exercise 5

Loan Approved / Rejected

---

### Exercise 6

Age Eligible / Not Eligible

---

### Exercise 7

Exam Eligible / Not Eligible

---

### Exercise 8

Discount Available / Not Available

---

### Exercise 9

Attendance Complete / Incomplete

---

### Exercise 10

Email Verified / Verification Required

---

# 📝 10 switch Statement Exercises

### Exercise 1

Display day of the week.

Values

```text
Monday

Tuesday

Wednesday

Thursday

Friday

Saturday

Sunday
```

---

### Exercise 2

Display user role.

Values

```text
Admin

Manager

Employee

Guest
```

---

### Exercise 3

Display payment method.

Values

```text
Cash

Card

UPI

Net Banking
```

---

### Exercise 4

Display order status.

Values

```text
Pending

Processing

Shipped

Delivered

Cancelled
```

---

### Exercise 5

Display language.

Values

```text
English

Hindi

Bengali

Tamil
```

---

### Exercise 6

Display traffic signal action.

Values

```text
Red

Yellow

Green
```

---

### Exercise 7

Display month name.

Values

```text
1 to 12
```

---

### Exercise 8

Display grade.

Values

```text
A

B

C

D

F
```

---

### Exercise 9

Display menu selection.

Values

```text
Home

Profile

Settings

Logout
```

---

### Exercise 10

Display shipping type.

Values

```text
Standard

Express

Same Day
```

---

# 🎯 Learning Outcome

After completing these exercises, you will be able to:

- ✅ Understand how JavaScript Conditions solve real-world business problems.
- ✅ Write programs using `if`, `if...else`, and `switch`.
- ✅ Build decision-making logic for applications like **CRM, LMS, E-Commerce, Banking, HRMS, and Inventory Management**.
- ✅ Strengthen your logical thinking for interviews and full-stack development.