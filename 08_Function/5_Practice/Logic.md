# 💻 Practice: JavaScript Functions — Visual Notes

## 🧠 Practice Goal

Today’s practice is designed to move from:

```text
Understand
   ↓
Write
   ↓
Call
   ↓
Pass Data
   ↓
Return Result
   ↓
Build Reusable Logic
```

---

# 1. 🧩 Create a Simple Function

### Basic Structure

```javascript
function greet() {

}
```

### Visual Anatomy

```text
function greet() {
        │
        ├── function → Keyword
        │
        ├── greet → Function Name
        │
        ├── () → Parameter Area
        │
        └── {} → Function Body
}
```

### Practice

```javascript
function greet() {
    console.log("Hello!");
}
```

### 🧠 Think

```text
Function Definition
        ↓
Function waits
        ↓
No execution yet
```

---

# 2. ▶️ Call the Function

A function executes when you **call** it.

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

### Execution Flow

```text
Define greet()
      ↓
    Wait
      ↓
   greet()
      ↓
 Execute Function
      ↓
"Hello!"
```

### 🟨 Remember

> **Define → Call → Execute**

---

# 3. 📥 Function With Parameters

Parameters allow a function to receive data.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
```

### Visual

```text
function greet(name)
              │
              ▼
          Parameter
              │
              ▼
       Function Logic
```

### Practice

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
```

---

# 4. 📦 Pass Arguments

An argument is the actual value passed into the function.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Rupesh");
```

### Parameter vs Argument

```text
function greet(name)
              ↑
          Parameter


greet("Rupesh")
      ↑
    Argument
```

### Execution Flow

```text
"Rupesh"
    ↓
Parameter: name
    ↓
Function
    ↓
Hello, Rupesh!
```

### 🟨 Memory Trick

```text
Parameter → Placeholder

Argument → Actual Value
```

---

# 5. 📤 Return a Value

A function can send a result back using `return`.

```javascript
function add(a, b) {
    return a + b;
}
```

Call it:

```javascript
const result = add(10, 20);

console.log(result);
```

### Visual Flow

```text
10 + 20
   ↓
add(a, b)
   ↓
Process
   ↓
return 30
   ↓
result
   ↓
30
```

### Important Difference

```text
console.log()
      ↓
Displays value


return
      ↓
Sends value back
```

---

# 6. 🔢 Create Multiple Functions

Real applications usually contain many small functions.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
```

### Visual Architecture

```text
             Application
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
    greet()     add()    subtract()
       │          │          │
       ↓          ↓          ↓
   Greeting     Sum       Difference
```

### Call Them

```javascript
greet("Rupesh");

const sum = add(10, 20);
console.log(sum);

const difference = subtract(20, 10);
console.log(difference);
```

---

# 💼 Business Practice

Connect each function to a real software task.

```text
User
 ↓
Application
 ↓
Function
 ↓
Business Logic
 ↓
Result
```

### Examples

| Function            | Business Task  |
| ------------------- | -------------- |
| `greet()`           | User Greeting  |
| `calculateTotal()`  | E-Commerce     |
| `calculateProfit()` | Business       |
| `checkStock()`      | Inventory      |
| `checkLogin()`      | Authentication |
| `calculateSalary()` | Payroll        |

---

# 🧪 Practice Progression

Complete the exercises in this order:

```text
LEVEL 1
   ↓
Create a Function
   ↓
LEVEL 2
   ↓
Call the Function
   ↓
LEVEL 3
   ↓
Add Parameters
   ↓
LEVEL 4
   ↓
Pass Arguments
   ↓
LEVEL 5
   ↓
Return a Value
   ↓
LEVEL 6
   ↓
Create Multiple Functions
```

---

# 🎯 Final Practice Challenge

Build these functions yourself **without copying a solution**:

```javascript
greet()

calculateTotal(price, quantity)

calculateProfit(sellingPrice, costPrice)

checkStock(stock)

add(a, b)
```

### Expected Thinking

```text
Business Problem
      ↓
Identify Task
      ↓
Create Function
      ↓
Parameters
      ↓
Arguments
      ↓
Process
      ↓
return
      ↓
Business Result
```

## 🧠 One-Line Revision

```text
Function → Reusable Logic

Call → Execute Logic

Parameter → Input Placeholder

Argument → Actual Input

return → Send Result Back

Multiple Functions → Modular Program
```
