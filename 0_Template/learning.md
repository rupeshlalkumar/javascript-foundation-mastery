## 📝 Learning Note: Save Before Run (JavaScript)

### Problem

The code was correct, but the output did not appear because the file was **not saved** before running.

### Solution

* Press **Ctrl + S** to save the file.
* Run the program again.
* Node.js executes the **latest saved version** of the file.

### Best Practice

**Write Code → Save (`Ctrl + S`) → Run → Check Output**

### To Avoid This Issue

* Save the file after every change.
* Enable **File → Auto Save** in VS Code.

### Basic Debugging Checklist

* ✅ Is the file saved?
* ✅ Am I running the correct file?
* ✅ Is there any error in the Terminal?
* ✅ Is `console.log()` written correctly?

### Key Learning

Debugging is an essential programming skill. Before assuming the code is wrong, always verify the save status, file, and execution process.


## 📝 Learning Note: Addition Using Variables

### Logic

1. Create two variables (`num1` and `num2`) to store numbers.
2. Use the `+` operator to add them.
3. Store the result in a new variable (`sum`).
4. Display the result using `console.log()`.

### Code Flow

```text
num1 (10)
      \
       + ----> sum (30) ----> console.log()
      /
num2 (20)
```

### Why Store the Result in a Variable?

Saving the result in a variable makes it easy to:

* Reuse the value later.
* Perform more calculations.
* Display the result multiple times without recalculating.

### Future Use Cases

This simple logic is the foundation of many real-world applications:

* 🧮 Calculator (Addition, Subtraction, Multiplication, Division)
* 💰 Expense Tracker (Income + Expenses = Balance)
* 🛒 Shopping Cart (Total Price = Item1 + Item2 + ...)
* 🧾 Invoice & Billing System (Subtotal + Tax = Final Amount)
* 📊 Business Dashboard (Revenue + Profit Calculations)
* 💳 Banking & Finance Apps (Balance Updates)
* 📈 Data Analysis and Reports

### Key Learning

**Programming follows a simple pattern:**

> **Input → Process → Store Result → Output**

In this example:

* **Input:** `10` and `20`
* **Process:** `num1 + num2`
* **Store:** `sum`
* **Output:** `30`

This pattern is one of the most important concepts in programming and is used in almost every software application.
