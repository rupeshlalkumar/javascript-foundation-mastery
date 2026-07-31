# 2. Arithmetic Operators (In Depth)

## 2.1 Professional Definition

**Arithmetic Operators** are special symbols used to perform mathematical calculations on numeric values.

They help JavaScript calculate, update, and manipulate numbers.

Examples include:

```text
+
-
*
/
%
**
++
--
```

Arithmetic operators are one of the most frequently used operators in JavaScript and form the foundation of almost every software application.

---

# 2.2 Why Arithmetic Operators Exist?

Imagine JavaScript without arithmetic operators.

Can it calculate:

- Revenue?
- Profit?
- GST?
- Salary?
- Student Percentage?
- Product Price?

The answer is:

```text
No
```

Arithmetic operators allow JavaScript to perform mathematical operations automatically.

Without them, software would not be able to calculate anything.

---

# 2.3 Mental Model

Think like this:

```text
Numbers
      │
      ▼
Arithmetic Operator
      │
      ▼
Calculation
      │
      ▼
Result
```

Example:

```text
500 + 200
      │
      ▼
700
```

---

# 2.4 Addition Operator (+)

## Definition

The Addition (`+`) operator adds two or more values together.

Syntax:

```javascript
value1 + value2
```

Example:

```javascript
const number1 = 50;
const number2 = 25;

const total = number1 + number2;

console.log(total);
```

Output:

```text
75
```

---

## Business Example

Revenue Calculation

```javascript
const onlineSales = 50000;
const offlineSales = 25000;

const totalRevenue = onlineSales + offlineSales;

console.log(totalRevenue);
```

Output:

```text
75000
```

Business Thinking:

```text
Online Revenue
        +
Offline Revenue
        ↓
Total Revenue
```

---

# 2.5 Subtraction Operator (-)

## Definition

The Subtraction (`-`) operator subtracts one value from another.

Syntax:

```javascript
value1 - value2
```

Example:

```javascript
const sellingPrice = 1200;
const costPrice = 900;

const profit = sellingPrice - costPrice;

console.log(profit);
```

Output:

```text
300
```

---

## Business Example

Profit Calculation

```text
Selling Price
        -
Cost Price
        ↓
Profit
```

---

# 2.6 Multiplication Operator (*)

## Definition

The Multiplication (`*`) operator multiplies two numbers.

Syntax:

```javascript
value1 * value2
```

Example:

```javascript
const productPrice = 2500;
const quantity = 4;

const totalPrice = productPrice * quantity;

console.log(totalPrice);
```

Output:

```text
10000
```

---

## Business Example

Invoice Calculation

```text
Product Price
        ×
Quantity
        ↓
Total Amount
```

Used in:

- Billing Software
- POS Systems
- E-Commerce

---

# 2.7 Division Operator (/)

## Definition

The Division (`/`) operator divides one number by another.

Syntax:

```javascript
value1 / value2
```

Example:

```javascript
const totalMarks = 450;
const totalSubjects = 5;

const average = totalMarks / totalSubjects;

console.log(average);
```

Output:

```text
90
```

---

## Business Example

Average Marks

```text
Total Marks
        ÷
Subjects
        ↓
Average
```

---

# 2.8 Modulus Operator (%)

## Definition

The Modulus (`%`) operator returns the remainder after division.

Syntax:

```javascript
value1 % value2
```

Example:

```javascript
console.log(10 % 3);
```

Output:

```text
1
```

Because:

```text
10 ÷ 3

Quotient = 3

Remainder = 1
```

---

## Business Example

Checking Even or Odd

```javascript
const number = 8;

console.log(number % 2);
```

Output:

```text
0
```

Meaning:

```text
Even Number
```

Used in:

- Seat Allocation
- Employee IDs
- Order Numbers
- Batch Processing

---

# 2.9 Exponentiation Operator (**)

## Definition

The Exponentiation (`**`) operator raises a number to the power of another number.

Syntax:

```javascript
base ** exponent
```

Example:

```javascript
console.log(5 ** 2);
```

Output:

```text
25
```

Meaning:

```text
5 × 5
```

---

## Business Example

Compound Growth

```javascript
const investment = 1000;

console.log(investment ** 2);
```

---

# 2.10 Increment Operator (++)

## Definition

The Increment (`++`) operator increases a value by one.

Example:

```javascript
let visitors = 100;

visitors++;

console.log(visitors);
```

Output:

```text
101
```

---

## Business Example

Website Visitors

```text
100 Visitors

New Visitor Arrives

↓

101 Visitors
```

Used in:

- Visitor Counter
- Order Counter
- Student Count

---

# 2.11 Decrement Operator (--)

## Definition

The Decrement (`--`) operator decreases a value by one.

Example:

```javascript
let stock = 50;

stock--;

console.log(stock);
```

Output:

```text
49
```

---

## Business Example

Inventory System

```text
Stock = 50

One Product Sold

↓

49
```

Used in:

- Inventory
- Seat Availability
- Remaining Balance

---

# 2.12 Memory Representation

Example:

```javascript
const price = 500;
const quantity = 4;

const total = price * quantity;
```

Memory:

```text
┌──────────────┐
│ price        │ → 500
├──────────────┤
│ quantity     │ → 4
├──────────────┤
│ total        │ → 2000
└──────────────┘
```

---

# 2.13 Business Thinking

Instead of thinking:

```text
+
```

Think:

```text
Revenue

Salary

Total Sales
```

Instead of:

```text
-
```

Think:

```text
Profit

Remaining Balance

Stock Left
```

Instead of:

```text
*
```

Think:

```text
Price × Quantity

Monthly Salary × 12
```

Instead of:

```text
/
```

Think:

```text
Average Marks

Revenue Per Month
```

Instead of:

```text
%
```

Think:

```text
Even/Odd

Batch Distribution
```

---

# 2.14 Real Business Examples

## Revenue

```javascript
const totalRevenue = onlineSales + offlineSales;
```

---

## Profit

```javascript
const profit = sellingPrice - costPrice;
```

---

## Discount

```javascript
const finalPrice = originalPrice - discount;
```

---

## GST

```javascript
const totalAmount = price + gst;
```

---

## Annual Salary

```javascript
const annualSalary = monthlySalary * 12;
```

---

## Average Marks

```javascript
const average = totalMarks / totalSubjects;
```

---

# 2.15 Common Beginner Mistakes

### Mistake 1

Using the wrong operator.

Wrong:

```javascript
const total = 10 - 5;
```

Correct:

```javascript
const total = 10 + 5;
```

---

### Mistake 2

Dividing by zero.

```javascript
10 / 0
```

Output:

```text
Infinity
```

---

### Mistake 3

Forgetting operator precedence.

Example:

```javascript
10 + 5 * 2
```

Output:

```text
20
```

Not:

```text
30
```

---

### Mistake 4

Using `++` or `--` on constant variables.

Wrong:

```javascript
const count = 10;

count++;
```

Result:

```text
Error
```

Use `let` instead.

---

# 2.16 Interview Questions

## Basic

1. What are arithmetic operators?
2. Name all arithmetic operators in JavaScript.
3. What is the difference between `+` and `*`?
4. What is the modulus operator?

---

## Intermediate

5. Difference between division and modulus?
6. What is exponentiation?
7. Difference between `++` and `+1`?
8. Explain operator precedence.

---

## Business-Based

9. How are arithmetic operators used in CRM software?
10. How would you calculate profit in JavaScript?
11. How is GST calculated?
12. How would you calculate annual salary?

---

# 2.17 Final Definition

```text
Arithmetic Operators are special symbols used to perform mathematical calculations such as addition, subtraction, multiplication, division, remainder, exponentiation, increment, and decrement on numeric values.
```

---

# 🇮🇳 Hindi Summary

Arithmetic Operators JavaScript ke mathematical tools hain jo numbers par calculations perform karte hain. Inki madad se hum **Revenue**, **Profit**, **GST**, **Discount**, **Salary**, **Average Marks**, aur anya business calculations karte hain.

Har software application, chahe woh **CRM**, **LMS**, **E-Commerce**, **Banking**, ya **Payroll System** ho, arithmetic operators ka use karta hai. In operators ko sirf mathematical symbols ke roop mein mat dekho. Inhe **real-world business calculations** ke roop mein samjho. Jab aap calculation ke peeche ka business logic samajh jaate ho, tab aap real software applications develop karne ki foundation bana lete ho.