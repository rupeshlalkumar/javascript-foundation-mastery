```javascript
// =============================================
// Mini Project 1
// Profit Calculator
// =============================================

console.log("========== Profit Calculator ==========");

// ---------------------------------------------
// Input
// ---------------------------------------------

const costPrice = 800;
const sellingPrice = 1000;

// ---------------------------------------------
// Calculate Profit / Loss
// ---------------------------------------------

const profit = sellingPrice - costPrice;
const loss = costPrice - sellingPrice;

// ---------------------------------------------
// Calculate Profit Percentage
// ---------------------------------------------

const profitPercentage = (profit / costPrice) * 100;

// ---------------------------------------------
// Output
// ---------------------------------------------

console.log("Cost Price:", costPrice);
console.log("Selling Price:", sellingPrice);

console.log("Profit:", profit);
console.log("Loss:", loss);
console.log("Profit Percentage:", profitPercentage + "%");
```

### ✅ Expected Output (Case 1: Profit)

```text
========== Profit Calculator ==========

Cost Price: 800
Selling Price: 1000

Profit: 200
Loss: -200
Profit Percentage: 25%
```

---

## 🔹 Improved Version (Professional Business Logic)

> This version is closer to how real business software works.

```javascript
// =============================================
// Mini Project 1
// Profit Calculator (Professional Version)
// =============================================

console.log("========== Profit Calculator ==========");

// Input
const costPrice = 1200;
const sellingPrice = 1500;

// Profit / Loss Calculation
const profit = sellingPrice - costPrice;
const loss = costPrice - sellingPrice;

// Profit Percentage
const profitPercentage = (profit / costPrice) * 100;

// Output
console.log("Cost Price:", costPrice);
console.log("Selling Price:", sellingPrice);

if (sellingPrice > costPrice) {
  console.log("Status: Profit");
  console.log("Profit:", profit);
  console.log("Profit Percentage:", profitPercentage + "%");
} else if (sellingPrice < costPrice) {
  console.log("Status: Loss");
  console.log("Loss:", loss);
} else {
  console.log("Status: No Profit No Loss");
}
```

### ✅ Expected Output

```text
========== Profit Calculator ==========

Cost Price: 1200
Selling Price: 1500

Status: Profit
Profit: 300
Profit Percentage: 25%
```

---

# 🧠 Logic Building

```text
Business Data
        │
        ▼
Cost Price
Selling Price
        │
        ▼
Store in Variables
        │
        ▼
Apply Operators
        │
        ├───────────────┐
        ▼               ▼
Selling - Cost      Cost - Selling
        │               │
     Profit          Loss
        │
        ▼
(Profit ÷ Cost Price) × 100
        │
        ▼
Profit Percentage
        │
        ▼
Display Business Result
```

---

## 🎯 Concepts Used

* ✅ Variables
* ✅ Number Data Type
* ✅ Arithmetic Operators (`+`, `-`, `*`, `/`)
* ✅ Comparison Operators (`>`, `<`)
* ✅ `if`, `else if`, `else` (preview of Day 4)
* ✅ `console.log()`

This is an excellent **Day 3 mini project** because it combines everything you've learned so far: **Variables → Data Types → Operators → Real Business Logic**. Later, you'll extend this into a complete billing and inventory system.
