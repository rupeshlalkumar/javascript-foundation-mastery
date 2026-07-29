# 📑 JavaScript Operators Cheat Sheet

> **Purpose:** Quick revision guide for JavaScript Operators.

---

# 📚 JavaScript Operators

Operators are special symbols used to perform operations on values and variables.

```text
Values
     │
     ▼
Operator
     │
     ▼
Result
```

---

# 1. Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `count++` | `+1` |
| `--` | Decrement | `count--` | `-1` |

---

## Quick Example

```javascript
const a = 20;
const b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);
```

---

## Business Examples

```text
+
Total Revenue

-

Profit / Loss

*

Price × Quantity

/

Average Marks

%

Even / Odd

++

Visitors Count

--

Stock Quantity
```

---

# 2. Comparison Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal | `10 == "10"` | `true` |
| `===` | Strict Equal | `10 === "10"` | `false` |
| `!=` | Not Equal | `10 != 5` | `true` |
| `!==` | Strict Not Equal | `10 !== "10"` | `true` |
| `>` | Greater Than | `20 > 10` | `true` |
| `<` | Less Than | `10 < 20` | `true` |
| `>=` | Greater Than or Equal | `18 >= 18` | `true` |
| `<=` | Less Than or Equal | `18 <= 20` | `true` |

---

## Quick Example

```javascript
console.log(10 == "10");
console.log(10 === "10");
console.log(20 > 10);
console.log(15 <= 20);
```

---

## Business Examples

```text
===

Login Validation

>

Age Verification

<

Stock Availability

>=

Course Eligibility

!==

Password Validation
```

---

# 3. Logical Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&&` | AND | `true && true` | `true` |
| `||` | OR | `true || false` | `true` |
| `!` | NOT | `!true` | `false` |

---

## Quick Example

```javascript
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);
```

---

## Business Examples

```text
&&

User Login

Payment Verification

||

Admin Access

Manager Access

!

Guest User

Inactive Account
```

---

# Interview Tips

## Use `===` Instead of `==`

✅ Preferred

```javascript
10 === 10
```

❌ Avoid

```javascript
10 == "10"
```

---

## Remember

```text
Arithmetic
↓

Calculations
```

```text
Comparison
↓

Decision Making
```

```text
Logical
↓

Multiple Conditions
```

---

# Operator Mental Model

```text
Business Data
        │
        ▼
Variables
        │
        ▼
Operators
        │
        ▼
Calculation / Comparison / Decision
        │
        ▼
Business Result
```

---

# Real-World Applications

```text
CRM
↓

Lead Qualification

LMS
↓

Course Eligibility

E-Commerce
↓

Price Calculation

Banking
↓

Balance Verification

Payroll
↓

Salary Calculation

Inventory
↓

Stock Management
```

---

# Common Mistakes

❌ Using `==` instead of `===`

❌ Dividing by zero

❌ Confusing `=` with `===`

❌ Using `&&` when `||` is needed

❌ Forgetting operator precedence

---

# Operator Summary

| Category | Purpose | Output |
|----------|---------|--------|
| Arithmetic | Perform Calculations | Number |
| Comparison | Compare Values | Boolean (`true` / `false`) |
| Logical | Combine Conditions | Boolean (`true` / `false`) |

---

# Memory Trick

```text
🧮 Arithmetic
        ↓
Calculate

⚖️ Comparison
        ↓
Compare

🧠 Logical
        ↓
Decide
```

---

# One-Line Revision

```text
Arithmetic Operators → Perform Calculations

Comparison Operators → Compare Values

Logical Operators → Combine Conditions & Make Decisions
```