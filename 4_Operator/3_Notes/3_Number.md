# 📘 JavaScript Notes

# Chapter 3: Number

---

# **1️⃣ 🧠 Objective**

Learn how JavaScript stores, manages, and performs **mathematical calculations** using the **Number** data type in real-world software applications.

---

# **2️⃣ 📖 Professional Definition**

A **Number** is a **primitive JavaScript data type** used to represent **numeric values** such as integers, decimal numbers, and mathematical results.

JavaScript follows the **IEEE 754 double-precision floating-point format**, allowing it to perform arithmetic calculations and mathematical operations efficiently.

📌 In simple words:

> **Number = Data used for calculations.**

---

# **3️⃣ 💡 Simple Definition**

A **Number** is a data type used to store **numeric values**.

Examples

```javascript
const age = 25;
const price = 499.99;
const temperature = -10;
```

✔ All of these are **Numbers**.

---

# **4️⃣ ❓ Why Do Numbers Exist?**

Almost every software application performs calculations.

Examples of numeric data:

* Age
* Salary
* Revenue
* Product Price
* GST
* Discount
* Student Marks
* Stock Quantity
* Invoice Total
* Account Balance

↓

JavaScript stores all these values using the **Number** data type.

---

# **5️⃣ ✍ Syntax**

### General Syntax

```javascript
const variableName = 100;
```

### Example

```javascript
const age = 25;
const price = 499.99;
```

---

# **6️⃣ 🔢 Types of Numbers**

## **6.1 Integer (Whole Number)**

A number **without a decimal point**.

Example

```javascript
const students = 100;
const stock = 50;
```

Examples

```
25
100
-50
0
```

Business Uses

* Employees
* Customers
* Orders
* Products
* Students

---

## **6.2 Decimal (Floating Point Number)**

A number **with a decimal point**.

Example

```javascript
const price = 499.99;
const gst = 18.5;
```

Business Uses

* Product Price
* GST
* Tax
* Interest Rate
* Discount Percentage

---

## **6.3 Infinity**

Represents a value greater than every finite number.

Example

```javascript
console.log(Infinity);
```

Output

```
Infinity
```

Division by Zero

```javascript
console.log(10 / 0);
```

Output

```
Infinity
```

Negative Infinity

```javascript
console.log(-10 / 0);
```

Output

```
-Infinity
```

📌 Usually appears during mathematical calculations.

---

## **6.4 NaN (Not a Number)**

NaN means:

```
Not a Number
```

Occurs when JavaScript cannot produce a valid numeric result.

Example

```javascript
console.log("Hello" * 5);
```

Output

```
NaN
```

Another Example

```javascript
Number("JavaScript");
```

↓

```
NaN
```

📌 NaN belongs to the **Number** type but represents an **invalid numeric value**.

---

# **7️⃣ ➕ Mathematical Operations**

## Addition (+)

```javascript
100 + 200
```

↓

```
300
```

---

## Subtraction (-)

```javascript
500 - 200
```

↓

```
300
```

---

## Multiplication (*)

```javascript
50 * 10
```

↓

```
500
```

---

## Division (/)

```javascript
100 / 4
```

↓

```
25
```

---

## Modulus (%)

Returns the remainder.

```javascript
10 % 3
```

↓

```
1
```

Useful For

* Even/Odd Numbers
* Pagination
* Scheduling

---

## Exponent (**)

Raises a number to a power.

```javascript
5 ** 2
```

↓

```
25
```

---

# **8️⃣ 🧠 Memory Representation**

Example

```javascript
const age = 25;
```

Memory

```text
Memory

┌──────────┐
│ age      │ → 25
└──────────┘
```

Example

```javascript
const price = 999.99;
```

```text
Memory

┌──────────┐
│ price    │ → 999.99
└──────────┘
```

📌 Variables store a **reference** to numeric values in memory.

---

# **9️⃣ 🌍 Real-World Examples**

## CRM

```javascript
const totalLeads = 250;
const monthlyRevenue = 150000;
```

↓

Numbers

---

## LMS

```javascript
const marks = 92;
const progress = 80;
```

↓

Numbers

---

## E-Commerce

```javascript
const price = 2500;
const stock = 75;
```

↓

Numbers

---

## Banking

```javascript
const accountBalance = 45000;
```

↓

Number

---

## Inventory

```javascript
const quantity = 500;
```

↓

Number

---

# **🔟 💼 Business Applications**

Numbers are used in:

✔ CRM

✔ ERP

✔ LMS

✔ E-Commerce

✔ Banking Software

✔ Hospital Management

✔ Billing Software

✔ Inventory Management

✔ HRMS

✔ Finance Applications

---

# **1️⃣1️⃣ 💰 Financial Calculations**

## Revenue Calculation

```javascript
const totalRevenue =
january + february + march;
```

↓

```
37000
```

---

## GST Formula

```
GST = Price × GST Rate ÷ 100
```

Example

```javascript
const gst =
(price * gstRate) / 100;
```

---

## Final Price with GST

```
Final Price = Price + GST
```

Example

```javascript
const finalPrice = price + gst;
```

---

## Discount Formula

```
Discount = Price × Discount Rate ÷ 100
```

---

## Final Price After Discount

```
Final Price = Price − Discount
```

---

# **1️⃣2️⃣ ⚠ Common Beginner Mistakes**

## ❌ Using Quotes Around Numbers

Wrong

```javascript
const age = "25";
```

↓

String

Correct

```javascript
const age = 25;
```

↓

Number

---

## ❌ Ignoring NaN

Wrong

```javascript
"Hello" * 5
```

↓

```
NaN
```

✔ Always validate numeric input before calculations.

---

## ❌ Confusing Integer & Decimal

Wrong Thinking

```
5 = 5.00
```

Correct

```
5        → Integer

499.99   → Decimal
```

Use

✔ Integer → Counts

✔ Decimal → Prices

---

# **1️⃣3️⃣ ⭐ Interview Questions**

## Basic

1. What is the Number data type?
2. Is Number a primitive data type?
3. Difference between Integer and Decimal?
4. What is Infinity?
5. What is NaN?

---

## Intermediate

6. Why does JavaScript use one Number type?
7. What is IEEE 754?
8. What happens when dividing by zero?
9. How is NaN produced?
10. Why is Number important in programming?

---

## Business-Oriented

11. Why is Number important in CRM?
12. How do you calculate GST?
13. How do you calculate a Discount?
14. How do you calculate Revenue?
15. Why should prices and quantities use Number?

---

# **1️⃣4️⃣ 🧠 Mental Model**

```text
Business Data
       ↓
Numeric Values
       ↓
Number
       ↓
Calculations
       ↓
JavaScript Program
```

Example

```text
Product Price
      ↓
499.99
      ↓
Number
```

---

# **1️⃣5️⃣ ⚡ Quick Revision**

```text
Number

↓

Stores Numeric Values

↓

Integer

Decimal

Infinity

NaN

↓

Mathematical Operations

+

-

*

/

%

**

↓

Used In

Age

Salary

Revenue

Price

GST

Discount

Marks

Stock

Invoice

Balance

↓

Business Applications

CRM

ERP

LMS

E-Commerce

Banking

Billing

Inventory
```

---

# **1️⃣6️⃣ 📖 Vocabulary**

| Word                | Hindi Meaning     |
| ------------------- | ----------------- |
| Number              | संख्या            |
| Integer             | पूर्णांक          |
| Decimal             | दशमलव             |
| Numeric Value       | संख्यात्मक मान    |
| Primitive Data Type | मूल डेटा प्रकार   |
| Calculation         | गणना              |
| Addition            | जोड़              |
| Subtraction         | घटाव              |
| Multiplication      | गुणा              |
| Division            | भाग               |
| Modulus             | शेषफल             |
| Exponent            | घात               |
| Infinity            | अनंत              |
| NaN                 | अमान्य संख्या     |
| Revenue             | राजस्व            |
| Salary              | वेतन              |
| Discount            | छूट               |
| GST                 | वस्तु एवं सेवा कर |
| Stock               | भंडार             |
| Invoice             | चालान             |
| Balance             | शेष राशि          |

---

# **1️⃣7️⃣ 💡 Exam & Interview Tips**

✔ Remember the **professional definition** of the Number data type.

✔ Know the difference between **Integer, Decimal, Infinity, and NaN**.

✔ Memorize the six arithmetic operators:

* `+`
* `-`
* `*`
* `/`
* `%`
* `**`

✔ Understand why JavaScript uses **one Number type** for both integers and decimals.

✔ Practice real-world calculations like:

* GST
* Discount
* Revenue
* Salary
* Invoice Total

✔ Always remember:

* `"25"` → **String**
* `25` → **Number**

✔ Relate the Number data type to real-world business applications such as CRM, Banking, E-Commerce, ERP, Inventory, and Billing systems. This makes interview answers stronger and improves conceptual understanding.
