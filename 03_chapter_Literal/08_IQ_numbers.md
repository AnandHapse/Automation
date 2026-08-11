
# JavaScript Numbers — QA Automation Interview Notes

**Topic: JavaScript Number Types**
**Target: QA Automation / Cypress / JavaScript Interviews**

## 1. JavaScript Number Types

In JavaScript, normal numeric values are always of type number.

Unlike Java, C++, or C#, JavaScript does not have separate types such as:

int
float
double
short
long

JavaScript uses IEEE-754 double-precision 64-bit floating-point format for the number type.

The main exception is BigInt, which has a separate type.

let integer = 42;
let decimal = 42.5;

console.log(typeof integer); // "number"
console.log(typeof decimal); // "number"
## 2. Integer Literals

JavaScript supports different number bases.

**Decimal — Base 10**
let decimal = 42;

console.log(decimal);
// 42
**Binary — Base 2**

Starts with 0b or 0B.

let binary = 0b1010;

console.log(binary);
// 10
**Octal — Base 8**

Starts with 0o or 0O.

let octal = 0o52;

console.log(octal);
// 42
**Hexadecimal — Base 16**

Starts with 0x or 0X.

let hex = 0x2A;

console.log(hex);
// 42
**Interview Question**

### Q: Does JavaScript have separate integer and floating-point data types?

Answer:
No. Both integers and floating-point values are stored using the JavaScript number type.

typeof 10;    // "number"
typeof 10.5;  // "number"
## 3. Floating-Point Numbers

JavaScript supports decimal floating-point numbers.

let price = 99.99;
let negative = -10.5;

console.log(typeof price);
// "number"

You can also write:

let a = .5;
let b = 5.;

Both are valid JavaScript, although 0.5 and 5.0 are generally clearer.

## 4. Exponential Notation

JavaScript supports scientific/exponential notation.

**Example**
let a = 1.5e3;

console.log(a);
// 1500

**Explanation:**

1.5 × 10³ = 1500

Another example:

let b = 1.5e-3;

console.log(b);
// 0.0015

**And:**

let c = 2E10;

console.log(c);
// 20000000000
**Interview Question**

### Q: What does 1.5e3 mean?

Answer:

1.5 × 10³ = 1500
## 5. Numeric Separators

JavaScript supports numeric separators using _.

This was introduced in ES2021.

let million = 1_000_000;

console.log(million);
// 1000000

They improve readability.

Binary
let binary = 0b1010_0001;

console.log(binary);
// 161
Hexadecimal
let hex = 0xFF_FF;

console.log(hex);
// 65535

The _ is only for readability. It does not change the numeric value.

## 6. BigInt

BigInt is used to represent integers larger than the safe range of JavaScript's number.

A BigInt literal ends with n.

let bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber);
// "bigint"

You can also create BigInt using BigInt().

let a = BigInt("123456789012345678901234567890");

let b = BigInt(42);
**BigInt vs Number**
let a = 42;
let b = 42n;

console.log(typeof a);
// "number"

console.log(typeof b);
// "bigint"
**Important**

You cannot directly perform arithmetic between number and BigInt.

console.log(10 + 10n);

This throws a:

TypeError

Correct:

console.log(10n + BigInt(10));

or:

console.log(Number(10n) + 10);
## 7. Why is BigInt Important for QA?

BigInt can be important when testing applications that handle very large integers, such as:

Large transaction IDs
Database IDs
Large account numbers
Large counters
Financial systems
Backend/API values

Example:

const transactionId = 123456789012345678901234567890n;

expect(typeof transactionId).to.equal("bigint");
## 8. Special Numeric Values

JavaScript has some special numeric values:

Infinity
-Infinity
NaN

Interestingly, all of them have:

typeof value === "number"
## 9. Infinity

Infinity represents a value larger than the maximum finite number JavaScript can represent.

Example:

console.log(Infinity);
// Infinity

Division by zero can produce Infinity:

console.log(1 / 0);
// Infinity

Negative division:

console.log(-1 / 0);
// -Infinity
typeof Infinity
console.log(typeof Infinity);

// "number"
## 10. NaN — Not a Number

NaN stands for:

Not a Number

It represents an invalid numeric result.

Example:

console.log(0 / 0);
// NaN

Another example:

console.log("hello" * 2);
// NaN

However:

console.log(typeof NaN);

// "number"

This is one of JavaScript's famous interview tricks.

## 11. How to Check NaN

The recommended approach is:

Number.isNaN(value);

Example:

let result = "hello" * 2;

console.log(Number.isNaN(result));
// true
**Why Number.isNaN()?**

Number.isNaN() does not perform automatic type conversion.

Number.isNaN("hello");
// false

Whereas the global:

isNaN("hello");
// true

The global isNaN() first tries to convert the value to a number.

For predictable validation, prefer:

Number.isNaN()
## 12. NaN vs Infinity vs Undefined
Value	typeof	Meaning
NaN	"number"	Invalid numeric result
Infinity	"number"	Infinite numeric value
-Infinity	"number"	Negative infinite value
undefined	"undefined"	Value has not been assigned

Example:

console.log(typeof NaN);
// "number"

console.log(typeof Infinity);
// "number"

console.log(typeof undefined);
// "undefined"
## 13. Floating-Point Precision

This is a very important QA interview topic.

Consider:

console.log(0.1 + 0.2);

Many people expect:

0.3

But JavaScript returns approximately:

0.30000000000000004
**Why?**

JavaScript uses IEEE-754 floating-point representation.

Some decimal fractions cannot be represented exactly in binary.

Therefore, small precision errors can occur.

## 14. Why Floating-Point Precision Matters in QA

This is especially important when testing:

Banking applications
Accounting software
Payment systems
Tax calculations
Invoice calculations
Currency conversion
Financial APIs

For example:

const actual = 0.1 + 0.2;

console.log(actual);
// 0.30000000000000004

Instead of directly comparing floating-point values:

expect(actual).to.equal(0.3);

you may need an appropriate tolerance or use integer-based calculations depending on the application.

## 15. Safe Integers

JavaScript has a limit for integers that can be represented safely using number.

**Maximum Safe Integer**
console.log(Number.MAX_SAFE_INTEGER);

// 9007199254740991
**Minimum Safe Integer**
console.log(Number.MIN_SAFE_INTEGER);

// -9007199254740991
## 16. Why Safe Integers Matter in QA

Suppose an API returns a very large integer:

const id = 9007199254740992;

Numbers beyond the safe integer range can lose precision.

This can cause serious problems while testing:

Transaction IDs
Order IDs
Database IDs
Large financial values
API responses

For very large integers, BigInt may be appropriate if the application's data contract supports it.

## 17. Number Conversion

JavaScript provides several ways to convert values into numbers.

The most common are:

Number()
parseInt()
parseFloat()
## 18. Number()

Number() attempts to convert the complete value into a number.

console.log(Number("10"));
// 10

console.log(Number("10.50"));
// 10.5

Invalid numeric strings return NaN.

console.log(Number("hello"));
// NaN

Example:

Number("10px");
// NaN
## 19. parseInt()

parseInt() extracts an integer from the beginning of a string.

parseInt("10.50");
// 10

Example:

parseInt("10px");
// 10

It stops parsing when it encounters a character that cannot be part of the integer.

## 20. parseFloat()

parseFloat() extracts a floating-point number.

parseFloat("10.50");
// 10.5

Example:

parseFloat("10.50px");
// 10.5
## 21. Number vs parseInt vs parseFloat
Input	Number()	parseInt()	parseFloat()
"10"	10	10	10
"10.50"	10.5	10	10.5
"10px"	NaN	10	10
"10.5px"	NaN	10	10.5
"hello"	NaN	NaN	NaN
**QA Tip**

If you are validating that an entire string represents a valid number, Number() is often more appropriate.

If you intentionally need to extract a number from a string such as "10px", parseInt() or parseFloat() may be appropriate.

## 22. JavaScript Type Coercion

JavaScript sometimes automatically converts one data type into another.

Example:

console.log(10 + "20");

Output:

1020

**Why?**

The + operator sees a string and performs string concatenation.

The number 10 becomes "10".

**Result:**

"10" + "20"
"1020"
## 23. Number + String vs Number - String

This is a common interview question.

console.log(10 + "20");
// "1020"

**But:**

console.log(10 - "20");
// -10

**Why?**

The - operator performs numeric conversion.

So:

10 - "20"

becomes:

10 - 20

**Result:**

-10
## 24. Common JavaScript Number Interview Questions
### Q1. What is the data type of a number in JavaScript?

Answer:

Normal numeric values have the type number.

JavaScript does not have separate int, float, or double types.

### Q2. What is the data type of NaN?
typeof NaN;

Answer:

"number"

This is a JavaScript quirk and a common interview question.

### Q3. What is NaN?

Answer:

NaN means Not a Number and represents an invalid numeric result.

Example:

0 / 0;
// NaN
### Q4. How do you check whether a value is NaN?

Answer:

**Use:**

Number.isNaN(value);

Example:

Number.isNaN("hello" * 2);
// true
### Q5. What is Infinity?

Answer:

Infinity represents an infinite numeric value.

Example:

1 / 0;
// Infinity
### Q6. What is the result of 0 / 0?
0 / 0;

Answer:

NaN
### Q7. What is the result of 1 / 0?
1 / 0;

Answer:

Infinity
### Q8. What is the result of -1 / 0?
-1 / 0;

Answer:

-Infinity
### Q9. Why does 0.1 + 0.2 not exactly equal 0.3?

Answer:

Because JavaScript uses IEEE-754 floating-point representation, and some decimal fractions cannot be represented exactly in binary.

0.1 + 0.2;
// 0.30000000000000004
### Q10. What is Number.MAX_SAFE_INTEGER?

Answer:

Number.MAX_SAFE_INTEGER

returns:

9007199254740991

It is the largest integer that can be represented safely as a JavaScript number.

### Q11. What is BigInt?

Answer:

BigInt is a JavaScript data type used for arbitrarily large integers.

Example:

const value = 123456789012345678901234567890n;

console.log(typeof value);
// "bigint"
### Q12. Can we add Number and BigInt?
10 + 10n;

Answer:

No. It throws a TypeError.

They must be converted to the same type before arithmetic.

### Q13. What is the difference between Number and BigInt?

Answer:

number uses IEEE-754 double-precision floating-point representation and supports both integers and decimals.

BigInt is specifically for arbitrarily large integers.

typeof 10;
// "number"

typeof 10n;
// "bigint"
### Q14. What is the difference between Number(), parseInt(), and parseFloat()?

Answer:

Number() converts the entire value into a number.
parseInt() extracts an integer.
parseFloat() extracts a floating-point number.

Example:

Number("10.50");
// 10.5

parseInt("10.50");
// 10

parseFloat("10.50");
// 10.5
## 25. Cypress QA Automation Examples

The JavaScript concepts above become much more useful when applied to automation.

### Q15. How would you validate a numeric UI value in Cypress?

Example:

cy.get('[data-testid="amount"]')
  .invoke('text')
  .then((text) => {

    const amount = Number(text);

    expect(Number.isNaN(amount)).to.be.false;
    expect(amount).to.be.greaterThan(0);

  });
**What is happening?**
Get the amount from the UI.
Convert it to a number.
Check that it isn't NaN.
Verify that it is greater than zero.
## 26. Cypress API Number Validation

Suppose an API returns:

{
  "product": "Laptop",
  "price": 50000
}

You can validate it using:

cy.request('/api/product')
  .then((response) => {

    const price = response.body.price;

    expect(typeof price).to.equal('number');
    expect(Number.isNaN(price)).to.be.false;
    expect(price).to.be.greaterThan(0);

  });

This is a very practical QA Automation interview example.

## 27. API Testing — Validate Numeric Data

You may also validate:

expect(response.body.price)
  .to.be.a('number');

expect(response.body.quantity)
  .to.be.a('number');

expect(response.body.quantity)
  .to.be.greaterThan(0);

For example:

cy.request('/api/order')
  .then((response) => {

    expect(response.body.quantity).to.be.a('number');
    expect(response.body.amount).to.be.a('number');

    expect(response.body.quantity).to.be.greaterThan(0);
    expect(response.body.amount).to.be.at.least(0);

  });
## 28. QA Scenario — Price Calculation

Suppose an application calculates:

const price = 100;
const quantity = 3;

const total = price * quantity;

expect(total).to.equal(300);

You can also test negative scenarios:

const quantity = -1;

expect(quantity).to.be.greaterThan(0);

This helps identify invalid business data.

## 29. QA Scenario — Decimal Precision

Suppose an accounting application calculates:

const amount1 = 0.1;
const amount2 = 0.2;

const total = amount1 + amount2;

console.log(total);

The result may be:

0.30000000000000004

For financial applications, QA engineers should understand this behavior and verify how the application handles rounding.

Example:

const total = Number((amount1 + amount2).toFixed(2));

expect(total).to.equal(0.3);

Note: Whether toFixed() is appropriate depends on the application's financial calculation requirements.

## 30. Interview Trick Questions
### Q: What is the output?
console.log(typeof NaN);

Answer:

number
### Q: What is the output?
console.log(typeof Infinity);

Answer:

number
### Q: What is the output?
console.log(1 / 0);

Answer:

Infinity
### Q: What is the output?
console.log(0 / 0);

Answer:

NaN
### Q: What is the output?
console.log(10 + "20");

Answer:

"1020"
### Q: What is the output?
console.log(10 - "20");

Answer:

-10
### Q: What is the output?
console.log(0.1 + 0.2);

Answer:

0.30000000000000004
### Q: What is the output?
console.log(10 + 10n);

Answer:

TypeError

Because number and BigInt cannot be directly mixed in arithmetic.

## 31. Quick Revision Cheat Sheet
Concept	Key Point
number	JavaScript's standard numeric type
Integer	Stored as number
Float	Stored as number
BigInt	For arbitrarily large integers
NaN	Invalid numeric result
Infinity	Infinite numeric value
-Infinity	Negative infinite value
typeof NaN	"number"
typeof Infinity	"number"
typeof BigInt	"bigint"
0 / 0	NaN
1 / 0	Infinity
-1 / 0	-Infinity
Number.isNaN()	Checks for NaN
Number.MAX_SAFE_INTEGER	9007199254740991
Number()	Converts value to number
parseInt()	Extracts integer
parseFloat()	Extracts decimal
0.1 + 0.2	0.30000000000000004
10 + "20"	"1020"
10 - "20"	-10
10 + 10n	TypeError
## 32. ⭐ QA Automation Interview Priority

If you have limited preparation time, prioritize these topics:

🔴 Must Know
number vs BigInt
NaN
Number.isNaN()
Infinity
0 / 0
1 / 0
Floating-point precision
Number.MAX_SAFE_INTEGER
Number() vs parseInt() vs parseFloat()
JavaScript type coercion
🟡 Good to Know
Binary numbers
Octal numbers
Hexadecimal numbers
Numeric separators
Exponential notation
🟢 QA/Cypress Application
Validate numeric UI values
Validate numeric API response values
Validate price/quantity calculations
Test decimal/rounding behavior
Test large numeric IDs
Test invalid numeric inputs
Test NaN/Infinity edge cases
**Final Interview Tip**

For a QA Automation / Cypress interview, don't just memorize JavaScript syntax.

Try to connect every concept to a testing scenario.

For example:

Interviewer: Why is 0.1 + 0.2 not exactly 0.3 in JavaScript?

A strong QA-oriented answer would be:

"JavaScript uses IEEE-754 floating-point numbers, so some decimal values cannot be represented exactly in binary. That's why 0.1 + 0.2 can return 0.30000000000000004. As a QA engineer, I'd specifically test rounding and precision for financial or calculation-heavy applications."

That shows both JavaScript knowledge and QA thinking
