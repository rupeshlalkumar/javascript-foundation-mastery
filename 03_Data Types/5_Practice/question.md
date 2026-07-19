# 💻 Practice: JavaScript Data Types

**Objective:**  
Practice creating variables using each primitive data type in JavaScript. These exercises will help you understand how different types of data are stored and used in real-world applications.

---

# 1. String

Store textual information.

```javascript
const customerName = "Rahul";
const courseName = "JavaScript Fundamentals";
const companyName = "IT Modem";

console.log(customerName);
console.log(courseName);
console.log(companyName);
```

Output:

```text
Rahul
JavaScript Fundamentals
IT Modem
```

---

# 2. Number

Store numeric values.

```javascript
const age = 25;
const productPrice = 49999;
const monthlyRevenue = 150000;

console.log(age);
console.log(productPrice);
console.log(monthlyRevenue);
```

Output:

```text
25
49999
150000
```

---

# 3. Boolean

Store logical values.

```javascript
const isLoggedIn = true;
const isAdmin = false;
const paymentCompleted = true;

console.log(isLoggedIn);
console.log(isAdmin);
console.log(paymentCompleted);
```

Output:

```text
true
false
true
```

---

# 4. Null

Store an intentional empty value.

```javascript
const profilePhoto = null;
const manager = null;
const assignedProject = null;

console.log(profilePhoto);
console.log(manager);
console.log(assignedProject);
```

Output:

```text
null
null
null
```

---

# 5. Undefined

Create variables without assigning values.

```javascript
let phoneNumber;
let address;
let employeeId;

console.log(phoneNumber);
console.log(address);
console.log(employeeId);
```

Output:

```text
undefined
undefined
undefined
```

---

# 6. Symbol

Create unique identifiers.

```javascript
const userId = Symbol("user");
const productId = Symbol("product");
const orderId = Symbol("order");

console.log(userId);
console.log(productId);
console.log(orderId);
```

Output:

```text
Symbol(user)
Symbol(product)
Symbol(order)
```

---

# 7. BigInt

Store very large integers.

```javascript
const worldPopulation = 8000000000n;
const bankBalance = 98765432101234567890n;
const databaseId = 123456789012345678901234567890n;

console.log(worldPopulation);
console.log(bankBalance);
console.log(databaseId);
```

Output:

```text
8000000000n
98765432101234567890n
123456789012345678901234567890n
```

---

# 8. Display All Data Types Together

```javascript
const name = "Rahul";
const age = 25;
const isStudent = true;
const photo = null;
let phone;
const uniqueId = Symbol("id");
const accountBalance = 999999999999999999n;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Photo:", photo);
console.log("Phone:", phone);
console.log("Unique ID:", uniqueId);
console.log("Account Balance:", accountBalance);
```

---

# 9. Check the Data Type Using typeof

```javascript
const name = "Rahul";
const age = 25;
const isActive = true;
let city;
const uniqueId = Symbol("user");
const salary = 999999999999999999n;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof city);
console.log(typeof uniqueId);
console.log(typeof salary);
```

Output:

```text
string
number
boolean
undefined
symbol
bigint
```

> **Note:** `typeof null` returns `"object"` because of a historical bug in JavaScript.

```javascript
console.log(typeof null);
```

Output:

```text
object
```

---

# 10. Real Business Example

Imagine you're building a CRM.

```javascript
const customerName = "Rahul";
const totalRevenue = 75000;
const isPremiumCustomer = true;
const profilePhoto = null;
let alternatePhone;
const customerId = Symbol("customer");
const accountNumber = 12345678901234567890n;

console.log(customerName);
console.log(totalRevenue);
console.log(isPremiumCustomer);
console.log(profilePhoto);
console.log(alternatePhone);
console.log(customerId);
console.log(accountNumber);
```

---

# 🎯 Practice Challenge

Create your own variables for:

```text
Name

Age

Email

Course

Fees

Is Enrolled

Profile Photo

Phone Number

Student ID

Bank Balance
```

Display all values using:

```javascript
console.log();
```

---

# ✅ Learning Outcome

After completing these practice examples, you should be able to:

- Create variables of all 7 primitive data types.
- Understand when to use each data type.
- Display values using `console.log()`.
- Use `typeof` to identify data types.
- Relate JavaScript data types to real-world business applications like CRM, LMS, and E-Commerce.