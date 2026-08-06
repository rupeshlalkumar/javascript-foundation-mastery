# 💻 Visual Practice Notes: JavaScript Loops

> **Purpose:** Strengthen your JavaScript loop logic by solving practical coding problems that simulate real-world software engineering tasks.

---

# 🧠 Practice Mind Map

```text
                        💻 Loop Practice
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
      for Loop            while Loop           Logic Practice
        │                      │                      │
        │                      │                      │
Print Numbers           Count Numbers        Invoice Generator
Even Numbers            Countdown            Business Logic
Odd Numbers             Sum                 Automation
Tables                  Password Retry
Reverse                 Balance Check
```

---

# 📊 Practice Learning Flow

```text
Read Problem
      │
      ▼
Understand Logic
      │
      ▼
Choose Loop
      │
      ▼
Write Code
      │
      ▼
Run Program
      │
      ▼
Check Output
      │
      ▼
Improve Logic
```

---

# 🔁 Practice 1: Print Numbers (1–10)

### Problem

Print numbers from **1 to 10**.

### Thinking

```text
Start = 1
      │
      ▼
Continue Until 10
      │
      ▼
Increase by 1
      │
      ▼
Print Number
```

### Code

```javascript
for (let i = 1; i <= 10; i++) {
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
6
7
8
9
10
```

---

# 🔁 Practice 2: Print Even Numbers

### Thinking

```text
Start = 2
      │
      ▼
Increment by 2
      │
      ▼
Print
```

### Code

```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

### Output

```text
2
4
6
8
10
```

---

# 🔁 Practice 3: Print Odd Numbers

### Thinking

```text
Start = 1
      │
      ▼
Increment by 2
      │
      ▼
Print
```

### Code

```javascript
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
```

### Output

```text
1
3
5
7
9
```

---

# 🔁 Practice 4: Multiplication Table

### Thinking

```text
Input Number
      │
      ▼
Loop (1–10)
      │
      ▼
Multiply
      │
      ▼
Display Result
```

### Code

```javascript
const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}
```

---

# 🔁 Practice 5: Countdown

### Thinking

```text
Start = 10
      │
      ▼
Decrease
      │
      ▼
Stop at 1
```

### Code

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

---

# 🔁 Practice 6: Reverse Counting

### Thinking

```text
10
 │
 ▼
9
 │
 ▼
8
 │
 ▼
...
 │
 ▼
1
```

### Code

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

---

# 🔄 Practice 7: Count 1–10 (while)

### Thinking

```text
Initialize
      │
      ▼
Check Condition
      │
      ▼
Print
      │
      ▼
Increment
```

### Code

```javascript
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}
```

---

# 🔄 Practice 8: Countdown (while)

### Code

```javascript
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
```

---

# 🔄 Practice 9: Sum of Numbers

### Thinking

```text
Start Sum = 0
        │
        ▼
Loop
        │
        ▼
Add Current Number
        │
        ▼
Store Total
```

### Code

```javascript
let i = 1;
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(sum);
```

### Output

```text
55
```

---

# 🔄 Practice 10: Password Attempts

### Thinking

```text
Attempts = 1
      │
      ▼
Password Correct?
      │
 ┌────┴────┐
 │         │
Yes       No
 │         │
 ▼         ▼
Login   Try Again
```

### Code

```javascript
let attempts = 1;

while (attempts <= 3) {
    console.log(`Attempt ${attempts}`);
    attempts++;
}
```

---

# 🔄 Practice 11: Balance Checking

### Thinking

```text
Balance > 0 ?
      │
 ┌────┴────┐
 │         │
Yes       No
 │         │
 ▼         ▼
Continue  Stop
```

### Code

```javascript
let balance = 5000;

while (balance > 0) {
    console.log(`Balance: ₹${balance}`);
    balance -= 1000;
}
```

---

# 🧠 Logic Practice

# 💼 Generate Invoice Numbers

### Business Thinking

```text
Business Requirement

↓

Generate Invoice IDs

↓

Use Loop

↓

Display Invoice Numbers
```

---

### Expected Thinking

```text
Start Number
      │
      ▼
Loop
      │
      ▼
Generate Invoice Number
      │
      ▼
Display Result
```

---

### Code

```javascript
for (let invoice = 1001; invoice <= 1005; invoice++) {
    console.log(`INV-${invoice}`);
}
```

---

### Output

```text
INV-1001

INV-1002

INV-1003

INV-1004

INV-1005
```

---

# 🏢 Real Business Workflow

```text
Customer Places Order
          │
          ▼
Generate Invoice
          │
          ▼
Loop Creates ID
          │
          ▼
INV-1001

INV-1002

INV-1003
          │
          ▼
Save to Database
```

---

# 💡 Software Engineer Thinking

Instead of thinking:

```text
Print Numbers
```

Think:

```text
Generate Invoice IDs
```

---

Instead of:

```text
Loop 10 Times
```

Think:

```text
Process 10 Customers
```

---

Instead of:

```text
Print Products
```

Think:

```text
Display Product Catalog
```

---

Instead of:

```text
Print Records
```

Think:

```text
Generate Payroll Report
```

---

# 📊 Loop Selection Guide

```text
Need Fixed Iterations?

        │
   ┌────┴────┐
   │         │
  Yes       No
   │         │
   ▼         ▼
for Loop   while Loop
```

---

# 🎯 Practice Checklist

```text
☐ Print Numbers (1–10)

☐ Print Even Numbers

☐ Print Odd Numbers

☐ Multiplication Table

☐ Countdown

☐ Reverse Counting

☐ Count 1–10 (while)

☐ Countdown (while)

☐ Sum of Numbers

☐ Password Attempts

☐ Balance Checking

☐ Generate Invoice Numbers
```

---

# 🧠 Final Mental Model

```text
Business Problem
        │
        ▼
Identify Repetition
        │
        ▼
Choose Loop
        │
   ┌────┴─────┐
   │          │
for Loop   while Loop
   │          │
   ▼          ▼
Process Data
        │
        ▼
Business Output
```

> **💡 Professional Developer Mindset:** Don't practice loops only to print numbers. Think like a software engineer by solving real business problems such as generating invoice numbers, processing customer records, validating login attempts, checking account balances, and automating repetitive tasks in CRM, LMS, Banking, HRMS, ERP, and E-Commerce systems.
