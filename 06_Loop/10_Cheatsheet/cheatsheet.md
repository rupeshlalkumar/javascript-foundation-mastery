# 📑 JavaScript Loops Cheat Sheet

> **Purpose:** Quick revision guide for JavaScript Loops.

---

# 📚 JavaScript Loops

Loops are used to execute the same block of code repeatedly until a specified condition becomes false.

```text
Start
   │
   ▼
Initialize
   │
   ▼
Check Condition
   │
 ┌─┴─────────┐
 │           │
True       False
 │           │
 ▼           ▼
Execute     Stop
 │
 ▼
Update
 │
 └───────────┘
```

---

# 🔁 1. for Loop

## Purpose

Use a **for loop** when you know how many times the code should execute.

---

## Syntax

```javascript
for (initialization; condition; increment) {
    // Code
}
```

---

## Example

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Output

```text
1
2
3
4
5
```

---

## Execution Flow

```text
Initialization
      │
      ▼
Check Condition
      │
      ▼
Execute Code
      │
      ▼
Increment
      │
      ▼
Back to Condition
```

---

## Business Examples

```text
Invoice Number Generation

Employee IDs

Student Roll Numbers

Product Listing

Attendance Report
```

---

# 🔄 2. while Loop

## Purpose

Use a **while loop** when the number of iterations is unknown.

---

## Syntax

```javascript
while (condition) {
    // Code
}
```

---

## Example

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### Output

```text
1
2
3
4
5
```

---

## Execution Flow

```text
Start
   │
   ▼
Check Condition
   │
 ┌─┴─────────┐
 │           │
True       False
 │           │
 ▼           ▼
Execute     Stop
 │
 ▼
Update Variable
 │
 └────────────► Check Again
```

---

## Business Examples

```text
Login Retry System

OTP Verification

ATM Balance Check

Password Attempts

Data Processing
```

---

# ⚖️ for vs while

| Feature        | `for` Loop       | `while` Loop       |
| -------------- | ---------------- | ------------------ |
| Best For       | Known iterations | Unknown iterations |
| Initialization | Inside loop      | Outside loop       |
| Condition      | Inside loop      | Inside loop        |
| Increment      | Inside loop      | Manual             |
| Readability    | More compact     | More flexible      |

---

# 💻 Quick Examples

## Print Numbers

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

## Even Numbers

```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

---

## Odd Numbers

```javascript
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
```

---

## Reverse Counting

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

---

## Multiplication Table

```javascript
const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}
```

---

## while Example

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

---

# 💼 Business Workflow

```text
Business Data
      │
      ▼
Loop
      │
      ▼
Process Each Record
      │
      ▼
Generate Output
```

---

# 🌍 Real-World Applications

```text
CRM
↓
Customer Records

LMS
↓
Student Lists

E-Commerce
↓
Product Listing

Inventory
↓
Stock Processing

Payroll
↓
Salary Generation

HRMS
↓
Attendance Reports

Banking
↓
Transaction History

ERP
↓
Business Data Processing
```

---

# ⚠️ Common Mistakes

❌ Forgetting initialization

❌ Incorrect loop condition

❌ Missing increment/decrement

❌ Creating an infinite loop

❌ Updating the wrong variable

❌ Off-by-one errors (`<=` vs `<`)

---

# 🚀 Best Practices

✅ Use `for` when the number of iterations is known.

✅ Use `while` when iterations depend on a condition.

✅ Use meaningful variable names (`invoiceNumber`, `employeeId`, `productIndex`).

✅ Keep loop logic simple and readable.

✅ Avoid unnecessary nested loops for better performance.

---

# 🎯 Interview Tips

### Use `for` When

```text
Known Number of Iterations

↓

Print Numbers

Generate IDs

Display Products

Attendance Reports
```

---

### Use `while` When

```text
Unknown Number of Iterations

↓

Login Retry

OTP Verification

Password Attempts

Waiting for User Input
```

---

# 🧠 Memory Trick

```text
🔁 for
        ↓
Known Count

🔄 while
        ↓
Unknown Count

♾️ Infinite Loop
        ↓
Condition Never Becomes False
```

---

# 🏗️ Loop Mental Model

```text
Start
   │
   ▼
Initialize
   │
   ▼
Check Condition
   │
 ┌─┴─────────┐
 │           │
True       False
 │           │
 ▼           ▼
Execute     End
 │
 ▼
Update
 │
 └──────────► Repeat
```

---

# 📊 Loop Summary

| Loop    | Purpose                             | Best Use                        |
| ------- | ----------------------------------- | ------------------------------- |
| `for`   | Repeat code a fixed number of times | Number generation, IDs, tables  |
| `while` | Repeat while a condition is true    | Login, OTP, retries, user input |

---

# 📌 One-Line Revision

```text
for Loop → Best when the number of iterations is known.

while Loop → Best when the number of iterations is unknown.

Loops → Automate repetitive tasks efficiently.
```

---

# ⚡ 30-Second Interview Revision

```text
✔ Loops repeat code automatically.

✔ for → Known iterations.

✔ while → Unknown iterations.

✔ Always update the loop variable.

✔ Avoid infinite loops.

✔ Used in CRM, LMS, Banking, HRMS, Payroll, Inventory, ERP, and E-Commerce.

✔ Every loop follows:
Initialize → Condition → Execute → Update → Repeat.
```
