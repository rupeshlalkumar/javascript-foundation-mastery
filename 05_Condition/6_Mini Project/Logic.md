# 🚀 Mini Project: Grade Calculator

The purpose of this mini project is to apply everything you have learned in **Variables, Data Types, Operators, and Conditions** to solve a real-world problem.

Instead of simply writing `if...else` statements, you will think like a software developer by converting a business rule into JavaScript logic.

---

# 🎯 Project Goal

Build a **Grade Calculator** using JavaScript.

The program should:

- Accept a student's name
- Accept the student's marks
- Calculate the appropriate grade
- Display the final result

> **Note:** Focus only on JavaScript logic. No HTML or CSS is required.

---

# 📥 Input

The program requires two inputs.

```text
Student Name

Marks
```

Example:

```javascript
const studentName = "Rahul";
const marks = 87;
```

---

# 📋 Business Rules

The grading system follows these rules.

| Marks | Grade |
|--------|-------|
| 90 and Above | Grade A |
| 80 – 89 | Grade B |
| 70 – 79 | Grade C |
| 60 – 69 | Grade D |
| Below 40 | Fail |

---

# 🧠 Expected Thinking

Think like a software developer.

```text
Student Name
        │
        ▼
Student Marks
        │
        ▼
Conditions
        │
        ▼
Grade
        │
        ▼
Display Result
```

---

# 🏗 Step 1: Store Input

```javascript
const studentName = "Rahul";
const marks = 87;
```

---

# 🏗 Step 2: Apply Business Rules

JavaScript compares the marks with each condition.

```text
Marks >= 90 ?

↓

Yes

↓

Grade A

No

↓

Check Next Condition
```

The process continues until a matching condition is found.

---

# 🏗 Step 3: JavaScript Logic

```javascript
const studentName = "Rahul";
const marks = 87;

if (marks >= 90) {

    console.log(studentName + " : Grade A");

} else if (marks >= 80) {

    console.log(studentName + " : Grade B");

} else if (marks >= 70) {

    console.log(studentName + " : Grade C");

} else if (marks >= 60) {

    console.log(studentName + " : Grade D");

} else {

    console.log(studentName + " : Fail");

}
```

---

# 🔄 Dry Run

## Example 1

Input

```text
Student Name = Rahul

Marks = 95
```

Flow

```text
95 >= 90

↓

true

↓

Grade A
```

Output

```text
Rahul : Grade A
```

---

## Example 2

Input

```text
Student Name = Amit

Marks = 82
```

Flow

```text
82 >= 90

↓

false

↓

82 >= 80

↓

true

↓

Grade B
```

Output

```text
Amit : Grade B
```

---

## Example 3

Input

```text
Student Name = Priya

Marks = 74
```

Output

```text
Priya : Grade C
```

---

## Example 4

Input

```text
Student Name = Neha

Marks = 63
```

Output

```text
Neha : Grade D
```

---

## Example 5

Input

```text
Student Name = Mohan

Marks = 35
```

Flow

```text
35 >= 90

↓

false

↓

35 >= 80

↓

false

↓

35 >= 70

↓

false

↓

35 >= 60

↓

false

↓

Fail
```

Output

```text
Mohan : Fail
```

---

# ⚙ Internal Working

JavaScript checks each condition one by one.

```text
Marks
      │
      ▼
marks >= 90 ?
      │
 ┌────┴────┐
 │         │
 ▼         ▼
Yes       No
 │         │
 ▼         ▼
Grade A   Check Next Condition
```

The process continues until one condition becomes **true**.

If no condition matches, the `else` block executes.

---

# 💼 Real Business Example

A Grade Calculator is similar to many real-world business systems.

### LMS (Learning Management System)

```text
Student Marks
        │
        ▼
Grade Calculator
        │
        ▼
Student Grade
```

---

### Recruitment System

```text
Candidate Score
        │
        ▼
Selection Rules
        │
        ▼
Selected / Rejected
```

---

### Banking System

```text
Credit Score
        │
        ▼
Loan Eligibility
        │
        ▼
Approved / Rejected
```

---

# 🧠 Mental Model

Whenever you solve a condition-based problem, think like this.

```text
Business Data
        │
        ▼
Variables
        │
        ▼
Business Rules
        │
        ▼
Conditions
        │
        ▼
Decision
        │
        ▼
Business Result
```

---

# 💡 Challenge

Improve the project by adding:

- Student Roll Number
- Total Subjects
- Total Marks
- Average Marks
- Pass / Fail Status
- Grade
- Percentage

Example Output

```text
Student Name : Rahul

Marks : 87

Grade : B

Status : Pass
```

---

# 📚 Concepts Used

This mini project helps you practice:

- ✅ Variables
- ✅ Data Types
- ✅ Arithmetic Operators
- ✅ Comparison Operators
- ✅ if...else if...else
- ✅ Decision Making
- ✅ Business Logic

---

# 🎯 Learning Outcome

After completing this project, you will be able to:

- Convert business rules into JavaScript logic.
- Solve real-world decision-making problems.
- Use `if...else if...else` effectively.
- Build the foundation for larger applications such as **LMS, CRM, HRMS, Banking Systems, and E-Commerce platforms**.