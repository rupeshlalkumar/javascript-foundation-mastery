
# 📄 JavaScript Cheat Sheet

# Chapter 3: Number

---

# 🔢 Number

### Definition

A **Number** is a **primitive data type** used to store **numeric values** for calculations.

```javascript
const age = 25;
const price = 499.99;
```

---

# 📌 Syntax

```javascript
const age = 25;
const price = 499.99;
const temperature = -10;
```

---

# 📊 Types

| Type     | Example       | Common Use          |
| -------- | ------------- | ------------------- |
| Integer  | `25`          | Counts              |
| Decimal  | `499.99`      | Prices              |
| Infinity | `10 / 0`      | Infinite value      |
| NaN      | `"Hello" * 5` | Invalid calculation |

---

# ➕ Arithmetic Operators

| Operator | Purpose        | Example  |
| -------- | -------------- | -------- |
| `+`      | Addition       | `10 + 5` |
| `-`      | Subtraction    | `10 - 5` |
| `*`      | Multiplication | `10 * 5` |
| `/`      | Division       | `10 / 5` |
| `%`      | Remainder      | `10 % 3` |
| `**`     | Power          | `5 ** 2` |

---

# 💰 Common Business Formulas

```text
GST = Price × Rate ÷ 100

Final Price = Price + GST

Discount = Price × Rate ÷ 100

Final Price = Price − Discount

Revenue = Month1 + Month2 + Month3
```

---

# 💼 Common Uses

```text
Age
Price
Salary
Revenue
GST
Discount
Marks
Stock
Quantity
Invoice
Balance
Profit
```

---

# 🏢 Used In

* CRM
* ERP
* LMS
* E-Commerce
* Banking
* Billing
* Inventory
* HRMS
* Finance

---

# ⚠ Special Values

```javascript
10 / 0
// Infinity

-10 / 0
// -Infinity

"Hello" * 5
// NaN
```

---

# ❌ Common Mistakes

```javascript
const age = "25";   // String ❌

const age = 25;     // Number ✅
```

```javascript
"Hello" * 5;
// NaN
```

---

# 🧠 Mental Model

```text
Business Data
      ↓
Numeric Value
      ↓
Number
      ↓
Calculations
      ↓
Software
```

---

# ⚡ Quick Revision

```text
Number

Stores Numeric Values

↓

Integer
Decimal
Infinity
NaN

↓

Operators

+
-
*
/
%
**

↓

Used For

Age
Price
Salary
Revenue
GST
Discount
Marks
Stock
```

---

# 🎯 Remember

* ✔ Primitive Data Type
* ✔ Stores numeric values
* ✔ One Number type for integers and decimals
* ✔ Special values: `Infinity`, `-Infinity`, `NaN`
* ✔ `"25"` → String
* ✔ `25` → Number

---